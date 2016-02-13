module.exports = (request, reply) => {
  reply.view("inspi", {
    title: "examples/views/jade/index.js | Hapi " + request.server.version,
    message: "About - Hello World!",
    postData: request.payload,
    words: ["hoge", "fuga"]
  });
};
