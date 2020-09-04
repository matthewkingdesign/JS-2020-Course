/**********
lesson 6
intro first console log - i jumped ahead and made a var here as well. 
*/
// //set a variable using var
// var firstVar = 'hello world';
// //logged variable to the console
// console.log(firstVar);

/***********
lesson 8 - intorduction to primitive data types and vars
string
number
boolean
undefined

also looked into variable naming rules
*/ 


// // string primitive data type
// var firstName = 'John';
// var lastName = 'Smith';
// // number primitive data type
// var age = 28;
// // boolean primitive data type
// var fullAge = true;
// var underAge = false;
// // undefined primitive data type
// var job;
// // define above job var
// job = 'Teacher';
// // the only way you can have a nu,ber as a variable name is with a $ or a _ before it. no other symbol will work. You cannot use JS keywords either
// var $420 = 420;
// // add more than one var with commas between them
// console.log(firstName, lastName, age, job);


/***********
lesson 9 - Variable mutation and type Coercion

*/

var firstName = 'John';
var age = 28;
// this console log is an example of type coercion. JS renders this in the console as a string.
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;
// more type coercion. Here booleans are being coreced into strings
console.log(firstName + ' is a ' + age + ' ' + job + '. Is he married? ' + isMarried);

// Variable mutation
// change the variables declared above
age = 'Twenty eight';
job = 'driver';
// alert to browser rather tha log to console
alert(firstName + ' is a ' + age + ' ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);