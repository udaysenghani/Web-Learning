//It gives a more descriptive way to compare a value with multiple variants.
//The switch has one or more case blocks and an optional default.
let result=Number(prompt("Enter a number between 1 and 7"));

switch(result){
    case 1:
    alert("Sunday");
    break;

    case 2:
    alert("Monday");
    break;

    case 3:
    alert("Tuesday");
    break;

    case 4:
    alert("wednesday");
    break;

    case 5:
    alert("thursday");
    break;

    case 6:
    alert("friday");
    break;

    case 7:
    alert("saturday");
    break;

    default:
    alert("Invalid Input");
}
//example 2
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

//Grouping Of Case
let z =3;
switch(z){
    case 2:
        alert("2");
    break;

    case 3:
    case 4://grouping the cases
    alert("3 or 4");
    break;

    default:
    alert("not 2, 3 or 4");
}
