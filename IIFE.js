// Immediately Invoked Function Expression(IIFE)


(function chai(){
    // named IIFI
    console.log(`DB connected`);
    
})();
// SOME TIME GLOBAL SCOPE KE POLLUTION SE PROBLEM HOTI HAI KAI BAR TO US 
// GLOBAL SCOPE KE VARIABLE SE JO BHI HAMARA DECLEAATION  HAI USKE POLLUTION KO HATANE KE LIYA  (IIFI) use karte hai

(  (name) =>{// unnamed IFFI
    console.log(`DB CONNECTED TWO ${name}`);
    
 } )('kartik')
