//Q11:Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
   
let names : string[] = ["Shahzaib","Asad","Zeeshan","Saad"] 
//Using array.foreach formula
names.forEach(friends =>{
console.log(friends);
})

//Q12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, 
//but each message should be personalized with the person’s name    

let names1 : string [] = ["Shahzaib","Asad","Zeeshan","Saad"]
names1.forEach(greetings =>{
   console.log(`"Hi Bro!"${greetings}, Asalam u alikum"`)
     })

//Q13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list 
//that stores several examples. Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”
let transportation : string[] = ["REVO","HONDA 125","HELICOPTER"]
transportation.forEach(TRANSPORT =>{
     console.log(`I would like to owan a ${TRANSPORT}`)
     })

//Q14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.*/

let guestlist : string [] = ["Shahzaib","Asad","Zeeshan"]

// //using for each method
 guestlist.forEach(Brothers =>{
     console.log(`Dear ${Brothers}, you would like to invite to dinner.`);
    
 })

//Q15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.*/

let guestPerson : string[] = ["Shahzaib","Asad","Zeeshan","Saad"]

// print the name who can not make a dinner
let unableAttand : string = guestPerson.splice(1,1)[0]
console.log(unableAttand ," is not make a diner");

//push
 guestPerson.push("AMMI")
// // print the message 
guestPerson.forEach(guesst =>{
    console.log(`Dear guest ${guesst} you are invited to a dinner`);
    
 })

/*More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your 
program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of
 your list. • Print a new set of invitation messages, one for each person in your list.*/

let newGuestlist : string[] = ["Shahzaib","Asad","Zeeshan","Saad"]
console.log("Great news! we found a bigger table");

// // unshift use for adding new guest

newGuestlist.unshift("Hamza")

// // splice()

newGuestlist.splice(Math.floor(newGuestlist.length/2),0, "Hamza")

// // push ();

newGuestlist.push("Zaibi")

 console.log(newGuestlist);
 
// //for each
newGuestlist.forEach(guest => {console.log(
     `Dear ${guest}, you are cordialy invited to dinner`
    
 );
 })

/*Q17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16. 
Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, print a message to that person letting them know 
you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end of your program.*/
let guestList:string[]=["Hamza","Saad","Asad",]
// print message
console.log("Unfortunatly ! the new table dinner table won't arrive in the time for the dinnerr,");

// using unshift method for adding 
guestlist.unshift("Shahzaib","Zeeshan");
 console.log(guestList);
 
//remove guest from the list
while(guestlist.length>2){
    let removedGuest = guestlist.pop()
    if(removedGuest !== undefined){
        console.log(`SORRY, ${removedGuest} we cann't invite you`);}}

// print  a message to each of the two people still on your list, letting invite them
guestlist.forEach(guest=>{
    console.log(`dear ${guest} you both are invited for the dinner`);})
    
// remove 2 names from the list for using splice method
guestlist.splice(2, guestlist.length)

// print the updating list
console.log("update list of guest:", guestlist);

/*Q18:Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list.Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
•Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. 
Print the list to show that its order has changed.*/
 let worldPlace : string[] =["Dubai","Suadia","China","America","Pakistan"]
//print orginal oder
console.log("Orginal oder:", worldPlace);
// print array in alphabetical oder
console.log("Alphabetical Oder:",worldPlace.slice().sort());
// show that orginal array
console.log("Orginal Oder:",worldPlace);
// reversed alphabetical oder
console.log("Reversed Alphabetical Oder:", worldPlace.slice().sort().reverse());
// show orginal array
console.log("Orginal oder:", worldPlace);
// show reversed oder changed
console.log("Reversed Oder Changed")
worldPlace.reverse();console.log(worldPlace);
// reversed oder and print the orginal oder
console.log("Orginal Oder:", worldPlace.sort());
console.log(worldPlace);
// Sort to change your array so it’s stored in reverse alphabetical order
console.log("Reversed Alphabetical oder:", worldPlace.sort().reverse())
console.log(worldPlace);

/*Q19:Dinner Guests: Working with one of the programs from Exercises 14 through 18, print 
a message indicating the number of people you are inviting to dinner.*/

let guest : string []=["Shahzaib","Zeeshan","Asad","Hamza",]
guest.forEach(guestname=>{
    console.log(`Dear Brothers ${guestname}, you are inviting to dinner`);
    
})
let guestNumber = guest.length
console.log(`We are inviting total ${guestNumber} guests`);

/*Q20:Think of something you could store in a array. 
For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
Write a program that creates a list containing these items.*/
let languages = ["Urdu","English","Hazara","Pashto"]
// print the languages list
languages.forEach(zaban=>{
    console.log(zaban);
    
})













 




    











  