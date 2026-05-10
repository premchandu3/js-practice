const scentence = "my name is premchandu"

const lword = (str)=>{
    let words = str.split(" ");
    let longest = "";
    for(let i=0;i<=words.length-1;i++){
        if(words[i].length > longest.length){
            longest=words[i];
        }
    }
    return longest;
}

res = lword(scentence);
console.log(res);