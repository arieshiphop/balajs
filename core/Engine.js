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
  getAttribute(tag, attribute) {
    let start = this.template.indexOf(`<${tag}`);
    let end = this.template.indexOf(`</${tag}>`);
    let content = this.template.substring(start + 3, end);
    let attributeStart = content.indexOf(`${attribute}="`);
    let attributeEnd = content.indexOf(`"`, attributeStart + 10);
    let attributeValue = content.substring(attributeStart + attribute.length + 2, attributeEnd);
    this.template = this.template.replace(content, "");
    return attributeValue;
  }
  setForHtmlValues(tag, attribute) {
    let attributeValue = this.getAttribute(tag,attribute);
    let callBackParts = attributeValue.split(" ")

    let iterable = callBackParts[3]
    let listToHtml = ""
    for(let item of this.data[iterable]){
      listToHtml += `<li>${item}</li>`
    }
    return listToHtml
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
  //guardamos el contenido en el archivo
  saveTextOnFile(content, file) {
    fs.writeFile(file, content, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  }
}
