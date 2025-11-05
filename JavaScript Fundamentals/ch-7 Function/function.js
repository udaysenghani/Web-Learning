//function declaration
function sayhello(){
    console.log("hello");
}
//function with parameters
function namste(name){
    console.log("Namste ",name);
}


//function call
sayhello();
namste("Uday");

//local Variables
function showMessage() {
  let message = "Hello, I'm Uday"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm Uday!

alert( message ); // <-- Error! The variable is local to the function

//outer variable
let name="Uday";
function welcome(){
    name="Shiv"; //changed the outer variable
    console.log(`Welcome ${name}!`);
}

console.log(name); //Uday before function call

welcome();

console.log(name); //name is modified

//default argument
function sayhello(name="User"){
    console.log(`Welcome ${name}!`);
}

sayhello(); // Welcome User!
sayhello("Uday");// Welcome Uday!

//Alternative Default Parameter
function showMessage(text) {
  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }
  console.log(text);
}
showMessage(); // empty message


return value
function sum(a,b){
    return a+b;
}
console.log(sum(2,3));

//Example fuunction
function checkAge(age){
    if(age>=18){
        return true;
    }
    else{
        return confirm("Do you have permission from your parents?");
    }
}

let age =prompt("how old you are?");
if(checkAge(age)){
    alert("access granted!");
}
else{
    alert("access denied");
}

