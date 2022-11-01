// Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment Code
var generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

// Write password to the #password input
const writePassword = () => {

  let chars = "";
  let password = "";

  let passwordLength = prompt("How many chars?");

  for (passwordLength; passwordLength > 128 || passwordLength < 8;) {
    console.log('No way, it logged');
    passwordLength = prompt('Please enter an number between 8 and 120.');
  }
  
  console.log(passwordLength)

  //add an if all false type beat

  let lowerCase = confirm("Would you like lowercase letters?");
  console.log(lowerCase);

  let upperCase = confirm("Would you like uppercase letters?");
  console.log(upperCase);

  let numeric = confirm("Would you like numbers?");
  console.log(numeric);

  let specialChars = confirm("Would you like special characters?");
  console.log(specialChars);

  if(lowerCase == true) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }

  if(upperCase == true) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if(numeric == true) {
    chars += "0123456789";
  }

  if(specialChars == true) {
    chars += "!";
  }

  console.log(chars);

  const generatePassword = () => {
  for(let i = 0; i <= passwordLength; i++) {
    let randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
}

  generatePassword();

  // Check for password



  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
