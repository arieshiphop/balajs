import fs from "fs";

export class Engine {
  constructor(template, data) {
    this.template = template;
    this.data = data;
  }
  //GETTING DATA
  getTemplateContent() {
    let start = this.template.indexOf("<template>");
    let end = this.template.indexOf("</template>");
    let content = this.template.substring(start + 10, end);
    return content;
  }
  getStylesContent() {
    let start = this.template.indexOf("<style>");
    let end = this.template.indexOf("</style>");
    let content = this.template.substring(start + 10, end);
    return content;
  }
  render() {
    let content = this.getTemplateContent();
    content += '<link rel="stylesheet" href="styles.css">';
    for (let key in this.data) {
      let value = this.data[key];
      content = content.replace(new RegExp(`{{${key}}}`, "g"), value);
    }
    content = this.proccesContent(content);
    this.saveTextOnFile(content, "src/index.html");

    return content;
  }
  proccesContent(content) {
    content = content = content.trim();
    return content;
  }
  saveTextOnFile(content, file) {
    fs.writeFile(file, content, function (err) {
      if (err) {
        return console.log(err);
      }
      //reload
      console.log("The file was saved!");
    });
  }
}
