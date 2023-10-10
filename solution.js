//1
function triplet(param) {
    let str = "";
    for (let i = 0; i < 3; i++) {
        str += param;
    }
    console.log(str);
}
triplet("Cat");

//2
function quintuplet(param) {
    let str = "";
    for (let i = 0; i < 5; i++) {
        str += param;
    }
    return str;
}
quintuplet("Cat");

//3
function multiStr(num, string) {
    let str = ""
    for (let i = 0; i < num; i++) {
        str += string
    }
    return str;
}
multiStr(4, "Hat");

//4
function largestNumInArray(arr) {
    // console.log( arr.reduce((a,b) => a > b ? a : b) );

    let result;
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) result = arr[i] > arr[i + 1] ? arr[i] : arr[i + 1];
    }
    return result;
}
largestNumInArray([1, 6, 83, 91, 0, -4, 1337, 5]);

//5
function printIfDivisibleByTen(num) {
    if (num % 10 === 0) console.log( `Even 10!` );
}
printIfDivisibleByTen (10); 

for (let i = 0; i < 125; i++) {
    printIfDivisibleByTen(i);
}


//6
const largestNum = (num1, num2, num3, num4, num5) => Math.max(num1, num2, num3, num4, num5);

//7
const isString = param => typeof param === "string";

//8
const areStrings = (param1, param2) => typeof param1 === "string" && typeof param2 === "string";
areStrings("test1", "test2");

//9
const getFirstWord = str => str.split(" ")[0];
getFirstWord("Internetting is hard");

//10
const wordRepeater = str => {

    // const strArr = str.split(" ");
    // const result = [];
    // strArr.forEach( e =>  result.push( new Array(strArr.length).fill(e).join(" ") ))  ;
    // return result.join(" ");

    // const strArr = str.split(" ");
    // const result = [];
    // for (let i = 0; i < strArr.length; i++) {
    //     for (let x = 0; x < strArr.length; x++) {
    //         result.push(strArr[i]+" ");
    //     }
    // }
    // return result.join(" ");

    const strArr = str.split(" ");
    const result = [];
    for (let i = 0; i < strArr.length; i++) {
        result.push( new Array(strArr.length).fill(strArr[i]).join(" ") );
    }
    return result.join(" ") ;
    
}
wordRepeater("I am groot");  // I I I am am am groot groot groot

//11
const firstLetter = str => str[0] ; 

//12
const firstLetters = str => str.split(" ").map( e => e[0] ).join("");

// const firstLetters = str => {
//     strArr = str.split(" ");
//     let arr = [];
//     for (let i = 0; i < strArr.length; i++) {
//         arr.push(strArr[0]);
//     }
//     console.log( arr.join(" ") );
// }

firstLetters("MongoDB Express Node React");

//13
const len = val => {
    if( typeof val === "string" ) return val.length;
    else if( Array.isArray(val) ) return val.length;
    else return null;
}

len( "test" );

//14
const explode = val => typeof val !== "string" ? null : val.split("");
explode("Cat");

//15
const foo = val => val[val.length-1] === "o" ? true : false;
foo("Potato");

//16
const bar = val => val[2] !== undefined ? "Cat"+val.slice(2) : "Cat";
bar("Potato");