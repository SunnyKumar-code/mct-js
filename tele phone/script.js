let tel = document.querySelector("#tel");
let prevValue ="";
let firstThreeValue;
tel.addEventListener("input",(e)=>{
  let inputValue=e.target.value;
  if(/\d+$/g.test(inputValue)){
    tel.value=inputValue;
  }else{
    tel.value=inputValue.substring(0,inputValue.length-1);
  }
    if(inputValue.length===4 && prevValue.length<inputValue.length){  
        firstThreeValue =  inputValue.substring(0,3);
        tel.value = `+(${firstThreeValue}) - ${inputValue[inputValue.length-1]}`
    }else if(inputValue.length>4 && prevValue.length>inputValue.length){
        tel.value= firstThreeValue
    }
    prevValue = inputValue;
       
    
})

