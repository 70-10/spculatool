const Hapi = require("hapi");

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: "localhost",
  port: 8000
});

const rootHandler = function (request, reply) {

    reply.view('index', {
        title: 'examples/views/jade/index.js | Hapi ' + request.server.version,
        message: 'Index - Hello World!'
    });
};

const aboutHandler = function (request, reply) {

    reply.view('about', {
        title: 'examples/views/jade/index.js | Hapi ' + request.server.version,
        message: 'About - Hello World!'
    });
};

server.register(require('vision'), (err) => {

    if (err) {
        throw err;
    }

    server.views({
        engines: { jade: require('jade') },
        path: __dirname + '/templates',
        compileOptions: {
            pretty: true
        }
    });

    server.route({ method: 'GET', path: '/', handler: rootHandler });
    server.route({ method: 'GET', path: '/about', handler: aboutHandler });
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
