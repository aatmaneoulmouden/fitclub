const 
    header = document.getElementById('header'),
    logo = document.getElementById('logo'), 
    scrollToTop = document.getElementById('to-top'),
    swithBtn = document.querySelectorAll('.switch_btn'),
    price = document.querySelectorAll('.price'),
    swtch = document.getElementById('swtch');


/* ========== SCROLLING FUNCTION ========== */
window.addEventListener('scroll', scrolling);
scrolling();


function scrolling(){
    if(document.scrollTop > 150 || document.documentElement.scrollTop > 150){
        header.classList.add('header_onscroll');
        scrollToTop.style.display = 'flex';
    }
    else{
        header.classList.remove('header_onscroll');
        scrollToTop.style.display = 'none';
    }
}


/* ========== SCROLL TO TOP BUTTON ========== */
scrollToTop.onclick = function(){
    document.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/* ===== SHOW AND HIDE NAVBAR ===== */
var toggleBtn = document.getElementById('menu-toggle');

toggleBtn.onclick = function(){
    var navBar = document.getElementById('nav-menu');

    this.classList.toggle('fa-times');
    navBar.classList.toggle('show_menu');
}



/* ===== OPEN AND CLOSE RESERVATION PAGE ===== */
const 
    reserveBtn = document.querySelectorAll('.reserver_btn'),
    reservationForm = document.getElementById('reservation'),
    closeReserveForm = document.querySelector('.close'),
    selectPlan = document.querySelectorAll('.select_plan');

for(i=0; i<reserveBtn.length; i++){
    reserveBtn[i].onclick = function(){
        reservationForm.style.display = 'flex';
    }
}

for(i=0; i<selectPlan.length; i++){
    selectPlan[i].onclick = function(){
        reservationForm.style.display = 'flex';
    }
}

closeReserveForm.onclick = function(){
    reservationForm.style.display = 'none';
}