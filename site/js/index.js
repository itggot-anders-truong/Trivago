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

var index = 0;
slideShow();

function slideShow() {
    var i;
    var x = document.getElementsByClassName("hide");
    for (i = 0; i < x.length; i++) { 
       x[i].style.display = "none";  
    }
    index++;
    if (index > x.length) {index = 1}    
    x[index-1].style.display = "block"; 
    setTimeout(slideShow, 5000);
}