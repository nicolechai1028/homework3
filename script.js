var generateEl = document.getElementById('generate');
var passwordEl = document.getElementById('password'); 
var lengthEl = document.getElementById('length'); 
var uppercaseEl = document.getElementById('uppercase'); 
var lowercaseEl = document.getElementById('lowercase'); 
var numbersEl = document.getElementById('numbers'); 
var symbolsEl = document.getElementById('symbols'); 

// var randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol,
// }

// function getRandomLower(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber(){
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol(){
//   var symbols = '!@#$%^&*()-+{}[]=<>/,.'
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// Generate Event Listener
generate.addEventListener('click',()=>{
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;
  // var length = prompt('please enter desired password length');
  // console.log('yay im in console!')
  // var hasLower = confirm('include lowercase letters?');
  // var hasUpper = confirm('include uppercase letters?');
  // var hasSymbol = confirm('include symbol?');
  // var hasNumber = confirm('include numbers?');
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = upper.toLowerCase();
  var number = '1234567890';
  var special = `!@#$%^&*()_+-={}[]:'";<>?/.,`;
  var collection = ''
  if(hasLower){
    collection += lower;
  }
  if(hasUpper){
    collection += upper;
  }
  if(hasNumber){
    collection += number;
  }
  if(hasSymbol){
    collection += special;
  }
  
  passwordEl.innerText = generatePassword(length, collection);
});

//Generate password function
function generatePassword(length, string){
  let generatedPassword = '';
  for(let i = 0; i <length; i++) {
    var rand = Math.floor(Math.random()*string.length);
    generatedPassword += string.charAt(rand);
  }
return generatedPassword
}



