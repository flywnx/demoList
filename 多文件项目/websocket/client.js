const WebSocket = require('ws');
let ws = new WebSocket('ws://localhost:8090/test');

// 打开WebSocket连接后立刻发送一条消息:
ws.on('open', function () {
  ws.send(1007);
});

// 响应收到的消息:
ws.on('message', function (message) {
  // ws.send(1008);
  console.log(message);
})
