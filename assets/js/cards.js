
$(".readmore-btn").on("click", function(){
    $(this).parent().toggleClass("showContent");
    var replaceText = $(this).parent().hasClass("showContent") ? "Show less": "Show more";
    $(this).text(replaceText);
});
