import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { useStateValue } from "../StateProvider";
import service from "../service/BankService";
import { useHistory } from "react-router";

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
              autoComplete="on"
            />
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
          {props.isSubmitting && <LinearProgress />}
        </Row>
      </Form>
    </fieldset>
  </Container>
);

const Login = () => {
  const history = useHistory();
  const [{ userInfo }, dispatch] = useStateValue();

  // useEffect(() => {
  //   localStorage.clear("auth");
  // }, []);
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
            .min(6, "Must be at least 6 character")
            .required("Password Required"),
        })}
        onSubmit={(values, actions) => {
          service
            .login(values)
            .then((res) => {
              localStorage.removeItem("auth");
              if (res.status === 200) {
                toast.success("Login Successful", {
                  position: toast.POSITION.TOP_CENTER,
                });
                const userInfo = res.data;
                localStorage.setItem(
                  "auth",
                  JSON.stringify({ token: userInfo.jwt })
                );
                dispatch({
                  type: "LOGIN",
                  item: userInfo,
                });

                if (userInfo?.user?.isAdmin) {
                  history.push("/admin");
                } else {
                  history.push("/user");
                }
                actions.resetForm();
                actions.setSubmitting(false);
              }
            })
            .catch(() => {
              actions.setSubmitting(false);
              actions.resetForm();
              toast.error("Login Denied", {
                position: toast.POSITION.TOP_CENTER,
              });
            });
        }}
        component={LoginForm}
      ></Formik>
    </div>
  );
};

export default Login;
