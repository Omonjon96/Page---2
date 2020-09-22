

$(document).ready(function() {

    var rellax = new Rellax('.rellax');

    $('main').css('padding-top', $('header').innerHeight());
    // $('.banner-block').css('min-height', $(window).height() - $('header').innerHeight());

    // $(window).scroll(function(){
    //     $('.banner-block').css("opacity", 1- $(window).scrollTop() / 600)
    // })

    $.get("https://api.ipdata.co?api-key=7743eaf82ccb3b90806c2f42b16c37d83abed10f9a2b093ce8be2936", function (response) {
        var callcode = response.calling_code;
        if(callcode){
            if ($('#signUpFree_country').find("option[value='" + callcode + "']").length) {
                $('#signUpFree_country').val(callcode).trigger('change');
            }
        }

    }, "jsonp");


    $('.videplay').on('click', function () {
        $('body').addClass('video-open')
        $('body').addClass('overlay-open')
    });

    $('.overlay').on('click', function () {
        $('body').removeClass('video-open')
        $('body').removeClass('overlay-open')
        $('.video-modal iframe').attr('src', $('.video-modal iframe').attr('src'));
    });






    $('.focusinput').on('click', function(e) {
        $('body').addClass('sign-open')
        $('.sign input[tabindex="1"]').focus();
    });

    $('.close-but').on('click', function(e) {
        $('body').removeClass('sign-open')
    });


    $('.menu').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750
    });


    wow = new WOW({
        animateClass: 'animated',
        offset:       100,
        mobile:       false,
    });

    wow.init();


    var select2data = $('*[data-select2-id="country"]').html()
    $("#signUpFree_country").select2({
        templateResult: formatStateResult,
        templateSelection: formatStateSelection,
        width: '110px',
        placeholder: {
            id: '0',
            text: select2data
        }
    })
    $('#signUpFree_firstName').on('keyup keypress keydown', function(event) {
        if (event.keyCode === 9) {
            $('#signUpFree_country').select2('open');
        }
    });


    var headerHeight = $('header').innerHeight();

    $(".menu li a, a.scrool").on('click', function(e) {
        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#"+trgt).offset();
        var target_top = target_offset.top;
        $('html,body').animate({
            scrollTop: target_top -70
        }, 1000);
        return false;
    });

    $('.partner-form').each(function(index, elem) {
        var $form = $(elem);
        var $country_input = $form.find('.field-country > select');
        var $phone_input = $form.find('.field-phone > input');
        var $input_group = $('<div class="input-group"></div>');
        $phone_input.wrap($input_group);
        $country_input.insertBefore($phone_input);
        var country_input_values = '<option></option>';
        for (var country in countriesAndCodes) {
            for (var phoneCode in countriesAndCodes[country]['phone_codes']) {
                country_input_values += '<option value="' + countriesAndCodes[country]['phone_codes'][phoneCode] + '" id="' + countriesAndCodes[country]['short_code'] + '">';
                country_input_values += '+' + countriesAndCodes[country]['phone_codes'][phoneCode] + ' ( ' + countriesAndCodes[country]['name'] + ' )';
                country_input_values += '</option>';
            }
        }
        $country_input.html(country_input_values);
        $country_input.select2({
            templateResult: formatStateResult,
            templateSelection: formatStateSelection,
            placeholder: i18n[locale]['Country'],
            width: '90px'
        });
        var countries_obj = [];
        $country_input.find('option').each(function(index, elem) {
            var $option = $(elem);
            var new_text = $option.html();
            var first_s = new_text.indexOf("(", 1);
            var second_s = new_text.indexOf(")", 1);
            var country_name = new_text.substring(first_s + 2, second_s - 1);
            var first_space = new_text.indexOf(" ", 1);
            var phone_code = $option.attr('value');
            var two_letters_code = $option.attr('id');
            if (countries_obj.length > 0 && countries_obj[countries_obj.length - 1]['name'] == country_name) {
                countries_obj[countries_obj.length - 1]['phone_codes'].push(phone_code);
            } else {
                countries_obj.push({
                    'name': country_name,
                    'phone_codes': [phone_code],
                    'two_letters_code': two_letters_code
                });
            }
        });
        var countries_obj_json = JSON.stringify(countries_obj)
    });


    $('.client-slider').owlCarousel({
        loop:true,
        nav: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            700:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    var carouselEl = $('.case-slider');
    carouselEl.owlCarousel({
        loop:true,
        nav: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        margin:0,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:1,
                nav: false
            },
            768:{
                items:1,
                nav: false
            },
            991:{
                items:1,
                nav: false
            },
            1200:{
                items:1,
                nav: true
            }
        }
    });


    $('.custom-btn__next').click(function(e) {
        e.preventDefault();
        carouselEl.trigger('next.owl.carousel');
    });

    $('.custom-btn__prev').click(function(e) {
        e.preventDefault();
        carouselEl.trigger('prev.owl.carousel');
    });


    if($(window).scrollTop() > 1){
        $('header').addClass("fixed-menu");
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('header').addClass("fixed-menu");
        } else {
            $('header').removeClass("fixed-menu");
        }
    });

    $('.parallax').parallax();


    function formatStateResult(state) {
        if (!state.id) {
            return state.text;
        }
        var new_text = state.text;
        var first_space = new_text.indexOf(" ", 1);
        if (first_space > 0) {
            new_text = new_text.substr(0, first_space);
        }
        var $state = $('<span>' + new_text.trim() + ' (' + $(state.element).attr("id") + ')</span>');
        return $state;
    }
    function formatStateSelection(state) {
        if (!state.id) {
            return state.text;
        }
        var new_text = state.text;
        var first_space = new_text.indexOf(" ", 1);
        if (first_space > 0) {
            new_text = new_text.substr(0, first_space);
        }
        var $state = $('<span>' + new_text.trim() + '</span>');
        return $state;
    }

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };





    setTimeout(function(){
        localStorage.removeItem("from");
    }, 1000*60*60);

    if(document.referrer.indexOf(location.protocol + "//" + location.host) != 0){
        var base64 = btoa(document.referrer);
        localStorage.setItem('from', base64)
    }
    var externalurl = localStorage.getItem('from')
    if(externalurl){
        $('#external_url').attr('value', externalurl)
    }
    else{
        var base64 = btoa('direct');
        $('#external_url').attr('value', base64)
    }


});

// parallax effect
(function ($) {



    $.fn.parallax = function () {
        var window_width = $(window).width();
        // Parallax Scripts
        return this.each(function (i) {
            var $this = $(this);
            $this.addClass('parallax');

            function updateParallax(initial) {
                var container_height;
                if (window_width < 601) {
                    container_height = $this.height() > 0 ? $this.height() : $this.children("img").height();
                } else {
                    container_height = $this.height() > 0 ? $this.height() : 500;
                }
                var $img = $this.children("*").first();
                var img_height = $img.height();
                var parallax_dist = img_height - container_height;
                var bottom = $this.offset().top + container_height;
                var top = $this.offset().top;
                var scrollTop = $(window).scrollTop();
                var windowHeight = window.innerHeight;
                var windowBottom = scrollTop + windowHeight;
                var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
                var parallax = Math.round(parallax_dist * percentScrolled);

                if (initial) {
                    $img.css('display', 'block');
                }
                if (bottom > scrollTop && top < scrollTop + windowHeight) {
                    $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
                }
            }

            // Wait for image load
            $this.children("*").one("load", function () {
                updateParallax(true);
            }).each(function () {
                if (this.complete) $(this).trigger("load");
            });

            $(window).scroll(function () {
                window_width = $(window).width();
                updateParallax(false);
            });

            $(window).resize(function () {
                window_width = $(window).width();
                updateParallax(false);
            });
        });
    };
})(jQuery);
// parallax-effect-end
