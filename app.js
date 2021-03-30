let count=0;
const board=document.querySelector(".board");
const btns=document.querySelectorAll(".btn");
btns.forEach(function(btn){
    btn.addEventListener("click",function(r){
        const styles=r.currentTarget.classList
        if (styles.contains("decrease")) {
            count --
        }
        
        else if (styles.contains("increase")){
            count++
        }
        if (styles.contains("reset")){
            count=0
        }
        if (count>0) {
            board.style.color="green"
        }
        if (count<0) {
            board.style.color="red"
        }
        if (count===0) {
            board.style.color="yellowgreen"
        }
        
        
        board.textContent=count;
    })
})
