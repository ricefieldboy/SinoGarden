$(document).ready(function(){    
    $('.dropdown').on('mouseenter mouseleave click tap', function(event) {
        event.preventDefault();
        $(this).toggleClass("open");
    });
});