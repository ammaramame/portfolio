import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { validationSchema } from "./contactme-form.validation";
import { appConfig } from "../../../configs/app.config";

export const useLogic = () => {
  const { t } = useTranslation();

  const { contact_form_url } = appConfig;

  const form = useFormik({
    onSubmit: (values) => {
      fetch(contact_form_url, {
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
