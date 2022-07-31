//Show NavBar

const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');
toggle.onclick = function(){
    nav.classList.toggle('show-nav')
}

// Remove NavBar

const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('show-nav');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Change Active Color ( We take all link and remove all active and give active to that element)

const linkColor = document.querySelectorAll('.nav-link');
// Function colorLink who remove active from all element and give active to that element what we press
function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active'));
        this.classList.add('active');
    }
}

linkColor.forEach(L => L.addEventListener('click',colorLink));