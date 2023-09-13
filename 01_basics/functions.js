/* function myName(){//declaring the function 
    console.log("au");
    console.log("du");
    console.log("mbar");
}
myName()//calling function for ptint */

//function addTwoNumbers(num1,num2){
   // console.log(num1+num2)
//}
/* addTwoNumbers(2,3)//add two numbers
addTwoNumbers(2,"3")//it wil give value 23 as it consider it as string
addTwoNumbers(2,"a")//it will print 2a
addTwoNumbers(2,null)//it will give 2 only */
//const result = addTwoNumbers(3,5)//does not store any value in result
//console.log("result:",result);//print undefined as it does not store value in result

/* function addNumbers(num1,num2) {//function with return type
    //let result = num1+num2
    //return result
    return num1+num2
    //console.log("Digambar");//it will not print as per property after return function will be terminated
}
const result1 = addNumbers(3,4)
console.log("result:",result1); */

function loginUserMessage(username){
    return `${username} just logged in`
}
loginUserMessage("Audumbar")//it will not print any output as it will just call th method
console.log(loginUserMessage("Audumbar"));//it will print the output
loginUserMessage("")//if value not provided then it will give undefined





