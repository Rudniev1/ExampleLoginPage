import React from "react";
import { Formik } from "formik";
import EmailValidator from "email-validator";
import Yup from "yup";
import LoginForm from "./LoginForm";

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
  >
    <h1>Validated Login Form</h1>
  </Formik>
);

export default ValidatedLoginForm;
