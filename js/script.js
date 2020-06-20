// burger
const burger = document.querySelector('#burger');
const navigation = document.querySelector('#list');

const bars = document.querySelectorAll('.bar');

burger.addEventListener('click', ()=>{
    navigation.classList.toggle('active');

    bars.forEach((bar) => {
        bar.classList.toggle('active-bar')
    })
})
// scroll
$(document).on('scroll', function(){

    const value = $(this).scrollTop();

    const $ad1 = $('.ad__cover__left');
    const $adPic1 = $ad1.offset().top;

    const $ad2 = $('.ad__cover__right');
    const $adPic2 = $ad2.offset().top;

    if(value > $adPic1 - 300){
        $('.ad__cover__left').addClass('active-cover');
    }
    if(value < $adPic1 - 300){
        $('.ad__cover__left').removeClass('active-cover');
    }
    if(value > $adPic2 - 300){
        $('.ad__cover__right').addClass('active-cover');
    }
    if(value < $adPic2 - 300){
        $('.ad__cover__right').removeClass('active-cover');
     }
})
// slider
const slider = () => {
    const domElements = {
      caruosel: document.querySelector(".offer__container"),
      slider: document.querySelector(".offer__slider"),
    };

    const interface = {
      time: 3000,
    };

    const autoPlay = () => {
      const { caruosel, slider } = domElements;
      caruosel.style.justifyContent = "flex-start";
      slider.style.transform = "translate(-16.7%)";
    };

    const transition = () => {
      const { slider } = domElements;

      slider.addEventListener(
        "transitionend",
        () => {
          slider.appendChild(slider.firstElementChild);
          slider.style.transition = "none";
          slider.style.transform = "translate(0)";
          setTimeout(() => {
            slider.style.transition = "all 0.7s";
          });
        },
        false
      );
    };

    const init = () => {
      setInterval(autoPlay, interface.time);
      transition();
    };
    init();
};
    // ************************
// scrolling to start

$('.scrollup').on('click', function() {
  $('body, html').animate({
   scrollTop:$('body').offset().top
  },200 )
})

//hidden buuton

$(document).scroll(function()
  {
    if($(this).scrollTop()>300) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
  }
  );
  // *****************************


// form validation

window.addEventListener("load", slider);



