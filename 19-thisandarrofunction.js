const user ={
    username: "kartik",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);// talk about current context
        
    }

}

// user.welcomeMessage()//same context
// user.username="anshu"// context change
// user.welcomeMessage()
//  console.log(this);


// function chai (){
//     let username ="kartik"
//     console.log(this.username);
    
// }
// chai()

// const chai = function () {
//     let username ="kartik"
//     console.log(this.username);
// }

const chai =  () => {
    let username ="kartik"
    console.log(this);
}


//chai()

// const  addTwo =(num1,num2) => {
//     return num1 +num2// explict
// } 
// const  addTwo =(num1,num2) =>   num1 +num2
// const  addTwo =(num1,num2) =>   ( num1 +num2 )// implict
//const  addTwo =(num1,num2) => {username: "kartik"}// can not return object
const  addTwo =(num1,num2) => ({username: "kartik"})// can return objct give ()



console.log(addTwo(3,4))

// const myArray =[2,5,3,7,8]

// myArray.forEach(()=>{})