
var mqtt = require('mqtt');

var c1 = mqtt.connect('mqtt://localhost:1883');

c1.on('connect', function () {
    console.log("c1 ok");        
});

var c3 = mqtt.connect('ws://localhost:1884');
c3.on('connect', function () {
    console.log("c3 ok");    
});

var c4 = mqtt.connect('wss://localhost:8884');
c4.on('connect', function () {
    console.log("c4 ok")
});
