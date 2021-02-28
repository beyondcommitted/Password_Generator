// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Generate password with 8-12 characters

// Include special characters in password

// Include numbers in password

// Include upperCase letters in password

// Include lowerCase letters in password

// Ask user how many characters wanted


// Created arrays to store multiple strings for the password generator to access as characters for the users password.
var specialCharacter = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", 
",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

var numbericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var lowerCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Gives the user options on how many characters they would like in the password and makes sure that the passowrd meets the acceptable criteria.
 function passwordOptions() {
var passwordLength = prompt("Choose a number between 8 and 128 for the length of your password.");
if (isNaN(passwordLength)) { 
  alert("Have to choose a number.");
  return  
}
if (passwordLength < 8) {
  alert("Password length is not long enough.");
  return
}
if (passwordLength > 128) {
  alert("Too many numbers in password length.");
  return
}

// Gives the user options on what type of characters they would like to use in their password.
var special = confirm("Would you like to use special characters in your password?");
var numeric = confirm("Would you like to use numbers in your password?");
var upperCase = confirm("Would you like to use uppercase letters in your password?");
var lowerCase = confirm("Would you like to use lowercase letters in your password?");

// Makes sure that the user is choosing at the least one of these options to choose from for a password.
if (!special && !numeric && !upperCase && !lowerCase) {
  alert("Your password needs to have a criteria");
  return
}
let options = {
  passwordLength, upperCase, lowerCase, numeric, special
}
return options;
}
passwordOptions()
// Assignment Code
var button = document.querySelector("#generate");
console.log(button);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
button.addEventListener("click", writePassword);

// for( let i = 0; i < i < length; i++) {

// if(special)
//   password += getRandomItem(specialcharacters)

// Next step: generate password function, get retuned value from previous functions, each time run randome save, then concatenate all the options that are returned, push all characters, save maximum guaranteed characters
// guaranteed array with have 4 character