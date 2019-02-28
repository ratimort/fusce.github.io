$(window).enllax({
type: 'background',
ratio: 0.5,
direction: 'vertical'
});


$(".scroll-item").click(function(event){   
event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
});


$(window).scroll(function() {
var height = $(window).scrollTop();
if(height > 30){
$('.menu').addClass('style-menu');
} else{
$('.menu').removeClass('style-menu');
}
});

$(document).ready(function(){
    $(".click-2").click(function(){
        $(".table-2").fadeIn(600);
        $(".table-1").css('display','none');
        $(".table-3").css('display','none');
    });
    $(".click-1").click(function(){
        $(".table-1").fadeIn(600);
        $(".table-2").css('display','none');
        $(".table-3").css('display','none');
    });
    $(".click-3").click(function(){
        $(".table-3").fadeIn(600);
        $(".table-1").css('display','none');
        $(".table-2").css('display','none');
    });
    $(window).on('load', function () {
        var $preloader = $('#loading'),
            $loader   = $preloader.find('.loader');
            $body = $("body"),
            $htext = $(".h-text"),
        $body.removeClass("body1");
        $htext.removeClass("fade-text");
        $loader.fadeOut();
        $preloader.delay(500).fadeOut('slow');
    });
    $(".click-on").click(function(){
        $(".slide-menu").slideToggle("slow");
        $("body").toggleClass("body1");
        $(".line-1").toggleClass("line-1x");
        $(".line-2").toggleClass("line-2x");
    });
    $(".fade-email").click(function(){
        $(".contact-toggle").fadeIn(600);
        $("body").addClass("body1");
    });
    $(".c-fadeout").click(function(){
        $("body").removeClass("body1");
        $(".contact-toggle").fadeOut(600);
    });
});
var animationStared = false;
$(window).scroll(function() {
  if (animationStared) return;
  if ($(window).scrollTop() + $(window).height() > $('#Capa_1').height() + $('#Capa_1').offset().top) {
    $('#p1')[0].beginElement();
    $('#p2')[0].beginElement();
    animationStared = true
  }
});


var animationStared1 = false;
$(window).scroll(function() {
  if (animationStared1) return;
  if ($(window).scrollTop() + $(window).height() > $('#Capa_2').height() + $('#Capa_2').offset().top) {
    $('#h1')[0].beginElement();
    animationStared1 = true
  }
});

var animationStared2 = false;
$(window).scroll(function() {
  if (animationStared2) return;
  if ($(window).scrollTop() + $(window).height() > $('#Capa_3').height() + $('#Capa_3').offset().top) {
    $('#c1')[0].beginElement();
    $('#c2')[0].beginElement();
    animationStared2 = true
  }
});

  wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       100,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
