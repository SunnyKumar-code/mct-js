let side = document.querySelector("#side");
let side2 =document.querySelector("#side2");
let info = document.querySelector("#info");
let  mass = document.querySelector('#mass');
let duration = document.querySelector("#duration");
let durOut = document.querySelector("#duration-output");
let tosterDiv = document.querySelector("#toster-container");


let submit = document.querySelector(".btn");
submit.addEventListener("click",()=>{
   
    setInterval(()=>{
        if(side.value === "top" && side2.value ==="left" ) {
       
            if(info.value==="normal"){
    
    
            }else if(info.value==="error"){
    
            }else if(info.value==="success"){
    
            }else if(info.value==="warning"){
    
            }else if(info.value==="info"){
    
            }
    
    
        } else if(side.value === "top" && side2.value ==="right")  {
            if(info.value==="normal"){
    
    
            }else if(info.value==="error"){
    
            }else if(info.value==="success"){
    
            }else if(info.value==="warning"){
    
            }else if(info.value==="info"){
    
            }
    
        }else if(side.value === "bottom" && side2.value ==="left"){
            if(info.value==="normal"){
    
    
            }else if(info.value==="error"){
    
            }else if(info.value==="success"){
    
            }else if(info.value==="warning"){
    
            }else if(info.value==="info"){
    
            }
    
        }else if(side.value === "bottom" && side2.value ==="right"){
            if(info.value==="normal"){
    
    
            }else if(info.value==="error"){
    
            }else if(info.value==="success"){
    
            }else if(info.value==="warning"){
    
            }else if(info.value==="info"){
    
            }
    
        }
    },duration.value*1000);
    clearInterval()
  
})
function showVal(value){
    durOut.innerHTML =value;
}
