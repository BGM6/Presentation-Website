/*Smooth Scrolling jQuery*/

$(document).ready(function () {

    $('.btn').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                    scrollTop: $(hash).offset().top
                },
                800
            );
        }
    });

});
