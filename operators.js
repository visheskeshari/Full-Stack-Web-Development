// OPERATORS

// numbers 
let score = 50;

console.log(score, typeof score);

// Mathematical operators +,*,-,%,/

// let result = 50/3;
// let result = 50*3;
let result = score*4+(3/5)%4-100+45;
// Using priorities and precidence
// 1.  () brackets
// 2. ** Power Operator
// 3.  *, /, % (left to right)
// 4.  +, -  (left to right)
console.log(result);

//concatination of numbers
console.log("the number is = " + result) //dynamic typecasting of number to string 

//loose equality (==) vs strict equality (===) operators

let num = 90;
let str = "90";
console.log(num == str); // != for negation
console.log(num === str); // !== for negation


// Logical operators : AND &&, OR ||, not !-----------------------------------------------------------------------

//priorities : 
// not !
// AND && , OR ||  (left to right)
//example 
let check = true && true || false && !false
// -> check = true && true || false && true
// -> check = true || false && true
// -> check = true && true
// -> check = true
console.log(check)


// terniary operator  ? :

let age = 17;
let weight = 78;
// normal if statement
if (age<18){
    if(weight<60){
        console.log("Qualify")
    } else{
        console.log("Weight Issue")
    }
} else {
    console.log("Age Issue")
}

// using terniary operator
let qualification = age < 18 ? (weight < 60 ? "qualify" : "Weight Issue") : "Age Issue" ; 
console.log(qualification);