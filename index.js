/*Slide banner*/
document.addEventListener('DOMContentLoaded', function(){
    const slides = document.querySelectorAll('.page__banner--slider ul li');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slidesBtn = document.querySelector('.slidesBtn');

    var index = 0,
        trangThai = 'dangDungYen';

    let timeDelay = setInterval(AutoSlide,4000);
    // xử lý tự động chuyển slide
    function AutoSlide(){		
        NextSlide();
    };
    function resetAutoSlide(){
        clearInterval(timeDelay);
        timeDelay = setInterval(AutoSlide,4000);
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

    function eachSlide(){
        for(let i = 0; i < slides.length; i++){
            document.querySelector('.slidesBtn .Btn-' + (i+1) + '');
        }
    }
    eachSlide();

    function updateBtnSlide(){
        for(let i = 0; i < slidesBtn.children.length;i++){
            slidesBtn.children[i].classList.remove('ActiveBtn');
        }
        slidesBtn.children[index].classList.add('ActiveBtn');
    }

    nextBtn.addEventListener('click', function(){
        NextSlide();
        updateBtnSlide();
        resetAutoSlide();
    });
    prevBtn.addEventListener('click',function(){
        PrevSlide();
        updateBtnSlide();
        resetAutoSlide();
    });

    for(let i=0; i< slides.length; i++){
        clearInterval(timeDelay);
        const eachBtn = document.querySelector('.slidesBtn .Btn-' + (i+1) + '');
        eachBtn.addEventListener('click',function(){
            for(let x=0; x< slides.length; x++){
                document.querySelector('.slidesBtn .Btn-' + (x+1) + '').classList.remove('ActiveBtn');
                slides[x].classList.remove("active");
            }
            this.classList.add('ActiveBtn');
            var nutkichhoat = this;
            var vitrinut = 0;
            for(vitrinut=0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++){}
            slides[vitrinut].classList.add('active');
        })
    }
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