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
// var johnGame1, johnGame2, johnGame3, johnAverageScore, mikeGame1, mikeGame2, mikeGame3, mikeAverageScore, maryGame1, maryGame2, maryGame3, maryAverageScore;
// // COULD HAVE DONE IT LIKE THIS
// // var johnScore = (89 + 120 + 23) / 3
// johnGame1 = 89;
// johnGame2 = 120;
// johnGame3 = 23;

// // COULD HAVE DONE IT LIKE THIS
// // var mikeScore = (116 + 94 + 123) / 3
// mikeGame1 = 116;
// mikeGame2 = 94;
// mikeGame3 = 123;

// // COULD HAVE DONE IT LIKE THIS
// // var maryScore = (97 + 134 + 105) / 3
// maryGame1 = 97;
// maryGame2 = 134;
// maryGame3 = 105;

// // johnAverageScore = (johnGame1 + johnGame2 + johnGame3) / 3;
// // mikeAverageScore = (mikeGame1 + mikeGame2 + mikeGame3) / 3;
// // maryAverageScore = (maryGame1 + maryGame2 + maryGame3) / 3;
// johnAverageScore = 9;
// mikeAverageScore = 9;
// maryAverageScore = 8;

// if (johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore){
//     console.log('John wins with an average score of ' + johnAverageScore);
// } else if (maryAverageScore > mikeAverageScore && maryAverageScore > johnAverageScore){
//     console.log('Mary wins with an average score of ' + maryAverageScore);
// } else if (mikeAverageScore > maryAverageScore && mikeAverageScore > johnAverageScore){
//     console.log('Mike wins with an average score of ' + mikeAverageScore);
// } else if (johnAverageScore === mikeAverageScore && johnAverageScore === maryAverageScore) {
//     console.log('it was a draw mike\'s average score was ' + mikeAverageScore + ' and john\'s average score was ' + johnAverageScore + ' and mary\'s average score was ' + maryAverageScore);
// } else {
//     console.log('something else happend');
//}

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
// simple function calculating age
// function calculateAge(birthyear){
//     // returns the age
//     return 2020 - birthyear;
// }
// // stores returned value based on parameter after calling the function. Or when you call the function you pass data to it
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageMary = calculateAge(1970);
// console.log(ageJohn, ageMike, ageMary);

// // pass multiple arguments to the function
// function yearsUntilRetirement (yearBorn, firstName) {
//     // call previous function to get age based off of argument based
//     var age = calculateAge(yearBorn);
//     // calculate retirement years
//     var retirement = 65 - age; 
//     // figure out if they have already retired
//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired');
//     }
// }
// // call function with year born, which is used to figure out age then figure out retirement value and first name.
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Mary');

/***********
lesson 21 - Function Statements and Expressions

*/

// // function decleration
// // function whatDoYouDo(job ,firstName){}

// // function expression 
// // using a switch statement, no need for 'break' as we are using return, which stops the function and rturns the value to the function call. 
// var whatDoYouDo = function(job, firstName){
//     switch(job){
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives an Uber';
//         case 'designer':
//             return firstName + ' makes nice websites';
//         default:
//             return firstName + ' does something else';
//     }
// }
// // log result striaght to conolse
// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('driver', 'Dave'));
// console.log(whatDoYouDo('designer', 'Bob'));
// console.log(whatDoYouDo('builder', 'Bill'));
// // save result in var then log to console
// var youDo = whatDoYouDo('teacher', 'John');
// console.log(youDo);

// difference between expressions and statements. Exressions produce results, give us values, statements are actions. 

/***********
lesson 22 - Arrays

*/

// // Here are two different ways of creating arrays
// // arrays are 0 based so the first value is 0 in teh list. 0, 1, 2, 3... 2 is the 3rd value. 0 is the 1st.
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);
// //display whole array
// console.log(names);
// // access first value
// console.log(names[0]);
// //display how many values there are
// console.log(names.length);

// //mutate the array
// names[1] = 'Ben';
// // Add a value in a specific place
// // names[5] = 'Mary';
// // Add a value at the end
// names[names.length] = 'Dave';
// console.log(names);

// // Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// //use the 'push' method (a function specific to arrays) to add a value at the end of the array
// john.push('blue');
// john.unshift('Mr.');
// console.log(john);
// // pop method removes value from the end of the array, below we are removing two
// john.pop();
// john.pop();
// //shift removes from the start of the array
// john.shift();
// console.log(john);

// // indexOf method show us the position of the value passed in the argument
// console.log(john.indexOf(1990));

// //Test if value is in the array. If it is not it will evaluate as -1
// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
// console.log(isDesigner);

/***********
lesson 23 - Coding Challenge 3

*/

// var meal1, meal2, meal3;

// meal1 = 124;
// meal2 = 48;
// meal3 = 268;

// function calculateTip(mealCost){
//     if (mealCost <= 50){
//         return mealCost * 0.2;
//     } else if (mealCost > 50 && mealCost <= 200){
//         return mealCost * 0.15;
//     } else {
//         return mealCost * 0.1;
//     }
// }

// var meal1tip = calculateTip(124);
// var meal2tip = calculateTip(48);
// var meal3tip = calculateTip(268);

// var tips = [meal1tip, meal2tip, meal3tip];
// var totalCost = [(meal1 + meal1tip), (meal2 + meal2tip), (meal3 + meal3tip)]

// console.log(tips);
// console.log(totalCost);

/***********
lesson 24 - Coding Challenge 3 Solution

*/

// COULD HAVE DONE IT LIKE THIS

// function tipCalculator(bill){
//     var percentage
//     if (bill < 50) {
//         percentage = 0.2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = 0.15;
//     } else {
//         percentage = 0.1;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [
//     tipCalculator(bills[0]),
//     tipCalculator(bills[1]),
//     tipCalculator(bills[2])
// ];

// var finalValues = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2]
// ];

// console.log(tips, finalValues);

/***********
lesson 25 = Objects and properties

*/
// Objects order doesnt matter where as arrays it does.
// key names are paired with values
// first name is a property of the john object

// // Object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'Teacher',
//     isMarried: false
// };
// // use . syntax to access properties
// console.log(john.firstName);
// // [] syntax to access properties
// console.log(john['lastName']);
// // Save birthyear keyname propety pair in a variable and call it
// var x = 'birthYear';
// console.log(john[x]);

// // Mutate the Object
// john.job = 'designer';
// john['isMarried'] = true;

// console.log(john);

// // new Object syntax
// // uses new statement then keyword Object both . syntax and [] syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.lastName = 'Smith';
// jane['birthYear'] = 1991;
// console.log(jane);

/***********
lesson 26 = Objects and Methods

*/
 // here a function is attached to the keyname and becomes a method of the john object
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1991,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'Teacher',
//     isMarried: false,
//     calcAge: function(birthYear){
//         return 2020 - this.birthYear;
//     }
// };
// console.log(john.calcAge());
// console.log(john);

// Above can be written much better:
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1991,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'Teacher',
//     isMarried: false,
//     calcAge: function(birthYear){
//         this.age = 2020 - this.birthYear;
//     }
// };
// john.calcAge();
// console.log(john);


/***********
lesson 27 = Coding Challenge 4 - BMI in objects

*/

var john = {
    firstName:'John',
    secondName: 'Smith',
    height: '1.69',
    mass: 79,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }  
};
var mark = {
    firstName:'Mark',
    secondName: 'Davis',
    height: '1.80',
    mass: 80,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI; // by returning th value here you can calculate and read at the same time when you call the function!
    }  
};
// john.calcBMI(); // You can use this in the logical comparesent 
// mark.calcBMI();
// console.log(john, mark);
// you only need to call the calcBMI once, then it is readable. 
if (john.calcBMI() > mark.calcBMI()){
    console.log(john.firstName + ' has a greater BMI with ' + john.BMI );
} else if (mark.BMI > john.BMI){
    console.log(mark.firstName + ' has a greater BMI with ' + mark.BMI );
} else {
    console.log('they have the same BMI')
}
/***********
lesson 27 = Coding Challenge 4 - BMI in objects Solution

I solved it, but got the calc the wrong way around and passed the mass and heihgt to the function. BUT it could have been empty.

I did:
(this.height * this.height) / this.mass;

and
function(mass, height)

and 
i didnt return the value...didnt need to?
*/