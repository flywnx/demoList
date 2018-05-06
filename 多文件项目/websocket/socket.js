// 导入WebSocket模块,引用server类
const WebSocketServer = require('ws').Server
//实例化
const wss = new WebSocketServer({ port: 8090 })
let roomId = [1008,1010,1037]
// 如果有请求接入，wss对象就响应connection事件来处理这个WebSocket
// 在connection事件中，回调函数会传入一个WebSocket的实例也就是下文的ws
wss.on('connection', (ws) => {
  console.log('建立连接');

  ws.on('message', function (message) {
    console.log(message);
    console.log(roomId.indexOf(message));
    
    if(roomId.indexOf(message)>0){
      ws.send(`进入房间`)
    }else{
      ws.send(`没有此房间`)
    }
  })
  // 服务器初始化时即向客户端发送信息
  wss.clients.forEach((client) => {
    client.send(`请输入房间号`)
  })
})

