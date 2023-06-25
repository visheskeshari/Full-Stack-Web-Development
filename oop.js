// Object Oriented Programming

// Constructor function and the "new" operator 
// we can not use 'arrow' function as constructor
// call 'constructor function using 'new' keyword

// 1. new {object} created empty initiated
// 2. 'this' = {object}
// 3. object linked to prototype
// 4. function automatically return {object}

let Car = function(color, model){
    // instance properties
    this.carColor = color;
    this.carModel = model;

    // this.login = function(){
    //     console.log("login method")
    // } //not a good practice to make another function inside function in oop
    // instead we can use Prototype
}
let instanceOfCar1 = new Car("yellow", 2022);
let instanceOfCar2 = new Car ("red", 2023)
console.log(instanceOfCar1, instanceOfCar2)
console.log(instanceOfCar2 instanceof Car)

// Prototypes 
// each object created by 'constructor' function have an access to all 'methods' present inside that 'constructor' prototype

Car.prototype.startEngine = function(){
    console.log("this is a car engine method");
}
console.log(Car.prototype)
instanceOfCar1.startEngine()
instanceOfCar2.startEngine()
console.log(instanceOfCar1.__proto__)

Car.prototype.company = "TATA"  // this is accessable to every object 
// this is known as "Prototype Inheritance"

console.log(instanceOfCar1.__proto__) // if constructor not available but its object is
// or (gives same output)
console.log(Car.prototype) // if constructor is available
// Car.prototype is prototype 'of all objects' created through the car constructor

let arr = [2,3,4,5,6] // [] is same as 'new Array([]);
console.log(arr.__proto__.__proto__); // chaining of prototype
console.log(Object.prototype) 

// we can every thing in different way using Class
// ES6 Classes (they still implement prototypal inheritance behind the sccene)
// It can use same methods, it is just easy to read and write

// class declaration 
class Bike {
    constructor(color, model){
        this.bikeColor = color;
        this.bikeModel = model;
    }
    // we can now use function inside class
    // also we dont have to write 'function' while declaring the function
    startBike(){
        console.log("this bike is started...")
    }
}
let hero = new Bike("black", 2020)
console.log(hero.__proto__);
hero.startBike;

// important points
// Classes are not hoisted
// Classes are also first class citizens (Pass an argument or return)
// Classes are executed in Strict mode

// ******************************************************************************************************************************************

// setters and getters method

// getter and setter allow you to define Object Accessors (Computed properties)
//we can also use them in class

class Airplane{
    constructor(color, company){
        this.airplaneColor = color;
        this.airplaneCompany = company;
    }
    startPlane(){
        console.log("This is start plane method")
    }
    
    get _startPlane(){
        console.log("This is start plane method using Get")
    }

    get description (){
        return `The color of plane is ${this.airplaneColor} and the company is ${this.airplaneCompany
        }`
    }

    set changeColor(color){
        console.log(this.color = color)
    }
}

let plane = new Airplane ("White", "Air India");
let plane2 = new Airplane("Yellow", "Indigo")
plane.startPlane() // accessing as a function
plane._startPlane; // accessing as a property

plane.changeColor = "Grey"; // set as property
console.log(plane)
console.log(plane.description)
console.log(plane2)
console.log(plane2.description)

// Static Method
// they does not get inherited on any object or instance of object
// they only combine with class
Airplane.breakMethod = function(){
        console.log("This is a static method on Airplane class")
}
Airplane.breakMethod();


// INHERITANCE 
// parent-child class

class Jet extends Airplane{
    // add some new properties and 'method' as well
    constructor(color, company, engineCapacity){
        super(color, company) // doesn't need to initialize since it can be traced to the parent class
        this.engineCapacity = engineCapacity // have to initialize because it's a new property
    }
    jetMethod(){
        console.log("this is a new method of Jet itself")
    }
}
let jet1 = new Jet('black', "Toret", "125CC")

console.log(jet1)


// Chaining Methods

class BankAccount{
    constructor(owner, pin){
        this.owner = owner;
        this.pin = pin;
        this.movements = [];
    }

    getMovements(){
        return this.movements;
    }

    deposit(val){
        this.movements.push(val)
        return this;
    }

    withdrawal(val){
        this.deposit(-val)
        return this;
    }
}

let account = new BankAccount("Zack", 6540);

account.deposit(40);
account.withdrawal(56);

console.log(account.getMovements())
console.log(account)

// or we can chain the methods
account.deposit(45).withdrawal(25).deposit(100);
// but this will not work, because the return type of every method is different to one another and it is baisc commmon sense not to chain directly all
// so, in order to chain them, we have to first put a return statement in every method
// return baisically put refrence back to the object