var http = require("http")
var mod = require("./Greet.js")



function process_req(request,response){
        
        var str= mod.greet()
        var length = str.length
    
        response.writeHead(200,{
        content_Length : length,
        content_Type : "text/plain"
        })
        response.write(str)
        response.end();
        }
var server = http.createServer(process_req)
server.listen(4000,"localhost")
// the above  is most important for making a server
console.log('my server is running on "http://localhost"')
