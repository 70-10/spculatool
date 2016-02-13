module.exports = (request, reply) => {
  reply.view("result", {
    title: "examples/views/jade/index.js | Hapi " + request.server.version,
    main_theme: request.payload.main_theme,
    sub_theme: request.payload.sub_theme,
    inspiration: request.payload.inspiration
  });
};
