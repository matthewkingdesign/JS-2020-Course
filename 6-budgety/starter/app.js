/***************************************************************
  Budgety App 
    
  76 - Project Planning and Architecture: Step 1
  To Do 
    - Add Event handler for OK button
    - Get input values from input bar
    - Add the new Item to our internal data structure
    - Add the new Item to the UI
    - Internally calculate the budget as new items are added
    - Update the UI with the new budget

    Structuring our code with Modules
    - Modules are an important aspect to any robust applications architecture
    - They keep the units of code for a project both cleanly seperated and organised 
    - Encapsulate some data into privacy and expose other data publicly 

    Modules
    - UI Module
        - Get input values
        - Add new Items to UI
        - Update the UI
    
    - Data Module
        - Add new item to our internal data structure
        - Calculate Budget
    
    - Controller Module (the bridge between the data and UI Modules)
        - Add Event listner

 */
/***************************************************************
    77. Implementing the Module Pattern
    What we will learn:
    -  How to use the module pattern 
    - More about private and public data, encapsulation and seperation of concerns
 */



//IIFE stored inside a var
 var budgetController = (function() {
    var x = 23;
    var add = function(a){
        return x + a;
    }

    return {
        publicTest: function(b){
            return add(b);
        }
    }
 })(); 

 var UIController = (function(){
    //Some Code
 })();


 var controller = (function(budgetCtrl, UICtrl){
    
    var z = budgetCtrl.publicTest(5);
    return {
        anotherPublic: function () {
            console.log(z);
        }
    }

 })(budgetController, UIController);

 controller.anotherPublic();

