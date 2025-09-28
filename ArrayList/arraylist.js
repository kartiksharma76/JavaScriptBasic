let arrayList =[];

// add element
arrayList.push(10);
arrayList.push(20);
arrayList.push(30);

console.log("First element:",arrayList[0]);

arrayList.splice(1,1);

console.log("all elements:");
for (let i = 0; i < arrayList.length; i++) {
    console.log(arrayList[i]);
    
}
console.log("Size:",arrayList.length);