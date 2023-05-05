export const capitalizeFirstLetter = (sentence: string) => {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};

export const capitalizeWords = (str: string) => {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
};
