let array=[1,222,33,21,12];

function sumofarray(arr){
    let res = 0;
    for(let val of arr){
        res += val;
    }
    return res;
}

ser = sumofarray(array);
console.log(ser);


let sum = array.reduce((acc,s)=> acc+s,0);
console.log(sum);


let total = (arr)=>{
    let res = 0;
    for(let val of arr){
        res += val;
    }
    return res;
}

console.log(sum);