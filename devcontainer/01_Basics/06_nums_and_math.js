const score = 600
console.log(score);
const balance = new Number(1000)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4))

 const count = 39393939393
 console.log(count.toLocaleString('en-PK'))

 //++++++++++++++++++++       Maths       ++++++++++++++++++

 console.log(Math);
 console.log(Math.abs(-3));
    console.log(Math.round(3.6));
    console.log(Math.ceil(3.2));
    console.log(Math.floor(3.8));
    console.log(Math.max(4, 45, 6, 7));
    console.log(Math.min(4, 45, 6, 7));
    // console.log(Math.pow(2, 3));
    // console.log(Math.sqrt(16));
    console.log(Math.random());
    console.log((Math.random() * 10) + 1);
    console.log(Math.floor((Math.random() * 10) + 1));
    
    const min = 10
    const max = 20
    console.log(Math.floor((Math.random() * (max - min + 1)) + min));