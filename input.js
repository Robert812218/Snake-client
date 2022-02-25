const net = require("net");
let connection;

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
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
    case 'e':
      connection.write('Move: right');
      break;
    case 'h':
      connection.write('"')
  }
}

module.exports = { 
  setupInput,
  handleUserInput
 };