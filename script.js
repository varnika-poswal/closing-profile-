var closeBtn=document.getElementById("close");
//console.log(closeBtn);
closeBtn.addEventListener("click",()=>{
    //console.log(1);
    //console.log(closeBtn.parentElement.parentElement);
    const close=closeBtn.parentElement.parentElement;
    close.style.display="none";
    console.log("closed");
})