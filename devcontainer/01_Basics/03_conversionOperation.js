let score = 33
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//33=> 33
//333abc => nan
//true => 1
//false => 0


let isLogggedIn = 1
let booleanIsLoogedIn = Boolean(isLogggedIn)
console.log(booleanIsLoogedIn);
//true => 1
//false => 0
//"" => false
//"hamad" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
//chatgpt
//  let score = 33;
//  console.log(typeof score);
//  console.log(typeof (score));
//  console.log(score == null);
//  console.log(score === null);

//*****************************operations**************************************** */

let value =  33
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " hammad"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);// "12"
console.log(1 + "2");//"12"
console.log("1" + 2 + 2);// "122"
console.log(1 + 2 + "2");//"32"

let gameCounter = 100
gameCounter++
console.log(gameCounter);
gameCounter--
console.log(gameCounter);