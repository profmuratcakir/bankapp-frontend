import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";

const LoginForm = (props) => (
  <Container className="d-flex justify-content-center">
    <fieldset>
      <legend>Login</legend>
      <Form>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center p-3">
            <label htmlFor="username">User Name:</label>
            <Field
              className="ms-4"
              component={TextField}
              name="username"
              type="text"
            />
          </Col>

          <Col xs={12} md={6} className="text-center p-3">
            <label htmlFor="password">Password:</label>
            <Field
              className="ms-4"
              component={TextField}
              name="password"
              type="password"
            />
            {props.isSubmitting && <LinearProgress />}
          </Col>
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

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("username Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .min(8, "Must be at least 8 character")
            .required("Password Required"),
        })}
        onSubmit={(values, actions) => {
          // servis.login(values).then((res) => {
          //   if (res.status === 200) {
          //     const userInfo = res.data;
          //   }
          // });
          // if (userInfo && idAdmin) {
          //   history.push("/admin");
          // } else {
          //   history.push("/user");
          // }
          toast.success("Login Successful", {
            position: toast.POSITION.TOP_CENTER,
          });
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={LoginForm}
      ></Formik>
      <ToastContainer />
    </div>
  );
};

export default Login;
