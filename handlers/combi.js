const Database = require("../database");

module.exports = (request, reply) => {
  Database.findAllWord(result => {
    reply.view("combi", {
      main_theme: "メインテーマ",
      words: result,
    });
  });
};
