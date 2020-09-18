const Koa = require('koa');
const http = require('http');
const socket = require('socket.io');

const app = new Koa()
const server = http.createServer(app.callback())
const io = socket(server)

const SERVER_PORT = '3030'
const SERVER_HOST = '192.168.15.10'

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`[http] Listen => Server is running at http://${SERVER_HOST}:${SERVER_PORT}`);
    console.log(`[http] Listen => Press CTRL+C to stop it.`);
})

let amountUsers = 0;

io.on('connect', socket => {
    amountUsers++;
    io.emit('userUpdateConnect', amountUsers)
    

    socket.on('chat.message', data => {
        console.log(data)
        io.emit('chat.message', data);
    });

    socket.on('disconnect', data => {
         amountUsers--;
         io.emit('userUpdateConnect', amountUsers)
    });
});