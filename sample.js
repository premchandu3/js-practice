let age = 18;
if (age <= 13) {
    console.log("you are a child");
}
else if (age > 13 && age <= 18) {
    console.log("you are a teenager");
}
else {
    console.log("You are an adult");
}







const prompt = require("prompt-sync")();

var agee = Number(prompt("enter your age: "));

if (agee <= 13) {
    console.log("your are child");

}
else if (agee > 13 && agee <= 18) {
    console.log("you are a teen ager");
}

else {
    console.log("you are an adult");
}