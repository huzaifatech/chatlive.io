const express =require('express');
const app = express()
const http=require('http').createServer(app)
const port = process.env.port || 3000
var router = express.Router();

http.listen(port,()=>{
    console.log('Listening on port 3000')
})
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})


// Socket
const io = require('socket.io')(http)
io.on('connection',(socket)=>{
console.log('Connected!')
socket.on('message',(msg)=>{
socket.broadcast.emit('message',msg)
})

socket.on('typing',(msg)=>{
socket.broadcast.emit('typing',msg)

})
})
