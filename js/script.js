//For toggling on WHAT WE DO
$ (document).ready(function() {
    $(".onCrack1").click(function() {
        $("#click1").toggle();
        $("#magic1").toggle();
    });
    $(".onCrack2").click(function() {
        $("#magic2").toggle();
        $("#click2").toggle();
    });
    $(".onCrack3").click(function() {
        $("#magic3").toggle();
        $("#click3").toggle();
    });
});

$(document).ready(function() {
    $("div.image-frame").hover(function() {
        $(".overlay1").addClass("mask flex-center rgba-red-strong");
    });
});




$(document).ready(function () {
    $('#myBtn').click(function () {
        var Name = $('#contact-name').val();
        var Email = $('#contact-email').val();
        var Message = $('#contact-message');
        // var key ='43ab10333d46e19325f96d210ed40c49-us5';
        if (Name == '' || Email == '' || Message == '') {
            alert('Please make sure you have filled in the form correctly!');
        } else {
            alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
        }

    });
});

