// Assignment Code

// DOM variables
const generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");
const copyBtn = document.querySelector("#copy");

// Write password to the #password element
const writePassword = () => {

  let chars = "";
  let password = "";

  // Potential characters for password generation
  const lowerCaseChars = /[abcdefghijklmnopqrstuvwxyz]/;
  const upperCaseChars = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
  const numericChars = /[0123456789]/;
  const specialCharsString = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
  
  // Password length prompt & check
  let passwordLength = prompt("How many characters would you like in your password?\nBetween 8 and 128 characters");
  for (passwordLength; passwordLength > 128 || passwordLength < 8;) {
    passwordLength = prompt('Please enter an number between 8 and 128.');
  }
  
  // Additional criteria
  let lowerCase = confirm("Would you like lowercase letters?");
  let upperCase = confirm("Would you like uppercase letters?");
  let numeric = confirm("Would you like numbers?");
  let specialChars = confirm("Would you like special characters?");

  // Add potential characters based on user's reponse
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
    chars += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

  // Password generation
  const generatePassword = () => {
  password = ""; 

  for(let i = 0; i <= passwordLength; i++) {
    let randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }

  // Checks password for meeting criteria
  if(lowerCase && !lowerCaseChars.test(password)) {
    generatePassword();
  }

  if(upperCase && !upperCaseChars.test(password)) {
    generatePassword();
  }

  if(numeric && !numericChars.test(password)) {
    generatePassword();
  }

  if(specialChars && !specialCharsString.test(password)) {
    generatePassword();
  }
  return password;
}
  // Display generated password & displays hidden copy button
  passwordText.value = generatePassword();
  copyBtn.classList.remove('copy-btn');
}

// Functionality for the copy button
const copyPassword = () => {
  let pass = document.getElementById("password").value;
  navigator.clipboard.writeText(pass);
  copyBtn.textContent = "Copied!";

  setTimeout(() => {
    copyBtn.textContent = "Copy Password";
  }, 2000);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword)