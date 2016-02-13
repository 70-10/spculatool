module.exports = (request, reply) => {
  reply.view("index", {
    title: "examples/views/jade/index.js | Hapi " + request.server.version,
    message: "Index - Hello World!"
  });
};
