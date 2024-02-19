const { count } = require("console")
var fs = require("fs")
var arr =["Ritesh","Nandan","Shreyash","Kaka","Aniket"]
var str = arr.join("|")
console.log(str)
fs.writeFile("names.txt",str,function(err){
    if(err)console.log("Oops,Error!!")
    
})