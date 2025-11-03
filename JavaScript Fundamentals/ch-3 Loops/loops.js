//1. while loop, entry control loop
let i=0;
while(i<=10){
    console.log("loop iteration:",i)
    i++;
}
let a=3;
while(a>=0){ // when i becomes 0, the condition becomes falsy, and the loop stops
    //alert(a);
    a--;    
}


//2. do..while loop , exit control loop
let j=0;
do{
    console.log("hello ",j);
    j++;
}while(j<=10);

//3. for loop, entry control loop
// for (begin; condition; step) {
//   // ... loop body ...
// }

for(k=0;k<=10;k++){
    console.log("iteration : ",k);
}



//skipping parts
let b=0;
for(;b<5;){
    console.log("hello");
    b++;
}
//for (;;) {
  // repeats without limits
//}


//4.breaking loop: break;
for(c=0;c<10;c++){
    if(c==4){
        break; //at c=4 break the loop
    }
    console.log("iteration: ",c);
}

//continue to the next iteration
for(d=0;d<10;d++){
    if(d==4){
        continue; //at c=4 skip the iteration continue to next
    }
    console.log("iteration: ",d);
}

// with label
outer: for(p=0;p<5;p++){
    for(u=0;u<=10;u++){
        console.log("inside loop iteration: ",u);
        if(p==2){
            break outer;
        }
    }
}

//summary
// while – The condition is checked before each iteration.
// do..while – The condition is checked after each iteration.
// for (;;) – The condition is checked before each iteration, additional settings available.
// To make an “infinite” loop, usually the while(true) construct is used. 
// Such a loop, just like any other, can be stopped with the break directive.

// If we don’t want to do anything in the current iteration and would like to forward to the next one, 
// we can use the continue directive.

// break/continue support labels before the loop. 
// A label is the only way for break/continue to escape a nested loop to go to an outer one.