var generateBtn = document.getElementById('generate');
var resultEl = document.getElementById('result'); 
var lengthEl = document.getElementById('length'); 
var uppercaseEl = document.getElementById('uppercase'); 
var lowercaseEl = document.getElementById('lowercase'); 
var numbersEl = document.getElementById('numbers'); 
var symbolsEl = document.getElementById('symbols'); 

var randmFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

generateBtn.addEventListener('click',()=>{
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbols = symbolsEl.checked;

  console.log(length);
})

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
  var symbols = '!@#$%^&*()-+{}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page