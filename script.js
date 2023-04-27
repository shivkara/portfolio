// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('menuicon')
    navbar.classList.toggle('active')
}




// scroll section acvtive link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    // remove taggle icon and navbar link
    menuIcon.classList.remove('fa-solid fa-x')
    navbar.classList.remove('active')

};
  

// scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:2000,
    Delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:
     'bottom' });
     ScrollReveal().reveal('.home-content h1,.about-Img', { origin:'left' });
     ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });
  

// =============================typed js==========
const typed = new Typed('#multiple-text', {
    strings: ['Frontend Developer', 'youtuber', 'blogger'],
    typespeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
})
// import Typed from 'typed.js';

// const typed = new Typed('.multiple-text', {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 50,
// });