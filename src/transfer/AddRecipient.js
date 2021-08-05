import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import service from "../service/BankService";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import AccountInfo from "../account/AccountInfo";
import Recipients from "./Recipients";
import Divider from "@material-ui/core/Divider";

const RecipientSchema = Yup.object().shape({
  name: Yup.string().required("Name required"),
  email: Yup.string()
    .email("Email format incorrect")
    .required("Email required"),
  phone: Yup.string().required("Phone required"),
  bankName: Yup.string().required("Bank Name required"),
  bankNumber: Yup.string()
    .max(16, "Must be 16 characters")
    .min(16, "Must be 16 characters")
    .required("Bank Number requred"),
});

const RecipientForm = (props) => (
  <Container className="d-flex justify-content-center">
    <fieldset>
      <legend>Add Recipient</legend>
      <Form>
        <Row className="justify-content-center">
          <Col sm={12} md={6} className="text-center p-3">
            <Field component={TextField} name="name" type="text" label="Name" />
          </Col>
          <Col sm={12} md={6} className="text-center p-3">
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm={12} md={6} className="text-center p-3">
            <Field
              component={TextField}
              name="phone"
              type="text"
              label="Contact Number"
            />
          </Col>
          <Col sm={12} md={6} className="text-center p-3">
            <Field
              component={TextField}
              name="bankName"
              type="text"
              label="Bank Name"
            />
          </Col>
          <Col sm={12} md={6} className="text-center p-3">
            <Field
              component={TextField}
              name="bankNumber"
              type="text"
              label="Bank Number"
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="text-center p-3">
            <Button
              variant="contained"
              color="secondary"
              disabled={props.isSubmitting}
              onClick={props.submitForm}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </fieldset>
  </Container>
);

const AddRecipient = () => {
  const [{ userInfo }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <Container>
      {!userInfo && history.push("/login")}
      {userInfo && userInfo.user && (
        <div>
          <AccountInfo />
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              bankName: "",
              bankNumber: "",
            }}
            validationSchema={RecipientSchema}
            onSubmit={(values, actions) => {
              service
                .addRecipient(values)
                .then((res) => {
                  if (res.status === 200) {
                    const userInfo = res.data;
                    dispatch({
                      type: "UPDATE",
                      item: userInfo,
                    });
                    toast.success("Recipient Added Successfuly", {
                      position: toast.POSITION.TOP_CENTER,
                    });
                    actions.resetForm();
                    actions.setSubmitting(false);
                  }
                })
                .catch(() => {
                  toast.error("Recipient can not be added", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                  actions.resetForm();
                  actions.setSubmitting(false);
                });
            }}
            component={RecipientForm}
          ></Formik>

          <Divider />
          <Recipients />
        </div>
      )}
    </Container>
  );
};

export default AddRecipient;
