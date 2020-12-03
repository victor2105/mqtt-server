var fs = require('fs');
var mqttServer = require('mqtt-server');
 
servers = mqttServer({
  mqtt: 'tcp://0.0.0.0:1883',
//  mqtts: 'ssl://localhost:8883',
  mqttws: 'ws://0.0.0.0:1884',
  mqtwss: 'wss://localhost:8884'
}, {
//   ssl: {
//     key: fs.readFileSync('./certs/server.key'),
//     cert: fs.readFileSync('./certs/server.crt')
//   },
  emitEvents: true // default
}, function(client){  
  client.on('connect', function(){
    client.connack({
      returnCode: 0
    });
  });
  client.on('subscribe', function(a) {
    console.log(a);
  });
  
  client.on('publish', function(message) {
    console.log(message);
  })

});

servers.listen(function(){
  console.log('listening!');
});
