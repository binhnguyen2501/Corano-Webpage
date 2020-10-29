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

