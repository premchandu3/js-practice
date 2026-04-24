// var array = ["apple","banana","grape","mango","orange"];

// for(var i=0;i<=array.length-1;i++){
//     console.log(array[i]);
// };

// console.log("-".repeat(20))

// for(var i=array.length-1;i>=0;i--){
//     console.log(array[i]);
// }

// var reversearray = [];
// for(var i=array.length-1;i>=0;i--){
// console.log(array[i])
//     reversearray.push(array[i]);
// };
// console.log(reversearray);

// for(var i=0;i<=array.length-1;i++){
//     if(array[i]=== "grape"){
//         array[i]="pine apple"
//     };
// };
// console.log(array);

// ---------> adding new elemenents to an array 

// var array = ["Apple","Banana","Grape","Pomogranate"]
// var newfruits = ["kiwi","Musk melon","Sappota","Pomogrante"];
// for(var i=0;i<=newfruits.length-1;  i++){
//     array.push(newfruits[i]);
// };

// console.log(array);

// ---------> To reverse a string

// var bike = "Royal Enfield";
// var revbike = "";

// for(var i=bike.length-1;i>=0;i--){
//     revbike = revbike + bike[i];
// }

// console.log(revbike);

// ------> adding element in the middle of an array
let animals = ["lion","wolf","deer","cheetha"];

console.log(animals);
let newanimals = [];

for(i=0;i<=animals.length-1;i++){
    newanimals[newanimals.length]=animals[i];
    if(animals[i]=="wolf"){
        newanimals[newanimals.length]="Tiger";
    }
}

console.log(newanimals)

let fruit = ["apple", "banana",
    "mango", "orange", "kiwi",
    "Musk melon", "Sappota", "Pomogrante"];
console.log("Before Adding",fruit)

for(i=0;i<=fruit.length-1;i++){
    if(fruit[i]=="orange"){
        fruit.splice(i+1,0,"Grape"); // ----> splice is used for add elements(position,delete count,new element)
        break;
    }

}

console.log("After Adding",fruit)





// ---------> Checking wheather the element is there or not

// let fruits = ["apple", "banana",
//     "mango", "orange", "kiwi",
//     "Musk melon", "Sappota", "Pomogrante"];

// console.log("Before adding---",fruits)
// --------> Includes method
// let res = fruits.includes("grape")

// console.log(res);

// if(res == false){
//     fruits.push("grape");
// }
// console.log("After adding----",fruits)

// let isExists = true;

// console.log(fruits);

// for (i = 0; i <= fruits.length - 1; i++) {
// console.log(i);
//     if (fruits[i] == "grape") {
//         console.log("grape is there");
//         isExists = false;
//     }
//     if (i == fruits.length - 1 && isExists) {
//         fruits.push("grape");
//     }
// }
// console.log("isexists ===",isExists)
// console.log(fruits)

// -------> to find unique values by using looping

let fruits = ["apple", "banana", "apple", "banana", "pomogrante", "mango",
    "mango", "orange", "kiwi",
    "musk melon", "Sappota", "pomogrante", "mango", "kiwi"];

let fruitsnew = [];

for (i = 0; i <= fruits.length - 1; i++) {
    // console.log(i);
    if (!fruitsnew.includes(fruits[i])) {
        fruitsnew.push(fruits[i]);
    }
}

console.log(fruits);

console.log(fruitsnew);

// by creating a new set

let a = [1, 2, 1, 2, 11, 10];

console.log("Before Updating------", a);

let s = new Set(a);

let b = [...s]

console.log("Updates array ----", b)

