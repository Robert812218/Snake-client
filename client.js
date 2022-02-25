const net = require("net");
const { IP, PORT } = require("./constants");
let connection;

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541'
  });

  conn.on('connect', () => {
    console.log('Connected!');
    conn.write('Name: YON');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', function(data) {
    console.log("connected user says:", data);
  })

  return conn;
};


module.exports = { 
  connect
};