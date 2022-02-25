const net = require("net");

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

  conn.on('data', (data) => {
    switch(data) {
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
      
    }
  })

  return conn;
};

module.exports = { connect };