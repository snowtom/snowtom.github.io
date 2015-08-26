$(document).ready(function () {
    $('.wrapper').on('mouseover', function () {
        $(this).css('font-size', '60px');
    });
    $('.wrapper').on('mouseout', function () {
        $(this).css('font-size', '40px');
    });
});
