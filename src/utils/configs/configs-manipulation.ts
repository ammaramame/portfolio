interface ConfigObject {
  [key: string]: any;
}

export const switchConfigByLanguage = (obj: ConfigObject, language: string, languagesToRemove: string[]): ConfigObject | undefined => {
  if (typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map((item) => switchConfigByLanguage(item, language, languagesToRemove));

  if (obj && typeof obj === "object")
    return Object.keys(obj).reduce((prev_value, current_key) => {
      const regex = new RegExp(languagesToRemove.map((item) => "_" + item).join("|"), "gi");
      const key_without_language_suffix = current_key.replace(regex, "");

      if (key_without_language_suffix + "_" + language === current_key || !languagesToRemove?.some((languageToRemove) => key_without_language_suffix + "_" + languageToRemove === current_key))
        prev_value[key_without_language_suffix] = switchConfigByLanguage(obj[current_key], language, languagesToRemove) as any;

      return prev_value;
    }, {} as ConfigObject);
};
