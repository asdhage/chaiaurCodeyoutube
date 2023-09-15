const user = {
    username : "hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);//this referes to cuttenr contest
        console.log(this);
    }
}

//user.welcomeMessage()//it will print the message with username hitesh
//user.username="sam"//change the user name
//user.welcomeMessage()//it will print the message with username sam
//console.log(this);//empty paranthesis

/* function chai(){
    let username = "hitesh"
    console.log(this.username);//undefined will be printed on log
}
chai() */
 
/* const chai = () =>{//arrow function
    let username = "hitesh"
    console.log(this);
}
chai()//it will return undefined */

/* const addTwo = (num1,num2) =>{//basic arrow function method
    return num1+num2
}
console.log(addTwo(3,4)); */

/* const addTwo = (num1,num2) => num1+num2//implicit return method
console.log(addTwo(3,4)); */

/* const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(3,4)); */

const addTwo = (num1,num2) => ({username:"Audu"})
console.log(addTwo(3,4));
