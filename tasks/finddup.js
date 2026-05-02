const array = [1, 2, 3, 2, 1, 4, 5, 6];
const unique = [];
const dup = [];

function findup(arr) {
    for (let val of arr) {
        if (unique.includes(val) && !dup.includes(val)) {
            dup.push(val)
        } else {
            unique.push(val)
        }
    }

}

findup(array);
console.log(unique);
console.log(dup);