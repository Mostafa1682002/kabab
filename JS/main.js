// Start Header Action 
var navbar=document.querySelector('.nav-bar');
var dropmenu=document.querySelector('.drop-menu');
var closemenu=document.querySelector('.close-menu');
var layout=document.querySelector('.layout');

dropmenu.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    layout.classList.toggle('active');
});
closemenu.addEventListener('click',()=>{
    navbar.classList.remove('active')
    layout.classList.remove('active')
});
layout.addEventListener('click',()=>{
    navbar.classList.remove('active')
    layout.classList.remove('active')
})
