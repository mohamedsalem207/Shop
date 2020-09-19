$(function() {

    "use strict";

    $("body").css("padding-top", $("header").innerHeight());

    $("body").click(function() {

        $("div.login.show-details").removeClass("active");

        $("div.login-details").fadeOut(0);

        $("div.help-details").fadeOut(0);

        $("nav.icon-menu").fadeOut(0);

    });

    $(document).keydown(function(e) {

        if (e.keyCode == 27) {

            $("div.login-details").fadeOut(0);

            $("div.help-details").fadeOut(0);

            $("div.login.show-details").removeClass("active");

            $("div.media-login.show-details").removeClass("active");

            $("nav.icon-menu").fadeOut(0);

        }

    })

    $("div.navbar i.navbar-icons").click(function(e) {

        e.stopPropagation();

        if ($("nav.icon-menu").css("display") == "none") {

            $("nav.icon-menu").slideDown(20);

        } else if ($("nav.icon-menu").css("display") == "block") {

            $("nav.icon-menu").fadeOut(0);

            console.log("Good");

        }

    })

    $("div.login.show-details").each(function() {

        $(this).click(function(e) {

            e.stopPropagation();

            $(this).addClass("active").siblings().removeClass("active");

        })

    })

    $("nav div.show-login-details").click(function() {

        if ($("nav div.login-details").css("display") == "none") {

            $("nav div.help-details").fadeOut(0);
            
            $("nav div.login-details").slideDown(50);

        } else if ($("nav div.login-details").css("display") == "block") {

             $("nav div.show-login-details").removeClass("active");
            
            $("nav div.login-details").fadeOut(0);

        }

    })

    $("nav div.show-help-details").click(function() {

        if ($("nav div.help-details").css("display") == "none") {

            $("nav div.login-details").fadeOut(0);
            
            $("nav div.help-details").slideDown(50);

        } else if ($("nav div.help-details").css("display") == "block") {

             $("nav div.show-help-details").removeClass("active");
            
            $("nav div.help-details").fadeOut(0);

        }

    })

    $("div.login-details").click(function(e) {

        e.stopPropagation();

    })

    $("div.help-details").click(function(e) {

        e.stopPropagation();

    })

    $("div.media-login.show-details").each(function() {

        $(this).click(function(e) {

            e.stopPropagation();

            $(this).addClass("active").siblings().removeClass("active");

        })

    })

    $("div.media-show-login-details").click(function() {

        if ($("div.login-details").css("display") == "none") {

            $("div.help-details").fadeOut(0);
            
            $("div.login-details").slideDown(50);

        } else if ($("div.login-details").css("display") == "block") {

             $("div.media-show-login-details").removeClass("active");
            
            $("div.login-details").fadeOut(0);

        }

    })

    $("div.media-show-help-details").click(function() {

        if ($("div.help-details").css("display") == "none") {

            $("div.login-details").fadeOut(0);
            
            $("div.help-details").slideDown(50);

        } else if ($("div.help-details").css("display") == "block") {

             $("div.media-show-help-details").removeClass("active");
            
            $("div.help-details").fadeOut(0);

        }

    })

    var placeAttr = "";

    $(":input").focus(function() {

        placeAttr =  $(this).attr("placeholder");

        $(this).attr("placeholder", "");

    }).blur(function() {

        $(this).attr("placeholder", placeAttr);

    })

    $("i.search-icon").click(function() {

        if ($("div.search input").val() == "") {

            $("div.search input").focus();

        }

    })

    $("div.search button").click(function() {

        if ($("div.search input").val() == "") {

            $("div.search input").focus();

        }

    })

    $("div.same-height").css("height", "289.6px");

    $("main div.content a").click(function(e) {

        e.stopPropagation();

    })

    $("div.menu-details").click(function(e) {

        e.stopPropagation();

    })

    $("main div.content a").hover(function() {

        $("div.menu-details").fadeIn(0);

        $(this).addClass("active-menu").siblings().removeClass("active-menu");

        $("#" + $(this).data("details")).fadeIn(10).siblings().fadeOut(0);

    }, function() {

        $("div.menu-details").fadeOut(0);

        $("main div.content a").removeClass("active-menu");

    })

    $("div.menu-details").hover(function() {

        $(this).css("display", "block");

    }, function() {

        $(this).fadeOut(0);

        $("main div.content a").removeClass("active-menu");

    })

    $("main i.slide-right").each(function() {

        $(this).click(function() {

            $(this).parent().animate({

                right: "+=" + "1175px"

            }, 500, function() {

                $(this).css("visibility", "hidden");

            })

            $(this).parent().siblings().animate({

                right: "+=" + "1175px"

            }, 500, function() {

                $(this).css("visibility", "visible");

            })

        })

    })

    $("main i.slide-left").each(function() {

        $(this).click(function() {

            $(this).parent().animate({

                right: "-=" + "1175px"

            }, 500, function() {

                $(this).css("vsibility", "hidden");

            }) 

            $(this).parent().siblings().animate({

                 right: "-=" + "1175px"

            }, 500)

            // $(this).parent().siblings().css("visibility", "visible");

            $(this).parent().prev().css("visibility", "visible");

        })

    })

})