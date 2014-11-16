function clickSidebar0(el){
    var closeToggle = $(el);
    $('#sidebar-0').css('-webkit-transform', 'translate3d(0px, 0px, 0px) rotateY(-95deg)');
    setTimeout(function(){
        var tootle = $('#sidebar-1');
        tootle.css("-webkit-transform","translate3d(0px, 50px, 0px)");
        var tooltips = closeToggle.children("div").first();
        tooltips.css("opacity",0);
        tooltips.css("-webkit-transform","translate3d(-163px, 0px, 0px)");
        var sidebarContent = $('#sidebar-content');
        sidebarContent.css("-webkit-transform","translate3d(1366px, 0px, 0px)");
        var sidebarWrapper = $("#sidebar-wrapper");
        sidebarWrapper.css("-webkit-transform","translate3d(1316px, 35px, 0px)");
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