import React from "react";
import ContactUsForm from "../../components/Forms/ContactUsForm/ContactUsForm";
import styles from "./contact-us.module.scss";
import divider from "../../assets/png/divider.png";
import { FormValues } from "../../components/Forms/ContactUsForm/ContactUsForm.FormValues";
function ContactUs() {
  const handleSubmit = async (
    values: FormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    try {
    } catch (e) {
      setSubmitting(false);
    }
  };
  return (
    <div className={`${styles.contactUsBackground}`}>
      <div className={`container d-flex justify-content-center align-items-center`}>
        <div className={styles.background}>
          <h2 className="text-center mt-5">CONTACT US</h2>
          <div className="d-flex justify-content-center">
            <img alt="" src={divider} className={`titleUnderline`} />
          </div>
          <div className="mb-5 ">
            <ContactUsForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
