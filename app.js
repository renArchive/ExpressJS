const http = require('http'); //import global module

const routes = require('./routes');


const server = http.createServer(routes);

server.listen(3000);