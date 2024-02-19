exports.sname="NANDAN",
exports.sage=12

var f1= function(){
    console.log("Hello , bsdk")
}

var f2= function(){
    console.log("Hola , bsdk")
}
exports.greet = f1
exports.greet1 = f2

exports.add= function(a,b){
    return a+b
}

var myobj = {sname:"Ritesh",grade:"A1"}

exports.student = myobj



class Person{
    constructor(pname,age){
        this.pname=pname;
        this.age = age
    }
    displayPersonDetails(){
        console.log("person name",this.pname)
    }
}   

exports.Person = Person