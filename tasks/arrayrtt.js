// -------> A company has a list of products. Each product has a name, price, and category. We want to group
//  products by category to show them in different sections (Electronics, Grocery, etc.).


let products = [
    { name: "tv", category: "electronics" },
    { name: "apple", category: "fruit" },
    { name: "mobile", category: "electronics" },
    { name: "shirt", category: "clothing" },
    { name: "laptop", category: "electronics" },
    { name: "banana", category: "fruit" },
    { name: "jeans", category: "clothing" }
];

let result = products.reduce((acc,item)=>{
    let category = item.category;
    if(!acc[category]){
        acc[category]=[]
    }
    acc[category].push(item)
    return acc

},{})

console.log(result)