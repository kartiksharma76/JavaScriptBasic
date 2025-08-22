const name= "kartik"
const repocount=10

//console.log(name + repocount + " value");
console.log(`Hello my Name is ${name} and my repo count is ${repocount}`);// use this syntex

const gameName = new String('kartik-kc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherstring =gameName.slice(-5,4) //allow negative value
console.log(anotherstring);

const newStringOne ="  kartik   "
console.log(newStringOne);
console.log(newStringOne.trim());// trim remove extra spaces

const url="https://kartik.com/kartik%20sharma"

console.log(url.replace('%20', '-'));

console.log(url.includes('shah'));

console.log(gameName.split('-'));



