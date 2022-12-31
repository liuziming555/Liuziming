$(document).ready(function() {
    "use strict";
    //wap-nav
    (function() {
        var nav_btn = $(".wap-menu");
        var nav_box = $(".wap-sub");
        nav_btn.click(function(e) {
            e.preventDefault();
            $(this).toggleClass("on");
            nav_box.toggleClass("on");
        });
        var nav_first = nav_box.find(".s-row");
        nav_first.click(function() {
            $(this).find("span").click(function() {
                nav_box.removeClass("on");
            });
			 nav_box.removeClass("on");
            $(this).toggleClass("on");
            nav_first.not($(this)).removeClass("on");
            var nav_sub = $(this).find(".s-sub");
            nav_sub.click(function(e) {
                e.stopPropagation();
            });
            nav_sub.slideToggle();
            nav_first.not($(this)).find(".s-sub").slideUp();
        });
    })();
    //delay
    function delay(id) {
        var tar = $(id);
        tar.addClass("wow fadeInUp");
        if (delay) {
            for (var i = 0; i < tar.length; i++) {
                tar.eq(i).attr("data-wow-delay", i * 0.2 + "s");
            }
        }
    }
   /* delay(".g-nft .m-box .m-c ul li");
    delay(".g-youshi .m-c .s-info li");
	  delay(".g-jsys .m-c p");
    delay(".g-gz .s-info ul li ");
	  delay(".g-youshi .m-c .s-info .txt1 p");
	delay('.g-xz .m-c .s-info ul li');
	delay('.g-about .m-c .s-info1 ul li');
	delay(".g-youshi .m-c .s-info .txt p");
	delay(".g-sys .m-c .s-info ul li")*/
    //wow
    var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        mobile: false,
        offset: 200,
        live: true
    });
    wow.init();
});