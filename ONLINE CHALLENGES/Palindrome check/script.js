const input = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click",()=>{
    const value = input.value.toLowerCase();
    let reverseText=value.split("").reverse().join("");
    if(value == reverseText){
        p.innerHTML = "Palindrome Text";
        p.style.color="green";
    }else{
        p.innerHTML = "Not Palindrome Text";
        p.style.color="red";
    }
    input.value='';
})
