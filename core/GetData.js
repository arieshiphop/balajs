export function getTemplateContent(template) {
  let start = template.indexOf("<template>");
  let end = template.indexOf("</template>");
  let content = template.substring(start + 10, end);
  return content;
}
export function getStylesContent(template) {
  let start = template.indexOf("<style>");
  let end = template.indexOf("</style>");
  let content = template.substring(start + 10, end);
  return content;
}
