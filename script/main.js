//Change header layout when resizing.
const header =document.querySelector('.header');
const cart = document.querySelector('.cart-area');
const contentArea = document.querySelector('#fullpage');
const sidebar = document.querySelector('.sidebar');

function resize(){
    if(window.innerWidth > 1600){
        header.classList.remove('header-small-width');
        header.classList.remove('header-mid-width');
        header.children[0].children[0].children[1].classList.add('hide-it');
    } 


    else if(window.innerWidth > 1024){
        header.classList.remove('header-small-width');
        header.classList.add('header-mid-width');
        header.children[0].children[1].classList.remove('hide-it');
        for (let i=0;i<header.children[0].children[2].children.length;i++){
            if(i>=header.children[0].children[2].children.length-2){
                header.children[0].children[2].children[i].classList.remove('move-icon-to-left');
            }else{
                header.children[0].children[2].children[i].classList.remove('hide-it');
            }
        }
        header.children[0].children[0].classList.remove('header-logo-small');
        header.children[0].children[0].children[1].classList.add('hide-it');


        for(let i =0; i<fullpage.length;i++){
            contentArea.children[i].children[0].children[1].classList.remove('section-button-small');
        }


        cart.classList.remove('cart-area-small');
        cart.children[0].classList.remove('cart-content-small');
        cart.children[0].children[0].classList.remove('cart-title-small');
        cart.children[0].children[1].classList.remove('price-info-area-small');
        cart.children[0].children[2].classList.remove('cart-button-area-small');
        cart.children[0].children[3].classList.remove('close-button-small');
        cart.children[0].children[2].children[0].classList.remove('cart-button-small');
        cart.children[0].children[2].children[1].classList.remove('cart-button-small');
        cart.children[0].children[2].children[0].children[0].classList.remove('cart-button-label-small');
        cart.children[0].children[2].children[1].children[0].classList.remove('cart-button-label-small');
    }


     else {

        header.classList.remove('header-mid-width');
        header.children[0].children[1].classList.add('hide-it');
        header.classList.add('header-small-width');
        for (let i=0;i<header.children[0].children[2].children.length;i++){
            if(i>=header.children[0].children[2].children.length-2){
                header.children[0].children[2].children[i].classList.add('move-icon-to-left');
            }else{
                header.children[0].children[2].children[i].classList.add('hide-it');
            }
        }
        header.children[0].children[0].classList.add('header-logo-small');
        header.children[0].children[0].children[1].classList.remove('hide-it');


        for(let i =0; i<fullpage.length;i++){
            contentArea.children[i].children[0].children[1].classList.add('section-button-small');
        }

        cart.classList.add('cart-area-small');
        cart.children[0].classList.add('cart-content-small');
        cart.children[0].children[0].classList.add('cart-title-small');
        cart.children[0].children[1].classList.add('price-info-area-small');
        cart.children[0].children[2].classList.add('cart-button-area-small');
        cart.children[0].children[3].classList.add('close-button-small');
        cart.children[0].children[2].children[0].classList.add('cart-button-small');
        cart.children[0].children[2].children[1].classList.add('cart-button-small');
        cart.children[0].children[2].children[0].children[0].classList.add('cart-button-label-small');
        cart.children[0].children[2].children[1].children[0].classList.add('cart-button-label-small');
    }
}

window.onload=resize;

window.addEventListener("resize",resize);
//cart 開關
cart.children[0].children[3].addEventListener('click',function(){
    document.querySelector('.cart-background').classList.remove('cart-background-activated');
    document.querySelector('.cart-area').classList.remove('cart-area-activated');
})


document.querySelector('.icon-area-header').children[4].addEventListener('click',function(){
    document.querySelector('.cart-background').classList.add('cart-background-activated');
    document.querySelector('.cart-area').classList.add('cart-area-activated');
})

document.querySelector('.bag-icon').addEventListener('click',function(){
    document.querySelector('.cart-background').classList.add('cart-background-activated');
    document.querySelector('.cart-area').classList.add('cart-area-activated');
})

// sidebar 開關
header.children[0].children[0].children[1].addEventListener('click',function(){
    sidebar.classList.add('sidebar-activated');
})

sidebar.children[3].addEventListener('click',function(){
    sidebar.classList.remove('sidebar-activated');
})

// set navbar tag behavior      
////go to section when clicked
for(let i=0;i<header.children[0].children[1].children.length;i++){
    header.children[0].children[1].children[i].addEventListener('click',function(){
        fullpage_api.moveTo(`banner${i+1}`,0);
    })
}
