const accountId =144553
let accountEmail="kartik@gmail.com"
var accountPassword= "12345"
accountCity="singrauli"// not use this condition but possibilities are variable decleared without any data type
let accountState;// undefined

// accountId=2// not allowed



accountEmail="k@gmail.com"
accountPassword="21212121"
accountCity="jaipur"


console.log(accountId);

/*
Prefer not to use var
because of issue in block and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
