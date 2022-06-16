// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let i = 2;
while(i < 5){
    console.log(i);
    i++
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let j = 2;
do {
   console.log(j);
    j++;
} 
while(i < 5);


// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for(let i = 2; i < 5; i++){
    console.log(i)
}
// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//while loop
let i = 10;
while(i >= 1){
    console.log(i);
    i--;
}

//do while
let i = 10; 
do {
    console.log(i); 
    i--;
}
while( i >= 1);

//for loop
for(let i = 10; i >= 1; i--){
    console.log(i);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//while 
let i = 7; 
while(i <= 27 ){
    console.log(i); 
    i++;
}

//do while 
let i = 7; 
do {
    console.log(i); 
    i++;
}
while( i <= 27);

//for loop
for(let i = 7; i <= 27; i++){
    console.log(i);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//while 
let i = 0; 
while(i <= 100 ){
    console.log(i); 
    i+=10;
}

//do while 
let i = 0; 
do {
    console.log(i); 
    i+=10;
}
while( i <= 100);

//for loop
for(let i = 0; i <= 100; i+=10){
    console.log(i);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}
//The loop has a stopping point at 2 but it decrement so it will never get to 2 it will just keep getting farther from 2 

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let favoriteInt = 7; 
for(let i = 0; i <= favoriteInt; i++){
    console.log(i)
}
// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let favoriteNumber = 7; 
for(let i = 0; i <= 100; i++){
    if(i === favoriteNumber){
        console.log(`${i} my favorite number!`)
    }else{
        console.log(`${i} not my favorite number`)
    }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//

//I would use while loop when I want to run my code through loop only if a certain condition is met before running through the loop  
//I would use a do while loop when I want to run my code through my loop once before meeting a certain condition
//I would use a for loop when I know where I want to start in my loop, ending point of my loop, and a specific a iteration for my loop

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++ ) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0 ; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//I found this easy at first but once I came across in working with while and do while loops I had to do some research to see the difference and the syntax for them. I also had some issues with the nesteed loop. I was able to get through the problems by using the MDN and doing some reading on FreeCodeCamp and StackOverFlow 

// Email your file to us or commit your file to GitHub and email us a link.