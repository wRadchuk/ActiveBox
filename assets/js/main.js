$(function() {


/* В самом верху я хочу объявить все переменные которые нам понадобятся при работе в наших фрагментах кода */

    let header    = $("#jsHeader")       ; //получили элемент header
    let intro     = $("#jsIntro")        ; //получили элемент intro
    let introH    = intro.innerHeight()  ; // узнали высоту блока intro с padding-ами.
    let scrollPos = $(window).scrollTop(); // объявили переменную для хранения позиции скролла от верха страницы и присваиваем значение
    let nav       = $("#jsNav")          ; // Для доступа к навигации
    let navToggle = $("#jsNavToggle")    ; // Для доступа к нашему jsNavToggle индексу
    let slider    = $("#jsReviewsSlider") ; // Для доступа к нашему индефикатору слайдер в блоке reviews

/* Ну вот вроде все объявил, если что дописать нужное успею. Перейдем к реализации нужных фрагментов кода. */



/* Fixed header - этот фрагмент кода позволяет нам сделать шапку сайта с фиксированной позицией при нужных нам условиях. */

    checkScroll(scrollPos, introH); // при загрузке страницы проверяем наш скролл

    /* Событие срабатывает при скролле, загрузке страницы и при изменении размера */
    $(window).on("scroll load resize", function() {

        introH    = intro.innerHeight(); // узнали текущую высоту блока intro с padding-ами.
        scrollPos = $(this).scrollTop(); // узнали позицию скролла от верха страницы

        checkScroll(scrollPos, introH); // узнаем нужно ли добавлять jsFixed класс в наш header

    });

    // Функция для работы с классом jsFixed для нашего header блока
    function checkScroll(scrollPos, introH) {
        /* Если мы проскроллили вниз больше чем высота блока intro, то добавим в блок header новый класс jsFixed */
         if( scrollPos > introH) {
             header.addClass("jsFixed"); // команда добавления класса
         }
        // Если произошло обратное действие, то на всякий уберём это класс из блока header
        else {
            header.removeClass("jsFixed"); // команда убирает класс из блока (если есть)
        }
    }

/* Fixed header конец фрагмента фиксации */



/* Smooth scroll - отвечает за плавную прокрутку сайта при нажатии на ссылки в блоке header */

    /* Этот слушатель работает с тегами в которых есть атрибут data-scroll и срабатывает на клик по данным тегам. */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); // работаем с событием и говорим здесь что хотим отменить стандартное поведение ссылок при нажатии

        let elementId = $(this).data('scroll'); // При клике по ссылке с атрибутом data-scroll - получаем индекс
        console.log(elementId); // Выведем индекс в консоль

        let elementOffset = $(elementId).offset().top; // получаем позицию на которую смещен элемент от верха страницы
        console.log(elementOffset); // Выведем индекс в консоль


        nav.removeClass("jsShow");

        // Добавляем анимацию для прокрутки
        $("html, body").animate({

            scrollTop: elementOffset - 70 // позиция куда будем скролить

        }, 700); // укажем время анимации в миллисекундах

    });

/* Smooth scroll конец фрагмета прокрутки */



/* Nav Toggle - показывает и скрывает панель с навигацией на мобильных либо других устройствах
с маленьким экраном, наше бургер меню - некий тумблер */


    navToggle.on("click", function(event) {
        event.preventDefault(); // отмена стандартного поведения ссылок на случай если откажемся от button и будем использовать тег a - ссылку.

        nav.toggleClass("jsShow"); // Добавляет по клику класс show в нашу навигацию nav


    });

/* Nav Toggle конец фрагмета тумблера */



/* Reviews Slider пропишем слайдер для наших отзывов:  https://kenwheeler.github.io/slick/ */

    slider.slick({ // slider - что скролим
        infinite: true, // зациклить 1 2 3 1 2 3 1 2...
        slidesToShow: 1, // сколько показывать слайдов
        slidesToScroll: 1, // сколько скроллить за раз
        fade: true, // при переходе затемняет наши отзывы
        arrows: false, // убирает стрелочки навигации в слайдере
        dots: true     // точки с выбором слайда
    });

/* Reviews Slider конец фрагмента отвечающего за слайдер */


});
