let row =document.querySelector("#rows")
let cols = document.querySelector("#cols")
const table = document.querySelector("#table");
  

function makeTable(){
    let count = 1;
    table.innerHTML="";
   for(let i = 0 ;i<row.value;i++){
    let tableRow = document.createElement('tr');
    for(let j = 0;j<cols.value;j++){
        let tableCols= document.createElement('td');
        tableCols.innerText=count;
        count++
        tableRow.appendChild(tableCols)
    }
    table.appendChild(tableRow)
   }
    
}
row.addEventListener('change',makeTable);
cols.addEventListener('change',makeTable);
makeTable()