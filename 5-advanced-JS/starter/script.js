// Objects 
// Everything is an object, apart from primitive values.
// Primitive values are: 
// - Numbers 
// - 

/******************************************************
 Lecture 60 - Everything Is an Object: Inheritance and the Prototype
Chain

Everthing is an Object, apart from primitive values.
Primitive values are:
- Numbers
- Strings
- Booleans
- Undefined
- Null 

Objects are: 
- Arrays
- Functions
- Objects
- Dates
- Wrappers for Numbers, Strings, Booleans

Object Orientated Programming 
- Objects interacting with one another through methods and properties 
- Used to store data, structure applications into modules and keeping code clean

We created the John object and repeated the object for each instance of a person
But, we could have created a constructor to create as many instances as we want

Inheritence is when one object is based on another and has access to its properties and methods.

Javascript is a protype based language 
Inheritance works with prototypes 

Each and every object has a prototype property. This property makes inhertiance possible in JS
So the Prototype property is where we put all the methods and properties we want other objects to inherite

The constructor's prototype property is NOT the prototype of the Constructor itself, It's the prototype of ALL instances that are created through it

When a certain method or property is called, the search starts in the Object itself, and if it cannot be found, the search moves on to the objects prototype. This continues until the method is found: prototype chain.

Each and every object we create is an instance of the Object Object constructor which has lots of methods inside its prototype property
Everything inherits these methods and can use them

Object inheritance relys on the protype chain 

John Object > is a prototype of the Person Constructor which is an instance of the prototyoe of the Object constructor. 

When we try and access a property or methos JS will look for the the method or property within the objject that is trying to access it, then it will look at the objects prototype which is the prototype property of its parent. If it doesnt excist then we get null, which has no prototype and will return undefined 



*/

/******************************************************
 Lecture 61 - Creating Objects: Function Constructors

*/

// Function canstructor

// object expression
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// Function Constructor, always have capitals as there name. 

// we use this to attach the varibales to this variables execution context. 
// var Person = function(name, yearOfBirth, job){
//     // so this name is = the name we pass in the parameter when we call it
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
// // this is now accessible as it is withing the Person prototype property.
// Person.prototype.calculateAge = function(){
//     console.log(2020 - this.yearOfBirth);
// }
// Person.prototype.lastName = 'Smith';
// // So create instances of the Person object like:
// // The new operator creates a new empty object 
// // After that the constructor function is called with the arguments we specify
// // So the function is called and a new execution context is created which means that this works within that new execution context, not the global execution context. 
// var john = new Person('John', 1990, 'Teacher');
// var dave = new Person('Dave', 1960, 'Designer');
// var jane = new Person('Jane', 1948, 'Retired');

// john.calculateAge();
// dave.calculateAge();
// jane.calculateAge();

// console.log(john.lastName);
// console.log(dave.lastName);
// console.log(jane.lastName);
// console.log(john);

/******************************************************
 Lecture 62 - The Prototype Chain in the Console

 Worth going over again but you can look at a lot of stuff in the console. 
 It helps to understand inhertiance and the prototypes of different objects.

*/

/******************************************************
 Lecture 63 - Creating Objects: Object.create

*/

// Object.create

// var personProto = {
//     calculateAge: function() {
//         console.log(2020 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teaher';

// var jane = Object.create(personProto, {
//     name: {value: 'Jane'},
//     yearOfBirth: {value: 1960},
//     job: {value: 'Designer'}
// });

/******************************************************
 Lecture 64 - Primitives vs. Objects

*/
// // Primitives
// // declare a var
// var a = 23;
// // make b = a
// var b = a;
// // mutate a, this wont effect b
// a = 46;

// console.log(a);
// console.log(b);
// //Objects
// // create a new object
// var obj1 = {
//     name: 'John',
//     age: 26
// };
// // we havent created a new object here, simply referenced an object
// var obj2 = obj1;
// obj1.age = 30;
// // the age will be the same
// console.log(obj1.age);
// console.log(obj2.age);

// // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// }

// function change(a, b){
//     a = 38;
//     b.city = 'San Fran';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);
/******************************************************
 Lecture 65 - First Class Functions: Passing Functions as Arguments

*/
// Functions are instances of the Object type
// A function behaves like any other Object
// We can store functions in a variable
// We can pass a function as an argument to another function
// We can return a function from a function

// var years = [1990, 1965, 1937, 2005, 1998];
// // when we call this function we pass it the array - years, this then becomes the array used by the arr parameter. 

// // the fn parameter we pass the calculate age function, this is a call back funciton and has no parentheses as we want it to be called by the the arrRes.push method. 
// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }
// // This is our callback function (fn)
// function calculateAge(el) {
//     return 2016 - el;
// }
// // create another callback function this one checks if the age is older tha
// function isFullAge(el){
//     return el >= 18;
// }
// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81){
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
    
// }
// // Store the results of the arrayCalc function with years as the array anf calculateAge as the callback funciton 
//  var ages = arrayCalc(years, calculateAge);

//  // Here we are using the result of the first time we run arrayCalc which has given us an array and we have stored it in the ages var
//  var fullAges = arrayCalc(ages, isFullAge);


//  var heartRates = arrayCalc(ages, maxHeartRate);
//  // Log results
//  console.log(ages);
//  console.log(fullAges);
//  console.log(heartRates);



