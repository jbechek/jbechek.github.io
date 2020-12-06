/*
	* Personal website of Jordan Bechek
	* File: main.js
*/

var isScrolling;
var animationEvent = whichAnimationEvent();
var windowWidthCheck = 550;

window.addEventListener("scroll", function () {
	window.clearTimeout(isScrolling);

	if($("#hide-scroll").attr("href") != "") $("#hide-scroll").attr("href", "");

	isScrolling = setTimeout(function() {
		$("#hide-scroll").attr("href", "css/hide-scroll.css");
	}, 500);
}, false);

$(document).ready(function() {
	keywordFill();
	adaptToScreen(true);

	setTimeout(function() {
		fadeElementsIn(".attribute.fade-in", 400, 500);
	}, 250);

	setTimeout(function() {
		fadeElementsIn(".section.fade-in", 250, 500);
	}, 1500);

	setTimeout(function() {
		fadeElementIn("#copyright", 500, 500);
	}, 1500);

	if($(window).width() >= windowWidthCheck) {
		$("div#name").addClass("typed");
	}

	$("div.typed").one(animationEvent, function() {
	    $(this).css("border-right", ".1em solid #1AB423").css("animation", "blink-caret .85s step-end infinite");
	});

	$(window).on("resize", function() {
		adaptToScreen();
	});
});

function keywordFill() {
	var date = new Date();

	$("#experience").text(date.getFullYear() - 2011);
	$("#current_year").text(date.getFullYear());
}

function adaptToScreen(ignoreCursor) {
	if($(window).width() < windowWidthCheck) {
		$("div#name").text("Jordan Bechek");
		if(!ignoreCursor) $("div.typed").css("border-right", "none");
	} else {
		$("div#name").text("Jordan Ellis Bechek");
		if(!ignoreCursor) $("div.typed").css("border-right", ".1em solid #1AB423");
	}
}

function whichAnimationEvent() {
    let t, el = document.createElement("fakeelement");

    var animations = {
        "animation"      : "animationend",
        "OAnimation"     : "oAnimationEnd",
        "MozAnimation"   : "animationend",
        "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations){
        if (el.style[t] !== undefined){
            return animations[t];
        }
    }
}

function fadeElementsIn(jqueryFilter, waitTime, fadeTime) {
	var elCount = $(jqueryFilter).length;

	for (var i = 0; i <= elCount; i++) {
		fadeElementIn($(jqueryFilter).eq(i), i * waitTime, fadeTime);
	}
}

function fadeElementIn(el, waitTime, fadeTime) {
	setTimeout(function() {
		$(el).fadeIn(fadeTime);
	}, waitTime);
}
