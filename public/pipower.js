

// Use global variable for status so we know if we need to send ajax if change
var button_pressed = '';

$(document).ready(function() {
// define handlers
$('#sw_on_1').click(function(){onButtonClicked('1')});
$('#sw_on_2').click(function(){onButtonClicked('2')});
$('#sw_on_3').click(function(){onButtonClicked('3')});
$('#sw_on_4').click(function(){onButtonClicked('4')});
$('#sw_on_all').click(function(){onButtonClicked('0')});

$('#sw_off_1').click(function(){offButtonClicked('1')});
$('#sw_off_2').click(function(){offButtonClicked('2')});
$('#sw_off_3').click(function(){offButtonClicked('3')});
$('#sw_off_4').click(function(){offButtonClicked('4')});
$('#sw_off_all').click(function(){offButtonClicked('0')});

$('#led_on_1').click(function(){ledOnButtonClicked('1')});
$('#led_off_1').click(function(){ledOffButtonClicked('1')});
$('#led_on_2').click(function(){ledOnButtonClicked('2')});
$('#led_off_2').click(function(){ledOffButtonClicked('2')});


}); // end ready



// handle on button
function onButtonClicked (button) {
    $.get ('/switchon', 'socket='+button, displayResponse);
}


// handle off button
function offButtonClicked (button) {
    $.get ('/switchoff', 'socket='+button, displayResponse);
}

// Hanled LED Simple Buttons
function ledOffButtonClicked (led) {
    $.get ('/ledoff', 'light='+led, displayResponse);
}

// Hanled LED Simple Buttons
function ledOnButtonClicked (led) {
    $.get ('/ledon', 'light='+led, displayResponse);
}

function displayResponse (data) {
    $('#status').html(data);
}
