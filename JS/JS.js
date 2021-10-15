$(document).ready(function () {
    "use stasic";


    $(".navbar .navbar-toggler ").click(function () {
        $(".navbar-nav").toggleClass("open");
        $(this).toggleClass("active");
    });

    $(".search button").click(function () {
        $(this).toggleClass("active");
    });


    $(window).scroll(function () {
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });
    
    //----------------------
    $(".scroll-up-btn").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 1200);
    });



    $(".navbar .collapse .navbar-nav li a").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();
            var hash = this.hash;
        
            $('html, body').animate({

                scrollTop: $(hash).offset().top

            }, 800, function(){
        
                window.location.hash = hash;

            });

        }

    });



    $(".home .go-down").click(function(event) {
    
        $('html, body').animate({

            scrollTop: $("#price").offset().top

        }, 800);
    });

    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
    })

    wow.init();

});
