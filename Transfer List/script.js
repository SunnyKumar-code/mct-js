const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const allright = document.querySelector("#allright");
const allleft = document.querySelector("#allleft");
// all sift to right to left 
allright.addEventListener("click", () => {
     const checkboxes = box1.querySelectorAll("label");
     checkboxes.forEach((checkbox) => {
         box2.appendChild(checkbox);
     });
     updateButtonStates();
 });
//all sift to left to right
 allleft.addEventListener("click", () => {
     const checkboxes = box2.querySelectorAll("label");
     checkboxes.forEach((checkbox) => {
         box1.appendChild(checkbox);
     });
     updateButtonStates();
 });
 const left = document.querySelector("#left");
 const right = document.querySelector("#right");
 // checked left to right
 left.addEventListener("click",()=>{
 const items = box2.querySelectorAll("label");
 items.forEach((item)=> {
     const checkbox = item.querySelector("input[type='checkbox']");
     if(checkbox.checked) {
          box1.appendChild(item)
     }
 })
 updateButtonStates();

 })
// check right to left
 right.addEventListener("click",()=>{
     const items = box1.querySelectorAll("label");
     items.forEach((item)=> {
         const checkbox = item.querySelector("input[type='checkbox']");
         if(checkbox.checked) {
              box2.appendChild(item)
         }
     })
     updateButtonStates();
     })
     function updateButtonStates() {
        const box1Children = box1.children.length;
        const box2Children = box2.children.length;
        allright.disabled = box1Children === 0;
        allleft.disabled = box2Children === 0;
        const box1Checked = box1.querySelector("input[type='checkbox']:checked");
        const box2Checked = box2.querySelector("input[type='checkbox']:checked");
        left.disabled = !box2Checked;
        right.disabled = !box1Checked;
        if(box1Children > 0) {
            right.disabled =false;
        }
        if(box2Children > 0) {
            left.disabled = false
        }

    }
    
     updateButtonStates();
   