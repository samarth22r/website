let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
let top = window.scrollY;
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove(bx - x);
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Frotend Developer', 'Cyber Security Analyst', 'Nature Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
// function Moreless() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("btn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more"; 
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less"; 
//       moreText.style.display = "inline";
//     }
//   }
const readMoreBtn= document.querySelector('.read-more-btn');
const text = document.querySelector('.text');
readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
    
})


        // function MoreLess(){
        //     var dots= document.getElementById("dots");
        //     var invisibleText=document.getElementById("invisible-text");
        //     var btnText=document.getElementById("btn");
        //     if(dots.style.display!="none"){
        //         dots.style.display="none";
        //         invisibleText.style.display="inline";
        //         btnText.innerHTML="Read Less";
        //     } 
        //     else{
        //         dots.style.display="inline";
        //         invisibleText.style.display="none";
        //         btnText.innerHTML="Read More";
        //     }  
        // }
        
        
