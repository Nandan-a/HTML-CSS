var http = require("http")

function process_req(request,response){
    var str = "<head 'color','red'>Hi,Welcome to my web app</head>"
    var length = str.length
    response.writeHead(200,{
        Content_Length:length,
        Content_Type : "text/plain"
    })
    response.write(str)
    response.end();
    console.log("REQ RECEIVED")
}




var server = http.createServer(process_req)

server.listen(4000,"localhost")
// the above  is most important for making a server
console.log('my server is running on "http://localhost"')
