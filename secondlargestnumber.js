var numbers = [10, 110, 4520, 4243, 4586, 1420, 55, 5555, 5, 9999];

var maxnumber = numbers[0];
var secondlargestnumber = numbers[0];
for (var i = 0; i <= numbers.length - 1; i++) {
    // console.log(i);
    if (numbers[i] > maxnumber) {
        secondlargestnumber = maxnumber;
        maxnumber = numbers[i];
    }
    else if (numbers[i] < maxnumber && numbers[i] > secondlargestnumber) {
        secondlargestnumber = maxnumber[i];
    }

}

console.log("Maximum Number is : ", maxnumber);
console.log("Second largest number is : ", secondlargestnumber);