// STRINGS

let firstname = "Vishes";
let lastname = "Keshari";
console.log(firstname,lastname);

// String Concatination
let fullname = firstname+ " " +lastname
console.log(fullname);

//method 2 using template literals
let newFullname = `My name is ${firstname}   ${lastname}`;
console.log(newFullname);

// Getting String Character
console.log(firstname[2]);

// String Methods ---------------------------------

console.log(firstname.toUpperCase());
console.log(lastname.toLowerCase());
console.log(firstname.indexOf("s"));


let hobbies = '   dancing coding reading   ';
console.log(hobbies);
let result = hobbies.trim();
console.log(result);
console.log(hobbies.indexOf("reading"));
console.log(result.indexOf("reading"));
console.log(result.lastIndexOf('n'));

//'includes' method
console.log(result.includes('reading'));

//'slice' method
let roc = 'helloVishesKeshari'
console.log(roc.slice(0,11)) // Excluding last one : 0-10

//'split' method
let favColors = "Black, Blue, Red, Yellow";
console.log(favColors.split(","));

//imp note: String is not Mutating