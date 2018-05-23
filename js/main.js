/*
    * Personal website of Jordan Bechek
    * file: main.js
*/

setTimeout(function() {
    $(".typed *").css("border-right", ".1em solid rgba(26, 180, 35, 0.3)");
}, 140);

var usingSafari = false;

if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i) ){
    $(".sectionTitle").css("letter-spacing", "-0.05em");
    $(".app").css("letter-spacing", "-0.05em");
    //$("#test").text("INTERNET EXPLORER");
} else if(navigator.userAgent.match(/edge/i)) {
    $(".sectionTitle").css("letter-spacing", "-0.05em");
    $(".app").css("letter-spacing", "-0.05em");
    //$("#test").text("MICROSOFT EDGE");
} else if(typeof window.InstallTrigger !== 'undefined') {
    $(".sectionTitle").css("letter-spacing", "-0.02em");
    $(".app").css("letter-spacing", "-0.02em");
    $(".aboutContent p").css("margin-bottom", "0px").css("margin-top", "0px");
    //$("#test").text("FIREFOX");
} else if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    $(".sectionTitle").css("letter-spacing", "-0.05em");
    $(".app").css("letter-spacing", "-0.05em");

    usingSafari = true;
    $("#test").text("SAFARI");
}

var deviceType = 0;

if(/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    deviceType = 1;
} else if(/Android/i.test(navigator.userAgent)) {
    deviceType = 2;
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

var animationEvent = whichAnimationEvent();

$(".typed *").one(animationEvent, function(event) {
    $(this).css("border-right", ".1em solid #1AB423").css("animation", "blink-caret .85s step-end infinite");

    $("#attributes").fadeIn(1300);

    if($(window).width() <= 770) {
        adjustMobileTitles();

        setTimeout(function() {
            $("#moreTitleWrapper").fadeIn(1300);
            $("#legal").fadeIn(1300);
        }, 500);

        setTimeout(function() {
            $("#aboutTitleWrapper").fadeIn(1300);
        }, 375);

        setTimeout(function() {
            $("#projectsTitleWrapper").fadeIn(1300);
        }, 250);

        setTimeout(function() {
            $("#applicationsTitleWrapper").fadeIn(1300);
        }, 125);

    } else {
        setTimeout(function() {
            $("#aboutTitleWrapper").fadeIn(1300);
            $("#moreTitleWrapper").fadeIn(1300);
            $("#legal").fadeIn(1300);
        }, 500);

        setTimeout(function() {
            $("#applicationsTitleWrapper").fadeIn(1300);
            $("#projectsTitleWrapper").fadeIn(1300);
        }, 250);
    }
});

function adjustMobileTitles() {
    $("#applicationsTitleWrapper").css("top", $("#intro").height()*1.5).css("width", "149px").css("left", "0");
    $("#projectsTitleWrapper").css("top", $("#intro").height()*1.5 + 100).css("width", "106px").css("right", "0");
    $("#aboutTitleWrapper").css("top", $("#intro").height()*1.5 + 200).css("width", "73px").css("left", "0");
    $("#aboutTitleWrapper").css("margin-top", "0");
    $("#moreTitleWrapper").css("top", $("#intro").height()*1.5 + 300).css("width", "62px").css("right", "0");
    $("#moreTitleWrapper").css("margin-top", "0");
}

function resetTitles() {
    $("#applicationsTitleWrapper").css("top", "auto").css("width", "247px").css("left", "10%");
    $("#projectsTitleWrapper").css("top", "auto").css("width", "175px").css("right", "10%");
    $("#aboutTitleWrapper").css("top", "auto").css("width", "121px").css("left", "10%").css("margin-top", "100px");
    $("#moreTitleWrapper").css("top", "auto").css("width", "104px").css("right", "10%").css("margin-top", "100px");
}

var sectionOpened = false;
var lastWidth = $(window).width();

$(".sectionTitle").on("click", function() {
    let clickedEl = $(this).attr("id");

    if(sectionOpened) {
        sectionOpened = false;

        $(".sectionTitle").each(function() {
            if($(this).attr("id") !== clickedEl) {
                $(this).fadeIn(300);
            }
        });

        $("html, body").animate({ scrollTop: 0 }, 150);

        if(clickedEl === $(".sectionTitle:eq(0)").attr("id")) {
            $("#applicationsTitle div.openInd").fadeOut(150);

            if($(window).width() > 770) {
                setTimeout(function() {
                    $("#applicationsTitleWrapper").css("width", "247");
                }, 200);

                $(this).parent().animate({
                    left: "10%"
                    }, 300, function() {
                        resetTitles();
                });
            } else {
                setTimeout(function() {
                    $("#applicationsTitleWrapper").css("width", "149");
                    adjustMobileTitles();
                }, 200);

                
            }

	        $(".applicationsContent").fadeOut(300);

        } else if(clickedEl === $(".sectionTitle:eq(1)").attr("id")) {
            $("#projectsTitle div.openInd").fadeOut(150);

            if($(window).width() > 770) {
                setTimeout(function() {
                    $("#projectsTitleWrapper").css("width", "175");
                }, 200);

                $(this).parent().animate({
                    right: "10%"
                    }, 300, function() {
                        resetTitles();
                });
            } else {
                setTimeout(function() {
                    $("#projectsTitleWrapper").css("width", "106");
                }, 200);

                $(this).parent().animate({
                    top: $("#intro").height()*1.5+100
                    }, 300, function() {
                        adjustMobileTitles();
                });
            }

            $(".projContent").fadeOut(300);
            
        } else if(clickedEl === $(".sectionTitle:eq(2)").attr("id")) {
            $("#aboutTitle div.openInd").fadeOut(150);

            if($(window).width() > 770) {
                setTimeout(function() {
                    $("#aboutTitleWrapper").css("width", "121");
                }, 200);

                $(this).parent().animate({
                    left: "10%",
                    marginTop: "+=100"
                    }, 300, function() {
                        resetTitles();
                });
            } else {
                setTimeout(function() {
                    $("#aboutTitleWrapper").css("width", "73");
                }, 200);

                $(this).parent().animate({
                    top: $("#intro").height()*1.5+200
                    }, 300, function() {
                        adjustMobileTitles();
                });

                //$("#aboutSection").css("height", "100%");
                $("#content").css("margin", "auto").css("height", "300");
                $("#aboutSection p:eq(0)").css("margin-top", "0px");
            }

            $("#aboutSection").fadeOut(200);

            setTimeout(function() {
                $(".aboutContent").html("<p><span class=\"enterChar\">></span> I have a Bachelor's Degree in Computing and "+
                        "Information Studies from</p><p><span class=\"enterChar\">></span> <a "+
                        "href=\"http://www.washjeff.edu\" target=\"_blank\">Washington &amp; Jefferson College</a>, with "+
                        "minors in Neuroscience and Philosophy.</p><p><span class=\"enterChar\">></span> Although I have a "+
                        "strong interest in programming and solving problems</p><p><span class=\"enterChar\">></span> "+
                        "through computers, I am also fascinated by how the human mind works, both</p><p><span class=\""+
                        "enterChar\">></span> physiologically and on a more abstract level. I have been programming</p><p>"+
                        "<span class=\"enterChar\">></span> for six years and would consider myself proficient in Java, "+
                        "JavaScript</p><p><span class=\"enterChar\">></span> and JQuery/Jquery Mobile, HTML5 and CSS3, XML, "+
                        "JSON, and SQL.</p><p><span class=\"enterChar\">></span></p><p><span class=\"enterChar\">></span> I "+
                        "have recently concluded my internship at <a href=\"https://www.aires.com/\" target=\"_blank\">Aires"+
                        "</a> for the summer, but I work</p><p><span class=\"enterChar\">></span> on programming projects in "+
                        "my spare time as well. You can contact me using</p><p><span class=\"enterChar\">></span> the email "+
                        "bechek.jordan@gmail.com.</p>");
            }, 200);

        } else if(clickedEl === $(".sectionTitle:eq(3)").attr("id")) {
            $("#moreTitle div.openInd").fadeOut(150);

            $("#moreDiv").fadeOut(200);

            if($(window).width() > 770) {
                setTimeout(function() {
                    $("#moreTitleWrapper").css("width", "104");
                }, 200);

                $(this).parent().animate({
                    right: "10%",
                    marginTop: "+=100"
                    }, 300, function() {
                        resetTitles();
                });
            } else {
                setTimeout(function() {
                    $("#moreTitleWrapper").css("width", "62");
                }, 200);

                $(this).parent().animate({
                    top: $("#intro").height()*1.5+300
                    }, 300, function() {
                        adjustMobileTitles();
                });
            }

            $("#content").css("height", "300px");
        }

        setTimeout(function() {
            $("#"+clickedEl).addClass("unselected");
        }, 500);
    } else {
        sectionOpened = true;

        $(".sectionTitle").each(function() {
            if($(this).attr("id") !== clickedEl) {
                $(this).fadeOut(200);
            }
        });

        $("#"+clickedEl).removeClass("unselected");

        let distance = $(window).width()/2 - ($(this).parent().width()+91)/2;

        if(clickedEl === $(".sectionTitle:eq(0)").attr("id")) {
            if($(window).width() > 770) {
                $(this).parent().animate({
                    left: distance
                    }, 300, function() {
                        $("#applicationsTitleWrapper").css("width", "338");
                        $("#applicationsTitle div.openInd").css("display", "inline-block");
                });
            } else {
                $("#applicationsTitleWrapper").css("width", "202");
                $("#applicationsTitle div.openInd").css("display", "inline-block");
            }

            if(usingSafari) {
                $(".app").css("opacity", "0").css("display", "inline-block");
                $(".appTitle").css("cursor", "default");

	            $(".applicationsContent").animate({
	            	opacity: "1"
	            	}, 500, function() {
	            		$(".appTitle").css("cursor", "auto");
	            });
	        } else {
	        	$(".applicationsContent").fadeIn(300).css("display", "inline-block");
	        }

        } else if(clickedEl === $(".sectionTitle:eq(1)").attr("id")) {
            //$("#content").css("height", "800px");

            if($(window).width() <= 493 && $(window).width() > 325) {
                $("#databaseProj").css("margin-bottom", "50px").css("margin-top", "-20px");
            } else if($(window).width() <= 325) {
                $("#databaseProj").css("margin-bottom", "50px").css("margin-top", "7%");
            }

            if($(window).width() > 770) {
                $(this).parent().animate({
                    right: distance
                    }, 300, function() {
                        $("#projectsTitleWrapper").css("width", "266");
                        $("#projectsTitle div.openInd").css("display", "inline-block");
                });
            } else {
                $(this).parent().animate({
                    top: $("#intro").height()*1.5
                    }, 300, function() {
                        $("#projectsTitleWrapper").css("width", "159");
                        $("#projectsTitle div.openInd").css("display", "inline-block");
                });
            }

            if(usingSafari) {
                $(".proj").css("opacity", "0").css("display", "inline-block");
                $(".projTitle").css("cursor", "default");

                $(".projContent").animate({
                    opacity: "1"
                    }, 500, function() {
                        $(".projTitle").css("cursor", "auto");
                });
            } else {
                $(".projContent").fadeIn(300).css("display", "inline-block");
            }

            //$(".proj").fadeIn(300).css("display", "inline-block");
        } else if(clickedEl === $(".sectionTitle:eq(2)").attr("id")) {
            if($(window).width() > 770) {
                $(this).parent().animate({
                    left: distance,
                    marginTop: "-=100"
                    }, 300, function() {
                        $("#aboutTitleWrapper").css("width", "212");
                        $("#aboutTitle div.openInd").css("display", "inline-block");
                });
            } else {
                $(this).parent().animate({
                    top: $("#intro").height()*1.5
                    }, 300, function() {
                        $("#aboutTitleWrapper").css("width", "127");
                        $("#aboutTitle div.openInd").css("display", "inline-block");
                });

                $(".aboutContent").html("<p>I have a Bachelor's Degree in Computing and Information Studies from <a "+
                    "href=\"http://www.washjeff.edu\" target=\"_blank\">Washington &amp; Jefferson College</a>, with minors "+
                    "in Neuroscience and Philosophy. Although I have a strong interest in programming and solving problems "+
                    "through computers, I am also fascinated by how the human mind works, both physiologically and on a more "+
                    "abstract level. I have been programming for six years and would consider myself proficient in Java, "+
                    "JavaScript and JQuery/Jquery Mobile, HTML5 and CSS3, XML, JSON, and SQL.<br><br>I have recently "+
                    "concluded my internship at <a href=\"https://www.aires.com/\" target=\"_blank\">Aires</a> for the "+
                    "summer, but I work on programming projects in my spare time as well. You can contact me using the "+
                    "email bechek.jordan@gmail.com.</p>");

                $("#content").css("margin-top", $("#intro").height()*0.5).css("height", "auto");
                $("#aboutSection p:eq(0)").css("margin-top", "7px");
            }

            $("#aboutSection").fadeIn(300);
            //$("#content").css("background-color", "red").css("height", "400px");
        } else if(clickedEl === $(".sectionTitle:eq(3)").attr("id")) {
            $("#content").css("height", "auto");
            $("#moreDiv").fadeIn(300);

            if($(window).width() > 770) {
                $(this).parent().animate({
                    right: distance,
                    marginTop: "-=100"
                    }, 300, function() {
                        $("#moreTitleWrapper").css("width", "195");
                        $("#moreTitle div.openInd").css("display", "inline-block");
                });
            } else {
                $(this).parent().animate({
                    top: $("#intro").height()*1.5
                    }, 300, function() {
                        $("#moreTitleWrapper").css("width", "116");
                        $("#moreTitle div.openInd").css("display", "inline-block");
                });
            }
        }
    }
});

if($(window).width() <= 770 && deviceType > 0) {
    $(".overlayTextWrapper").css("display", "none");
}

$(".overlayWrapper").hover(function() {
    if(deviceType === 0) {
        $(this).children("img").css("opacity", "0.3");
    }
}, function() {
    $(this).children("img").css("opacity", "1");
});

$(".folderWrapper").hover(function() {
    if(deviceType === 0) {
        $(this).children("a").children("img").css("opacity", "0.7").css("cursor", "pointer");
    }
}, function() {
    $(this).children("a").children("img").css("opacity", "1").css("cursor", "default");
});

$("#studentsEdge").on("click", function() {
    if(deviceType === 1) {
        window.location = "https://itunes.apple.com/us/app/students-edge/id1147786379?mt=8";
    } else if(deviceType === 2) {
        window.location = "https://play.google.com/store/apps/details?id=io.cordova.studentsedge";
    }
});

$("#mySunnyDay").on("click", function() {
    if(deviceType > 0) {
        window.location = "https://itunes.apple.com/us/app/my-sunny-day/id1335787451?mt=8";
    }
});

$("#studentsEdge .overlayTextWrapper").on("click", function() {
	if($(this).children("div").hasClass("overlayiOS")) {
		//window.location = "https://itunes.apple.com/us/app/students-edge/id1147786379?mt=8";
        window.open("https://itunes.apple.com/us/app/students-edge/id1147786379?mt=8","_blank");
	} else if($(this).children("div").hasClass("overlayAndroid")) {
		//window.location = "https://play.google.com/store/apps/details?id=io.cordova.studentsedge";
        window.open("https://play.google.com/store/apps/details?id=io.cordova.studentsedge","_blank");
	}
});

$("#mySunnyDay .overlayTextWrapper").has(".overlayiOS").on("click", function() {
	//window.location = "https://itunes.apple.com/us/app/my-sunny-day/id1335787451?mt=8";
    window.open("https://itunes.apple.com/us/app/my-sunny-day/id1335787451?mt=8", "_blank");
});

$(".projTitle").on("mouseover", function() {
    if(deviceType === 0) {
        $(this).parent().children("div.folderWrapper").children("a").children("img").css("opacity", "0.7");
    }
});

$(".projTitle").on("mouseleave", function() {
    if(deviceType === 0) {
        $(this).parent().children("div.folderWrapper").children("a").children("img").css("opacity", "1");
    }
});

$(".proj img").on("mouseover", function() {
    if(deviceType === 0) {
        $(this).css("opacity", "0.7");
    }
});

$(".proj img").on("mouseleave", function() {
    if(deviceType === 0) {
        $(this).css("opacity", "1");
    }
});

$(window).on("resize", function() {
    let el = $("div.sectionTitle:not(.unselected)").attr("id");

    if($(this).width() > 770) {
        if(!sectionOpened) {
            resetTitles();
        } else {
            if(lastWidth <= 770) {
                $("div.sectionTitle:not(.unselected)").trigger("click");
            }
        }

        $("#content").css("margin", "auto");

        //$("#test").append("X");
        let x = $(this).width()/2 - ($("#"+el).parent().width()+91)/2 + 45;

        if(el === $(".sectionTitle:eq(3)").attr("id") || el === $(".sectionTitle:eq(1)").attr("id")) {
            $("div.sectionTitle:not(.unselected)").parent().css("right", x);
            //$("#test").append("X");
        } else {
            $("div.sectionTitle:not(.unselected)").parent().css("left", x);
        }
    } else {
        if(!sectionOpened) {
            adjustMobileTitles();
        } else {
            if(lastWidth >= 771) {
                $("div.sectionTitle:not(.unselected)").trigger("click");
            }
        }

        $("div.sectionTitle:not(.unselected)").parent().css("top", $("#intro").height()*1.5);

        if(el ===  "projectsTitle") {
            if((lastWidth > 493 && $(this).width() <= 493) || (lastWidth < 343 && $(this).width() >= 343)) {
                $("#databaseProj").css("margin-bottom", "50px").css("margin-top", "-20px");
            } else if(lastWidth > 325 && $(this).width() <= 325) {
                $("#databaseProj").css("margin-top", "7%");
            }
        } else if(el === "aboutTitle") {
            $("#content").css("margin-top", $("#intro").height()*0.5);
        }
    }

    lastWidth = $(this).width();
});
