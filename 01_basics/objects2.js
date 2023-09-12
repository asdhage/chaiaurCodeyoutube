//singleton

const tinderUser = new Object()//object creation

//const tinderuser = {}//object creation in another way
tinderUser.id = "123abc"//assign values into an object
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false

const regulaUser = {//declaring nested objects
    email:"some@gmail.com",
    fullName:{
        userfullname:{
            firstname:"Audu",
            lastname:"Dhage"
        }
    }
}

//console.log(regulaUser.fullName);//accessing the objects
//console.log(regulaUser.fullName.userfullname.firstname);//accessing objects inside objects

const obj1 = {1:"a",2:"b"}//declaring objectand assigning value
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2}//giving objects to one object
//const obj3 = Object.assign({},obj1,obj2)//assigning objects to one object value
const obj3 = {...obj1,...obj2}//spread method using
//console.log(obj3);

const users = [
    {
        id:1,
        email:"audu@gmail.com"
    },
    {
        id:1,
        email:"audu@gmail.com"
    },
    {
        id:1,
        email:"audu@gmail.com"
    }
]

users[1].email//accessing the values from users
console.log(tinderUser);
console.log(Object.keys(tinderUser))//accessing the values from tinder user using array key

console.log(Object.values(tinderUser));//to get values fron tinderuser object
console.log(Object.keys(tinderUser));//to get keys from tinderuser 

console.log(tinderUser.hasOwnProperty('name'));//to get the value consists or not 






