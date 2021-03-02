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
  var numeric = confirm(
    "Click okay if you would like to use numbers in your password?"
  );
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
  var passwordText = "";
  for (var i = 0; i < passwordLength; i++) {
    passwordText += options[Math.floor(Math.random() * options.length)];
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
