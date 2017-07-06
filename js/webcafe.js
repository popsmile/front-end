$(function() {
    // 메인메뉴 제어를 위한 스크립트
    $(".main-menu>li").hover(
        function() {
            $(this).children("ul").css("display", "block");
        },
        function() {
            $(this).children("ul").css("display", "none");
        });
    $(".main-menu>li").focusin(
        function() {
            $(this).children("ul").css("display", "block");
        });
    $(".main-menu ul li:last-child").focusout(
        function() {
            $(this).parent("ul").css("display", "none");
        });
    //게시판 탭 메뉴 제어를 위한 스크립트
    $(".notice-heading, .pds-heading").focus(function() {
        $(this).parent().addClass("act").siblings().removeClass("act");
    });
});