const arr = [0,1,2,3,4,5]//declare array
const myHeros = ["Ram","ShriKRishn","Hanuman"]//declaring string array
//console.log(myHeros)

const myArr2 = new Array(1,2,3,4)//declare array using object method
//console.log(myArr2[1])//to access the elements using index value

//Array Mehtods//

 //arr.push(6)//add element in array
 //console.log(arr)
 //arr.pop()//remove element from array
// console.log(arr)
//arr.unshift(9)//add the element 9 into array at first position
//console.log(arr)
//arr.shift()//remove the first element from array
//console.log(arr)

//console.log(arr.includes(2));//boolean tyepe data printed

/* slice and splice

console.log("A ",arr);

const myn1 = arr.slice(1,3)//print the elemets in this range with excluding last value
console.log(myn1);
console.log("B ",arr)
const myn2 = arr.splice(1,3)//this removes the elemnts in range froma aaray
console.log(arr);
console.log("C ",arr) */


//Strings combine

const string = ["Hnuman","Laxman","Bharat"]
const string2 = ["ShriRam","Krishn","Mahadev"]

//string.push(string2)//it will combine both the strings but keep as it is [ 'Hnuman', 'Laxman', 'Bharat', [ 'ShriRam', 'Krishn', 'Mahadev' ] ]
//console.log(string)
//console.log(string[3][1]);//to access the elemenets after push operation

//const string3 = string.concat(string2)
//console.log(string3);

//const string4  =[...string,...string2]//to combine two string it is spread method
//console.log(string4);

/* const array1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]//spreaded array
console.log(array1);
const array2 = array1.flat(Infinity)//it will give all values in array format 
console.log(array2); */

//console.log(Array.isArray("Audumbar"));//to let know if it is array or not
//console.log(Array.from("Audumbar"));//it will convert it in to array and give output

//console.log(Array.from({name:"hitesh"}));

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score,score1,score2));//it will combine all elements into array

