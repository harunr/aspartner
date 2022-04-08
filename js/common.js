(function ($) {
    $(function () {

        $('.hamburger .hamburger-inner').click(function () {
            $("body").toggleClass("navShown");
        });
        
        
        if ($('.section-scroll').length) {
            $('.nav-wrap ul li a, .modal-nav ul li a').bind('click', function (e) {
                e.preventDefault();
                var target = $(this).attr("href");
                $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
                }, 600, function () {
                    location.hash = target;
                });
                return false;
                
                
                
            });
            $(window).scroll(function () {
                var scrollDistance = $(window).scrollTop() + 50;
                $('.section-scroll').each(function (i) {
                    if ($(this).position().top <= scrollDistance) {
                        $('.nav-wrap ul li a.nav-active, .modal-nav ul li a.nav-active').removeClass('nav-active');
                        $('.nav-wrap ul li a, .modal-nav ul li a').eq(i).addClass('nav-active');
                    }
                });
            }).scroll();
        }
        
        
        
        $('.modal-nav ul li a').bind('click', function (e) {
            $('body').removeClass('navShown')
        })
        
    }) // End ready function.

})(jQuery)
