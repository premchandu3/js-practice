const word = "premchandu"

const vowels = "aeiouAEIOU"

// const letters = (wor) => {
//     for (let i = 0; i <= word.length - 1; i++) {
//         // console.log(wor[i]);
//     }
// }
// letters(word)

// const vletters = (wor) => {
//     for (let i = 0; i <= vowels.length - 1; i++) {
//         // console.log(wor[i]);
//     }
// }
// vletters(vowels)

const countvowels = (cvowels) => {
    let totalvowels = 0;
    for (let i = 0; i <= cvowels.length - 1; i++) {
        if (vowels.includes(cvowels[i])) {
            totalvowels++;
        }
    }
    return totalvowels;
}

console.log(countvowels(word));