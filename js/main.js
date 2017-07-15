//Popup fade in and fade out function
function Show($this) {
    //Popup write us Animation
    $('#PopupWriteUs').removeClass('animated fadeOutUpBig');
    $('#PopupWriteUs').addClass('animated fadeInDownBig');
    //////////////////////////

    $id = "Popup" + $this.id;
    //    alert($id);

    ////Shows Popup
    $("#" + $id).css({
        "display": "flex"
    });
    ////Show overlay
    $(".overlay").fadeIn(500);
    ////Block body scroll
    $("body").css({
        "overflow": 'hidden'
    });
};

function Hide() {
    //Popup write us Animation
    $('#PopupWriteUs').addClass('animated fadeOutUpBig');
    ///////Hide overlay
    $(".overlay").fadeOut(500);
    /////Hide popup
    $(".popup").fadeOut(500);
    ////Enable body scroll
    $("body").css({
        "overflow": 'auto'
    });
};


$(".btn, .btn2").click(function () {
    Show(this);
});

$(".overlay").click(function () {
    Hide();
});

$(".hide").click(function () {
    Hide();
});

///////////////////////////////////

$(document).ready(function () {
    ///Gradualy scroll

    $(".nav").mPageScroll2id();

    ///Menu Scroll Animation

    if ($('body').width() > 960) {
        var options = {
          offset: 600
        }
        var header = new Headhesive('.header', options);

    }else{};


/////////////////

//Form load

$("#form").submit(function () {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function () {
        alert("Дякую за заявку, ми з вами скоро зв'яжемось!");
    });
    return false;
});

/////////////////

});
////////////////////////////////////
/// Mobile menu toggle
$('#toggle').click(function () {
    $(this).toggleClass('ToggleActive');
    $("#menu").toggleClass('MenuActive');
});
/////////ContactFormButton
$("#ContactFormBtn").click(function () {
    //        Hide();
});
//////////////////////////
