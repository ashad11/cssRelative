//Typing Script JS
var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "Digital Marketer", "Data Entry Operator"],
    typeSpeed: 80,
    backSpeed: 80,
});

var typed = new Typed(".typing-2",{
    strings: [ "Web Developer", "Web Designer", "Digital Marketer", "Data Entry Operator"],
    typeSpeed: 100,
    backSpeed: 60,
});

//Show/Hide FAQs answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }
    })
})

//show/hide nav menu

const  menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const colseBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', ()=>{
    menu.style.display = "flex";
    colseBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu

const closeNav = () =>{
    menu.style.display = "none";
    colseBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
colseBtn.addEventListener('click', closeNav);

//Nav color change on scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.
    toggle('window-scroll',  window.scrollY>100);
})