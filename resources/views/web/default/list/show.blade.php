@extends('web.default.layouts.base')
@section('title', $info->title)
@section('content')
    <div id="sitecontent" class="ff_sitecontent">
        @include('web.default.layouts.navmini')
        <!--content_editor为区分新旧编辑器类名-->
        <div class="npagePage post ff_postPage ">
            <div id="pageTarget" class="ff_pageTarget module">
                <div class="module_container">
                    <div class="container_target wow">
                        您的位置：<a href="{{config('app.url')}}">首页</a><i class="fa fa-angle-right"></i><a>关于</a><i class="fa fa-angle-right"></i><a href="//mo005-2384.mo5.line1.uemo.net/list/id/19558/">动态</a><i class="fa fa-angle-right"></i><a href="//mo005-2384.mo5.line1.uemo.net/list/id/19559/">最新</a>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <!--内容-->
            <div class="content">
                <div class="mlistpost news module" @if($info->cover) data-thumb="{{$info->cover}}" @endif>
                    <div class="module_container">
                        <div class="container_content">
                            <div class="content_wrapper">
                                <div id="postWrapper">
                                    <div id="postContent">
                                        <div id="postInfo">
                                            <p class="title">{{$info->title}}</p>
                                            <p class="usetdate">{{$info->created_at->format('Y-m-d H:i:s')}}</p>
                                            <div class="description">
                                                <p>{{$info->memo}}</p>
                                            </div>
                                            <div class="item_tags"></div>
                                        </div>
                                        <div class="postbody">
                                            {!! $info->detail->content !!}
                                        </div>
                                    </div>

                                    <div id="listContent">
                                        <h3>相关内容</h3>
                                        <div class="item_tags"><a href="//mo005-2384.mo5.line1.uemo.net/list/id/19558/tag/%25E6%2599%25BA%25E8%2583%25BD/" target="_blank">智能</a><a href="//mo005-2384.mo5.line1.uemo.net/list/id/19558/tag/%25E4%25BA%25A7%25E5%2593%2581/" target="_blank">产品</a></div>
                                        <div class="mlist type04">
                                            <div class="content_wrapper"><div class="more_wrap"><a href="" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                                                <ul class="content_list clearfix">
                                                    <li id="item_block_0" class="item_block wow" >
                                                        <a href="//mo005-2384.mo5.line1.uemo.net/list/post/60590/" class="item_box">
                                                            <div href="//mo005-2384.mo5.line1.uemo.net/list/post/60590/" class="item_img" target="_blank">
                                                                <img src="//resources.jsmo.xin/templates/upload/2384/201704/1492587003560.jpg"/>
                                                                <div class="item_mask"></div>
                                                            </div>
                                                            <div class="item_wrapper clearfix">
                                                                <p class="date_wrap">
                                                                    <span class="year">2016</span>
                                                                    <span class="md">12-08</span>
                                                                </p>
                                                                <div class="item_info clearfix">
                                                                    <p class="title ellipsis">亚马逊新专利:用降落伞实现无人机送货 包裹偏轨可控制</p>
                                                                    <p class="subtitle ellipsis"></p>
                                                                </div>
                                                                <div  class="item_des">
                                                                    <p class="description">用无人机送货，这是亚马逊正在如火如荼进行的物流项目。去年亚马逊的无人机Prime Air已经顺利完成了商用无人机的首飞，全程用了13分钟，将快递物品顺利地送到消费者手机。现在亚马逊的无人机又有新的进展了。最新消息称，亚马逊获得了一个该专利，未来可以利用降落伞把包裹送达消费者家中。</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="//mo005-2384.mo5.line1.uemo.net/list/post/60590/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                                        <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="//mo005-2384.mo5.line1.uemo.net/list/id/19558/tag/%25E8%2580%25B3%25E6%259C%25BA/">耳机</a><a href="//mo005-2384.mo5.line1.uemo.net/list/id/19558/tag/%25E6%2599%25BA%25E8%2583%25BD/">智能</a><a href="//mo005-2384.mo5.line1.uemo.net/list/id/19558/tag/%25E4%25BA%25A7%25E5%2593%2581/">产品</a><a href="//mo005-2384.mo5.line1.uemo.net/list/id/19558/tag/%25E7%2594%25B5%25E5%25AD%2590/">电子</a></div>
                                                    </li>
                                                    <li id="item_block_1" class="item_block wow" >
                                                        <a href="//mo005-2384.mo5.line1.uemo.net/list/post/60589/" class="item_box">
                                                            <div href="//mo005-2384.mo5.line1.uemo.net/list/post/60589/" class="item_img" target="_blank">
                                                                <img src="//resources.jsmo.xin/templates/upload/2384/201704/1492587012820.jpg"/>
                                                                <div class="item_mask"></div>
                                                            </div>
                                                            <div class="item_wrapper clearfix">
                                                                <p class="date_wrap">
                                                                    <span class="year">2016</span>
                                                                    <span class="md">12-07</span>
                                                                </p>
                                                                <div class="item_info clearfix">
                                                                    <p class="title ellipsis">VR市场降温：Facebook一口气关闭200家线下体验店</p>
                                                                    <p class="subtitle ellipsis"></p>
                                                                </div>
                                                                <div  class="item_des">
                                                                    <p class="description">最近的数据来看整个VR行业开始出现降温根据外媒消息Facebook本周三一口气关闭了多达200家Oculus Rift线下体验店</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="//mo005-2384.mo5.line1.uemo.net/list/post/60589/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                                        <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="//mo005-2384.mo5.line1.uemo.net/list/id/19558/tag/%25E6%2599%25BA%25E8%2583%25BD/">智能</a><a href="//mo005-2384.mo5.line1.uemo.net/list/id/19558/tag/%25E4%25BA%25A7%25E5%2593%2581/">产品</a></div>
                                                    </li>
                                                    <li id="item_block_2" class="item_block wow" >
                                                        <a href="//mo005-2384.mo5.line1.uemo.net/list/post/60572/" class="item_box">
                                                            <div href="//mo005-2384.mo5.line1.uemo.net/list/post/60572/" class="item_img" target="_blank">
                                                                <img src="//resources.jsmo.xin/templates/upload/2384/201704/1492679847687.jpg"/>
                                                                <div class="item_mask"></div>
                                                            </div>
                                                            <div class="item_wrapper clearfix">
                                                                <p class="date_wrap">
                                                                    <span class="year">2016</span>
                                                                    <span class="md">12-06</span>
                                                                </p>
                                                                <div class="item_info clearfix">
                                                                    <p class="title ellipsis">继Lightning和USB-C后 苹果将再推一款新接口</p>
                                                                    <p class="subtitle ellipsis"></p>
                                                                </div>
                                                                <div  class="item_des">
                                                                    <p class="description">现在在苹果产品中服役的还是还是Lightning和USB-C两种接口。在最新的iPhone7上取消了3.5mm耳机插口之外</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="//mo005-2384.mo5.line1.uemo.net/list/post/60572/" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                                        <div class="item_tags clearfix"><i class="fa fa-tags"></i><a href="//mo005-2384.mo5.line1.uemo.net/list/id/19558/tag/%25E6%2599%25BA%25E8%2583%25BD/">智能</a><a href="//mo005-2384.mo5.line1.uemo.net/list/id/19558/tag/%25E4%25BA%25A7%25E5%2593%2581/">产品</a></div>
                                                    </li>
                                                </ul>
                                                <a href="" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                                            <div class="clear"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
            <!--内容-->
        </div>
    </div>
@endsection

@section('script')
    @endsection