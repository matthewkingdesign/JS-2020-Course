/**************************************
 36. How Our Code Is Executed: JavaScript Parsers and
Engines

code is hosted on a:
Web browser 
Node JS server
Some Applications


Our Code => ran on a JS Engine

Our Code => Parses checks the sytax (Abstract syntax tree) => machine code => Code runs
 */ 

/**************************************
37. Execution Contexts and the Execution Stack

Execution contexts are like objects where parts of our code are ran.  
Code that is not inside any function is associated with with the global context 
in the browser that is the window object

Global contexts will run everything outside oif a function. 
The active context will change when it runs the code inside of a function. 
This stops being global and turns into the functions execution context.
Thus, creating a stack.  

when the function is done its coresponding execution stack it is removed and you return down the stacks removing until you reach the global stack

* /

/**************************************
38. Execution Contexts in Detail: Creation and Execution
Phases and Hoisting

1. Creation phase
    - Creation of the VO
    - Creation of the scope chain
    - Determine the value of 'this'

2. Execution phase
    - The code in the function that generated the current execution context is ran line by line 

Execution context object 
- Variable Object 
    - The argument object is created, containing all the arguments that were passed into the function 
    - Code is scanned for function declarations: for each function a property is created in the Variable Object, pointing to the function
        - so all the functions are stored inside the variable object before the code is executed
    - Code is scanned for variable declarations: for each variable a property is created in the Variable Object and set to undefined
    - These are HOISTED which means they are avaliable before thee execution phase actually starts

    - functions are defined before the execution starts
    - vars are undefined, will only be defined in the execution phase



- Scope Chain 


- "This" Variable


* /

/**************************************
39. Hoisting in Practice 

*/


///////////////////////////////////////
// Lecture: Hoisting

// function decleration

// This is Hoisting 
// We can call the function before declaring it as the function will be avaliable in the creation phase before the execution phase.
// In the creation phase of the execution context (global context in this case) the function decleration calculateAge is stored in the variable object.
// so it is avaliable before the executiuon phase.

// calculateAge(1954);
// // declare function
// function calculateAge(year){
//     console.log(2020 - year);
// }
// // We can call the function after declaring it 
// // calculateAge(1991);


// // function expression
// // call the function above does not work as hoisting only applies to function declerations
// // retirement(1991);
// var retirement = function(year){
//     console.log(65 - (2020 - year));
// }
// // call the function below and it works
// retirement(1991);

// // variables and Hoisting
// // log the age var before it is declared and it will be undefined 

// // this console log will print undefined as within the global execution context object
// console.log(age);
// // now the var is stored in the variable object in the global execution context object
// var age = 23;
// // console.log(age);

// // this variabel age is seperate as it is withing its own variable object within the function foo which gets its own execution context object
// function foo(){
//     var age = 65;
//     // this console log will print 65
//     console.log(age);
// }
// foo();
// // this console log will print 23 as it is being called from the global execution context object
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping

// Scoping answers the question 'where can we access variables from?'
// Each new function creates a scope: the space / environment in which the vars are accessible 
// Only functions create new scopes. NOT if blocks, for blocks...like in other languages 
// JS has Lexical Scoping which means that a funvtion within a function has access to the outers (parents) functions variables


// First scoping example


// var a = 'Hello!'; // global scope - a is accessible to all functions
// first();

// function first() { // first scope b is accesoble within this, but not the global
//     var b = 'Hi!';
//     second();

//     function second() { // second scope. c is declared here and a is accesible as it is global, b is withing the parent so lexically accesible 
//         var c = 'Hey!';
//         console.log(a + b + c); 
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();
    

//     function second() {
//         var c = 'Hey!';
//         third()
//         // console.log(a);
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a); // only a and d are avaliable here as theya re within the gloabal scope chain
// }




///////////////////////////////////////
// Lecture: The this keyword
// Each execution context gets a this variable and is stored in the execution context object
// In a regular function the this keyword points to the global object (window object in the browser)
// Method call the this var points to the object that is calling the method
// the this keyword is not assigned a value until a function where it is defined is actually called

//log this for the global execution context
// console.log(this); // this wil log the window object

// function calculateAge(year){
//     console.log(2016 - year);
//     console.log(this); // this wil log the window object as it is within a regular function call not an object method
// }

// calculateAge(1990);

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this); // this is logged as the object as it is within a method 
        console.log(this.yearOfBirth); // this will log the year of birth var within th john object
        console.log(2016 - this.yearOfBirth); // calculates the age

        // although this function is written inside the john Object it is not a method. So it is a 
        // regular function expression thus renders the window object.

        function innerFunction () { 
            console.log(this);
        }
        innerFunction();
    }
};
john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};
// here we are treating the calcualteAgfe mike as a variable, which is johns calculate Age method. Declaring the var as a function
mike.calculateAge = john.calculateAge;
// now we call it with ()
// this is nopw associated with Mikes object as that is when the this var gets its value. When the object is called. So it is dynamic.
mike.calculateAge();



