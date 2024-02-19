var http = require("http")

function process_req(){
    console.log("REQ RECEIVED")
}




var server = http.createServer(process_req)

server.listen(4000,"localhost")
// the above  is most important for making a server
console.log('my server is running on "http://localhost"')


console.log("Hii world")