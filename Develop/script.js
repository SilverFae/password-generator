// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays
var number = ["1", "2", "3", "4", "5", "6", "7","8","9","0"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//declarations!
var confirmLength = "";
var confirmSpecial;
var confirmLower;
var confirmUpper;

//prompts
function generatePassword(){
  return "Generated password!";
  var confirmLength = (prompt("How many characters would you like your password to contain? Must be a length between 8-50."));

  //if the input is outside of the range
  while(confirmLength <=7 || )
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


