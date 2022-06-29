import fs from "fs";

export function saveTextOnFile(content, file) {
  fs.writeFile(file, content, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`${file} saved!`);
  });
}
