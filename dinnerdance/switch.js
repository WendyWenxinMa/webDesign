/**
 * 
 * Page switch
 */

 /* JavaScript content switcher by Louis Lazaris

If you want this to have back button functionality,
just comment in the lines in the code that are commented out.
*/


$(function() {

	var currHash,
	navLi = $('#footer-font'),
	navLinks = $('#footer-font a'),
	speed = 200;

	if (location.hash) {
		currHash = location.hash.split('#')[1];
	} else {
		currHash = "home";

        /*if (history.pushState) {
            history.pushState(null, null, '#' + currHash);
        } else {
            location.hash = '#' + currHash;
        }*/

    }

    function doSwitch(el) {

    	console.log("CHANGING TO " + el[0].href.split('#')[1] + " !");
    	console.log(el);

    	if (el) {
    		currHash = el[0].href.split('#')[1];
    		el.addClass('selected');
    	} else {
    		if (location.hash) {
    			currHash = location.hash.split('#')[1];
    		} else {
    			currHash = 'home';
    		}

    		$('#footer-font a[href="#' + currHash + '"]').addClass('selected');
    	}

    	$('#footer-font a:not([href="#' + currHash + '"])').removeClass('selected');

    	$('#container .active').stop().fadeOut(speed, function(){
    		$('#container .content-panel[id="' + currHash + '"]').stop().delay(speed).stop().fadeIn(speed);
    		$('#container .content-panel[id="' + currHash + '"]').addClass('active');
    	});

    	$('#container .active').removeClass('active');

        // $('#container .content-panel:not([id="' + currHash + '"])').stop().fadeOut(speed);

        /*if (history.pushState) {
            history.pushState(null, null, '#' + currHash);
        } else {
            location.hash = '#' + currHash;
        }*/

    }

    /*$(window).bind('hashchange', function () {
        doSwitch();
    });*/

navLi.find('.selected').removeClass('selected');

$('#navigation li a[href="#' + currHash + '"]').addClass('selected');

navLinks.click(function (e) {
	doSwitch($(this));
	e.preventDefault();
});

});