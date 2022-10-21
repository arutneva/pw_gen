// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxynz"

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var number = "0123456789"

var special = "!@#$%^&*,."


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var initialPass = ""
  var finalResult = ""
  var charAmount = prompt('Select length between 8 to 128 characters')
 
  if (charAmount >= 8 && charAmount <= 128) {

    var isLower = confirm('Want to include lowercase?')


    var isUpper = confirm('Want to include uppercase?')


    var isNum = confirm('Want to include numbers?')


    var isSpcl = confirm('Want to include special characters?')
    
for (let i = 0; i < charAmount; i++) {
  if (isLower===true) {
    var lowerPosition = Math.floor(Math.random()*26) 
      initialPass += lowercase[lowerPosition]
  } 

  if (isUpper===true) {
    var upperPosition = Math.floor(Math.random()*26) 
      initialPass += uppercase[upperPosition]
  } 

  if (isNum===true) {
    var numPosition = Math.floor(Math.random()*9) 
      initialPass += number[numPosition]
  } 

  if (isSpcl===true) {
    var spclPosition = Math.floor(Math.random()*10) 
      initialPass += special[spclPosition]
  }   
}
 
if (initialPass.length > charAmount) {
  for (let i = 0; i < charAmount; i++) {
    finalResult += initialPass[i]
    
  }
} else {
  finalResult = initialPass
}


  } else {
    alert('Entry is not valid')
  }

return finalResult

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
