import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import "./Login.css";

const LoginForm = (props) => (
  <Container className="d-flex justify-content-center">
    <fieldset>
      <legend>Login</legend>
      <Form>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <label htmlFor="username">Usere Name</label>
            <Field component={TextField} name="username" type="text" />
          </Col>

          <Col xs={12} md={6} className="text-center">
            <label htmlFor="password">Password</label>
            <Field component={TextField} name="password" type="password" />
          </Col>
        </Row>
        <Row className="mt-4 ">
          <Col className="d-flex justify-content-center">
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
            .required("Required"),
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
    </div>
  );
};

export default Login;
