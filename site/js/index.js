$('.navindex').click(function (e) {
    $('html, body').animate({
        scrollTop: $('#index').offset().top - 125
    }, 'slow');
});

$('.navflyg').click(function (e) {
    $('html, body').animate({
        scrollTop: $('#flyg').offset().top - 125
    }, 'slow');
});

$('.navhotell').click(function (e) {
    $('html, body').animate({
        scrollTop: $('#hotell').offset().top - 125
    }, 'slow');
});