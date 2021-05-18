const handlebars = require("handlebars");
const fs = require("fs");

const genTemplate = (title, body) => {
  const template = fs.readFileSync(
    `${__dirname}/../views/template.hbs`,
    "utf-8"
  );

  const compiled = handlebars.compile(template);

  return compiled({ title: title, body: body });
};

module.exports = genTemplate;
