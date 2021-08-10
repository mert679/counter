var h1 = document.querySelector("h1")
var btn = document.querySelector(".btn")

if(!localStorage.getItem("counter")){
  localStorage.setItem("counter",0)
}

function count(){
  let counter= localStorage.getItem("counter");
  counter++
  h1.innerHTML=counter;
  localStorage.setItem("counter",counter)
}
btn.addEventListener("click",count)
document.addEventListener("DOMContentLoaded",()=>{
  h1.innerHTML=localStorage.getItem("counter")
})
