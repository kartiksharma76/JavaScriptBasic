// for of loop

// ["","",""]
// [{},{},{}]

const arr =[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeetings = "Hello World!"
for (const greet of greeetings) {
  //  console.log(`each char is ${greet}`);
    
}


// Maps => unique value

const map = new Map()
map.set('IN',"India")
map.set('USA' ,"United States of America")
map.set('FR',"France")

//console.log(map);


for (const [key,value] of map) {
  //  console.log(key,':-', value);
    
}

const myObject ={
    'Game1 ':'NFS',
    'Game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key,':-',value);
    
// }

