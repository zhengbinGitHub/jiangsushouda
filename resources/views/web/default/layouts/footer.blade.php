<div id="footer">
    <p>
        <span class="ellipsis">
            COPYRIGHT (©) 2021 mo005_2107 - 企业类网站.
        </span>
        <a class="beian" href="https://beian.miit.gov.cn/#/Integrated/index" rel="nofollow" style="color: #363636;vertical-align: top;margin-left: 10px;display: inline-block;" target="_blank"></a>
    </p>
</div>
<div id="shares">
    <a href="http://service.weibo.com/share/share.php?appkey=3206975293&"  rel="nofollow" target="_blank" id="sweibo">
        <i class="fa fa-weibo"></i>
    </a>
    <a href="javascript:;" id="sweixin">
        <i class="fa fa-mobile"></i>
    </a>
    <a href="javascript:;" id="gotop">
        <i class="fa fa-angle-up"></i>
    </a>
</div>

<div class="fixed" id="fixed_weixin">
    <div class="fixed-container">
        <div id="qrcode"></div>
        <p>扫描二维码分享到微信</p>
    </div>
</div>

<div id="online_open">
    <i class="fa fa-comments-o"></i>
</div>

<div id="online_lx">
    <div id="olx_head">在线咨询
        <i class="fa fa-times fr" id="online_close"></i>
    </div>
    <ul id="olx_qq">
        <li>
            <a href="tencent://message/?uin=40080000&Site=uelike&Menu=yes">
                <i class="fa fa-qq"></i>40080000
            </a>
        </li>
    </ul>
    <div id="olx_tel">
        <div>
            <i class="fa fa-phone"></i>联系电话
        </div>
        <p>
            400-888-8888<br/>
        </p>
    </div>
</div>

<a id="openAssist" href="javascript:;">
    <i class="icon iconfont icon-add"></i>
</a>
<div id="assistBtn">
    <a href="javascript:;" onclick="$('html,body').scrollTop(0);return false;">
        <i class="fa fa-angle-up"></i>
    </a>
    <a class="_fa-tel" href="tel:400-888-8888">
        <i class="fa fa-phone"></i>
    </a>
    <a class="_fa-qq" href="mqqwpa://im/chat?chat_type=wpa&uin=&version=1">
        <i class="fa fa-qq"></i>
    </a>
</div>


<script type="text/javascript" src="{{asset('js/jquery.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/jquery.easing.1.4.1.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/jquery.qrcode.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/jquery.bxslider.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/wow.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/waypoints/2.0.3/waypoints.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/jquery.countup.min.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/static/js/common.js')}}"></script>
<script type="text/javascript">
    var searchAddr = window.location.origin + '/search/s/';
    function jumpToSearch ($el){
        var searchInfor = encodeURIComponent(encodeURIComponent($el.val())) + '/';
        window.open(searchAddr + searchInfor);
    }

    $('.searchGroup .searchSub').click(function (){
        jumpToSearch($(this).parent().find('input'));
        return false;

    });
    $('.searchGroup input').on({
        'keydown': function (ev){
            if (ev.keyCode == 13) {
                jumpToSearch($(this));
            }
        },
        'blur': function () {
            var _this = this;
            setTimeout(function() {
                $(_this).val("");
            },200);
        }
    });
</script>
@yield('script')