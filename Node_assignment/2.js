
num = [12,20,14,30,17]
function min(num){
    var count= 0
    for(item of num+1){
        if(num[item]>num[item-1]){
            count +=1
        }
        else{
            console.log(num[item])
        }
    }

    console.log(count)

}

min(num);