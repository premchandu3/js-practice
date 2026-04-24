let object = {
    name: "prem",
    age: 22,
    college: "Bharath university",
    place: "chennai"
};

console.log(object);

console.log("-".repeat(20));


let objects = {
    name: "kiran",
    age: 32,
    skills: ["python", "excel", "js", "c++"],
    sports: {
        1: "cricket",
        2: "volleyball"
    },
    friends: [1, { 1: "vishwak" }],
    movies: { telugu: ["rangastalam", "rc1&2", "Darling"], tamil: ["vadachennai", "arasan", "Manmadhan"] }

};

console.log(objects);
console.log("-".repeat(20));


// console.log(objects[3][1])  ----> this only works for array not for objects
// console.log(objects[2]);   ----> it is undefines beacause object has only keys not index values

console.log(objects.name);
console.log(objects.skills[2]);
console.log(objects.sports[1]);
console.log(objects.friends[1])
console.log(objects.movies.telugu[1])

console.log("-".repeat(20));

// -----> to add elements in object
objects["company name"] = "ABC";

console.log(objects);

// ------> to delete a element
console.log("-".repeat(20));


delete objects["age"];

console.log(objects);