//agar kisi data ko memory mein store krna ho to us ki 2 categories hoti hain
//1. primitive data types
//2. non-primitive data types or reference data types

//primitive data types mein 7 types hoti hain
//1. string 
//2. number
//3. boolean
//4. null
//5. undefined
//6. symbol
//7. bigint 

const score = 100; //number
const scoreValue = 100.3 //number
const isLoggedIn = false; //boolean
const outsideTemp = null; //null
let userEmail; //undefined
const userId = Symbol("1234"); //symbol
const anotherUserId = Symbol("1234"); //symbol
//symbol ki unique property yeh hai ke chahe aap same description dein phir bhi yeh alag alag values hoti hain
console.log(userId === anotherUserId); //false
const bigNumber = 1234567890123456789012345678901234567890n; //bigint
const userName = "John Doe"; //string

//non-primitive data types mein 3 types hoti hain
//1. object
//2. array
//3. function

const heroes = ['Superman', 'Batman', 'spiderman']; //array
let myobject = {
    name: "John",
    age: 30,
    isAdmin: true
} //object

const myFunction = function() { //function
    console.log("Hello world");
}

console.log(typeof bigNumber);

//*****************************memories****************************************** */


//primitive data types stack memory mein store hoti hain
//non-primitive data types heap memory mein store hoti hain 

//stack memory fast hoti hai aur heap memory slow hoti hai
//primitive data types ki size choti hoti hai aur non-primitive data types ki size badi hoti hai
//primitive data types directly value store karti hain aur non-primitive data types reference store karti hain

let myYouTubeChannel = "Hammad Amin";
let anotherYouTubeChannel = myYouTubeChannel;
anotherYouTubeChannel = "Code with Hammad";

console.log(myYouTubeChannel);
console.log(anotherYouTubeChannel);

let userone = {
    name: "Hammad",
    age: 18
}

let usertwo = userone;
usertwo.age = 19;
console.log(userone);
console.log(usertwo);

