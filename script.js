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
  var finalResult = ""
  var size = prompt('Enter 8 to 128 characters')
  console.log(size)
  if (size >= 8 && size <= 128) {
    var lowercase = confirm('Want to include lowercase?')
    console.log(lowercase)

    var uppercase = confirm('Want to include uppercase?')
    console.log(uppercase)

    var number = confirm('Want to include numbers?')
    console.log(number)

    var special = confirm('Want to include special characters?')
    console.log(special)

    if (lowercase) {

    } else {

    }



  } else {
    alert('Entry is not valid')
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
