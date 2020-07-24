$(document).on('scroll', function() {
    $(".top").css("opacity", 1 - $(window).scrollTop() / 1600);

    $('.slide-left').css("left", Math.max(1600 - 0.35 * window.scrollY, 10) + "px");
    $('.slide-right').css("right", Math.max(1600 - 0.35 * window.scrollY, 10) + "px");
})