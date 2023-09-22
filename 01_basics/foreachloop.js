const coding = ["ja","ruby","java","python","cpp"]

/* coding.forEach( function (item) {//normal function
    console.log(item);
}) */


/* coding.forEach( (value) => {//using array function
    console.log(value);
}) */

/* function printMe(item){
    console.log(item);
}
coding.forEach(printMe)//using normal function  */
const mycoding =[
    {
        languagename : "javascript",
        languageFileName: "js"
    },
    {
        languagename : "java",
        languageFileName: "java"
    },
    {
        languagename : "python",
        languageFileName: "py"
    }
]

mycoding.forEach((item) =>{
    console.log(item.languagename);
})










