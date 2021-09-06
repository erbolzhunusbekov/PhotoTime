$(document).ready(function () {
    $('body').scrollspy({
        target: '#nav'
    });

    // Smooth Scrolling
    $("#header #nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});