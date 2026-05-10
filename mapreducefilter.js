// let array = [1, 12, 33, 44, 5];
// let result = [];

// array.forEach(function(value,index,array){
//     console.log("value --- ",value);
// console.log("Index ----",index);
//     result.push(value*2);
// })

// console.log(result);

// ------------> Foreach:

// array.forEach((value)=> result.push(value*2));
// console.log(result);

// console.log(array.forEach((val)=> val*2));

// ------------> map:

// array.map(function(value,index,arr){
//     // console.log(value);
//     // console.log(index);
//     // console.log(arr);
// })

// console.log(array.map((val)=> val*2))

// ---------->filter 
//  let array = [1,2,-4,56,-1224,66,54,45,36]
// let result = array.filter((val)=>{
//     return val>=35;
// })

// console.log(result);



// let result = array.filter((val)=>{
//     console.log(val < 0);
//     return val>=35;
// })

// ----------> Reduce:

// let array = [10, 20, 30, 40, 50]

// console.log(array.indexOf(40))



// let result = array.reduce((accumulator, currentValue)=>{
//     console.log(accumulator, currentValue);
//     return accumulator = accumulator + currentValue

//------> salaries increased by 10%

let salaries = [
    { name: "prem", salary: 10000 },
    { name: "nishanth", salary: 20000 },
    { name: "chandu", salary: 30000 },
    { name: "swathi", salary: 25000 }
];


let result = salaries.map((val) => {
    return val.salary + val.salary * 10 / 100;
})

console.log(result);

// ---------> Use filter to return numbers > 50.

let vallues = [1, 22, 55, 33, 25, 56, 89, 87, 44, 66, 49, 47]

let res = vallues.filter((val) => {
    return val > 50;
});
console.log(res.sort())

// -----------> Use reduce to count occurrences of each category.


let products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Jeans", category: "Clothing" },
    { name: "Apple", category: "Food" },
    { name: "Milk", category: "Food" },
    { name: "Laptop", category: "Electronics" }
];

let sol = products.reduce((acc, item) => {
    let category = item.category;
    if (acc[category]) {
        acc[category]++;
    }
    else {
        acc[category] = 1;
    }
    return acc;
}, {})

console.log(sol);