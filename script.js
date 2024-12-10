// anagram in js

// let a = 'bnagram';
// let b = 'nagaram';

// function isAnagram(a, b) {
//      let str1 = a.split('').sort().join('');
//      let str2 = b.split('').sort().join('');
// return str1 === str2

// }
// console.log(isAnagram(a, b))


// is palindrom in js


// let str = "madam";

// function isPalindrome(str){
//     let restr = str.split('').reverse().join('');
//     return str=== restr
// }
// console.log(isPalindrome(str));




// remove dublicate in string

// let str = "hello world";

// let unstr = new Set(str);
// console.log(unstr);

// let res = "";

// for(a of unstr){
//     if(a!==" "){
//         res+=a;
//     }


// }
// console.log(res);


// dumru pattran

// let  n = 21;
// let toprow = Math.ceil(n/2)
// let st = n;
// let sp = 0;
// let row="";
// for(let i = 1 ;i<=toprow;i++){
//     for(let j = 0 ;j<sp;j++){
//         row+=" ";
//     }
//     for(let k = 0 ; k<st ;k++){
//         row+="*";
//     }
//     console.log(row);
//     row="";
//     sp++;
//     st-=2;

// }

// let bottomrow = Math.floor(n/2);
// st = 3;
// sp = Math.floor(n/2)-1;

// for(let i = 1 ;i<=bottomrow;i++){
//     for(let j = 0 ;j<sp;j++){
//         row+=" ";
//     }
//     for(let k = 0 ; k<st ;k++){
//         row+="*";
//     }
//     console.log(row);
//     row="";
//     sp--;
//     st+=2;

// }


// dimond pattran


// let n = 11;
// let toprow = Math.ceil(n / 2);
// let st = 1;
// let sp = Math.floor(n / 2);
// let row = "";
// for (let i = 0; i < toprow; i++) {
//     for (let j = 0; j < sp; j++) {
//         row += " ";
//     }
//     for (let k = 0; k < st; k++) {
//         row += "*";

//     }
//     sp--;
//     st += 2;
//     console.log(row);
//     row = "";
// }
// sp = 1;
// st = n - 2;
// let bottomrow = Math.floor(n / 2);
// for (let i = 0; i < bottomrow; i++) {
//     for (let j = 0; j < sp; j++) {
//         row += " ";
//     }
//     for (let k = 0; k < st; k++) {
//         row += "*";

//     }
//     sp++;
//     st -= 2;
//     console.log(row);
//     row = "";
// }


// 1
// 12
// 123
// 1234
// 12345

// let  n = 5 ;
// let tr = n;
// let pt="";

// for(let i = 1 ;i <= tr ;i++){
//     for(let j = 1;j<=i;j++){
//         pt+=`${j}`
//     }
//     console.log(pt);
//     pt="";
// }


// let arr = [2,5,10,15,82,2,42,658,12,]
// arr.sort((a,b)=>b-a);
// console.log(arr)

// let arr = [2,5,10,15,82,2,42,658,12,];

// let unarr = new Set(arr);
// console.log(unarr);
// let rsarr=[];
// for(o of unarr){
//     rsarr.push(o);
// }
// console.log(rsarr);

// let arr = [2,5,10,15,82,2,42,658,12];
// let max = 0;
// for(i of arr){
//     max = Math.max(i,max);
// }
// console.log(max);



// Reverse a sentence without inbuilt

// function reverseSentence(sentence) {
//     let reversed = ""; // To store the final reversed sentence

//     let word = ""; // To accumulate the current word
    
//     for (let i = sentence.length - 1; i >= 0; i--) {
//         if (sentence.charAt(i) === " ") { // If space is found, add the word to the result
//             if (word) { // Add only if the current word is not empty
//                 reversed = reversed ? word + " " + reversed : word;
//                 word = ""; // Reset the word
//             }
//         } else {
//             word = sentence.charAt(i) + word; // Prepend the character to the current word
//         }
//     }
    
//     if (word) { // Add the last word if it exists
//         reversed = reversed ? word + " " + reversed : word;
//     }
    
//     return reversed.trim(); // Ensure no leading or trailing spaces
// }

// Example usage


const sentence = "Hello    World from    JavaScript";
sentence.trim();
let wordarr= sentence.split(" ")

let res = "";
for(let i = wordarr.length-1 ; i>=0 ; i--){
    if(wordarr[i]!==""){
        res += wordarr[i]+" ";
    }

}
console.log(res);


 


// let res = sentence.split(" ").reverse().join(" ");
//   console.log(res.trim());

  








