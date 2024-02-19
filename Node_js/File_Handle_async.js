// ----------------------------------------file Handling using Asynchronous -----------------------------------------------------------------

// var fs = require("fs")
// fs.readFile("async.txt",function(err,data){
//     if (err)console.log("oops! Error comes",err.message,err.code)
//     console.log(data.toString())
// })



// -----------------------------Code-2   to-write-------------------------------------------

// var fs = require("fs")
// var str="This is some Sample that is being stored"

// fs.writeFile("async_write.txt",str,function(err){
//     if (err)console.err("oops! Error comes",err.message,err.code)
   
// })
// -----------------------------Code-2   to-append-------------------------------------------

var fs = require("fs")
var str="\n Adding Moreee aaahhhaaa....."

fs.appendFile("async_write.txt",str,function(err){
    if (err)console.err("oops! Error comes",err.message,err.code)
   
})