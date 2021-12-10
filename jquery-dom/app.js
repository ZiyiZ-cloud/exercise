$(function() {
    console.log("Let's get ready to party with jQuery!");
});

$('.article').children('img').attr('image-center');

$('p').eq(5).remove();

var random = Math.floor(Math.random() * 100);
$('#title').css('font-size', random);

$('ol').append('<li>New List</li>');

$('aside').replaceWith("<p>Apologizing for the list's existence.</p>");

$('.form-control').on('input', function() {
    let red = $('.form-control').eq(0).val();
    let blue = $('.form-control').eq(1).val();
    let green = $('.form-control').eq(2).val();
    $('body').css('background-color', "rgb(" + red + "," + green + "," + blue + ")")
})


$('img').on('click', function() {
    $(this).remove();
})