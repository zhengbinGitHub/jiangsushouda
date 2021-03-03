$(document).ready(function () {
    if ($("#topSlider .content_list > li").length) {
        var options = {
            slideZIndex: 1,
            nextText: '<i class="fa fa-angle-right"></i>',
            prevText: '<i class="fa fa-angle-left"></i>',
            onSliderLoad: function () {
                if($("#topSlider .content_list li.active").find('video')[0]){
                    $("#topSlider .content_list li.active").find('video')[0].play()
                }
            },
            onSlideBefore:  function ($slideElement, from, to) {
                if($slideElement.find('video')[0]){
                    $slideElement.find('video')[0].play()
                }
            },
            onSlideAfter: function ($slideElement, oldIndex, newIndex) {
                $("#topSlider .content_list li.active").removeClass('active');
                $slideElement.addClass('active');
            }
        };
        var $slider=$("#topSlider .content_list");

        if(!this._singleScreen){
            var sliderHeight=parseInt(String($slider.data("slider-height")));
            if(sliderHeight)$("#topSlider .content_list ul li").height(sliderHeight);
        }

        options['auto'] = parseInt(String($slider.data("slider-auto")));
        options['mode'] = String($slider.data("slider-mode"));
        options['pause'] = parseInt(String($slider.data("slider-pause"))) * 1000;
        options['easing'] = String($slider.data("slider-ease"));
        options['pager'] = true;
        $slider.bxSlider(options);
    }
    $('.counterDX').countUp({delay: 10,time: 2000});

    var SliderOption = {
        slideWidth: 278,
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 2,
        startSlide: 1,
        slideMargin: 11,
        infiniteLoop: !{},
    }
    var boxSlider = function(div, SliderOption){
        $(div+' .content_wrapper .content_list').bxSlider(SliderOption);
    }
    //工程
    boxSlider('.project', SliderOption);
    //服务
    SliderOption.slideWidth = 210;
    SliderOption.maxSlides = 5;
    SliderOption.slideMargin = 0;
    boxSlider('.service', SliderOption);
    //新品推荐
    $(document).ready(function(e) {
        var idcnStartX = $(".tab_button li.active").position().left + ($(".tab_button li.active").width()-$(".tab_button .icon").width)/2;
        $(".tab_button .icon").css("left",idcnStartX);

        $(".tab_button li").click(function(e) {
            var left = $(this).position().left;
            var iconLeft = left + ($(this).width()-$(".tab_button .icon").width)/2;
            $(".tab_button .icon").stop().animate({left:iconLeft},500);
        });
    });
    //新闻
    SliderOption.slideWidth = 305;
    SliderOption.maxSlides = 3;
    SliderOption.slideMargin = 20;
    boxSlider('.news', SliderOption);
    //合作
    SliderOption.slideWidth = 200;
    SliderOption.maxSlides = 6;
    SliderOption.slideMargin = 0;
    boxSlider('.imagelink', SliderOption);
})