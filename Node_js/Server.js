var http = require("http")
var fs = require("fs")

function process_req(request,response){
    fs.readFile("Welcome.html",function(err,data){
        if(err) console.log("OOps....",err.code)
        else{
        var str= data.toString()
        var length = str.length
    
        response.writeHead(200,{
        content_Length : length,
        content_Type : "text/html"
        })
        response.write(str)
        response.end();
        }
    })
}




var server = http.createServer(process_req)

server.listen(4000,"localhost")
// the above  is most important for making a server
console.log('my server is running on "http://localhost"')
