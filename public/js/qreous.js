function clickSidebar(){
    if($('#sidebar').attr('show') == 'true'){
        $('#sidebar').css('-webkit-transform', 'translate(260px,0px)');
        $('#sidebar').attr('show', 'false');
    }else{
        $('#sidebar').css('-webkit-transform', 'translate(-260px,0px)');
        $('#sidebar').attr('show', 'true');
    }
}