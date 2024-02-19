// --------------------------Synchronous File Handling-------------
var fs = require("fs")
fs.writeFileSync("Sample.txt","1,2,4,8,9,7,54")
// fs.appendFileSync("Sample.txt","Jay Shree Ram....")
var data = fs.readFileSync("Sample.txt").toString()
// this will be satisfiesme as the next 
// var data = fs.readFileSync("Sample.txt","utf-8")
console.log(data)