module.exports = (request, reply) => {

  if (request.payload && 'sub_theme' in request.payload && request.payload.sub_theme === 'fuga') {
    reply.view("combi", {
      main_theme: "メインテーマ",
      words: request.payload.words,
      error_message: "残念! 既存のアイデアです。練り直してください。"
    });
  } else {
    reply.view("result", {
      title: "examples/views/jade/index.js | Hapi " + request.server.version,
      postData: request.payload
    });
  }
};
