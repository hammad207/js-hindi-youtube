const name = "hamad amin"
const repoCount = 50
console.log(name  +  repoCount  + " value");
 
console.log(`Hello ${name} you have ${repoCount} repositories`);

const gameName = new String('hammadd')
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-6 , 4)
console.log(anotherString);
const newString1 = "   hamad    "
console.log(newString1);
console.log(newString1.trim());

const url = "www.hamadamin.com/hammad%1joya"
console.log(url.replace('%1', '-'));
console.log(url.includes('hamad')); //true
console.log(url.includes('ahmad'));//false


