import { TFunction } from "i18next";
import * as yup from "yup";
import { capitalizeWords } from "../../../utils/text/text-manipulation";

export const validationSchema = (t: TFunction<"translation", undefined, "translation">) =>
  yup.object().shape({
    full_name: yup.string().required(t("is_required_field", { field: capitalizeWords(t("your_name")) }) ?? undefined),
    email: yup
      .string()
      .email()
      .required(t("is_required_field", { field: capitalizeWords(t("email_address")) }) ?? undefined),
    subject: yup.string().required(t("is_required_field", { field: capitalizeWords(t("subject")) }) ?? undefined),
    message: yup.string().required(t("is_required_field", { field: capitalizeWords(t("message")) }) ?? undefined),
  });
