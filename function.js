// FUNCTIONS

function nameOfFunction (){
    console.log("using traditional way");
}
nameOfFunction();

// function expression
let fun = function(){
    console.log("using Function Expression")
}
fun();

// passing arguments and parameters

let invitation = function(name, time='4 pm'){
    console.log(`Hello !! ${name}, reach the stadium at ${time}`)
}
invitation("Vishes", "morning");
invitation("Shrishti");

// returning values

let ageCalculator = function(birthYear, currentYear = 2023){
    let age = currentYear - birthYear;
    return age;
}
console.log(ageCalculator(2000));

// Arrow Function ------------------------------------------------------------
// no need to use function keyword
// no need to use Paranthesis in case o fsingle parameter
// no need to use curly braces in case of  single line of  code
// no need to use return statement if single line of code

let message = name => `welcome ${name} in this program`
console.log(message('coders'));

// Passing function as an argument (Higher order function example) --------------------------------

let upperCase = function(shabd){
    return shabd.toUpperCase();
}

let lowerCase = word => word.toLowerCase();

let transformers = function(str,fun){
    return fun(str);
}

console.log(transformers("HELLO", lowerCase))
console.log(transformers("hello", upperCase))

// Function returning another function (Higher order function example) ----------------------------
let compliment = function (msg){
    return function(name){
        console.log(`${msg} ${name}`)
    }
}

// 1st method
// console.log(compliment("You are a good coder")("Vishes"))

// 2nd method 
let complimented = compliment("You are a good coder");
complimented("Vishes")

// Immediately Invoked Function Expression (IIFE)
// executed only once

// (function(person){
//     console.log('this is IIFE', person)
// }("Vishes"))  // puttting this nameless function in brackets make this an expression


// setTimeOut and setInterval functions

function greet(naam){
    console.log(`Welcome ${naam} in this session`)
}
setTimeout(greet,5000,"vishes")
// setInterval(greet, 4000, "Shri")