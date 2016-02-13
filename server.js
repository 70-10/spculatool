"use strict";

const Hapi = require("hapi");

const Database = require("./database");

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: "localhost",
  port: 8000
});

const rootHandler = (request, reply) => {
  reply.view("index", {
    title: "examples/views/jade/index.js | Hapi " + request.server.version,
    message: "Index - Hello World!"
  });
};

const combiHandler = (request, reply) => {
  Database.findAllWord(result => {
    reply.view("combi", {
      title: "examples/views/jade/index.js | Hapi " + request.server.version,
      message: "About - Hello World!",
      words: result,
    });
  });
};

const restHandler = (request, reply) => {
  reply.view("rest", {
    title: "examples/views/jade/index.js | Hapi " + request.server.version,
    message: "About - Hello World!"
  });
};

const inspiHandler = (request, reply) => {
  reply.view("inspi", {
    title: "examples/views/jade/index.js | Hapi " + request.server.version,
    message: "About - Hello World!"
  });
};
const resultHandler = (request, reply) => {
  reply.view("result", {
    title: "examples/views/jade/index.js | Hapi " + request.server.version,
    message: "About - Hello World!"
  });
};

server.register(require("vision"), (err) => {

  if (err) {
    throw err;
  }

  server.views({
    engines: { jade: require("jade") },
    path: __dirname + "/templates",
    compileOptions: {
      pretty: true
    }
  });

  server.route({ method: "GET", path: "/", handler: rootHandler });
  server.route({ method: "GET", path: "/combi", handler: combiHandler });
  server.route({ method: "GET", path: "/rest", handler: restHandler });
  server.route({ method: "GET", path: "/inspi", handler: inspiHandler });
  server.route({ method: "GET", path: "/result", handler: resultHandler });

});


// Add the route
// server.route({
//   method: "GET",
//   path: "/",
//   handler: function (request, reply) {
//
//     return reply("hello world");
//   }
// });

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log("Server running at:", server.info.uri);
});
