// function anagram(word1,word2){
// we cant use sort for string for that we use split & join 
// ---> it turns string into an array
//     let res= word1.split("").sort().join("");
//     let ser= word2.split("").sort().join("");
//     if(res == ser){
//         console.log("Given words are anagram");
//     }
//     else{
//         console.log("Given words are not anagram");
//     }
//     return res,ser ;
// };

// anagram("listend", "silent");

// ---- > anagram wiyhout using sort method
// ** First We need to check the lenth of two strings
function anagram(word1, word2) {
    if (word1.length !== word2.length) {
        console.log("Given words are not anagram")
        return;
    };

// ** we have to count the elements in the strings
// first we created an empty object
    let count = {};

    // counting letters in word1 and storing in count object 

    for (let i = 0; i <= word1.length - 1; i++) {
        let char = word1[i];
        if (count[char]) {
            count[char]++
        }
        else {
            count[char] = 1;
        }
    }

    // same counting and checks if letter is in count object
    // it reduces -1 ; so it becomes 0 if count is 1

    for (let i = 0; i <= word2.length - 1; i++) {
        let char = word2[i];
        if (count[char]) {
            count[char]--
        }
        else {
            console.log("Given words are not anagram");
            return;
        }
    }

    // it will check the count of keys if it is 0 then
    // the words are anagram

    for (let keys in count) {
        if (count[keys] !== 0) {
            console.log("Given words are not anagram");
            return;
        }
    }
    console.log("Given Words are anagram");
}

anagram("listend", "silent");