const _ = require("lodash");
const Database = require("../database");

module.exports = (request, reply) => {
  Database.findAllWord(result => {
    reply.view("combi", {
      nav_title: "2. インプットした情報同士を組み合わせる",
      main_theme: request.payload.main_theme,
      words: result,
      wordIds: JSON.stringify(_.map(result, (element, index, array) => {
        return element.dataValues.id;
      })),
    });
  });
};
