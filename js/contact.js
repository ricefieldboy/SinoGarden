$(document).ready(function(){
    $('#contact-submit').click(function(event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "./php/email.php",
            data: $('#contact').serialize(),
            success: function(data) {
                alert("yes");
            }
        });
    });

});

