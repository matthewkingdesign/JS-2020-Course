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
BMI calculations
*/

