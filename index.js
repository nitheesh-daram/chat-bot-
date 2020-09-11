
var me = {};
me.avatar = "https://lh6.googleusercontent.com/-lr2nyjhhjXw/AAAAAAAAAAI/AAAAAAAARmE/MdtfUmC0M4s/photo.jpg?sz=48";

var you = {};
you.avatar = "https://a11.t26.net/taringa/avatares/9/1/2/F/7/8/Demon_King1/48x48_5C5.jpg";

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time) {

    console.log(this)
    if (time === undefined) {
        time = 0;
    }
    var control = "";
    var date = formatAMPM(new Date());

    if (who == "me") {
        control = '<li style="width:100%">' +
            '<div class="msj macro">' +
            '<div class="avatar"><img class="img-circle" style="width:100%;" src="' + me.avatar + '" /></div>' +
            '<div class="text text-l">' +
            '<p>' + text + '</p>' +
            '<p><small>' + date + '</small></p>' +
            '</div>' +
            '</div>' +
            '</li>';
    } else {
        control = '<li style="width:100%;">' +
            '<div class="msj-rta macro">' +
            '<div class="text text-r">' +
            '<p>' + text + '</p>' +
            '<p><small>' + date + '</small></p>' +
            '</div>' +
            '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="' + you.avatar + '" /></div>' +
            '</li>';
    }
    setTimeout(
        function () {
            $("ul").append(control).scrollTop($("ul").prop('scrollHeight'));
        }, time);

}

function resetChat() {
    $("ul").empty();
}

$(".mytext").on("keydown", function (e) {
    if (e.which == 13) {
        var text = $(this).val();
        if (text !== "") {
            insertChat("me", text);
            $(this).val('');
        }
    }
});

$('body > div > div > div:nth-child(2) > span').click(function () {
    $(".mytext").trigger({
        type: 'keydown',
        which: 13,
        keyCode: 13
    });
})

//-- Clear Chat
resetChat();

// //-- Print Messages
// insertChat("me", "Hello Tom...", 0);
// insertChat("you", "Hi, Pablo", 1500);
// insertChat("me", "What would you like to talk about today?", 3500);
// insertChat("you", "Tell me a joke", 7000);
// insertChat("me", "Spaceman: Computer! Computer! Do we bring battery?!", 9500);
// insertChat("you", "LOL", 12000);
















function openForm() {
    document.getElementById("myForm").style.display = "block";
    var list = document.getElementsByClassName("extras");
    for (let index = 0; index < list.length; index++) {
        list[index].style.display = "none";
    }
}

function openmes() {
    document.getElementById("message").style.display = "block";
    // document.getElementById("myForm").style.display = "none";
}

function opensel() {
    document.getElementById("choose").style.display = "block";
    // document.getElementById("myForm").style.display = "none";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("message").style.display = "none";
    document.getElementById("choose").style.display = "none";
}

$('#cars').on('change', function () {
    $('.extra1').css('display', 'inline-block');
    $('#sub').html('');
    if ($('#cars').val() == "1") {
        $('#sub').append(' <option value="">--Select--</option>');
        $('#sub').append('<option value="1">Soil Exploration</option>');
        $('#sub').append('<option value="2">Rock Drilling</option>');
    } else if ($('#cars').val() == "2") {
        $('#sub').append(' <option value="">--Select--</option>');
        $('#sub').append('<option value="1">Seismic Refraction Survey</option>');
        $('#sub').append('<option value="2">Seismic reflection Survey</option>');
        $('#sub').append('<option value="3">Electromagnetic Survey</option>');
        $('#sub').append('<option value="4">ERT Test</option>');
        $('#sub').append('<option value="5">NDT Testing</option>');

    } else if ($('#cars').val() == "3") {
        $('#sub').append(' <option value="">--Select--</option>');
        $('#sub').append('<option value="1">Survey of Road</option>');
        $('#sub').append('<option value="2">Survey of Railway/Waterway</option>');
        $('#sub').append('<option value="3">Survey of green field</option>');
        $('#sub').append('<option value="4">Aerial Survey</option>');
        $('#sub').append('<option value="5">Airborne Vehicle Survey</option>');
        $('#sub').append('<option value="6">Mobile Vehicle Survey</option>');
    } else if ($('#cars').val() == "4") {
        $('#sub').append(' <option value="">--Select--</option>');
        $('#sub').append('<option value="1">CTVC Survey</option>');
        $('#sub').append('<option value="2">TMVC Survey</option>');
        $('#sub').append('<option value="3">OD Survey</option>');
        $('#sub').append('<option value="4">Axle Load Survey</option>');
    } else if ($('#cars').val() == "5") {
        $('#sub').append(' <option value="">--Select--</option>');
        $('#sub').append('<option value="1">None</option>');
    } else if ($('#cars').val() == "6") {
        $('#sub').append(' <option value="">--Select--</option>');
        $('#sub').append('<option value="1">Soil Testing</option>');
        $('#sub').append('<option value="2">Rock Testing</option>');
        $('#sub').append('<option value="3">Material Testing</option>');
        $('#sub').append('<option value="4">Chemical Testing</option>');
        $('#sub').append('<option value="5">Environmental Engineering testing</option>');
        $('#sub').append('<option value="6">Bitumen Testing</option>');
        $('#sub').append('<option value="7">Geotextile Testing</option>');
        $('#sub').append('<option value="8">Tiles Testing</option>');
    } else if ($('#cars').val() == "7") {
        $('#sub').append(' <option value="">--Select--</option>');
        $('#sub').append('<option value="1">GPR Survey</option>');
    } else {
        $('#sub').append('<option value="">Choose Something Above</option>');
    }
});


function openextras2() {
    var list = document.getElementsByClassName("extra2");
    for (let index = 0; index < list.length; index++) {
        list[index].style.display = "inline-block";

    }
}

function getdata() {
    console.log($('form').serializeArray());
}


function back() {
    document.getElementById("message").style.display = "none";
    document.getElementById("choose").style.display = "none";
    document.getElementById("myForm").style.display = "block";
}
