function addRating() {
    let name = $('.form-control').eq(0).val();
    let rate = $('.form-control').eq(1).val();
    let list = `Movie "${name}" is rated: ${rate} out of 10`;
    $('ol').append(`<li>${list} <button class='delete'>X</button></li>`);
};

function removeRating() {
    $(document).on('click', '.delete', function() {
        $(this).parent().remove();
    })
}



$('form').submit(function(e) {
    e.preventDefault();

    addRating();
    removeRating();

    $('input').val('');
})