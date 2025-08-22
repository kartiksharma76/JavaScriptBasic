//************************************** 
// Stack(primitive) ,Heap(Non-primitive) Memory
let myYoutubeName="kartik.com"
let anotherName=myYoutubeName
anotherName="chai or code"

console.log(myYoutubeName);
console.log(anotherName);

let userOne={
    email: "usergoogle.com",
    upi: "user@ybl"
}

let userTwo=userOne
// acces to object
userTwo.email="kartik@google.com"
console.log(userOne.email);
console.log(userTwo.email);

