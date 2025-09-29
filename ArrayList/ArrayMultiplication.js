function multiplication() {

    let arr1 =  [1, 2, 3, 4];
    let arr2 =  [5, 6, 7, 8];

    if (arr1.length!=arr2.length) {
        console.log("Arrays must have the same length!");
        return;
        
        
    }
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] * arr2[i]);

        
    }
    console.log("Result:",result);
    

    
}
multiplication();