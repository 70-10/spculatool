const Database = require("../database");

module.exports = (request, reply) => {
  Database.findAllWord(result => {
    reply.view("combi", {
      title: "examples/views/jade/index.js | Hapi " + request.server.version,
      message: "About - Hello World!",
      words: result,
    });
  });
};
