//Select element function 
const selectElement = function(element){
    return document.querySelector(element)
}  ;

var menuToogler = document.querySelector(".menu-toggle");
var body = document.querySelector(".container");
var navList = document.getElementById("nav-list");
var upcoming = document.querySelector("upcoming");

menuToogler.addEventListener('click', ()=>{
    body.classList.toggle("open");
    
});

document.querySelector(".nav-list").addEventListener("click", function () {
	body.classList.remove("open");
});

function buttonAlert(){
    alert("Event : Tree Plantation\r\nDate : 15th August 2021.\r\nVenue : Chatri Talao, Amt.\r\nTime : 10 am");
}

window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin:'left',
    duration: 1000,
    distance:'25rem',
    delay: 600
});

sr.reveal('.animate-right',{
    origin:'right',
    duration: 1000,
    distance:'25rem',
    delay: 600
});

sr.reveal('.animate-top',{
    origin:'top',
    duration: 1000,
    distance:'25rem',
    delay: 600
});

sr.reveal('.animate-bottom',{
    origin:'bottom',
    duration: 1000,
    distance:'25rem',
    delay: 600
});