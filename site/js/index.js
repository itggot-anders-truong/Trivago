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

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("hide");
    for (i = 0; i < x.length; i++) {
       x[i].style.opacity = "0";
       x[i].style.transition = "1s";  
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block"; 
    x[myIndex-1].style.opacity = "1";  
    x[myIndex-1].style.transition = "1s";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}