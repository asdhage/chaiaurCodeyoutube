let myDate = new Date()
/* console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString()) */

//let myCreatedDate  =new Date(2023,0,23)//to intialize your own date
//let myCreatedDate  =new Date(2023,0,23,5,3)//to intialize time and date
let myCreatedDate = new Date("01-14-2023") //date in mm//dd//yy
//console.log(myCreatedDate.toLocaleString())

let myTimeSTamp = Date.now();
//console.log(myTimeSTamp);
//console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));//to get time into seconds






