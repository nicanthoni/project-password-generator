// Assignment code here
// Order of doc: variables - functions - event listeners - evoke functions

var specialCharacters = "!@#$%^&*()".split("");
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var lowerCase = "qwertyuiopasdfghjklzxcvbnm".split("");
var numbers = "1234567890".split("");

var selectedCriteria = [];




// Get references to the #generate element
// document = html
// querySelector = finds the element the id is attached to
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var finalPassword = "";
  var passwordLength = window.prompt('How many characters would you like this password to be?');
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert('The password needs to be between 8 and 128 characters.')
    passwordLength = window.prompt('How many characters would you like this password to be?');
  } 
  var specialChoice = window.confirm('Would you like to use special characters?');
  var uppercaseChoice = window.confirm('Would you like to use uppercase letters?');
  var lowercaseChoice = window.confirm('Would you like to use lower case letters?');
  var numbersChoice = window.confirm('Would you like to include numbers?');
  // Do another while loop, to consider what happens if user says 'no' to all of them -> alert them and reconfirm choices
   if (specialChoice) {
    // write if statement for each (4) to push into created array - use either the push array into another array method,

   }
   // for loop to loop through array x amount depeneding on password length. Each time, randomly picksout a characters from the slecectedCriteria variable.
   // Each randomly selected character, ADD it into the finalPassword variable.
  return finalPassword;
}



// Add event listener to generate button
// event listeners sit at bottom of page
generateBtn.addEventListener("click", writePassword);
