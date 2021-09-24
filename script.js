// Assignment Code
var generateBtn = document.querySelector("#generate");

// main function
function generatePassword() {

  var promptLength = prompt("How long should the password be? (8-128 chatacters)");

  // Error check: if user cancels/refuse to enter input.
  if (promptLength == null) {
    return null;
  }

  // Turns string input into integers
  var passLength = parseInt(promptLength);

  // Error check: if user's input is not an integer.
  if ((typeof(passLength)!= 'number')||(passLength % 1 != 0)) {
    alert("Please enter an integer between 8-128")

  }

  // Error check: if selected length is less than 8.
  else if (passLength<8) {

    alert("Minimum length is 8 characters.")
  }

  // Error check: if selected length is longer than 128.
  else if (passLength>128) {

    alert("Maximum length is 128 characters.")
  }
  
  // Let user select character types through confirms.
  else {

    var confirmNum = confirm("Click OK to confirm including numbers.");

    var confirmLower = confirm("Click OK to confirm including lowercase letters.");

    var confirmUpper = confirm("Click OK to confirm including uppercase letters.");

    var confirmSpecial = confirm("Click OK to confirm including special characters.");
    
  }

  // PLaceholder variables for password and set of avaliable character types.
  var pass = "";

  var pool = [];

  // Adds selected character types into pool.
  if (confirmNum == true) {
    pool.push("0","1","2","3","4","5","6","7","8","9")

  }

  if (confirmLower == true) {
    pool.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
    
  }

  if (confirmUpper == true) {
    pool.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")

    
  }

  if (confirmSpecial == true) {
    pool.push("\!","\"","\#","\$","\%","\&","\'","\(","\)","\*","\+","\,","\-","\.","\/","\:","\;","\<","\=","\>","\?","\@","\[","\\","\]","\^","\_","\`","\{","\|","\}","\~")

    
  }

  // Error check: if user did not choose any character types.
  if ((confirmNum||confirmLower||confirmSpecial||confirmUpper) == false) {
    alert("Must select at least one character type.")
    return null;
  }

  // randomly selected a character from character pool and adds it to password until reached password length.
  for (let i=0; i<passLength; i++) {
    let indexPool = Math.floor(Math.random()*pool.length);
    pass=pass.concat(pool[indexPool]);

  }

  return pass;
  
  

}
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
