import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";
import { Button, LinearProgress } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { TextField as FormikTextField } from "formik-material-ui";
import { useStateValue } from "../StateProvider";
import service from "../service/BankService";
import { useHistory } from "react-router";
import AccountInfo from "../account/AccountInfo";
import Transactions from "../account/Transactions";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";
import styles from "../styles/dashboardStyle.js";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles(styles);

let classes;
let recipients = "";

const TransferForm = (props) => {
  console.log(props);
  return (
    <Container className="d-flex justify-content-center">
      <fieldset>
        <legend>Transfer</legend>
        <Form>
          <Row>
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center text-center p-3"
            >
              <Autocomplete
                options={recipients}
                getOptionLabel={(option) => option.name}
                className={classes.formControl}
                name="recipientName"
                getOptionSelected={(option, value) =>
                  option.name === value.name
                }
                style={{ width: 200 }}
                onChange={(event, value, clear) => {
                  props.setFieldValue("recipientName", value?.name || "");
                }}
                onOpen={props.setTouched}
                renderInput={(params) => (
                  <TextField
                    label="Recipient"
                    name="recipientName"
                    {...params}
                  />
                )}
              />
            </Col>
            <Col xs={12} md={6} className="text-center p-3">
              <Field
                className="ms-4"
                component={FormikTextField}
                name="amount"
                type="number"
                label="amount"
              />
            </Col>

            {props.isSubmitting && <LinearProgress />}
          </Row>
          <Row className="mt-4 ">
            <Col className="d-flex justify-content-center p-3">
              <Button
                type="submit"
                onClick={props.submitForm}
                disabled={props.isSubmitting}
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </fieldset>
    </Container>
  );
};

const Transfer = () => {
  const history = useHistory();
  const [{ userInfo }, dispatch] = useStateValue();
  classes = useStyles();
  if (userInfo?.user?.recipients) {
    recipients = userInfo.user.recipients;
  }

  return (
    <Container>
      {!userInfo && history.push("/login")}
      {userInfo && userInfo.user && (
        <div className="d-flex justify-content-center flex-column">
          <AccountInfo />
          <Formik
            initialValues={{ amount: "", recipientName: "" }}
            validationSchema={Yup.object({
              amount: Yup.number().positive().required("Amount Required"),
              recipientName: Yup.string().required("Name Required"),
            })}
            onSubmit={(values, actions) => {
              service
                .transfer(values)
                .then((res) => {
                  if (res.status === 200) {
                    toast.success("Amount Successfuly Transfered ", {
                      position: toast.POSITION.TOP_CENTER,
                    });
                    const userInfo = res.data;
                    dispatch({
                      type: "UPDATE",
                      item: userInfo,
                    });

                    actions.setSubmitting(false);
                    actions.resetForm();
                  }
                })
                .catch((e) => {
                  actions.setSubmitting(false);
                  actions.resetForm();
                  console.log(e);
                  toast.error("Transfer Denied", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                });
            }}
            component={TransferForm}
          ></Formik>
          <Divider />
          <h2 className={classes.infoText}>Transactions</h2>
          <Transactions />
        </div>
      )}
    </Container>
  );
};

export default Transfer;
