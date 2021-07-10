import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

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
          servis.login(values).then((res) => {
            if (res.status === 200) {
              const userInfo = res.data;
            }
          });
          if (userInfo && idAdmin) {
            history.push("/admin");
          } else {
            history.push("/user");
          }
        }}
      ></Formik>
    </div>
  );
};

export default Login;
