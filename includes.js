// -------> to find unique values by using looping

let fruits = ["apple", "banana", "apple", "banana",
    "pomogrante", "mango", "mango", "orange", "kiwi",
    "musk melon", "Sappota", "pomogrante", "mango", "kiwi"];

let fruitsnew = [];
let duplicate = [];

for (let i = 0; i <= fruits.length - 1; i++) {
    // console.log(i);
    if (fruitsnew.includes(fruits[i])) {
        if (!duplicate.includes(fruits[i])) {
            duplicate.push(fruits[i]);
        }
    }
    else {
        fruitsnew.push(fruits[i]);
    }
}

console.log(fruits);

console.log("fruitsnew---------", fruitsnew);

console.log("Duplicates--------", duplicate);


let unique = {};

for (let i = 0; i <= fruits.length - 1; i++) {
    if (unique[fruits[i]]) {
        unique[fruits[i]] = unique[fruits[i]] + 1;
    }
    else {
        unique[fruits[i]] = 1;
    }

}

let maxfruit = {};
let maxcount = 0;

for (let fruit in unique) {
    if (unique[fruit] > maxcount) {
        maxcount = unique[fruit];
        maxfruit = fruit;
    }
}


console.log("Unique-------", unique);

console.log(Object.keys(unique));

console.log(Object.values(unique));

console.log("Highest repeated fruit :", maxfruit);

console.log("Highest count----", maxcount);



// by creating a new set

// let a = [1, 2, 1, 2, 11, 10];

// console.log("Before Updating------", a);

// let s = new Set(a);

// let b = [...s]

// console.log("Updates array ----", b)
