/* 1.Primitive data types
7 types of primitive data types are there
String,number,boolean,null,undefined,symbol,BigInt,
*/

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)
const bigNumber = 1234567891211n

/*
2.Reference type data/Non-primitive data types
    Array,Objects,functions
*/

const heros = ["ShriRam","Hanuman","Shambho"]
let myObj = {
    name :"hitesh",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber)