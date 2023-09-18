/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

const month = 3

switch (month) {
    case 1://for numbers compare
        console.log("january");
        break;
    case "feb"://for string compare
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break; //if break will not there then all code will execute except default       
    case 4:
        console.log("april");
        break;  

    default:
        console.log("defailu match");
        break;
}