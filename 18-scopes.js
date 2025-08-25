// let a =10
// const b= 20
// var c= 30

//var c =300
let a=300
if (true) {
let a =10
const b= 20
// console.log("INNER :" ,a);

}// block scope
// for (let i=0 ;i<Array.length;i++){
//     const element= Array[i]

// }

//console.log(a);
//console.log(b);not defined
//console.log();// impact

function one(){
    const username ="kartik"

    function two (){
        const website ="youtube"
        console.log(username);
        
    }
    //console.log(website);
    // two()
    
}
one()

if(true) {
    const username ="kartik"
    if(username ==="kartik"){
const website ="youtube"
//console.log(username + website);
    }
   // console.log(website);
    
}
//console.log(username);
//***********************************Intersting ************************** 
console.log(addOne(5))
function addOne(num){
return num +1// this can not produced error
}



addTwo(5)
const addTwo =function(num){
    return num + 2// not defin produce error


}
