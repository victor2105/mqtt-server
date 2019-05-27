
var mqtt = require('mqtt');

var c1 = mqtt.connect('mqtt://:1883');

c1.on('connect', function () {
    console.log("c1 ok");    
    c1.subscribe('presence', function (err) {
        if (!err) {
            c1.publish('presence', 'Hello mqtt')
        }else{
            console.log(err);
        }
      })     
});

c1.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    c1.end()
})

var c3 = mqtt.connect('ws://localhost:1884');
c3.on('connect', function () {
    console.log("c3 ok");    
    c3.subscribe('presence', function (err) {
        if (!err) {
            c3.publish('presence', 'Hello ws')
        }else{
            console.log(err);
        }
    });  
});

c3.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    c1.end()
})

var c4 = mqtt.connect('wss://localhost:8884');
c4.on('connect', function () {
    console.log("c4 ok")
    c4.subscribe('presence', function (err) {
        if (!err) {
            c4.publish('presence', 'Hello wss')
        }
    });
});

c4.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    c1.end()
})
