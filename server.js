"use strict";

const Hapi = require("hapi");
const Handler = require("./handlers");

const Database = require("./database");

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: "localhost",
  port: 8000
});

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

  server.route({ method: "GET", path: "/", handler: Handler.root });
  server.route({ method: "GET", path: "/combi", handler: Handler.combi });
  server.route({ method: "GET", path: "/rest", handler: Handler.rest });
  server.route({ method: "GET", path: "/inspi", handler: Handler.inspi });
  server.route({ method: "GET", path: "/result", handler: Handler.result });

});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log("Server running at:", server.info.uri);
});
