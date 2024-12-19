
let password = document.querySelector("#password");
let upper = document.querySelector('#upper')
let lower = document.querySelector('#lower')
let symbol = document.querySelector('#Symbol')
let number = document.querySelector('#number')
let colorDiv = document.querySelector('.color')
let numLength = document.querySelector('#num')
let strength = document.querySelector("#st");


password.addEventListener("input",(e)=>{
  let inputValue = e.target.value;
  numLength.innerHTML = inputValue.length;
  const hasLowerCase = /[a-z]/.test(inputValue);
  const hasUpperCase = /[A-Z]/.test(inputValue);
  const hasSymbol = /[^a-zA-Z0-9]/.test(inputValue);
  const hasNumber = /\d/.test(inputValue);
  let strengthScore = 0 ;
 
  if(hasLowerCase){
    lower.style.color="green";
    strengthScore++;
  }else{
    lower.style.color="gray";
  }
  if(hasUpperCase){
    upper.style.color="green";
    strengthScore++;
  }else{
    upper.style.color="gray";
  }
  if(hasSymbol){
    symbol.style.color="green";
    strengthScore++;
  }else{
    symbol.style.color="gray";
  }
  if(hasNumber){
    number.style.color="green";
    strengthScore++;
  }else{
    number.style.color="gray";
  }

 if(inputValue.length>8)strengthScore++;

 if(strengthScore>=5){
    colorDiv.style.backgroundColor="green";
    strength.innerHTML="Head"
 }else if(strengthScore>=2){
    colorDiv.style.backgroundColor="orange";
    strength.innerHTML="Medium"
 }else if(strengthScore===1){
    colorDiv.style.backgroundColor="red";
    strength.innerHTML="Weak"
 }else {
    colorDiv.style.backgroundColor = "gray";
    strength.innerHTML = "Weak";
}
 
colorDiv.style.width = (strengthScore * 20) + "%";

})
