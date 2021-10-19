$(document).ready(function () {
    function sliderFor() {
        if ($(window).width() <= 730) {
            $('.for__items').filter('.slick-initialized').slick('unslick');
            $('.for__items').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
            });
        } else {
            $('.for__items').filter('.slick-initialized').slick('unslick');
        }
    }

    function sliderTask() {
        if ($(window).width() <= 550) {
            $('.task__items').filter('.slick-initialized').slick('unslick');
            $('.task__items').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
            });
        } else {
            $('.task__items').filter('.slick-initialized').slick('unslick');
        }
    }

    function sliderProgramInfo() {
        if ($(window).width() <= 768) {
            $('.program__info').filter('.slick-initialized').slick('unslick');
            $('.program__info').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
            });
        } else {
            $('.program__info').filter('.slick-initialized').slick('unslick');
        }
    }

    function sliderProgramAbout() {
        if ($(window).width() <= 768) {
            $('.program__about').filter('.slick-initialized').slick('unslick');
            $('.program__about').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
            });
        } else {
            $('.program__about').filter('.slick-initialized').slick('unslick');
        }
    }

    $(window).resize(function () {
        sliderFor();
        sliderTask();
        sliderProgramInfo();
        sliderProgramAbout();

    })

    sliderFor();
    sliderTask();
    sliderProgramInfo();
    sliderProgramAbout();




    $(".btn__scroll").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('data-href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });






})