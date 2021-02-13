// Assignment code here
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let specialChar = [ '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', ']', '_', '`', '{', '|', '}', '~']
let upperCaseInput;
let lowerCaseInput;
let specialCharInput;
let ps = [];
//number of characters
function generatePassword() {
  let userCharInput = prompt("How many characters would you like in your password. Must be between 8 - 126");
  if (!userCharInput) {
    prompt("Must enter a value") 
  } else if ( userCharInput < 8 || userCharInput > 126) {
    prompt("Must enter a value between 8 - 126") 
  } else {
    upperCaseInput = confirm('confirm if you like to add upper case in your password');
    lowerCaseInput = confirm ('confirm if you like to add lower case in your password');
    specialCharInput = confirm ('confirm if you like to add special characters in your password');
  }

  if (!upperCaseInput && !lowerCaseInput && !specialCharInput) {
    alert('must specify some criteria')
    upperCaseInput = confirm('confirm if you like to add upper case in your password');
    lowerCaseInput = confirm ('confirm if you like to add lower case in your password');
    specialCharInput = confirm ('confirm if you like to add special characters in your password');
    // confirms all 3 criteria
  } else if (upperCaseInput && lowerCaseInput && specialCharInput) {
    ps = ps.concat(upperCase, lowerCase, specialChar)

    // confirms at least 2 criteria 
  } else if (upperCaseInput && lowerCaseInput) {
    ps = ps.concat(upperCase, lowerCase)
  } else if (upperCaseInput && specialCharInput) {
    ps = ps.concat(upperCase, specialChar)
  } else if (lowerCaseInput && specialCharInput) {
    ps = ps.concat(lowerCase, specialChar)

    // confirms 1 criteria
  } else if (upperCaseInput) {
    ps = ps.concat(upperCase)
  } else if (lowerCaseInput) {
    ps = ps.concat(lowerCase)
  } else if (specialCharInput) {
    ps = ps.concat(specialChar)
  }
  console.log(ps)
  
  // debugger;
  var password = []

  for(var i = 0; i < userCharInput; i++) {
    var newPassword = ps[Math.floor(Math.random() * ps.length)]
    password.push(newPassword);
  }
  console.log('new', password)
  
  var finalPassword = password.join("")
  console.log('final password = ', finalPassword)
  return finalPassword
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
