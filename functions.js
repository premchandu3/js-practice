// function prem(num1,num2){
//     a = num1 + num2;
//     return a;
// }
// console.log(prem(5,6))


// ------> palindrome

// function palindrome(word) {
//     var reverse = "";
//     for (var i = word.length - 1; i >= 0; i--) {
//         reverse = reverse + word[i];
//     }
//     if (word == reverse) {
//         console.log("Given word is an palindrome");
//     }
//     else {
//         console.log("Given word is mot a palindrome")
//     }
// }



// palindrome("madamn")


//--------> Finding max number and minimum number 
function findminandmaxnumber(numbers) {
    var maxnumber = numbers[0];
    var secondlargestnumber = numbers[0];
    for (i = 0; i <= numbers.length - 1; i++) {
        if (numbers[i] > maxnumber) {
            secondlargestnumber = maxnumber;
            maxnumber = numbers[i];
        }
        else if (numbers[i] > secondlargestnumber && numbers[i] < maxnumber) {
            secondlargestnumber = numbers[i];
        }
    };
    return {
        maxnumber,
        secondlargestnumber
    };


}
res = findminandmaxnumber([11, 22, 3, 767, 212]);
console.log(res);