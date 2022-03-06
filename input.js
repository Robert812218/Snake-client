const { connect } = require("./client");

// const net = require("net");
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {

  switch(key) {
    case 'w':
      connection.write('Move: up');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case 'h':
      connection.write('Say: HOWDY');
      break;
    case 'j':
      connection.write('Say: best game');
      break;
    case 'k':
      connection.write('Say: YYYUP');
      break;
    case '\u0003':
      process.exit();
      break;
  }
}
module.exports = { setupInput };