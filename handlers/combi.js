const Database = require("../database");

module.exports = (request, reply) => {
  console.log(request.payload);
  var main_theme = request.payload.main_theme;
  Database.findWord(main_theme,
                    function(r){
                      if (r === null || r.length === 0) {
                        Database.insertWord(main_theme, function(r){
                          console.log(r);
                        })
                      }
                    });
  Database.findWithoutWord(main_theme, result => {
    reply.view("combi", {
      nav_title: "2. インプットした情報同士を組み合わせる",
      main_theme: main_theme,
      words: result,
    });
  });
};
