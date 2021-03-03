$(document).ready(function(){
    var onlineInit = function() {
        var isAnimate = false;
        $("#online_open").on("click", function(event) {
            if (isAnimate) return;
            isAnimate = true;
            $("#online_open").animate({
                "right": -40
            }, 200, "easeOutExpo", function() {
                $("#online_lx").animate({
                    "right": 10
                }, 600, "easeOutExpo", function() {
                    isAnimate = false;
                });
            });
            if (window.localStorage) {
                window.localStorage.setItem('onlineStatus', "open");
            }
        });
        $("#online_close").on("click", function() {
            if (isAnimate) return;
            isAnimate = true;
            $("#online_lx").animate({
                "right": -200
            }, 400, "easeOutExpo", function() {
                $("#online_open").animate({
                    "right": 10
                }, 200, "easeOutExpo", function() {
                    isAnimate = false;
                });
            });
            if (window.localStorage) {
                window.localStorage.setItem("onlineStatus", "close");
            }
        });
        if (window.localStorage) {
            var onlineStatus = window.localStorage.getItem("onlineStatus");
            if (onlineStatus == "close") {
                $("#online_open").css("right", 10);
                $("#online_lx").css("right", -200);
            }
        }
    }
    onlineInit()
    var shareInit = function() {
        var data = {
            "title": document.title,
            "url": document.location.href
        };
        $("#fixed_weixin").on("click", function(event) {
            if (event.target == this) {
                $(this).removeClass("show");
            }
        });
        $("#sweibo").attr("href", $("#sweibo").attr("href") + $.param(data));
        $("#sweixin").on("click", function(event) {
            $("#fixed_weixin").addClass("show");
            shareWeixin(data.url);
        }.bind(this));
        $("#gotop").on("click", function(event) {
            $("html,body").animate({
                "scrollTop": 0
            }, 300);
        });
    }
    shareInit()
    var shareWeixin = function(str) {
        var cacheStr = String($("#qrcode").data('qrcode'));
        if (cacheStr == str) return;
        if (this.wxQrcode) {
            this.wxQrcode.clear();
            this.wxQrcode.makeCode(str);
        } else {
            this.wxQrcode = $("#qrcode").qrcode({ width: 220, height: 220, text: str });
        }
        $("#qrcode").data("qrcode", str);
    }

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    })
    wow.init();
})