var minSize = 5; // Ʈ�������С�ߴ�
var maxSize = 70; // Ʈ��������ߴ�
var newOne = 300; // ����Ʈ�����ʱ��(����)
var thingColor = "#c00"; // Ʈ�������ɫ
var things = $("<div></div>").css({
    "position": "absolute",
    "top": "-50px"
}).html("&hearts;");

$(function () {
    console.log($(document).height());
    console.log($(document).width());

    // �ַ���Ч��
    $(".pic ul li").mouseover(function () {
        // console.log($(this));
        $(this).stop(true).animate({width:"800px"}, 1000).siblings().stop(true).animate({width:"110px"}, 1000);
    });

    var documentHeight = $(document).height();
    var documentWidth = $(document).width();
    setInterval(function () {
        var starPositionLeft = Math.random() * documentWidth;  // ��ʼ�����ˮƽλ��
        var starOpacity = 0.7 + Math.random() * 0.3; // ��ʼ͸����
        var endPositionHeightTop = documentHeight;  // ���վ��������������λ��(������ײ�)
        var endPositionLeft = Math.random() * documentWidth; // ���䵽�ײ�ʱ���������ߵľ���
        var durationFall = 4000 + Math.random() * 3000; // ���Ʈ���ʱ��
        var sizeThing = minSize + Math.random() * maxSize;  // Ʈ����Ĵ�С
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