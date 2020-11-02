/*Slide banner*/
const page__banner_slider = document.querySelector('.page__banner--slider');
const banner_sliderImg = document.querySelectorAll('.banner--slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 1;
const sizeImg = banner_sliderImg[counter].clientWidth;
page__banner_slider.style.transform = "translateX(" + (-sizeImg * counter) + "px)" ;
nextBtn.addEventListener('click' , function(){
    if(counter >= banner_sliderImg.length - 1){
        return;
    }
    page__banner_slider.style.transition = "transform .4s ease-in-out";
    counter++;
    page__banner_slider.style.transform = "translateX(" + (-sizeImg * counter) + "px)" ;
});
prevBtn.addEventListener('click' , function(){
    if(counter <= 0) {
        return;
    }
    page__banner_slider.style.transition = "transform .4s ease-in-out";
    counter--;
    page__banner_slider.style.transform = "translateX(" + (-sizeImg * counter) + "px)" ;
});
page__banner_slider.addEventListener('transitionend' , function(){
    if(banner_sliderImg[counter].id === 'lastClone'){
        page__banner_slider.style.transition = "none";
        counter = banner_sliderImg.length - 2;
        page__banner_slider.style.transform = "translateX(" + (-sizeImg * counter) + "px)" ;
    }
    if(banner_sliderImg[counter].id === 'fristClone'){
        page__banner_slider.style.transition = "none";
        counter = banner_sliderImg.length - counter;
        page__banner_slider.style.transform = "translateX(" + (-sizeImg * counter) + "px)" ;
    }
});
/*Slider banner button*/
const sliderBtn_prev = document.getElementById('page__banner--slider-Btn1');
const sliderBtn_next = document.getElementById('page__banner--slider-Btn2');
const page__banner = document.querySelector('.page__banner');
page__banner.addEventListener('mouseover', function(){
    sliderBtn_prev.style.cssText = "visibility: visible;" + "opacity:1;" + "transition: all .3s ease-out"
    sliderBtn_next.style.cssText = "visibility: visible;" + "opacity:1;" + "transition: all .3s ease-out"
});
page__banner.addEventListener('mouseleave', function(){
    sliderBtn_prev.style.cssText = "visibility: hidden;" + "opacity:0;" + "transition: all .3s ease-out"
    sliderBtn_next.style.cssText = "visibility: hidden;" + "opacity:0;" + "transition: all .3s ease-out"
});
/*Sticky Navbar*/
const height = document.querySelector('header')
const navbarHeight = height.clientHeight;

const userNavbar = document.querySelector('.header__navbar--user');
const mainNavbar = document.querySelector('.header__navbar--main');
const mainNavbar_search = document.querySelector('.navbar--search');
const mainNavbar_wrapper = document.querySelector('.navbar--wrapper');
const mainNavbar_title = document.querySelector('.main-title');
const mainNavbar_title__img = document.querySelector('.main-title img');
const mainNavbar_main = document.querySelector('.navbar--main');

const backHomeBtn = document.querySelector('.backHomeBtn');
window.addEventListener('scroll' , function(){
    if(window.scrollY >= navbarHeight){
        userNavbar.classList.add('user_navbarFixed');
        mainNavbar.classList.add('main_navbarFixed');
        mainNavbar_search.style.cssText = 'display: none';
        mainNavbar_title.style.cssText = 'margin-left: 12rem;' + 'width: 13.66666667%' + 'flex: 0';
        mainNavbar_title__img.style.cssText = 'width: 47.5%;';
        mainNavbar_main.style.cssText = 'flex: 1;' + 'float: left;';
        mainNavbar_wrapper.style.cssText = 'width: 25%' + 'flex: 0;' + 'float: right;' + 'margin-right: 12rem;';

        backHomeBtn.classList.add('backHomeBtn_FixedIn');
        backHomeBtn.classList.remove('backHomeBtn_FixedOut');
    }
    else{
        userNavbar.classList.remove('user_navbarFixed');
        mainNavbar.classList.remove('main_navbarFixed');
        mainNavbar_search.style.cssText = 'display: static';
        mainNavbar_title.style.cssText = 'margin-left: 7.5rem;' + 'flex: .28;';
        mainNavbar_title__img.style.cssText = ' width: 45%;';
        mainNavbar_main.style.cssText = 'flex: .8;';
        mainNavbar_wrapper.style.cssText = 'flex: .18;';

        backHomeBtn.classList.remove('backHomeBtn_FixedIn');
        backHomeBtn.classList.add('backHomeBtn_FixedOut');
    }
});


