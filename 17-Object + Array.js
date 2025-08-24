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
// console.log(loginUserMessage("kartik"))
function calculateCarPrice (val1,val2,...num1){// rest operator...
 return num1
}
// console.log(calculateCarPrice(200,400,500,20000));
const user = {
    username: "kartik",
    prices : 199
}
function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//  handleObject(user)
handleObject({
    username : "sam",
    price : 399
})

const mynewArray = [200,400,1000,6000]

function returnsecondValue(getArray){
 return getArray[1]
}
// console.log(returnsecondValue(mynewArray));
console.log(returnsecondValue([200,400,500,1000]));

