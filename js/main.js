(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);

// Set the end date and time.
var endDate = new Date("2023-07-08T16:00:00-05:00");

// Start the countdown timer.
var timer = setInterval(function() {
    // Get the current date and time.
    var now = new Date();

    // Calculate the difference between the end date and time and the current date and time in seconds.
    var difference = (endDate - now) / 1000;

    // If the countdown is complete, stop the timer and display the message.
    if (difference <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<div class='btn btn-outline-primary font-weight-bold m-1 py-2 px-4'>La fiesta acaba de empezar!</div>";
        return;
    }

    // Calculate the number of days, hours, minutes, and seconds remaining.
    var days = Math.floor(difference / (60 * 60 * 24));
    var hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((difference % (60 * 60)) / (60));
    var seconds = Math.floor((difference % (60)) / 1);

    // Update the countdown display.
    document.getElementById("days").innerHTML = `Días: <br>${days}`;
    document.getElementById("hours").innerHTML = `Horas: <br>${hours}`;
    document.getElementById("minutes").innerHTML = `Minutos: <br>${minutes}`;
    document.getElementById("seconds").innerHTML = `Segundos: <br>${seconds}`;
}, 1000);

var WHATSAPP_NUMBER = 5537252449;
        // ?text=Ah%C3%AD%20estar%C3%A9%2C%20ap%C3%A1rtame%20%5Bn%C3%BAmero%20de%20personas%5D%20asientos
        const MESSAGE = encodeURIComponent("¡Hola!,confirmo mi asistencia.")

        function myWhatsappFunction() {
        var md = new MobileDetect(window.navigator.userAgent);
        if (md.mobile()) {
            // mobile link
            document.getElementById("whatsapp-btn").href = `https://wa.me/${WHATSAPP_NUMBER}/?text=${MESSAGE}`;
        } else {
            // desktop link
            document.getElementById("whatsapp-btn").href = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${MESSAGE}`;
        }
        };
