import React from "react";
import { Formik } from "formik";

const Register = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastname: "",
          dob: "",
          email: "",
          username: "",
          role: ["user"],
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          servis.register(values).then((res) => {
            if (res.status === 200) {
              toast.success("Register Successful", {
                position: toast.POSITION.TOP_CENTER,
              });
              actions.resetForm();
            } else {
              toast.error(res.data.message, {
                position: toast.POSITION.TOP_CENTER,
              });
            }
            actions.setSubmitting(false);
          });
        }}
        component={RegistrationForm}
      ></Formik>
    </div>
  );
};

export default Register;
