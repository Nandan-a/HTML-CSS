function greet(){
    var today=new Date
    // var weekday=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"]
    // var Months=["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
    // var day =(today.getDay())
    // var date=(today.getDate())
    // var Month=(today.getMonth())
    // var Year=(today.getFullYear())
    var Time=(today.getHours())

    // var Time=5
    if(Time>=12 && Time<17)
    {
        var a="Good Afternoon"
    }
    else if(Time>=17)
    {
        var a="<h1>"+"<i>"+"Good Evening"+"</i>"+"</h1>"
    }
    else
    {
        var a="Good Morning"
    }

    // console.log(a)
    return a;

}
exports.greet = greet

