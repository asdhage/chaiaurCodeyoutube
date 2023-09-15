//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`DB Connected`);
})();
//()()//syntax of ifii function 
//to prevent from global pollution we use the ifii function

( () => {
    console.log(`DB Connected two`);
})();

( (name) => {//unnamed iife
    console.log(`DB Connected two ${name}`);
})('audu')//pass the value



