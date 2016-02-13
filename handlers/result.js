module.exports = (request, reply) => {
  reply.view("result", {
    title: "examples/views/jade/index.js | Hapi " + request.server.version,
    message: "About - Hello World!"
  });
};
