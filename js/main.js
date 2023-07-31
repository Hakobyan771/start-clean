const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});

const swiperOne = new Swiper('.feedback__slider', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },
  
  });


  const swiperTwo = new Swiper('.certificotes__slider', {
    loop: true,

    slidesPerView: 3,
    spaceBetween: 20,
  
    
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
        360: {
            slidesPerView: 1,
        }
        
    }
    
  

  });

  
 const ocordeon = document.querySelector('.ocordeon');
 const ocordeonTitles = ocordeon.querySelectorAll('.ocordeon__title');

 ocordeonTitles.forEach.call(ocordeonTitles, function (ocordeonTitle){
  ocordeonTitle.addEventListener('click', function() {

     const currentText = ocordeonTitle.parentElement.querySelector('.ocardion__text');

    ocordeonTitle.classList.toggle('ocardeon__title--active');
    currentText.classList.toggle('ocordeon__text--visible');

    if (currentText.classList.contains('ocordeon__text--visible')){
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else{
      currentText.style.maxHeight = null
    }
   
    
  })
})














