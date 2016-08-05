console.log('\nLoading...');

const server = require('koa')();
const serve = require('koa-static');

//global
const servers = require('./servers');
const SERVER = servers.app;

//static
server.use(serve(__dirname + '/public'));

//server on
server.listen(SERVER.port, function () {
  console.log('\nApplication Server up in: ' + SERVER.audience());
});
