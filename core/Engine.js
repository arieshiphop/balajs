import { getTemplateContent, getStylesContent } from "./GetData.js";
import { saveTextOnFile } from "./ContentSaver.js";
import { getHtmlAttribute } from "./Directives.js";
export class Engine {
  constructor(template, data) {
    this.template = template;
    this.data = data;
  }
  addCssLink(html) {
    html += "<link rel='stylesheet' href='styles.css'>";
    return html;
  }
  render() {
    let html = getTemplateContent(this.template);
    let css = getStylesContent(this.template);
    html = this.addCssLink(html);
    for (let key in this.data) {
      let value = this.data[key];
      html = html.replace(new RegExp(`{{${key}}}`, "g"), value);
    }
    getHtmlAttribute(html, "color");
    saveTextOnFile(html, "src/index.html");
    saveTextOnFile(css, "src/styles.css");
  }
}
