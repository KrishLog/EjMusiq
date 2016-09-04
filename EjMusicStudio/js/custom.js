/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});


$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 600,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});

    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color","#FF6600");
        } else {
            $("#navigation").css("background-color","rgba(16, 22, 54, 0.2)");
        }
    });

	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */

	var slideHeight = $(window).height();

	$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);
	});


	/* ========================================================================= */
	/*	Portfolio Filtering
	/* ========================================================================= */


    var $containerVideo = $('.project-wrapper.video-gallery-wrapper');
    $containerVideo.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    var $containerPhoto = $('.project-wrapper.photo-gallery-wrapper');
    $containerPhoto.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.work-filter.videoGallery a').click(function(){
        $('.work-filter.videoGallery .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');
        $containerVideo.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });

    $('.work-filter.photoGallery a').click(function(){
        $('.work-filter.photoGallery .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');
        $containerPhoto.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });


	$(".fancybox, .fancyboxVideo").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
        beforeLoad  : function(){
                        var url= $(this.element).attr("href");
                        url = url.replace(new RegExp("watch\\?v=", "i"), 'v/');
                        url += '?fs=1&autoplay=1';
                        this.href = url
                    }
	});

   /* $(".various").fancybox({
                    maxWidth    : 800,
                    maxHeight   : 600,
                    fitToView   : false,
                    width       : '70%',
                    height      : '70%',
                    autoSize    : false,
                    closeClick  : true,
                    openEffect  : 'elastic',
                    openSpeed  : 650,
                    closeEffect : 'elastic',
                    closeSpeed  : 550,
                    beforeLoad  : function(){
                        var url= $(this.element).attr("href");
                        url = url.replace(new RegExp("watch\\?v=", "i"), 'v/');
                        url += '?fs=1&autoplay=1';
                        this.href = url
                    }
                });

                */



	/* ========================================================================= */
	/*	Parallax
	/* ========================================================================= */

	$('#facts').parallax("50%", 0.3);

	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	"use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });

	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */


    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });

});


// ==========  START GOOGLE MAP ========== //
function initialize() {
    var myLatLng = new google.maps.LatLng(12.9627313, 77.6568689);

    var mapOptions = {
        zoom: 14,
        center: myLatLng,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
        }
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: 'img/location-icon.png',
        title: 'EJ Music Studios',
    });

}

google.maps.event.addDomListener(window, "load", initialize);
// ========== END GOOGLE MAP ========== //
