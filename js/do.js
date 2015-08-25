$(document).ready(function () {
    $('.wrapper').on('mouseover', function () {
        $(this).css('font-size', '0.6px');
    });
    $('.wrapper').on('mouseout', function () {
        $(this).css('font-size', '0.3px');
    });
});
