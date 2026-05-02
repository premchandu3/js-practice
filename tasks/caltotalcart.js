let cart = [
{ name: "Pen", price: 10, qty: 2 },
{ name: "Book", price: 50, qty: 1 }
];

let result = cart.reduce((acc,item)=>{
    let quantity = item.qty;
    let price = item.price
    return acc + (quantity*price);
},0)
console.log(result);

let res = cart.reduce((acc,item)=>{
    acc.total += item.qty*item.price
    return acc;
},{total:0})

console.log(res)