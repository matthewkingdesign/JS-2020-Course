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

// // Function Constructor, always have capitals as there name. 

// // we use this to attach the varibales to this variables execution context. 
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
/******************************************************
 Lecture 66 -  First Class Functions: Functions Returning Functions

*/
// function interviewQuestion(job){
//     if(job === 'designer') {
//         return function(name){
//             console.log(name + ', can you please explain what UX is');
//         }
//     } else if (job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
// teacherQuestion('John');
// designerQuestion('John');

// interviewQuestion('teacher')('Mark');


/******************************************************
 Lecture 67 - Immediately Invoked Function Expressions (IIFE)

*/
// this is a function decleration. so it gets a name and its own execution context
// function game (){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();
// this is an IIFE which is a trick on the paraser into thinking it is a function expression by wrapping it in parathesis 
// IN JS everything inside parentasis are expressions, not statements or declerations
// IIFE will make private data, you cannot get the data in variables stored in these functions from any other scope. 
// (function() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();
// // here we add an input and call it. 
// (function(goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

/******************************************************
 Lecture 68 - Closures
 
 - An inner function always has access to the variables and parameters of its outer function, even after the outer function has finished. 

*/

// The inner function here has access to the variable a and the parameter retirementAge even though the outer function has returned / finished.
// function retirement(retirementAge){
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementIce = retirement(65);
// var retirementGerm = retirement(67);
// retirementUS(1991);
// retirementIce(1991);
// retirementGerm(1991);
// // retirement(65)(1991);

// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
//         } else {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }
// interviewQuestion('teacher')('John');

/******************************************************
 Lecture 69 - Bind, Call and Apply
 
*/
// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         } else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         }
//     }
// };

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation('formal', 'morning');
// // we call the function and attach it to emily. emily is now the 'this' variable. So the first argument of the call method is the new this var you want.
// john.presentation.call(emily, 'friendly', 'afternoon');

// // the apply method does a similar thing but with a array as the second input/holder for the rest of the inputs.
// john.presentation.apply(emily, ['formal', 'morning']);
// // Bind allows us to store functions with preset arguments
// // The bind method allows us to store a copy of the function with a set this var a parameter inside a var, then call that var (which is a function) and pass it the second parameter.
// // This is called carrying. Creating a function based on another function with some preset parameters
// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');


// // Another cool example
// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// // this passes a copy of the isFullAge fucntion with a preset parameter of 20 
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);


/////////////////////////////
// CODING CHALLENGE



// --- Let's build a fun quiz game in the console! ---

// 1. Build a function constructor called Question to describe a question. A question should include:
// a) question itself
// b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
// c) correct answer (I would use a number for this)

// 2. Create a couple of questions using the constructor

// 3. Store them all inside an array

// 4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

// 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

// 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

// 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

// task 1 - create the constructor

// (function(){
//     function Question(question, answers, correct){
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }
    
//     //Task 4 Part 3 - create a method on the Question Objects prototype
    
//     Question.prototype.displayQuestion = function() {
//         console.log(this.question);
    
//         for (var i = 0; i < this.answers.length; i++) {
//             console.log(i + ': ' + this.answers[i]);
//         }
//     }
    
//     Question.prototype.checkAnswer = function(ans){
//         if(ans === this.correct){
//             console.log('Correct Answer!');
//         } else {
//             console.log('Naahhhh mate');
//         }
//     }
//     // Task 2 Use the constructor to create multiple questions. 
//     // We used an array for the answers and then a number for the correct answer.
//     var q1 = new Question('Is JavaScript the coolest', ['Yes', 'No'], 0);
//     var q2 = new Question('What is the course instructors name', ['Dave', 'John', 'Jonas'], 2);
//     var q3 = new Question('What does best describe coding', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    
//     // Task 3
//     // Store questions in an array
//     var questions = [q1, q2, q3];
//     // Task 4 Part 1
//     // Select a random question number between 0 and the length of the question array.
//     var n = Math.floor(Math.random() * questions.length);
    
//     // Task 4 Part 2 call the question array with the var n which is the random number.
//     // SO this line of code says, get a random questio in the array (thanks to the n var then that q1 var is actually and insatnce of the Question constructor, then call the display method on that)
//     questions[n].displayQuestion();
//     // Store the answer the user gives us in the var answer
//     var answer = parseInt(prompt('please select the correct answer')); 
//     // We then call the questions again and call checkAnswer method on that and pass the user 
//     questions[n].checkAnswer(answer);
// })();

// --- Expert level ---

// 8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

// 9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

// 10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

// 11. Display the score in the console. Use yet another method for this.

(function(){
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    //Task 4 Part 3 - create a method on the Question Objects prototype
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    // we add a second parameter to this function.
    Question.prototype.checkAnswer = function(ans, callback){

        var sc;

        if(ans === this.correct){
            console.log('Correct Answer!');
            sc = callback(true);
        } else {
            console.log('Naahhhh mate');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    Question.prototype.displayScore = function(score){
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }

    // Task 2 Use the constructor to create multiple questions. 
    // We used an array for the answers and then a number for the correct answer.
    var q1 = new Question('Is JavaScript the coolest', ['Yes', 'No'], 0);
    var q2 = new Question('What is the course instructors name', ['Dave', 'John', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
     // Task 3
    // Store questions in an array
    var questions = [q1, q2, q3];
    
    function score(){
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();


    // Task 8 - created a function with the game logi in it so we can call it over and over again
    function nextQuestion () {
        // Task 4 Part 1
        // Select a random question number between 0 and the length of the question array.
        var n = Math.floor(Math.random() * questions.length);
        // Task 4 Part 2 call the question array with the var n which is the random number.
        // SO this line of code says, get a random questio in the array (thanks to the n var then that q1 var is actually and insatnce of the Question constructor, then call the display method on that)
        questions[n].displayQuestion();
        // Store the answer the user gives us in the var answer
        var answer = prompt('please select the correct answer'); 
    
        if (answer !== 'exit'){
          
            // We then call the questions again and call checkAnswer method on that and pass the user answer, which we now convert into a number 
            // Moved parseInt down here as this is when we want a number, if the game is being played
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();

})();