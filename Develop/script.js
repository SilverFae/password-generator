// Assignment Code
var generateBtn = document.querySelector("#generate");

//defined arrays!
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numeric = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/","\:","\;"," < ","="," > "," ? ","@","[","\\","]"," ^","_","`","{","|","}","~"];

var confirmLength = "";
var confirmUpper;
var confirmLower;
var confirmNum;
var confirmSpecial;

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{
  //added empyy string
  var inputPassword = "";
  var confirmLength = (prompt("How many characters would you like your password?"));

  //a while loop that allows me to set the perameters for password length
  while(confirmLength <=7||confirmLength>=128){
    alert("Password must contain at least 128 characters, Try again");
    var confirmLength = (prompt("How many characters would you like your password?"));
  }
  //prints if password is less than or greater than given values
  alert ("Your password shall containt " + confirmLength + " characters");

  //getting our uuser input
  var confirmUpper= confirm("Do you want uppercase?");
  var confirmLower = confirm("Do you want lowercase?");
  var confirmNum = confirm("Do you want numeric?");
  var confirmSpecial= confirm("Do you want special?");

  //setting a while loop just in case someone chooses no perameters 
      while(confirmUpper === false && confirmLower === false && confirmNum === fasle && confirmSpecial == false){
        alert("choose at least one of the perameters");

        var confirmUpper= confirm("Do you want uppercase?");
        var confirmLower = confirm("Do you want lowercase?");
        var confirmNum = confirm("Do you want numeric?");
        var confirmSpecial= confirm("Do you want special?");
      }
      //setting the password with if statements
      var passwordChar = []
      if (confirmUpper){
        passwordChar = passwordChar.concat(upperCase);
      }
      if (confirmLower){
        passwordChar = passwordChar.concat(lowerCase);
      }
      if (confirmNum){
        passwordChar = passwordChar.concat(numeric);
      }
      if (confirmSpecial){
        passwordChar = passwordChar.concat(special);
      }

      //finishes everything up by setting a randomized password given the users selections 
      for (var i=0;i < confirmLength; i++)
      {
        inputPassword = inputPassword + passwordChar[Math.floor(Math.random()*passwordChar.length)];
      }

return inputPassword;
}
//prints out password onto the generator
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}