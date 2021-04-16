$(document).ready(function(){
    
    $('.consultate-form').validate({
        rules:{
            name: 'required',
            phone: 'required',
            email: {
                required: true,
                email: true
            }
        },
        messages:{
            name: "Введите своё имя",
            phone: "Введите свой номер телефона",
            email: {
              required: "Введите свою электронную почту",
              email: "Неправильно введен адрес электронной почты"
            }
          }
    });
    $('.questions__form').validate({
      rules:{
          name: 'required',
          phone: 'required',
          email: {
              required: true,
              email: true
          }
      },
      messages:{
          name: "Введите своё имя",
          phone: "Введите свой номер телефона",
          email: {
            required: "Введите свою электронную почту",
            email: "Неправильно введен адрес электронной почты"
          }
        }
  });
    $('input[name=phone]').mask("+7(999) 999-99-99");
    $('input[name=phone]').mask("+7(999) 999-99-99");
    
    $('.reviews__carousel').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      variableWidth: true,
      arrows: true,
      speed: 1000,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev.png" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/next.png" alt=""></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
}); 