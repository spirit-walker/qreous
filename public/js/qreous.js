//work around for keeping sidebar when window is resized
$('head').ready(function(){
    console.log($(window).width());
    var sidebarWrapper = $("#sidebar-wrapper");
    var x = $(window).width() - 50;
    console.log(x);
    sidebarWrapper.css("-webkit-transform","translate3d(" + x + "px, 35px, 0px)");
});

function clickSidebar0(el){
    var closeToggle = $(el);
    $('#sidebar-0').css('-webkit-transform', 'translate3d(0px, 0px, 0px) rotateY(-95deg)');
    setTimeout(function(){
        var x = $(window).width() - 50;
        var tootle = $('#sidebar-1');
        tootle.css("-webkit-transform","translate3d(0px, 50px, 0px)");
        var tooltips = closeToggle.children("div").first();
        tooltips.css("opacity",0);
        tooltips.css("-webkit-transform","translate3d(-163px, 0px, 0px)");
        var sidebarContent = $('#sidebar-content');
        sidebarContent.css("-webkit-transform","translate3d(1366px, 0px, 0px)");

        var sidebarWrapper = $("#sidebar-wrapper");
        sidebarWrapper.css("-webkit-transform","translate3d(" + x + "px, 35px, 0px)");
    }, 500);
}

function clickSidebar1(el){
    var toggle = $(el);
    var sidebarContent = $('#sidebar-content');
    sidebarContent.css("-webkit-transform","translate3d(612px, 0px, 0px)");

    var sidebarWrapper = $("#sidebar-wrapper");
    sidebarWrapper.css("-webkit-transform","translate3d(562px, 35px, 0px)");
    setTimeout(function(){
        var closeToggle = $('#sidebar-0');
        closeToggle.css('-webkit-transform', 'translate3d(0px, 0px, 0px) rotateY(-0.127722222206685deg)');
    }, 500);
}

function hoverSidebar0(el, mousein){
    var toggle = $(el);
    var tooltips = toggle.children("div").first();
    if(mousein){
        toggle.css("background-color", "rgb(203, 97, 90)");
        tooltips.css("opacity","");
        tooltips.css("-webkit-transform","translate3d(-98px, 0px, 0px)");
    }else{
        toggle.css("background-color", "rgb(231, 110, 102)");
        tooltips.css("opacity",0);
        tooltips.css("-webkit-transform","translate3d(-163px, 0px, 0px)");
    }
}

function hoverSidebar1(el, mousein){
    var toggle = $(el);
    var tooltips = toggle.children("div").first();
    if(mousein){
        toggle.css("background-color", "rgb(79, 87, 89)");
        tooltips.css("opacity","");
        tooltips.css("-webkit-transform","translate3d(-123px, 0px, 0px)");
    }else{
        toggle.css("background-color", "rgb(56, 61, 63)");
        tooltips.css("opacity",0);
        tooltips.css("-webkit-transform","translate3d(-163px, 0px, 0px)");
    }
}

( function( $ ) {
    $( document ).ready(function() {
        $('#cssmenu').click(function(){alert('click')});
        $('#cssmenu').prepend('<div id="indicatorContainer"><div id="pIndicator"><div id="cIndicator"></div></div></div>');
        var activeElement = $('#cssmenu>ul>li:first');

        $('#cssmenu>ul>li').each(function() {
            if ($(this).hasClass('active')) {
                activeElement = $(this);
            }
        });


        var posLeft = activeElement.position().left;
        var elementWidth = activeElement.width();
        posLeft = posLeft + elementWidth/2 -6;
        if (activeElement.hasClass('has-sub')) {
            posLeft -= 6;
        }

        $('#cssmenu #pIndicator').css('left', posLeft);
        var element, leftPos, indicator = $('#cssmenu pIndicator');


        $("#cssmenu>ul>li").hover(function() {
                alert(3);
                element = $(this);
                var w = element.width();
                if ($(this).hasClass('has-sub'))
                {
                    leftPos = element.position().left + w/2 - 12;
                }
                else {
                    leftPos = element.position().left + w/2 - 6;
                }

                $('#cssmenu #pIndicator').css('left', leftPos);
            }
            , function() {
                alert(4);
                $('#cssmenu #pIndicator').css('left', posLeft);
            });

        $('#cssmenu>ul').prepend('<li id="menu-button"><a>Menu</a></li>');
        $( "#menu-button" ).click(function(){
            alert(5);
            if ($(this).parent().hasClass('open')) {
                $(this).parent().removeClass('open');
            }
            else {
                $(this).parent().addClass('open');
            }
        });
    });
} )( jQuery );
