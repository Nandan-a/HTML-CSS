
function minmum(...num: number[]): number {
    var res = num[0];
    console.log(num)
    for (var i = 1; i < num.length; i++)
     {
       if (num[i] < res) 
       {
           res = num[i];
       }
    }
    return res;
   }
   
console.log(minmum(100, 12, 143,42)); 
