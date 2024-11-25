$(document).ready(function() {
    
    /* show sticky navigation */
    $(".js--section-features").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("nav-sticky");
        } else {
            $("nav").removeClass("nav-sticky");
        }
    }, {
        offset: "50px;"
    });
    
    /*scroll on buttons */
    $(".js--scroll-to-features").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000)
    });
    $(".js--scroll-to-contact-form").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-form").offset().top}, 1000)
    });
    
    /* smooth scrolling on navigation */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animations on scroll */
    $(".js--wp-1").waypoint(function(direction) {
        $(".js--wp-1").addClass("animated fadeIn");
    },
    { 
        offset: "50%"
    });
    
    $(".js--wp-2").waypoint(function(direction) {
        $(".js--wp-2").addClass("animated fadeInUp");
    },
    { 
        offset: "50%"
    });
    
     $(".js--wp-3").waypoint(function(direction) {
        $(".js--wp-3").addClass("animated fadeIn");
    },
    { 
        offset: "50%"
    });
    
    $(".js--wp-4").waypoint(function(direction) {
        $(".js--wp-4").addClass("animated pulse");
    },
    { 
        offset: "50%"
    });
    
    /* mobile navigation */
    $(".js--nav-icon-mobile").click(function() {
        var nav = $(".js--nav-main");
        var icon = $(".js--nav-icon-mobile i");
        
        nav.slideToggle(200);
        if (icon.hasClass("ion-navicon-round")) {
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        } else {
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
        }
        
    });
});