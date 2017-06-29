// 서브메뉴 제어를 위한 스크립트
$(function() {
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
});