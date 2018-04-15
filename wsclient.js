let WebSocket = require('ws');

var ws_client = function (url,send) {
    const socket = new WebSocket(url);
    socket.onopen = function (event) {
        console.log('WebSocket connect at time: ' + new Date());
        socket.send(send);
    };
    socket.onmessage = function (event) {
        let raw_data = event.data;
        console.log(raw_data);
    };

    socket.onclose = function(event) {
        console.log('WebSocket close at time: ' + new Date());
    };
}

exports.ws = ws_client