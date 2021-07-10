import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

const LoginForm = (props) => {
  <Form>
    <label htmlFor="firstName">First Name</label>
    <Field name="firstName" type="text" />

    <label htmlFor="lastName">Last Name</label>
    <Field name="lastName" type="text" />

    <label htmlFor="email">Email Address</label>
    <Field name="email" type="email" />

    <button type="submit">Submit</button>
  </Form>;
};

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
      >
        component={LoginForm}
      </Formik>
    </div>
  );
};

export default Login;
