//--------> Finding Prime Numbers

function prime(num){
    for(let i=2;i<num;i++){
        if(num % i == 0){
            console.log("Given number is a not prime Number");
            return;
        }
    }
    console.log("Given number is a Prime Number")
}


prime(24)


// ---------> Finding factors

function factorsof(num){
    let factors = [];
    for(let i=1;i<num;i++){
        if(num%i==0){
            factors.push(i)
        }

    }
    console.log("Factors Are :",factors)
}

factorsof(200)