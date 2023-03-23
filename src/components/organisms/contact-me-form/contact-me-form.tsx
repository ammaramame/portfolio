import { useFormik } from "formik";
import { FunctionComponent, useState } from "react";
import Button from "../../molecules/button/button";
import * as yup from "yup";
import { FaCheck } from "react-icons/fa";
import { useResponsive } from "../../../hooks/responsiveness";

interface ContactMeFormProps {}

const ContactMeForm: FunctionComponent<ContactMeFormProps> = () => {
  const validationSchema = yup.object().shape({ full_name: yup.string().required(), email: yup.string().email().required(), subject: yup.string().required(), message: yup.string().required() });

  const form = useFormik({
    onSubmit: (values) => {
      fetch("https://formspree.io/f/xwkjnpjd", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          Accept: "application/json",
        },
      }).then(() => {
        setsent(true);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
    },
    initialValues: { full_name: "", email: "", subject: "", message: "" },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const [sent, setsent] = useState(false);

  const gridForm = [
    { placeholder: "Your Name", type: "text", size: "1-2", break: "m", name: "full_name" },
    { placeholder: "Email Address", type: "email", size: "1-2", break: "m", name: "email" },
    { placeholder: "Subject", type: "subject", size: "1-1", break: "s", name: "subject" },
    { placeholder: "Message", type: "textarea", size: "1-1", break: "s", name: "message" },
  ];

  const { isTabletOrMobile } = useResponsive();

  const responsiveButtonContainerClass = isTabletOrMobile ? "uk-width-1-1" : "";

  return (
    <div className="uuk-grid-column-small uk-text-center  uk-grid">
      {sent && (
        <div className="uk-width-1-1@s">
          <div className="animate__fadeIn animate__animated uk-alert-primary uk-display-inline-block uk-padding-small uk-border-rounded" uk-alert="">
            <FaCheck />
            <span> Message sent successfully, Page will reload in </span>
            <span uk-countdown={`date: ${new Date(Date.now() + 5000)}`}>
              <span className="uk-text-default uk-countdown-number uk-countdown-seconds"></span> {"seconds"}
            </span>
          </div>
        </div>
      )}
      {gridForm.map((item) => (
        <div className={`uk-margin-top uk-width-${item.size}@${item.break}`} key={item.placeholder}>
          {item.type === "textarea" ? (
            <textarea
              onChange={form.handleChange}
              name={item.name}
              style={{ padding: 24, minHeight: 100, resize: "none" }}
              className={`${!!form.errors[item.name as keyof typeof form.errors] ? "uk-form-danger" : "uk-form-blank"} uk-text-default  uk-input uk-border-pill uk-box-shadow-small uk-box-shadow-hover-large`}
              rows={5}
              placeholder={item.placeholder}
            />
          ) : (
            <input
              onChange={form.handleChange}
              name={item.name}
              style={{ padding: 24 }}
              className={`${!!form.errors[item.name as keyof typeof form.errors] ? "uk-form-danger" : "uk-form-blank"} uk-text-default  uk-input uk-border-pill uk-box-shadow-small uk-box-shadow-hover-large  uk-form-large`}
              type={item.type}
              placeholder={item.placeholder}
            />
          )}
          {form.errors[item.name as keyof typeof form.errors] && (
            <div className="uk-text-left uk-padding-small uk-padding-remove-vertical uk-text-danger uk-text-small" style={{ marginTop: 4 }}>
              {form.errors[item.name as keyof typeof form.errors]}
            </div>
          )}
        </div>
      ))}
      <div className={`uk-margin-top ${responsiveButtonContainerClass}`}>
        <Button fullwidth={isTabletOrMobile} disabled={form.isSubmitting} onClick={() => form.submitForm()} variant="pill" color="danger">
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default ContactMeForm;
