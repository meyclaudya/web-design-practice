//class active menu
const navbarNav = document.querySelector
('.navbar-nav');

document.querySelector('#hamburger-menu')
.onclick = (e) => {
    navbarNav.classList.toggle('active');
    navbarNav.focus();
    e.preventDefault();
};


//class active search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

//class active shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

//click diluar elemen
const hamburger= document.querySelector('#hamburger-menu');
const searchButton= document.querySelector('#search-button');
const sc= document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !sc.contains(e.target)) {
        sc.classList.remove('active');
    }
});
 
//Modal box

const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelectorAll('.item-detail-button');

itemDetailButton.forEach((btn)=>{
    btn.onclick = (e) => {
        itemDetailModal.style.display='flex';
        e.preventDefault();
    };
});



//Tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display='none';
    e.preventDefault();
}

//klik diluar modal
const modal = document.querySelector('#item-detail-modal');
window.onclick = (e)=> {
    if(e.target === modal){
        modal.style.display = 'none';
    }
}

