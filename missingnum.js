var numbers = [1, 2, 5, 7, 9, 12, 16, 19, 20, 22];

for (var i = numbers[0]; i < numbers[numbers.length - 1]; i++) {
    // console.log(i)
    for (var j = numbers[i] + 1; j <
        numbers[i + 1]; j++) {
        console.log(j);
    }
}