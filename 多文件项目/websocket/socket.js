// 导入WebSocket模块,引用server类
const WebSocketServer = require('ws').Server
//实例化
const wss = new WebSocketServer({ port: 8090 })

// 如果有请求接入，wss对象就响应connection事件来处理这个WebSocket
// 在connection事件中，回调函数会传入一个WebSocket的实例也就是下文的ws
wss.on('connection', (ws) => {
  console.log('建立连接');
  // 当服务器接收到客户端传来的消息时
  // 同时向所有客户端派发消息
  ws.on('message', function (message) {

    ws.send(`ws链接成功--返回消息：${message}`)
  })
  // 服务器初始化时即向客户端发送信息
  wss.clients.forEach((client) => {
    client.send(`你好，我是ws`)
  })
})

