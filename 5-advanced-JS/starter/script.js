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

