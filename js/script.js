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

const contactForm = document.querySelector('#form');
const errorBox = document.querySelector('#errors');

const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const text_reg = /^[a-zA-Z0-9]{10,}$/



function validation(){
  event.preventDefault();

  const name = document.querySelector('#name');
  const surname = document.querySelector('#surname');
  const email = document.querySelector('#email');
  const text = document.querySelector('#textarea');

  let errors = [];

  if(name.value == '') {
    errors.push({text: 'first name', el: name});
  }
  if(surname.value == '') {
    errors.push({text: 'second name', el: surname});
  }
  if(email.value == '') {
    errors.push({text: 'email', el: email});
  } else if(!email_reg.test(email.value)) {
    errors.push({text: 'email', el: email});
  }
  if(text.value == '') {
    errors.push({text: 'text area', el: textarea});
  } else if(!text_reg.test(text.value)) {
    errors.push({text: 'text area', el: textarea});
  }
  console.log(errors);

  if (errors.length > 0) {
    makeError(errors);
    return false;
  } else {
    makeOK()
    return true
  }
}

function makeError(errs) {
  let statement = 'You have errors with the following fields: ';

  errs.map((er, idx) => {
    er.el.classList.add('footer__wrap-err--text');
    if(errs.length === idx+1) {
      statement += er.text;
    } else {
      statement += er.text + ', '
    }
  })
  errs[0].el.focus();

  const message = document.createElement('div');
  message.classList.add('footer__wrap-err--text');
  message.innerText = statement;

  message.addEventListener('click', function(){
    errorBox.removeChild(message);
  })
  errorBox.appendChild(message);

  function deleteMessage(){
    errorBox.removeChild(message);
  }
  setTimeout(deleteMessage, 2000);
}

function makeOK(){
  let statement = ' no errors';
  const message = document.createElement('div');
  message.classList.add('footer__wrap-err--ok');
  message.innerText = statement;

  message.addEventListener('click', function(){
    errorBox.removeChild(message);
  })
  errorBox.appendChild(message);

  function deleteMessage(){
    errorBox.removeChild(message);
  }
  setTimeout(deleteMessage, 1000);
}

contactForm.addEventListener('submit', validation);
window.addEventListener("load", slider);



