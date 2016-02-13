module.exports = (request, reply) => {
  reply.view("result", {
    title: "examples/views/jade/index.js | Hapi " + request.server.version,
    postData: request.payload
  });
};
