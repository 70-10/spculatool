const Database = require("../database");

module.exports = (request, reply) => {

  if (request.payload && "sub_theme" in request.payload && request.payload.sub_theme === "料理") {
    console.log(request.payload);
    Database.findAllWord(result => {
      reply.view("combi", {
        main_theme: request.payload.main_theme,
        words: result,
        error_message: "そのアイデアは既に存在します。練り直してください。",
      });
    });
    // reply.view("combi", {
    //   main_theme: "メインテーマ",
    //   words: request.payload.words,
    // });

  } else {
    reply.view("result", {
      title: "examples/views/jade/index.js | Hapi " + request.server.version,
      postData: request.payload
    });
  }
};
