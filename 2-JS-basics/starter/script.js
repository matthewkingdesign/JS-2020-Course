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

// var firstName = 'John';
// var age = 28;
// // this console log is an example of type coercion. JS renders this in the console as a string.
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'Teacher';
// isMarried = false;
// // more type coercion. Here booleans are being coreced into strings
// console.log(firstName + ' is a ' + age + ' ' + job + '. Is he married? ' + isMarried);

// // Variable mutation
// // change the variables declared above
// age = 'Twenty eight';
// job = 'driver';
// // alert to browser rather tha log to console
// alert(firstName + ' is a ' + age + ' ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/***********
lesson 10 - Basic Operators

*/

//little extra thing to grab age from user
// var yourAge = prompt('how old are you?');
// var yourYear = currentYear - yourAge;
// console.log('You were born in ' + yourYear);

// declare variables then add their values after
// var currentYear, ageJohn, ageMark;
// currentYear = 2020;
// ageJohn = 28;
// ageMark = 33;
// // math operator to calculate the year each person was born
// var yearMark = currentYear - ageMark;
// var yearJohn = currentYear - ageJohn;
// console.log('Mark is ' + ageMark + ' and was born in ' + yearMark);
// console.log('John is ' + ageJohn + ' and was born in ' + yearJohn);
// // simple math operators
// console.log(currentYear * 2);
// console.log(currentYear + 2);
// console.log(currentYear / 10);

// // Logical operators
// // greater than > renders as false
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);
// // less than < renders as true
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// //typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageMark);
// console.log(typeof 'hello typeof');
// var x;
// console.log(typeof x);

/***********
lesson 11 - Operator precedence

*/

// var currentYear, yearJohn, fullAge;
// currentYear = 2020;
// yearJohn = 1989;
// fullAge = 18;

// Multiple operators
// the - operator has a greater precednce than the >= operator so it will run first

// var isFullAge = currentYear - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // Grouping
// var ageJohn = currentYear - yearJohn;
// var ageMark = 35;
// // put the math first math operator in parentheses
// var average = (ageJohn + ageMark) / 2 ;
// console.log(average);

// // Multiple assignments
// var x, y;
// // Here x runs through its math in the correct order according to operator precedence
// x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x);
// // The Associativity of the assignment operator ' = 'is right to left so the math is done, assigned to y then assinged to x. 
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More Operators

// // x = x * 2;
// // Above is the same as below but uses another assigment operator
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x -= 10;
// console.log(x);
// x /= 2;
// console.log(x);

// // x = x + 1
// // // is the same as 
// // x += 1;
// // // which as it only goes up one is the same as below (you can do this with -- to take away one as well)
// x++;
// console.log(x);

/***********
lesson 12 - First coding challenge
BMI calculations
*/
//declare your variable
// var markHeight, markMass, johnHeight, johnMass, markBmi, JohnBmi, biggerBmi;
// // assign variables
// markHeight = 2;
// markMass = 90;
// johnHeight = 2.2;
// johnMass = 99;
// // work out BMI with MASS / height squared
// markBmi = markMass / (markHeight * markHeight);
// console.log(markBmi);
// JohnBmi = johnMass / (johnHeight * johnHeight);
// console.log(JohnBmi);
// //Boolean values for who has the bigger BMI
// biggerBmi = markBmi >= JohnBmi;
// console.log('Is Mark\'s BMI bigger than John\'s? ' + biggerBmi);

/***********
lesson 13 - First coding challenge solution I got it right

*/

/***********
lesson 14 - If / Else statements

*/

// // declaring variables
// var firstName, civilStatus;
// firstName = 'John';
// civilStatus = 'single';
// // add a logical expression - returns a boolean value
// if (civilStatus === 'married'){
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' is single');
// }

// var isMarried = true;
// // here the var isMarried is already true so there is no need to add another boolean below
// if (isMarried){
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' is single');
// }

// // code from previous coding challenge (lesson 12)
// //declare your variable
// var markHeight, markMass, johnHeight, johnMass, markBmi, JohnBmi, biggerBmi;
// // assign variables
// markHeight = 2;
// markMass = 90;
// johnHeight = 2.2;
// johnMass = 99;
// // work out BMI with MASS / height squared
// markBmi = markMass / (markHeight * markHeight);
// JohnBmi = johnMass / (johnHeight * johnHeight);

// // made the above challenge work with a conditional logic piece
// if (markBmi > JohnBmi){
//     console.log('Mark\'s BMI is higher than John\'s');
// } else {
//     console.log('John\'s BMI is higher than John\'s');
// }

/***********
lesson 15 - Boolean logic

*/

// var firstName, age;
// firstName = 'John';
// age = 16;
// // multiple else if statements with AND operators. SEE EVERNOTE FOR MORE on this. 

// if (age < 13){ // simple less than operator
//     console.log(firstName + ' is a boy');
// } else if (age >= 13 && age < 20) { // checks if BOTH conditions are TRUE with AND operator 
//     console.log(firstName + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man');
// } else {
//     console.log(firstName + ' is a man');
// }

/***********
lesson 16 - The Ternary Operator and Switch Statements

*/

// var firstName, age;
// firstName = 'John';
// age = 16;

// // Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks a beer') : console.log(firstName + ' drinks a juice');

// // assigning a variable based off of some logic
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(firstName + ' can drink ' + drink);

// // This is the same thing as above. 
// // if (age >= 18){
// //     var drink = 'beer';
// // } else {
// //     var drink = 'juice';
// // }

// // Switch Statements
// var job = 'instructor';
// switch (job){
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an Uber.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs nice websites.');
//         break;
//     default:
//         console.log(firstName + ' is fun employed.');
// }

// // code from lesson 15 rearranged as a switch statement rather than a if / else
// // we compare each statement to true. what value in the var equates to true. does the logical expression equate to true based off of the value of age. 

// age = 10;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man');
// }

/***********
lesson 17 - Truthy and Falsy Values and Equality Operators

*/
// falsy values will be converted to flase in a boolean condition
// falsy values are: undefined, null, empty stings '', 0, not a number NaN 

// truthy values will be converted to true in a boolean condition
// truthy values: NOT falsy values

// var height;
// height = 0; // this is a falsy value so we need to use a OR operator to avoid the value being rendered as false
// if (height || height === 0){
//     console.log('the variable has been defined');
// } else {
//     console.log('the variable has NOT been defined');
// }

// // Equality operators
// // the height is defined as a number, but the condition compares the number to a string, with the non strict == equality operator this works. 
// height = 23;
// if (height == '23'){
//     console.log('the not strict equality operator == does type coercion!');
// }

/***********
lesson 18 - Challenge 2
Basketball 

*/
var johnGame1, johnGame2, johnGame3, johnAverageScore, mikeGame1, mikeGame2, mikeGame3, mikeAverageScore, maryGame1, maryGame2, maryGame3, maryAverageScore;
// COULD HAVE DONE IT LIKE THIS
// var johnScore = (89 + 120 + 23) / 3
johnGame1 = 89;
johnGame2 = 120;
johnGame3 = 23;

// COULD HAVE DONE IT LIKE THIS
// var mikeScore = (116 + 94 + 123) / 3
mikeGame1 = 116;
mikeGame2 = 94;
mikeGame3 = 123;

// COULD HAVE DONE IT LIKE THIS
// var maryScore = (97 + 134 + 105) / 3
maryGame1 = 97;
maryGame2 = 134;
maryGame3 = 105;

// johnAverageScore = (johnGame1 + johnGame2 + johnGame3) / 3;
// mikeAverageScore = (mikeGame1 + mikeGame2 + mikeGame3) / 3;
// maryAverageScore = (maryGame1 + maryGame2 + maryGame3) / 3;
johnAverageScore = 9;
mikeAverageScore = 9;
maryAverageScore = 8;

if (johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore){
    console.log('John wins with an average score of ' + johnAverageScore);
} else if (maryAverageScore > mikeAverageScore && maryAverageScore > johnAverageScore){
    console.log('Mary wins with an average score of ' + maryAverageScore);
} else if (mikeAverageScore > maryAverageScore && mikeAverageScore > johnAverageScore){
    console.log('Mike wins with an average score of ' + mikeAverageScore);
} else if (johnAverageScore === mikeAverageScore && johnAverageScore === maryAverageScore) {
    console.log('it was a draw mike\'s average score was ' + mikeAverageScore + ' and john\'s average score was ' + johnAverageScore + ' and mary\'s average score was ' + maryAverageScore);
} else {
    console.log('something else happend');
}

/***********
lesson 19 - Challenge 2 - Solution
Basketball 

*/
// // COULD HAVE DONE IT LIKE THIS
// var maryScore = (97 + 134 + 105) / 3;
// var mikeScore = (116 + 94 + 123) / 3;
// var johnScore = (89 + 120 + 23) / 3;
// console.log(mikeScore, johnScore, maryScore);

// if (johnScore > mikeScore && johnScore > maryScore) {
//     console.log('John wins');
// } else if (mikeScore > johnScore && mikeScore > maryScore) {
//     console.log('Mike wins');
// } else if (maryScore > johnScore && maryScore > mikeScore) {
//     console.log('Mary wins');
// } else {
//     console.log('there was a draw');
// }

// // Below compares just mike and John
// // if (mikeScore > johnScore) {
// //     console.log('Mike wins');
// // } else if (johnScore > mikeScore) {
// //     console.log('John wins') 
// // } else {
// //     console.log('it was a draw');
// // }

/***********
lesson 20 - Functions

*/