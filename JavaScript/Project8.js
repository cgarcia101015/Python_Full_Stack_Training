var firstName = prompt("Hello and Welcome. Please enter your First name:");
console.log(firstName);

var lastName = prompt("Please enter your Last name:");
console.log(lastName);

var age = prompt("How old are you?:")
console.log(age);

var height = prompt("How tall are you in centimeters:")
console.log(height);

var petName = prompt("What is the name of your pet?:")
console.log(petName);

alert("Thank you so much for the information.");

if((firstName[0] === lastName[0]) && (age > 20 && age < 30) && (height >= 170) && (petName.charAt(petName.length -1) === "y")) {
    console.log("Welcome Comrade! You've passed the Spy Test");

}
