function sayHi() {
  alert( "Hello" );
}
//There is another syntax for creating a function that is called a Function Expression.
let sayHi = function() {
  alert( "Hello" );
};

let a= sayHi();
a(); //it works!


//example
function ask(question,yes,no){
    if(confirm(question))yes()
    else no();
}

function ok(){
    alert("you continue the process");
}

function no(){
    alert("you don't want to continue process");
}
ask("Do you agree?",ok,no);

//function-expression-vs-function-declaration
// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
let sum = function(a, b) {
  return a + b;
};

//function declaration
sayHi("Uday"); // Hello, Uday

function sayHi(name) {
  alert( `Hello, ${name}` );
}
//function expression
sayHi("Uday"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};