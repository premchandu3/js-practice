let name = "Prem";
let age = 21;

console.log(name, age);
console.log("-".repeat(20));


function test(){
    var a = 10;    //--------> var can be reassigned and redeclared
    if(true){
        var a = 20;
        console.log(a);
    }
    console.log(a);
}

test();
console.log("-".repeat(20));


let y = 89; // --------> let can be reassigned but can't redeclared
y = 14;
console.log(y);

console.log("-".repeat(20));

function lettest(){
    let a = 25;
    if(true){
        let a = 66;
        console.log(a);
    }
    console.log(a);
}

lettest();

console.log("-".repeat(20));



const z = 3.14; // ----> for const no reassignment and no redeclaration
                // but we can modify 
// const z=3;

const user = {name : "Prem"}
user.name = "Chandu"
console.log(user)


console.log("-".repeat(20));

// hoisting
//Variables declared with var are hoisted and initialized with undefined, so 
//accessing them before assignment does not cause an error, but returns undefined.

console.log(p)
var p =77;
console.log(p)

console.log("-".repeat(20)); 

//Variables declared with let and const are hoisted but 
// remain in the Temporal Dead Zone until their declaration 
// is executed,so accessing them before initialization causes a ReferenceError.

// console.log(p) // ---> for let and const it will be reference error
// let p =77;  // ----> Variable is in tdz

console.log("-".repeat(20));


var c = 69 ;
function dec(){
    var c =99;
    console.log(c);
}
dec();

console.log("-".repeat(20));


var f = 90 ;
function dec(){
    let f =99;
    console.log(f);
}
dec();
console.log("-".repeat(20));



// Scopes :
// global scope
// block scope
// functional scope


// global scope :

var add = 2;
function glbscope(){
    console.log(add);
}
glbscope()
console.log(add);
console.log("-".repeat(20));


// block scope : Block scope means a variable
// declared inside {} can only be accessed inside that block.

function blkscope(){
    let fc = 99;
    console.log(fc);
}
blkscope();
// console.log(fc);