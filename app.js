const scr=document.getElementById("nums");
const compimg=document.getElementById("cid");
const uimg=document.getElementById("uid");
document.getElementById("stone").addEventListener("click",playSt);
document.getElementById('paper').addEventListener("click",playP);
document.getElementById('scissors').addEventListener('click',playSc);
var user=0,comp=0;



function playSt(){
    const x=Math.floor(Math.random()*3);
    if(x==0) {
        user++;
        scr.innerText=user+":"+comp;
        alert("The computer chose Scissors! YOU WIN !!!!");
    }
    else if(x==1){
        comp++;
        scr.innerText=user+":"+comp;
        alert("The computer chose Paper. You lose :'(");
    }
    else alert("It's a Tie, Try Again!");

     
}
function playP(){
    const x=Math.floor(Math.random()*3);
    if(x==0) {
        user++;
        scr.innerText=user+":"+comp;
        alert("The computer chose Stone! YOU WIN !!!!");
    }
    else if(x==1){
        comp++;
        scr.innerText=user+":"+comp;
        alert("The computer chose Scissors. You lose :'(");
    }
    else alert("It's a Tie, Try Again!");

}
function playSc(){
    const x=Math.floor(Math.random()*3);
    if(x==0) {
        user++;
        scr.innerText=user+":"+comp;
        alert("The computer chose Paper! YOU WIN !!!!");
    }
    else if(x==1){
        comp++;
        scr.innerText=user+":"+comp;
        alert("The computer chose Stone. You lose :'(");
    }
    else alert("It's a Tie, Try Again!");

}