// function
let ageCalculator = function(birthYear, currentYear = 2023){
    let age = currentYear - birthYear;
    return age;
}
console.log(ageCalculator(2000));

// Method 
// method is simply the function inside the object

let person = {
    ageCalculator2 : function(birthYear, currentYear = 2023){
        let age = currentYear - birthYear;
        return age;
    }
}
console.log(`current age  is ${person.ageCalculator2(2000)}`)