const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerset = "abcdefghijklmnopqrsuvwxyz"
const numberset = "0123456789"
const symbolset = "!@#$%^&*()?/"

let box = document.getElementById("passbox")
let upper = document.getElementById("upperInput")
let lower = document.getElementById("lowerInput")
let number = document.getElementById("numInput")
let symbol = document.getElementById("symInput")
let strength = document.getElementById("str")

let getRandomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

let generatepassword = (password ="") => {
  if(upperInput.checked){
    password += getRandomData(upperset)
  }
  if(lowerInput.checked){
    password += getRandomData(lowerset)
  }
  if(numInput.checked){
    password += getRandomData(numberset)
  }
  if(symInput.checked){
    password += getRandomData(symbolset)
  }
  if(password.length < strength.value){
    return generatepassword(password)
  }
  passbox.innerText=truncateString(password, str.value)
}
document.getElementById("btn").addEventListener(
   "click", 
  function(){
    generatepassword();
  }
)
function truncateString(str,num){
  if(str.length > num){
    let subStr = str. substring(0,num)
    return subStr;
  }
  else{
    return str;
  }
}
getcolor();