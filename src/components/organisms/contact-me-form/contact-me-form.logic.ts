import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { validationSchema } from "./contactme-form.validation";

export const useLogic = () => {
  const { t } = useTranslation();

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
    validationSchema: validationSchema(t),
    validateOnBlur: false,
    validateOnChange: false,
  });

  const [sent, setsent] = useState(false);

  return { sent, form };
};
