$(function() {
    $('a[href^="#"]').click(function() {
        var t = $(this).attr("href");
        if ("#" !== t) return $("html, body").animate({
            scrollLeft: $(t).position().left
        }, 300), !1
    })
});