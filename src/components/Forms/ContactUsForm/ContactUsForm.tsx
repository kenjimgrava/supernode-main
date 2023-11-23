import { Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { FormValues } from "./ContactUsForm.FormValues";
import schema from "./ContactUsForm.schema";
import * as FormComponents from "../FormComponents/FormComponent";
import styles from "./ContactUsForm.module.scss";

const emptyInitialValues: FormValues = {
  name: "",
  email: "",
  rfc: "",
  details: "",
};
interface Props {
  initialFormValues?: FormValues;
  onSubmit: (
    values: FormValues,
    setSubmitting: (submitting: boolean) => void
  ) => void;
}
const ContactUsForm = ({
  initialFormValues = emptyInitialValues,
  onSubmit,
}: Props) => {
  const [eye, setEye] = useState(false);
  const [type, setType] = useState(true);
  function handleSubmit(
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) {
    onSubmit(values, helpers.setSubmitting);
  }
  const Eye = () => {
    setEye(!eye);
    setType(!type);
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialFormValues}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        setFieldValue,
        isValid,
        isSubmitting,
      }): React.ReactNode => {
        return (
          <Form className="p-5">
            <FormComponents.TextField
              label="NAME"
              name="name"
              placeholder="Lorem Ipsum"
            />
            <FormComponents.TextField
              label="EMAIL"
              name="email"
              placeholder="Lorem_Ipsum@Gmail.com"
            />
            <FormComponents.TextField
              label="REASON FOR CONTACT "
              name="rfc"
              placeholder="Consectetur adipiscing elit sed do eiusmod"
            />
            <FormComponents.TextArea
              className={styles.TextAreaSize}
              label="DETAILS"
              name="details"
              placeholder="Lorem Ipsum Consectetur adipiscing elit sed do eiusmod 
                Lorem Ipsum Consectetur adipiscing elit sed do eiusmod
                Lorem Ipsum Consectetur adipiscing elit sed do eiusmod
                Lorem Ipsum Consectetur adipiscing elit sed do eiusmod"
            />
            <FormComponents.FormSubmission
              isLoading={isSubmitting}
              submitButton={
                <button type="submit" className={styles.Button}>
                  CONTACT US
                </button>
              }
            ></FormComponents.FormSubmission>
          </Form>
        );
      }}
    </Formik>
  );
};
export default ContactUsForm;
