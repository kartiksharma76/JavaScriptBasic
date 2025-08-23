// singleton-use any constructor(always)


// object literals
const mySym = Symbol("keys1")// no symbol


const JsUser ={
    name : "kartik",
    "full name" : "kartikey sharma",
    [mySym]: "mykey1",// use symbol
    age : 18,
    Location : "Singrauli",
    email :"kartik@google.com",
    isLoggedIn : false,
    lastLoginDays: ["monday" ,"saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email ="kartik@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email ="kartik@microshoft.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

