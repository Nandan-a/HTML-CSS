var mod = require("./Module.js")

mod.greet()
mod.greet1()
console.log(mod.sname)
console.log(mod.sage)

// passing a value 
console.log(mod.add(4,5))

console.log(mod.student.sname,mod.student.grade)

var p1= new mod.Person("Ritesh",21)
var p2= new mod.Person("Nandan",24)


p2.displayPersonDetails()
p1.displayPersonDetails()
