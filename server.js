const http = require('http');
const app = require('./app');


const port= 2000;
app.set('port',port)
const server = http.createServer(app)

server.listen(port,(err,resp)=>{
    if(err)
    {
        console.log("Error Occured while listening to server:\n",err);
    }
    else
    {
        console.log("Server listening on port: ",port);
    }
});
