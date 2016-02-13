const Database = require("../database");

module.exports = (request, reply) => {
  console.log(request.payload);
  Database.findAllWord(result => {
    reply.view("combi", {
      main_theme: request.payload.main_theme,
      words: result,
    });
  });
};
