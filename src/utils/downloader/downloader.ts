export const downloadFile = (fileUrl: string, fileName: string) => {
  var link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  link.click();
};
