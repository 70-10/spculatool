const _ = require("lodash");
const Database = require("../database");

module.exports = (request, reply) => {

  if (request.payload && "sub_theme" in request.payload && request.payload.sub_theme === "料理") {
    console.log(request.payload);
    Database.findAllWord(result => {
      reply.view("combi", {
        nav_title: "2. インプットした情報同士を組み合わせる",
        main_theme: request.payload.main_theme,
        words: result,
        error_message: "そのアイデアは既に存在します。練り直してください。",
        wordIds: JSON.stringify(_.map(result, (element, index, array) => {
          return element.dataValues.id;
        })),
      });
    });

  } else {
    reply.view("result", {
      nav_title: "5. まとめる",
      postData: request.payload
    });
  }
};
