module.exports = (request, reply) => {
  reply.view("rest", {
    title: "examples/views/jade/index.js | Hapi " + request.server.version,
    message: "About - Hello World!"
  });
};
