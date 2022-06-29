// get attribute added inside html tag
export function getHtmlAttribute(html, attribute) {
  let regex = new RegExp(`${attribute}="(.*?)"`, "g");
  let match = regex.exec(html);
  console.log(match[1]);
  return match[1];
}
