/*Q41:Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.*/

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  // Create an array of magician's names
  const magician_Names: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
  
  // Call the function to show the magicians
  showMagicians(magician_Names);
  

  /*Q42:Great Magicians: Start with a copy of your program from Exercise 39. 
  Write a function called make_great() that modifies the array of magicians 
  by adding the phrase the Great to each magician’s name. 
  Call show_magicians() to see that the list has actually been modified.*/

  function show_magicians1(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great1(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  // Create an array of magician's names
  const magiciannames: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
  
  // Call make_great() to modify the list
  make_great1(magiciannames);
  
  // Call show_magicians() to see the modified list
  show_magicians1(magiciannames);
  
/*Q43:Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, 
return the new array and store it in a separate array.
Call show_magicians() with each array to show that
you have one array of the original names and one array with the Great
added to each magician’s name.*/

   function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(`the Great ${magicians[i]}`);
    }
  
    return greatMagicians;
  }
  
  // Create an array of magician's names
  const magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
  
  // Make a copy of the array and modify it using make_great()
  const greatMagicians = make_great([...magicianNames]);
  
  // Call show_magicians() with both the original and modified arrays
  console.log("Original Magicians:");
  show_magicians(magicianNames);
  
  console.log("\nModified Magicians:");
  show_magicians(greatMagicians);
  
/*Q44:Sandwiches: Write a function that accepts a array of items a person
wants on a sandwich. 
The function should have one parameter that collects as many items as the 
function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, 
using a different number of arguments each time.*/

    function make_sandwich(...items: string[]): void {
        console.log('Sandwich Order:');
        for (const item of items) {
          console.log(`- ${item}`);
        }
        console.log('Enjoy your sandwich!\n');
      }
      
      // Call the make_sandwich() function with different numbers of arguments
      make_sandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
      make_sandwich('Turkey', 'Swiss Cheese', 'Mustard');
      make_sandwich('PB&J', 'Banana');
         

/*Q45:Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature.
Print the Object that’s returned to make sure all the
information was stored correctly.*/

function create_car(manufacturer: string, model: string, ...options: Record<string, any>[]): Record<string, any> {
    const car: Record<string, any> = {
      manufacturer,
      model,
    };
  
    for (const option of options) {
      const [key, value] = Object.entries(option)[0];
      car[key] = value;
    }
  
    return car;
  }
  
  // Call the create_car() function with required and optional information
  const carInfo = create_car('Toyota', 'Camry', { color: 'Blue' }, { feature: 'Sunroof' });
  
  // Print the Object to verify the stored information
  console.log(carInfo);
  


 



