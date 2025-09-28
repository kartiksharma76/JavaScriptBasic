for( var i = 1; i <= 10; i++){
    printTableOf (i);  
}
function printTableOf(num){
    for(var i = 1; i <= 10; i++){
        var row = num + " * " + i + " = " + (num * i);
        console.log(row);
        //
      //  console.log(num * i);
    }   
}