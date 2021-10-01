const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

const hiddenMobileMenu = () =>{
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menulinks.classList.remove('active');
    };
};
menulinks.addEventListener('click', hiddenMobileMenu);
Nav.addEventListener('click',hiddenMobileMenu);

function change(){
    document.querySelector()
}

