$(document).ready(function(){
    $(window).on("scroll",function() {
        var scrollDistance = $(window).scrollTop();
        var $header = $(".js-header");
        if(scrollDistance>80){
            $header.addClass("header--color");
        }
        else{
            $header.removeClass("header--color");
        }
        
    })
    if(screen.width>768){
        new WOW().init();
    }
    if(screen.width>768) {
        $(window).stellar();
    }
})

