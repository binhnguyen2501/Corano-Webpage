/*Slide banner*/
document.addEventListener('DOMContentLoaded', function(){
    const slides = document.querySelectorAll('.page__banner--slider ul li');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    var index = 0,
        trangThai = 'dangDungYen';

    let timeDelay = setInterval(AutoSlide,9000);
    // xử lý tự động chuyển slide
    function AutoSlide(){		
        NextSlide();
    };
    function resetAutoSlide(){
        clearInterval(timeDelay);
        timeDelay = setInterval(AutoSlide,9000);
    };
    function NextSlide(){
        // kiểm tra trạng thái
        if (trangThai == 'dangChuyenDong'){ // nếu đang chuyển động k cho next
            return false;
        }
        trangThai = 'dangChuyenDong';
        trangThai2ChuyenDong = 0;
    
        // xác định chỉ số phần tử tiếp theo dựa trên phần tử hiện tại   
        var phanTuHienTai = slides[index]; // lấy ra phần tử hiện tại
        if (index < slides.length - 1) { // chưa đến cuối -> thêm 1 vị trí
            index += 1;
        }
        else { // khi đến slide cuối cho chỉ số về lại slide đầu
            index = 0;
        }
        var phanTuTiepTheo = slides[index];   
        
         // check chuyển động kết thúc
        var xuLyHienTaiKetThucCD = function (){
            this.classList.remove('active');
            this.classList.remove('bienMatKhiNext'); 
            trangThai2ChuyenDong++;
            if (trangThai2ChuyenDong == 2) { // sau khi chuyển động xong chuyển trạng thái về đứng yên và có thể bấm tiếp tục
                trangThai = 'dangDungYen';
            }       
        }
        phanTuHienTai.addEventListener('webkitAnimationEnd', xuLyHienTaiKetThucCD);
    
        var xuLyTiepTheoKetThucCD = function (){
            this.classList.add('active');
            this.classList.remove('hienKhiNext');
            trangThai2ChuyenDong++;
            if (trangThai2ChuyenDong == 2) { // sau khi chuyển động xong chuyển trạng thái về đứng yên và có thể bấm tiếp tục
                trangThai = 'dangDungYen';
            }   
        }
        phanTuTiepTheo.addEventListener('webkitAnimationEnd', xuLyTiepTheoKetThucCD);
    
        // tạo chuyển động sau khi xác định 2 phần tử
        phanTuHienTai.classList.add('bienMatKhiNext');
        phanTuTiepTheo.classList.add('hienKhiNext');
    
        //  trangThai = 'dangDungYen';
    };
    function PrevSlide(){
        // kiểm tra trạng thái
        if (trangThai == 'dangChuyenDong') { // nếu đang chuyển động k cho next
            return false;
        }
        trangThai = 'dangChuyenDong';
        trangThai2ChuyenDong = 0;

        var phanTuHienTai = slides[index]; // lấy ra phần tử hiện tại
        if (index > 0) { // nếu lớn hơn 0 là chưa về đầu -> trừ đi 1 vị trí
            index--;
        }
        else { // đang ở đầu nên k lùi được nữa -> cho vị trí bằng vị trí cuối cùng của slide
            index = slides.length - 1;
        }
        var phanTuTiepTheo = slides[index];
    
        // check chuyển động kết thúc
        var xuLyHienTaiKetThucCD = function (){
            this.classList.remove('active');
            this.classList.remove('bienMatKhiPrev'); 
            trangThai2ChuyenDong++;
            if (trangThai2ChuyenDong == 2) { // sau khi chuyển động xong chuyển trạng thái về đứng yên và có thể bấm tiếp tục
                trangThai = 'dangDungYen';
            }          
        }
        phanTuHienTai.addEventListener('webkitAnimationEnd', xuLyHienTaiKetThucCD);

        var xuLyTiepTheoKetThucCD = function (){
            this.classList.add('active');
            this.classList.remove('hienKhiPrev');
            trangThai2ChuyenDong++;
            if (trangThai2ChuyenDong == 2) { // sau khi chuyển động xong chuyển trạng thái về đứng yên và có thể bấm tiếp tục
                trangThai = 'dangDungYen';
            }   
        }
        phanTuTiepTheo.addEventListener('webkitAnimationEnd', xuLyTiepTheoKetThucCD);

        // tạo chuyển động sau khi xác định 2 phần tử
        phanTuHienTai.classList.add('bienMatKhiPrev');
        phanTuTiepTheo.classList.add('hienKhiPrev');
    };
    nextBtn.addEventListener('click', function(){
        NextSlide();
        resetAutoSlide();
    });
    prevBtn.addEventListener('click',function(){
        PrevSlide();
        resetAutoSlide();
    });   
});
/*Slider banner button*/
const sliderBtn_prev = document.getElementById('page__banner--slider-Btn1');
const sliderBtn_next = document.getElementById('page__banner--slider-Btn2');
const page__banner = document.querySelector('.page__banner');
page__banner.addEventListener('mouseover', function(){
    sliderBtn_prev.style.cssText = "visibility: visible;" + "opacity:1;" + "transition: all .3s ease-out;"
    sliderBtn_next.style.cssText = "visibility: visible;" + "opacity:1;" + "transition: all .3s ease-out;"
});
page__banner.addEventListener('mouseleave', function(){
    sliderBtn_prev.style.cssText = "visibility: hidden;" + "opacity:0;" + "transition: all .3s ease-out;"
    sliderBtn_next.style.cssText = "visibility: hidden;" + "opacity:0;" + "transition: all .3s ease-out;"
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
            mainNavbar_search.style.cssText = 'display: none;';
            mainNavbar_title.style.cssText = 'margin-left: 12rem;' + 'width: 13.66666667%' + 'flex: 0;';
            mainNavbar_title__img.style.cssText = 'width: 48%;';
            mainNavbar_main.style.cssText = 'flex: 1;' + 'float: left;';
            mainNavbar_wrapper.style.cssText = 'width: 25%' + 'flex: 0;' + 'float: right;' + 'margin-right: 12rem;';
            home_menu__list.style.cssText = 'top: 39px;';
            page_menu__list.style.cssText = 'top: 39px;';
            shop_menu__list.style.cssText = 'top: 39px;';
            blog_menu__list.style.cssText = 'top: 39px;';
    
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
            mainNavbar_search.style.cssText = 'display: static;';
            mainNavbar_title.style.cssText = 'margin-left: 7.5rem;' + 'flex: .28;';
            mainNavbar_title__img.style.cssText = ' width: 45%;';
            mainNavbar_main.style.cssText = 'flex: .8;';
            mainNavbar_wrapper.style.cssText = 'flex: .18;';
            home_menu__list.style.cssText = 'top: 61.5px;';
            page_menu__list.style.cssText = 'top: 61.5px;';
            shop_menu__list.style.cssText = 'top: 61.5px;';
            blog_menu__list.style.cssText = 'top: 61.5px;';
    
            status_backHomeBtn = false;
            backHomeBtn.classList.add('backHomeBtn_FixedOut');
            setTimeout(function(){
                backHomeBtn.classList.remove('backHomeBtn_FixedOut');
                backHomeBtn.classList.add('d-none');
            }, 700);
        }
    }
});
/*Auto Hastag*/
var index = 0;
AutoHastag();
function AutoHastag(){
    const x = document.querySelectorAll('.content_Hastag');
    for (let i = 0; i < x.length; i++){
        x[i].style.cssText = 'display: none;';
    }
    // xác định ban đầu tất cả các content đều display none

    index++;//0 1 2 3 4

    if (index >= x.length){ // (index >= 5)
        index = 0;
    }

    x[index].style.cssText = 'display: block;';
    setTimeout(AutoHastag, 2500);    
}
/*New Arrivals*/
const arrivalLink = document.querySelectorAll('.store__Arrivals-wrapper--inner .inner---panel .panel');
const arrivalContent = document.querySelectorAll('.store__Arrivals-wrapper--innerContent .innerContent---panel .panelText');

for(let index1 = 0; index1 < arrivalLink.length; index1++){

    const panelDOM = document.querySelector('.inner---panel .panel.panel-' + (index1+1) + '');// panelDOM = panel-1; panel-2; panel-3
    const panelContentDOM = document.querySelector('.innerContent---panel .panelText.panelText-' + (index1+1) + '');// panelContentDOM = panelText-1; panelText-2; panelText-3

    panelDOM.addEventListener('click',function(){   
        for(let index2 = 0 ; index2 < arrivalLink.length; index2++){
            document.querySelector('.inner---panel .panel.panel-' + (index2+1) + '').classList.remove('panelActive'); 
            document.querySelector('.innerContent---panel .panelText.panelText-' + (index2+1) + '').classList.remove('panelActive');  
        };
        // remove hết tất cả panelActive để khi click chỉ cần add panelActive rồi sau khi click tiếp theo thì lại remove hết tất cả trừ phần tử đang add (xác định ban đầu các class đều không có panelActive)
        this.classList.add('panelActive');
        panelContentDOM.classList.add('panelActive');
    })    
}