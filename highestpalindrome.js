let array = ["redder","noon","level",
    "redivider","rotator","malayalam","repaperpaper","detartrated"];


function ispalindrome(word){
    return word === word.split("").reverse().join("");
}

function lengthestpal(arr){
    let maxword = "";
    for(let word of arr){
        if(ispalindrome(word)&&word.length > maxword.length){
            maxword = word;

        }
    }
    return maxword;

}

console.log(lengthestpal(array));



// function ispalindrome(word){
//     let left = 0 ;
//     let right = word.length-1;
//     for(let word of array){
//         if(word[left] !== word[right]){;
//         return false;
//     }
//     }   
//     return true;
// }

// function lenghestpal(arr){
//     let maxlen = "";
//     for(let word of arr){
//         if(ispalindrome(word)&&word.length>maxlen.length){
//             maxlen = word;
//         }
//     }
//     return maxlen;
// }

// console.log(lenghestpal(array))