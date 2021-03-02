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
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var passwordLength;
// Gives the user options on how many characters they would like in the password and makes sure that the passowrd meets the acceptable criteria.
function generatePassword() {
  passwordLength = window.prompt(
    "Choose a number between 8 and 128 for the length of your password."
  );
  if (isNaN(passwordLength)) {
    alert("Have to choose a number.");
    return;
  }
  if (passwordLength < 8) {
    alert("Password length is not long enough.");
    return;
  }
  if (passwordLength > 128) {
    alert("Too many numbers in password length.");
    return;
    
  }
  
  // Gives the user options on what type of characters they would like to use in their password.
  var special = confirm(
    "Click okay if you would like to use special characters in your password?"
  );
  var numeric = confirm("Click okay if you would like to use numbers in your password?");
  var upperCase = confirm(
    "Click okay if you would like to use uppercase letters in your password?"
  );
  var lowerCase = confirm(
    "Click okay if you would like to use lowercase letters in your password?"
  );
  
  var options = [];
  
    
  // Makes sure that the user is choosing at the least one of these options to choose from for a password.
  if (!special && !numeric && !upperCase && !lowerCase) {
    alert(
      "Your must choose at least one option for your password to meet the necessary criteria."
    );
    return;

    // Runs if user selects all options to meet the criteria for their password.
  } else if (special && numeric && lowerCase && upperCase) {
    options = specialCharacters.concat(
      numericCharacters,
      lowerCaseCharacters,
      upperCaseCharacters
    );

    // Runs if user selects 3 out of the 4 options to meet the criteria for their password.
  } else if (!special && numeric && lowerCase && upperCase) {
    options = numericCharacters.concat(
      lowerCaseCharacters,
      upperCaseCharacters
    );
  } else if (special && !numeric && lowerCase && upperCase) {
    options = specialCharacters.concat(
      lowerCaseCharacters,
      upperCaseCharacters
    );
  } else if (special && numeric && !lowerCase && upperCase) {
    options = specialCharacters.concat(numericCharacters, upperCaseCharacters);
  } else if (special && numeric && lowerCase && !upperCase) {
    options = specialCharacters.concat(numericCharacters, lowerCaseCharacters);

    // Runs if user selects 2 out of the 4 options to meet the criteria for their password.
  } else if (!special && !numeric && lowerCase && upperCase) {
    options = lowerCaseCharacters.concat(upperCaseCharacters);
  } else if (special && !numeric && !lowerCase && upperCase) {
    options = specialCharacters.concat(upperCaseCharacters);
  } else if (special && numeric && !lowerCase && !upperCase) {
    options = specialCharacters.concat(numericCharacters);
  } else if (!special && numeric && lowerCase && !upperCase) {
    options = numericCharacters.concat(lowerCaseCharacters);
  } else if (special && !numeric && lowerCase && !upperCase) {
    options = specialCharacters.concat(upperCaseCharacters);
  } else if (!special && numeric && !lowerCase && upperCase) {
    options = numericCharacters.concat(upperCaseCharacters);

    // Runs if user selects only 1 option to meet the criteria for their .
  } else if (!special && !numeric && !lowerCase && upperCase) {
    options = upperCaseCharacters;
  } else if (!special && !numeric && lowerCase && !upperCase) {
    options = lowerCaseCharacters;
  } else if (!special && numeric && !lowerCase && !upperCase) {
    options = numericCharacters;
  } else if (special && !numeric && !lowerCase && !upperCase) {
    options = specialCharacters;
  }
  console.log("option: ", options)
  console.log("passwordLength:", passwordLength)
  
var passwordText = '';
  for( var i = 0; i < passwordLength; i++) {
    // options[10]
passwordText += options[Math.floor(Math.random() * options.length)];
    // += options.arr(Math.floor(Math.random() * arr.length));
  }
 return passwordText;
}

// Retrieve a random item from the provided array
function getRandomItem(arr) {
  // Generate a random index from 0 to the length - 1 of our array
  var randomIndex = Math.random() * arr.length;
  // round down our random index
  randomIndex = Math.floor(randomIndex);
  // return the random item based off of our random index
  return arr[randomIndex];
  // One liner of the above code
  // return arr[Math.floor(Math.random() * arr.length)];
}



// Assignment Code
var button = document.querySelector("#generate");
var options = {
    passwordLength,
    upperCaseCharacters,
    lowerCaseCharacters,
    numericCharacters,
    specialCharacters,
  };




// Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;
 }

  // Add event listener to generate button
button.addEventListener("click", writePassword);
 



