$(function () {


    $('[fade-data]').click(function (e) {
        e.preventDefault();


        if ($($(this).attr('href')).hasClass("d-none")) {

            $($(this).attr('href')).removeClass('d-none');

        } else {

            $($(this).attr('href')).addClass('d-none');

        }

    })


    $('[fade-data2]').click(function (e) {
        e.preventDefault();


        if ($($(this).attr('href')).hasClass("d-none-not-important")) {

            $($(this).attr('href')).removeClass('d-none-not-important');

        } else {

            $($(this).attr('href')).addClass('d-none-not-important');

        }

    })




    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


})
