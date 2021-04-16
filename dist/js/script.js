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
    $('input[name=phone]').mask("+7(999) 999-99-99");
}); 