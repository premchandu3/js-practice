const array = [1,[2,3],4,[5,6,7],[8,9,10]];

const flatten = (arr) =>{
    let result = [];
    for(let val of arr){
        if(Array.isArray(val)){
            result = result.concat(flatten(val)); //** ---- Recursion 
        }
        else{
            result.push(val);
        }
    }
    return result;
}

res = flatten(array);
console.log(res);

const arb = [1,[2,3],4,[5,6,7],[8,9,10]];

const flat = (arr) =>{
    return arr.flat(3);
}

console.log(flat(arb));