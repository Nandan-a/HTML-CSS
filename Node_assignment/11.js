let express = require("express")

let app = express()

app.get("/string",function(req,resp){
   resp.sendFile("11.html",{root : __dirname})
})

app.get("/list",function(req,resp){
    var f1=req.query.f1
    var f2 = req.query.f2
    var f3 = req.query.f3
  
    

    resp.send("The parameters are :"+"<ul><li>"+ (f1)+"</li><li>" +(f2)+ "</li><li> " +(f3)+"</li></ul>")
 })


app.listen(3000,function(){
   console.log("Server Listening on http://localhost:3000")

})