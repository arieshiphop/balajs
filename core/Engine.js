import fs from "fs";
import exec from "child_process";
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
  render() {
    //obtenemos el contenido del <template> </template>
    let content = this.getTemplateContent();
    //remplazamos {{dato}} por su dato en [data]
    for (let key in this.data) {
      let value = this.data[key];
      content = content.replace(new RegExp(`{{${key}}}`, "g"), value);
    }
    //procesamos el contenido
    content = this.proccesContent(content);
    //lo guardamos
    this.saveTextOnFile(content, "index.html");
    return content;
  }
  proccesContent(content) {
    content = content.trim();
    return content;
  }
  openHtmlOnLocalhostLive() {}
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
