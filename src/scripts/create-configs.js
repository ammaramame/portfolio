const fs = require("fs");
const path = require("path");

// Set the folder path where the files are located
const folder = path.dirname(__filename) + "/../configs";

// Loop through each file in the folder
fs.readdir(folder, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach((file) => {
    if (file.endsWith(".config.example.ts")) {
      const filename = path.parse(file).name;
      const newFilename = `${filename}.ts`.replace(".example", "");
      const filePath = path.join(folder, file);
      const newFilePath = path.join(folder, newFilename);
      if (!fs.existsSync(newFilePath)) {
        fs.copyFile(filePath, newFilePath, (err) => {
          if (err) throw err;
          console.log(
            "\x1b[32m",
            `Renamed ${path.basename(filePath)} to ${path.basename(
              newFilePath
            )}`
          );
        });
      } else {
        console.log("\x1b[32m", `${path.basename(newFilePath)} already exists`);
      }
    }
  });
});
