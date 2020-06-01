$(function () {


    /* Fixed Header ==================================== */
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    checkScroll(scrollPos, introH);

    $(window).on('scroll resize', function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, innerH) {
        if (scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }



    /* Smooth scroll ==================================== */
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');


        $('html, body').animate({
            scrollTop: elementOffset - 99
        }, 750);
    });




    /* Nav Toggle ==================================== */
    navToggle.on('click', function (event) {
        event.preventDefault();

        nav.toggleClass('show');
    });


    /* Reviews: https://kenwheeler.github.io/slick/ ====*/
    let slider = $('#reviewsSlider');


    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});


const texts = ['my name is Сахар', 'I make soap', 'I LOVE OUR PLANET'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('#intro__typing__effect').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 300);
})();




$(function () {

    /* Modal =============== */

    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');


    modalCall.on('click', function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $('body').addClass('no-scroll');

        setTimeout(function () {
            $(modalId).find('.modal__dialog').css({
                transform: 'rotateX(0)'
            });
        }, 200);

        $('#worksSliderShampoo').slick('setPosition');
        $('#worksSliderSoap').slick('setPosition');
        $('#worksSliderBoard').slick('setPosition');

    });


    modalClose.on('click', function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find('.modal__dialog').css({
            transform: 'rotateX(90deg)'
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 250);
    });


    $('.modal').on('click', function (event) {
        let $this = $(this);

        $this.find('.modal__dialog').css({
            transform: 'rotateX(90deg)'
        });

        setTimeout(function () {
            $this.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 250);
    });

    $('.modal__dialog').on('click', function (event) {
        event.stopPropagation();

    });

    /* Slider ====================*/


    $('#worksSliderShampoo').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $('.slickPrev').on('click', function () {
        event.preventDefault();

        $('#worksSliderShampoo').slick('slickPrev');
    });
    $('.slickNext').on('click', function () {
        event.preventDefault();

        $('#worksSliderShampoo').slick('slickNext');
    });



    $('#worksSliderSoap').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $('.slickPrev').on('click', function () {
        event.preventDefault();

        $('#worksSliderSoap').slick('slickPrev');
    });
    $('.slickNext').on('click', function () {
        event.preventDefault();

        $('#worksSliderSoap').slick('slickNext');
    });



    $('#worksSliderBoard').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $('.slickPrev').on('click', function () {
        event.preventDefault();

        $('#worksSliderBoard').slick('slickPrev');
    });

    $('.slickNext').on('click', function () {
        event.preventDefault();

        $('#worksSliderBoard').slick('slickNext');
    });



});

