const { log } = require("console")
var fs=require("fs")

fs.readFile("emp.txt",function(err,data){
    if(err)console.log("Oops,Error Occureed!!!!")
    else{
        var arr=[]
        arr.push(data)
        var str=arr.toString().split("\n")
        
       for (i in str){
        // if(i%3==0)
        console.log(str[i])

        // for(i=0;i<str.length;i++){
        //     console.log(arr[i].toString())
        }
        
    }
})

// var data = fs.readFileSync("Sample.txt","utf-8")