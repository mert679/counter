let decrease=document.querySelector(".decrease");
let reset=document.querySelector(".reset");
let increase=document.querySelector(".increase");
let board=document.querySelector(".board")
let count=0;
increase.addEventListener("click",()=>{
    count +=1;
    board.innerHTML=count
})
decrease.addEventListener("click",()=>{
    count -=1;
    board.innerHTML=count
})
reset.addEventListener("click",()=>{
    count = 0;
    board.innerHTML=count
})
