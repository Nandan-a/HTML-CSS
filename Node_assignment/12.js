let express = require ("express")

let app = express()

app.get("/intrest",function(req,resp){
    resp.sendFile("./SimpleInt.html",{root,__dirname})
})

app.get("/simple",function(req,resp){
    
})
