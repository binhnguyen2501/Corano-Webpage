/*Sticky Navbar + Hamburger Navbar*/
const height = document.querySelector('header');
const navbarHeight = height.clientHeight;

const userNavbar = document.querySelector('.header__navbar--user');
const mainNavbar = document.querySelector('.header__navbar--main');
const mobileNavbar = document.querySelector('.header__navbar--main---mobile');
const tabletNavbar = document.querySelector('.header__navbar--main---tablet');

const mainNavbarTablet = document.querySelector('.header__navbar--main---tablet');
const NavbarTablet = document.querySelector('.navbar--mainTablet');
const mainNavbarMobile = document.querySelector('.header__navbar--main---mobile');
const NavbarMobile = document.querySelector('.navbar--mainMobile');

const TogglerNavbar = document.querySelector('.header__toggler--navbar');
const BackTogglerNavbar = document.querySelector('.Close-btn');
const TogglerNavbarMobile = document.querySelector('.header__toggler--navbar---Mobile');
const BackTogglerNavbarMobile = document.querySelector('.Close-btn--Mobile');

const dropDownBtn = document.querySelectorAll('.alldropDown');
const dropDownBtn2 = document.querySelectorAll('.alldropDown2');

const mainNavbar_search = document.querySelector('.navbar--search');
const mainNavbar_wrapper = document.querySelector('.navbar--wrapper');
const mainNavbar_title = document.querySelector('.main-title');
const mainNavbar_title__img = document.querySelector('.main-title img');
const mainNavbar_main = document.querySelector('.navbar--main');
const home_menu__list = document.querySelector('.home_menu--list');
const page_menu__list = document.querySelector('.page_menu--list');
const shop_menu__list = document.querySelector('.navbar--main_shop .shop_menu');
const blog_menu__list = document.querySelector('.navbar--main_blog .blog_menu');

const backHomeBtn = document.querySelector('.backHomeBtn');
var status_backHomeBtn = false;

window.addEventListener('scroll' , function(){
    if(status_backHomeBtn == false){
        if(window.scrollY >= navbarHeight){
            userNavbar.classList.add('user_navbarFixed');
            mainNavbar.classList.add('main_navbarFixed');
            mobileNavbar.classList.add('main_navbarFixed');
            tabletNavbar.classList.add('main_navbarFixed');
            
            mainNavbar_title.classList.add('mainTitleFixed');
            mainNavbar_title__img.classList.add('mainTitleImgFixed');
            mainNavbar_search.classList.add('navbarSearchFixed');
            mainNavbar_main.classList.add('navbarMainFixed');
            mainNavbar_wrapper.classList.add('navbarWrapperFixed');
            home_menu__list.classList.add('FixedAll');
            page_menu__list.classList.add('FixedAll');
            shop_menu__list.classList.add('FixedAll');
            blog_menu__list.classList.add('FixedAll');
            
            backHomeBtn.classList.remove('d-none');
            backHomeBtn.classList.add('backHomeBtn_FixedIn');
            setTimeout(function(){
                backHomeBtn.classList.remove('backHomeBtn_FixedIn');
            }, 700);
            status_backHomeBtn = true;
        }
    }
    else if(status_backHomeBtn == true){
        if(window.scrollY < navbarHeight){
            userNavbar.classList.remove('user_navbarFixed');
            mainNavbar.classList.remove('main_navbarFixed');
            mobileNavbar.classList.remove('main_navbarFixed');
            tabletNavbar.classList.remove('main_navbarFixed');
            
            mainNavbar_title.classList.remove('mainTitleFixed');
            mainNavbar_title__img.classList.remove('mainTitleImgFixed');
            mainNavbar_search.classList.remove('navbarSearchFixed');
            mainNavbar_main.classList.remove('navbarMainFixed');
            mainNavbar_wrapper.classList.remove('navbarWrapperFixed');
            home_menu__list.classList.remove('FixedAll');
            page_menu__list.classList.remove('FixedAll');
            shop_menu__list.classList.remove('FixedAll');
            blog_menu__list.classList.remove('FixedAll');

            status_backHomeBtn = false;
            backHomeBtn.classList.add('backHomeBtn_FixedOut');
            setTimeout(function(){
                backHomeBtn.classList.remove('backHomeBtn_FixedOut');
                backHomeBtn.classList.add('d-none');
            }, 700);
        }
    }
});

const overlay = document.querySelector('.overlay');

TogglerNavbar.addEventListener('click' , function(){
    NavbarTablet.classList.add('clickActive');
    overlay.classList.add('clickActive');
});
BackTogglerNavbar.addEventListener('click', function(){
    NavbarTablet.classList.remove('clickActive');
    overlay.classList.remove('clickActive');
})
TogglerNavbarMobile.addEventListener('click' , function(){
    NavbarMobile.classList.add('clickActive');
    overlay.classList.add('clickActive');
});
BackTogglerNavbarMobile.addEventListener('click', function(){
    NavbarMobile.classList.remove('clickActive');
    overlay.classList.remove('clickActive');
})

dropDownBtn.forEach(el => {
    el.addEventListener('click',function(){
        this.classList.toggle('fa-angle-right');
        this.classList.toggle('fa-angle-down');
        this.nextElementSibling.classList.toggle('show');
    })
});
dropDownBtn2.forEach(el2 => {
    el2.addEventListener('click',function(){
        this.classList.toggle('fa-angle-right');
        this.classList.toggle('fa-angle-down');
        this.nextElementSibling.classList.toggle('show');
    })
});
