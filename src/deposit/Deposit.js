import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { useStateValue } from "../StateProvider";
import service from "../service/BankService";
import { useHistory } from "react-router";
import AccountInfo from "../account/AccountInfo";
import Transactions from "../account/Transactions";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";
import styles from "../styles/dashboardStyle.js";

const useStyles = makeStyles(styles);

const DepositForm = (props) => (
  <Container className="d-flex justify-content-center">
    <fieldset>
      <legend>Deposit</legend>
      <Form>
        <Row className="justify-content-center">
          <Col sm={12} md={6} className="text-center p-3">
            <label htmlFor="amount">Amount:</label>
            <Field
              className="ms-4"
              component={TextField}
              name="amount"
              type="number"
            />
          </Col>

          <Col sm={12} md={6} className="text-center p-3">
            <label htmlFor="comment">Comment:</label>
            <Field
              className="ms-4"
              component={TextField}
              name="comment"
              type="text"
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

const Deposit = () => {
  const history = useHistory();
  const [{ userInfo }, dispatch] = useStateValue();
  const classes = useStyles();
  console.log(userInfo);

  return (
    <Container>
      {!userInfo && history.push("/login")}
      {userInfo && userInfo.user && (
        <div className="d-flex justify-content-center flex-column">
          <AccountInfo />
          <Formik
            initialValues={{ amount: "", comment: "" }}
            validationSchema={Yup.object({
              amount: Yup.number().positive().required("amount Required"),
              comment: Yup.string().required("Comment Required"),
            })}
            onSubmit={(values, actions) => {
              service
                .deposit(values)
                .then((res) => {
                  if (res.status === 200) {
                    toast.success("Amount Successfuly Deposited ", {
                      position: toast.POSITION.TOP_CENTER,
                    });
                    const userInfo = res.data;
                    dispatch({
                      type: "UPDATE",
                      item: userInfo,
                    });
                    actions.resetForm();
                    actions.setSubmitting(false);
                  }
                })
                .catch(() => {
                  actions.setSubmitting(false);
                  actions.resetForm();
                  toast.error("Amount Denied", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                });
            }}
            component={DepositForm}
          ></Formik>
          <Divider />
          <h2 className={classes.infoText}>Transactions</h2>
          <Transactions />
        </div>
      )}
    </Container>
  );
};

export default Deposit;
