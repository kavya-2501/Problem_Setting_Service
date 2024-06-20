const marked = require("marked");
const sanitizeHTMLLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdowncontent) {
  const turndownService = new TurndownService();

  // 1. convert markdown to html
  const convertedHtml = marked.parse(markdowncontent);

  //   2. sanitize html
  const sanitizedHtml = sanitizeHTMLLibrary(convertedHtml, {
    allowedTags: sanitizeHTMLLibrary.defaults.allowedTags.concat("img"),
  });

  //   3. convert sanitized html back to sanitized markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  //   4. returned sanitized markdown
  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
