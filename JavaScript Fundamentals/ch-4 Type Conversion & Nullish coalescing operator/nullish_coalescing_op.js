
// result = a ?? b;
// The result of a ?? b is:
// if a is defined, then a,
// if a isn’t defined, then b.
let user;

console.log(user ?? "Anonymous"); // Anonymous (user is undefined)

//example
let user1 = "John";
console.log(user ?? "Anonymous"); // Anonymous (user is undefined)
console.log(user1 ?? "Anonymous"); // John (user is not null/undefined)

//example
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
consol.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// comparison-with ||

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder


//example
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
//The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
// so the result of || is the second argument, 100.
// The height ?? 100 checks height for being null/undefined, and it’s not,
// so the result is height “as is”, that is 0.

