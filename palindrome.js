// var word = "Prem";

// for(var i=0;i<=word.length-1;i++){
//      console.log(word[i]);
// };

// for(var j=word.length-1; j>=0;j--){
//      console.log(word[j]);
// }

// if(word[i]===word[j]){
//     console.log("Given word is an palindrome");
// }
// else{
//     console.log("Given word is not an palindrome");
// }

var word = "madam"
var reverse = "";

for (i = word.length - 1; i >= 0; i--) {
    // console.log(word[i]);
    reverse = reverse + word[i]
}

if (word === reverse) {
    console.log("Given word is a Palindrome");
}
else {
    console.log("Given word is not a Palindrome");
}