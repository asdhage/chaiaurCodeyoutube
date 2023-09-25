/* const coding = ["js","python","java","cpp"]

const values = coding.forEach( (item) =>{
    //console.log(item);
    return item
})

console.log(values); */


const myNum = [1,2,3,4,5,6,7]

//const newNum = myNum.filter((num)=>num > 4)//it will filter the elemenets greater than 4

/* const newNum = myNum.filter((num)=> {
    return num >4//to return from scope of function we have to write return word
}) */

/* const newNums = []
myNum.forEach( (num)=> {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums); */


//***--MAP function */

/* const myNums = [1,2,3,4,5,6,7,8,9]
//const newNums = myNums.map( (num) => num +10)//it will add 10 to all values in array
const newNums = myNums.map( (num) => {return num +10})//with open scopre
console.log(newNums); */

/* const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNum//function chaining (use of multiple funcstion in one mths)
                .map( (num) => num*10)
                .map( (num) => num+1)
                .filter( (num) => num >=40)

console.log(newNums); */

//***  Reduce methos */

const num = [1,2,3]

/* const total = num.reduce(function (acc,curval){//reduce function decaration
    console.log(`acc: ${acc} and curval: ${curval}`);
    return acc+curval
},0)//value for accumulator */

const total = num.reduce( (acc,curval) => acc+curval,0)//use of array method

console.log(total);


