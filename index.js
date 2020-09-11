function openForm() {
    document.getElementById("myForm").style.display = "block";
    var list = document.getElementsByClassName("extras");
    for (let index = 0; index < list.length; index++) {
        list[index].style.display = "none";
    }
}

function openmes() {
    document.getElementById("message").style.display = "block";
}

function opensel() {
    document.getElementById("choose").style.display = "block";
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
}
