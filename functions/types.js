// let radiiarray = [52,56,85,45,74,96];

// let pi = 3.14 ;

// function area(radi){
//     // let result = [];
//     // for(let val of arr){
//     //     result.push(pi*val*val);
//     // }
//     return pi*radi*radi;
// }

// // circlearea = area(radiiarray);
// // console.log(circlearea);

// function circumference(radi){
//         return 2*pi*radi;
//     }


// function finddiameter(radi){
//         return 2*radi;
//     }


// function calculate(arr,logic){
//     let result = [];
//     for(let val of arr){
//         result.push(logic(val));
//     }
//     return result;
// }

// output = calculate(radiiarray,finddiameter);
// console.log(output);


//-------------> 

// let array = [1,3,4,5,9,11,15,12,10,16];

// function square(num){
//     return num*num;
// }

// function cube(num){
//     return num*num*num;
// }

// function evenorodd(num){
//     return num % 2 === 0 ;
// }

// function numgr5(num){
//     return num > 5 ;
// }

// function calculate(array,logic){
//     let result = [];
//     for(let val of array){
//         result.push(logic(val))
//     }
//     return result;
// }

// function filter(array,logic){
//     let result = [];
//     for(let val of array){
//         if(logic(val)){
//             result.push(val);
//         }
//     }
//     return result;
// }

// output = calculate(array,cube);
// console.log(output);


// ------------------>
let score = [
    { name: "prem", marks: 60 },
    { name: "Niranjan", marks: 65 },
    { name: "Nishanth", marks: 45 },
    { name: "Swathi", marks: 39 },
    { name: "Kavya", marks: 67 },
    { name: "Chandu", marks: 34 }
];
let average = score.reduce((acc, s) => acc + s.marks, 0) / score.length;
function passstudents(stu) {
    return stu.marks > 40;
}

function namesofstu(stu) {
    return stu.name;
}

function extra5(stu) {
    return { name: stu.name, marks: stu.marks + 5 };
}

function avg(stu) {
    return stu.marks > average;
}

function final(arr, logic) {
    let result = [];
    for (let val of arr) {
        result.push(logic(val));
    }
    return result;
}

function filter(arr, logic) {
    let result = [];
    for (let val of arr) {
        if (logic(val)) {
            result.push(val)
        }
    }
    return result;
}

let passed = filter(score, passstudents);
console.log(passed);

let names = final(score,namesofstu)
console.log(names);

let add5 = final(score,extra5);
console.log("After adding extra 5 marks-----" ,add5);

let avgg = filter(score,avg);
console.log(avgg)