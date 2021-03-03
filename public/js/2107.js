function videomplay() {
    
    var $videoArea = $('.videom'),
        $videoItem = $('.videom .content_list .item_block'),
        videoLinks = [],
        videoInfor = [];


    function getSingle(fn) {
        var result;

        return function () {
            return result ? result : (result = fn.apply(this, arguments));
        };
    }

    var singleVBg = getSingle(createVideoBg);

    function createVideoBg(obj) {
        var videoBg = $('<div class="videoBg" style="display: none"></div>').appendTo($('body')),
            initObj, config, result, timer;

        initObj = {
            initDo: function () {},
            outDo: function () {},
            inDo: function () {},
            hide: function () {
                config.outDo.call(this, result);
                videoBg.fadeOut();
                $(videoBg).removeClass('deepView');
                clearTimeout(timer);
            },
            show: function () {
                timer = setTimeout(function () {
                    $(videoBg).addClass('deepView');
                }, 4000);
                config.inDo.call(this, result);
                videoBg.fadeIn();
            }
        };
        config = $.extend(initObj, obj);

        videoBg.on({
            'click': function (ev) {

                if ($(ev.target).hasClass('vPlayArea')) {

                    initObj.hide();
                }
            },
            'mousewheel': function () {
                return false;
            },
            'mousemove': function () {
                var _this = this;
                $(_this).removeClass('deepView');
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(function () {
                    $(_this).addClass('deepView');
                }, 4000);
            }
        });

        result = {
            bgJDOM: videoBg,
            hide: initObj.hide,
            show: initObj.show
        };

        initObj.initDo.call(this, result);

        return result;
    }


    var Videom = function (config, cd) {
        var cb = cb || {};
        this.initDo = false;
        this.evlist = {};
        this.initConfig = {
            link: []
        };
        this.cb = {};
        $.extend(true, this.initConfig, config);
        $.extend(true, this.cb, cb);
    };

    Videom.prototype = {
        construct: Videom,
        init: function (box, infor) {
            var videoInfor, v = this,
                videoArea;

            if (typeof infor == 'number') {
                videoInfor = this.initConfig.list[infor];
            } else {
                videoInfor = {
                    videoLink: infor
                };
            }

            if (this.initDo == true) {
                this.tabTo(videoInfor);
                this._trigger('initDo');
                return;
            }

            this.initDo = true;
            var str = '<div class="vPlayArea">';

            str += `<div class="vPlayItem">
                        <video src="" autoplay controls="controls"> 您的浏览器不支持 video 标签。 </video>
                        <div class="videoInfor">
                            <div class="videoHeader">
                                <p class="title"></p>
                                <p class="subtitle"></p>
                            </div>
                            <div class="videoDes">
                                <p class="description">
                                </p>
                            </div>
                        </div>
                    </div>`;
            str += '</div>';


            $(str).on('click', function (ev) {
                ev.stopPropagation();
            });
            videoArea = $(str).appendTo(box);

            v.box = box;
            v.videoArea = videoArea;
            v.video = videoArea.find('video');
            v.videoBox = videoArea.find('.vPlayItem');
            v.inforBox = videoArea.find('.videoInfor');
            v.desBox = videoArea.find('.videoDes');
            v.videoDom = v.video[0];

            // v._tabText(v.inforBox.find('.title'), videoInfor.title);
            // v._tabText(v.inforBox.find('.subtitle'), videoInfor.subtitle);
            // v._tabText(v.desBox.find('.description'), videoInfor.description);
            v._addControl(infor);

            this._bind('initDo', function () {
                var _this = this;
                this.video.on('click', function (ev) {
                    if (ev.which == 1) {
                        _this.tabState();
                    }
                });
            });
            this._trigger('initDo');
            this.tabTo(videoInfor);
        },
        on: function (name, fn) {
            this._bind(name, fn);
        },
        tabTo: function (infor) {
            console.log(infor);
            var initInfor = {
                index: 0,
                description: "",
                subtitle: "",
                title: "",
                videoLink: ""
            };
            $.extend(initInfor, infor);

            this._tabBtn(infor.index);
            this.video.attr('src', initInfor.videoLink);

            this._tabText(this.inforBox.find('.title'), initInfor.title);
            this._tabText(this.inforBox.find('.subtitle'), initInfor.subtitle);
            this._tabText(this.desBox.find('.description'), initInfor.description);
        },
        out: function () {
            this.stop();
            this._trigger('outvideo');
        },
        stop: function () {
            this.videoDom.pause();
        },
        play: function () {
            this.videoDom.play();
        },
        state: function () {
            var isPlay;

            if (this.videoDom.paused) {
                isPlay = false;
            } else {

                isPlay = true;
            }
            return isPlay;
        },
        tabState: function () {
            var isPlay = this.state();
            if (isPlay) {
                this.stop();
            } else {
                this.play();
            }
        },
        _addControl: function (num) {
            if (typeof num != 'number') return;
            var hasControl = false,
                v = this,
                prev, next, prevBtn, nextBtn;

            v.currentIndex = num;
            prev = {
                index: num - 1,
                className: (function () {
                    if (typeof v.initConfig.list[(num - 1)] == 'undefined') {
                        return 'disable';
                    } else {
                        return 'able';
                    }
                })()
            };
            next = {
                index: num + 1,
                className: (function () {
                    if (typeof v.initConfig.list[(num + 1)] == 'undefined') {
                        return 'disable';
                    } else {
                        return 'able';
                    }
                })()
            };

            if (hasControl) {

                prevBtn.data('index', prev.index).addClass(prev.className);
                nextBtn.data('index', next.index).addClass(next.className);
                return;
            }
            hasControl = true;

            var tabControlStr, tabControl;
            tabControlStr = `
                <div class="videoTabBtns">
                    <div class="videoTabBtn prev ${prev.className}" data-index="${prev.index}">
                        <p></p>
                        <i class="icon"></i>
                    </div>
                    <div class="videoTabBtn next ${next.className}" data-index="${next.index}">
                        <p></p>
                        <i class="icon"></i>
                    </div>
                </div>
            `;


            tabControl = $(tabControlStr).appendTo(v.box);
            prevBtn = tabControl.find('.prev');
            nextBtn = tabControl.find('.next');

            tabControl.on('click', '.videoTabBtn', function (ev) {

                ev.stopPropagation();
                var btn = this;
                if ($(btn).hasClass('disable') == false) {

                    v.tabTo(v.initConfig.list[$(btn).data('index')]);
                }
                return false;
            });

            v.tabControl = tabControl;
        },
        _tabBtn: function (index) {
            this._addControl(index);
        },
        _tabText: function (el, text) {
            if (typeof text == "undefined") {
                $(el).css({
                    display: "none"
                });
            } else {
                $(el).text(text);
            }
        },
        _bindEv: function (name, fn) {
            var _this = this;
            this.cb[name] = fn;
            $.each(_this.cb, function (indexInArray, valueOfElement) {

                $(_this).off(name).on(name, fn);
            });
        },
        _trigerEv: function (name, option) {

            if (typeof (this.cb[name]) != 'function') {
                this._bindEv(name, function () {});
            }
            $(this).trigger(name, option);
        },
        _bind: function (name, fn) {
            var _self = this,
                evlist = this.evlist;

            if (!evlist[name]) {
                evlist[name] = [];
            } else if (fn in evlist[name]) {
                return;
            }
            this.evlist[name].push(fn);
        },
        _trigger: function (name, context, arg) {
            var fns = this.evlist[name];

            if (!fns || fns.length === 0) {
                return false;
            }

            if (!context) {

                context = this;
            } else if (Object.prototype.toString.call(context) == '[object Array]') {

                arg = context;
                context = this;
            }

            $.each(fns, function (i, v) {
                v.apply(context, arg);
            });
        },
    };

    $videoItem.each(function (i, e) {
        var infor = {};
        infor.index = i;
        infor.title = $(e).find('.item_info .title').text();
        infor.subtitle = $(e).find('.item_info .subtitle').text();
        infor.description = $(e).find('.description').text();
        infor.videoLink = $(e).data('href');
        videoInfor.push(infor);
        videoLinks.push($(e).data('href'));
    });

    var vPlayer = new Videom({
        list: videoInfor
    });
    var vBg = singleVBg({

            initDo: function (bg) {

            },
            inDo: function (bg) {

                $('body').on('keydown.video', function (ev) {
                    if (ev.keyCode == 32) {
                        ev.stopPropagation();
                        ev.preventDefault();
                        vPlayer.tabState();
                    }
                });
            },
            outDo: function (bg) {
                vPlayer.out();

                $('body').off('keydown.video');
            }
        }),
        mask = vBg.bgJDOM;
    vPlayer.on('initDo', function () {
        vBg.show();
        this.videoArea.addClass('vshow');
    });

    vPlayer.on('outvideo', function () {
        this.videoArea.removeClass('vshow');
    });
    

    $videoItem.on({
        'click.video': function () {
            var link = $(this).data('href'),
                index = $(this).data('index');

            if (typeof link == 'undefined') return;
            vPlayer.init(mask, index);
        }
    });
}


function pcdo() {
    var str = '';

    videomplay();
    $('.ff_indexPage .videom .content_list .item_block').nextAll().css({
        'visibility': 'visible'
    });
}

function modo() {
    
    $('.indexPage .service').find('.item_block a').css('cursor', 'default').click(function () {
        return false;
    });

    function toFullVideo(videoDom) {

        if (videoDom.requestFullscreen) {

            return videoDom.requestFullScreen();

        } else if (videoDom.webkitRequestFullScreen) {

            return videoDom.webkitRequestFullScreen();

        } else if (videoDom.mozRequestFullScreen) {

            return videoDom.mozRequestFullScreen();
        } else {
            return videoDom.msRequestFullscreen();

        }

    }
}
$(function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
    if ($('html').hasClass('agent-pc')) {

        pcdo();
    } else {

        modo();
    } 
});