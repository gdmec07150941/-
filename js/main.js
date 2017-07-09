var minSize = 5; // 飘落物的最小尺寸
var maxSize = 70; // 飘落物的最大尺寸
var newOne = 300; // 产生飘落物的时间(毫秒)
var thingColor = "#c00"; // 飘落物的颜色
var things = $("<div></div>").css({
    "position": "absolute",
    "top": "-50px"
}).html("&hearts;");

$(function () {
    console.log($(document).height());
    console.log($(document).width());

    // 手风琴效果
    $(".pic ul li").mouseover(function () {
        // console.log($(this));
        $(this).stop(true).animate({width:"800px"}, 1000).siblings().stop(true).animate({width:"110px"}, 1000);
    });

    var documentHeight = $(document).height();
    var documentWidth = $(document).width();
    setInterval(function () {
        var starPositionLeft = Math.random() * documentWidth;  // 起始下落的水平位置
        var starOpacity = 0.7 + Math.random() * 0.3; // 起始透明度
        var endPositionHeightTop = documentHeight;  // 最终距离浏览器顶部的位置(浏览器底部)
        var endPositionLeft = Math.random() * documentWidth; // 下落到底部时与浏览器左边的距离
        var durationFall = 4000 + Math.random() * 3000; // 完成飘落的时间
        var sizeThing = minSize + Math.random() * maxSize;  // 飘落物的大小
        things.clone().appendTo("body").css({
            "left": starPositionLeft,
            "opacity": starOpacity,
            "font-size": sizeThing,
            "color": thingColor
        }).animate({
            "top": endPositionHeightTop,
            "left": endPositionLeft,
            "opacity": 0.5
        }, durationFall, function () {
            $(this).remove();
        });

    }, newOne);


})