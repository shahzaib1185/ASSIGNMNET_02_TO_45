/*Q21:They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.*/

let myIntroduction = {
  Name: "Shahzaib",
  F_Name: "Khawaj Muhammad",
  Phone_no: +923102348660,
};
console.log(myIntroduction);

/*Q22:Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program.*/

let arrayError = ["A", "B", "C", "D"];
//  produce an index error.
console.log(arrayError[5]);

//  error remove
console.log(arrayError[3]);

/*Q23:Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test. 
Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let one = 1;
let two = 2;

//test 1
console.log("Test 1 : 1 is equal to 1");
console.log(one == one);

//test 2
console.log("Test 2 : 2 is equal to 2");
console.log(two == two);

//test 3
console.log("Test 3 : 1 is not equal to 1");
console.log(one !== one);

//test 4
console.log("Test 4 : 1 is gerater than to 2");
console.log(one > two);
//test 5
console.log("Test 5 : 1 is less than to 2");
console.log(one < two);
//test 6
console.log("Test 6 : 2 is less than to 1");
console.log(two < one);
//test 7
console.log("Test 7 : 1 is equal to 2");
console.log(one == two);
//test 8
console.log("Test 8 : 2 is not equal to 2");
console.log(two !== two);
//test 9
console.log("Test 9 : 1 is gerater than to two");
console.log(one > two);
//test 10
console.log("Test 10 : 1 is not equal to 1");
console.log(one !== one);

//Q24:More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

let apple = "apple"; // variable

// • Tests using the lower case function
let upperCaseApple = "APPLE";
console.log("APPLE is equal to apple after converting to lowercase");
console.log(upperCaseApple.toUpperCase() == "apple");

//  NOT EQUAL TO
console.log("APPLE is equal to apple after converting to lowercase");
console.log(upperCaseApple.toUpperCase() != "apple");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
let ten = 10;
let twenty = 20;

// EQUAL TO
console.log("ten is equal to twenty");
console.log(ten === twenty);

//  NOT EQUAL TO
console.log("ten is  not equal to twenty");
console.log(ten != twenty);

// Greater than
console.log("twenty is greater than ten");
console.log(twenty > ten);

// less than
console.log("twenty is less than ten");
console.log(twenty >= ten);

// less than or equal to
console.log("twenty is less than or equal to than");
console.log(twenty <= ten);
``;

// • Tests using "and" and "or" operators
// using && (and)
console.log("twenty is not equal to ten and twenty is grater than ten");
console.log(twenty != ten && twenty > ten);

// using || (not)
console.log("twenty is greater than to ten and twenty is not equal ten");
console.log(twenty > ten || twenty != ten);

// • Test whether an item is in a array
let fruits = ["apple", "orange", "banana"];
console.log("orange is include in my fruits array");
console.log(fruits.includes("orange"));

// • Test whether an item is not in a array
console.log("orange is not include in my fruits array");
console.log(!fruits.includes("orange"));

/*Q25:Alien Colors #1: Imagine an alien was just shot down in a game. 
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, 
print a message that the player just earned 5 points.
•Write one version of this program that passes the if test and another that fails.
 (The version that fails will have no output.)*/

 let alien_color = "green";
if (alien_color === "green") {
  console.log("player just earned 5 points.");
}

if (alien_color === "white") {
  console.log("Alien colo is white.");
}

/*Q26:Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/


// first verion
let alien_colors = "green";
if (alien_colors === "green") {
  console.log(
    `Alien color is green. player just earned 5 points for shooting the alien `
  );
} else {
  console.log(
    `Alien color is not green. player just earned 10points for shooting the alien `
  );
}

// second verion
let alien_colorss = "red";
if (alien_colors === "green") {
  console.log(
    `Alien color is green. player just earned 5 points for shooting the alien `
  );
} else {
  console.log(
    `Alien color is not green. player just earned 10points for shooting the alien `
  );
}

/*Q27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

//FIRST VERSION

let alien_Color = "green"

if(alien_Color==="green"){
  console.log("version 01 : Alien color is green, player earned 5 points.")
  
}else if (alien_Color==="yellow"){
  console.log("version 01 : Alien color is green, player earned 10 points.");
  
}else if (alien_Color==="red"){
  console.log("version 01 : Alien color is green, player earned 15 points.");
}

//SECOND VERSION
let alien_Color1 = "yellow"

if(alien_Color1==="green"){
  console.log("version 02 : Alien color is green, player earned 5 points.")
  
}else if (alien_Color1==="yellow"){
  console.log("version 02 : Alien color is green, player earned 10 points.");
  
}else if (alien_Color1==="red"){
  console.log("version 02 : Alien color is green, player earned 15 points.");
}

//THIRD VERSION
let alien_Color2 = "red"

if(alien_Color2==="green"){
  console.log("version 03 : Alien color is green, player earned 5 points.")
  
}else if (alien_Color2==="yellow"){
  console.log("version 03 : Alien color is green, player earned 10 points.");
  
}else if (alien_Color2==="red"){
  console.log("version 03 : Alien color is green, player earned 15 points.");
}

/*Q28:Stages of Life: Write an if-else chain that determines a person’s stage of life. 
Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.*/

let age = 24;
//If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
  console.log("You are a baby");

} 
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
  console.log("You are a toddler");
}
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
  console.log("You are a kid");
} 
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
  console.log("You are a teenager");
} 
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
  console.log("You are a adult");
} 
//If the person is age 65 or older, print a message that the person is an elder.
else if (age >= 4) {
  console.log("You are a elder");
}

/*Q29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favorites_fruits = ["Mango","Orange","Strawberry"]
if(favorites_fruits.includes("Mango")){
    console.log("I really like Mango");
}
if(favorites_fruits.includes("Orange")){
    console.log("I really like Orange");
}
if(favorites_fruits.includes("Apple")){
    console.log("I really like Apple");
}
if(favorites_fruits.includes("Strawberry")){
    console.log("I really like Strawberry");
}
if(favorites_fruits.includes("Banana")){
    console.log("I really like Banana");
}

/*Q30:Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user after they log in to a website. 
Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, 
would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/

let userName = ["Admin:Shahzaib","Asad","Zeeshan","Hamza","Saad"]

userName.forEach(oneuser => {
  if(oneuser === "Admin:Shahzaib"){
    console.log(`Hello ${oneuser}, Would you like to see a status report`);
    
  }else {
    console.log(`Hello ${oneuser}, thank you for logging in again.`);
    
  }
})

/*Q32:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let current_users = ["Shahzaib", "saad", "Hamza" ,"shani","Asad"]

let new_users = ["ALi", "Waqar","Saad","Shani","Babar"]
