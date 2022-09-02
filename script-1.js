let answer=document.getElementsByClassName('accordion');
Array.from(answer).forEach((event)=>{
    event.addEventListener('click',()=>{
        if(event.classList.contains("active")){
            event.classList.remove("active");
        }
        else{
            event.classList.add("active");
        }
    })
})
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let navLink= document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
Array.from(navLink).forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
let icon=document.querySelector('#icon');
icon.addEventListener("click",()=>{
    location.href="login.html";

})
let icon1=document.querySelector('#icon1');
icon1.addEventListener("click",()=>{
    location.href="signup.html"
})
let count1="";
let setint1=setInterval(myfunction1,100);

function myfunction1(){
   let count2=document.querySelector('#count1');
   count2.innerHTML=++count1;
   if(count1===50){
       clearInterval(setint1);
   }
}
let count2="";
let setint2=setInterval(myfunction2,100);

function myfunction2(){
   let count3=document.querySelector('#count2');
   count3.innerHTML=++count2;
   if(count2===70){
       clearInterval(setint2);
   }
}


let count3="";
let setint3=setInterval(myfunction3,100);

function myfunction3(){
   let count4=document.querySelector('#count3');
   count4.innerHTML=++count3;
   if(count3===200){
       clearInterval(setint3);
   }
}
