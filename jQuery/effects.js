$("button").on("click", function () {
  $("div").fadeOut(1000);
});


$(window).scroll(function () {
if ($(window).scrollTop() >= 0) {
$('nav').css('background','red');
} else {
$('nav').css('background','transparent');
}
});
