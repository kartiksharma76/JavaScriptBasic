// functions

// console.log("K");
// console.log("a");
// console.log("r");
// console.log("t");
// console.log("i");
// console.log("K");

function sayMyName (){
console.log("K");
console.log("a");
console.log("r");
console.log("t");
console.log("i");
console.log("K");
}
// sayMyName()

// function addTwoNumbers (number1 ,number2){

//    console.log( number1 + number2);
   

// }
function addTwoNumbers (number1 ,number2){
// let result =number1 +number2
// console.log("kartik");
return number1 +number2
   

}
const result = addTwoNumbers(3,5)
// console.log("result:" ,result);

function loginUserMessage (username = "sam"){
    if(!username){
console.log("please enter user name");
return

    }
    return `${username} just logged in`
}
console.log(loginUserMessage("kartik"))


