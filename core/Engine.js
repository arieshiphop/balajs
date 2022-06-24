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
    let html = this.getTemplateContent();
    let css = this.getStylesContent();
    // content += '<link rel="stylesheet" href="styles.css">';
    
    for (let key in this.data) {
      let value = this.data[key];
      html = html.replace(new RegExp(`{{${key}}}`, "g"), value);
    }
    this.saveTextOnFile(html, "src/index.html");
    this.saveTextOnFile(css, "src/styles.css");

    return content;
  }
  proccesContent(content) {
    content;
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
