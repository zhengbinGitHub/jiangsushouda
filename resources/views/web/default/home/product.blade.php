<div class="mlist team_tabs module ff_noSlider"style=" " >
    <div class="bgmask"></div>
    <div class="module_container">
        <div class="container_header wow">
            <p class="title">新闻资讯</p>
        </div>
        <div class="container_category wow movedx one" data-movedx-mid="2" data-movedx-distance="15"><a href="{{url('news')}}" class="active"><span>全部</span></a></div>
        <div class="container_content">
            <div class="content_wrapper">
                <div class="tab_content">
                    <ul class="content_list">
                        @if($firstArticle)
                        <li id="item_block_0" class="item_block wow" style="animation-delay:.0s">
                            <div class="wrapper">
                                <a href="{{url($firstArticle['path'].'/info/'.$firstArticle['id'])}}" target="_blank">
                                    <div class="item_img">
                                        <img src="{{$firstArticle['cover']}}" width="640" height="320"/>
                                    </div>
                                    <div class="item_wrapper">
                                        <div class="item_info">
                                            <p class="title ellipsis">{{$firstArticle['title']}}</p>
                                            <p class="subtitle">{{$firstArticle['subtitle']}}</p>
                                            <div class="description"><div class="cScrollbar"><p>{{$firstArticle['memo']}}</p></div></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </li>
                            @endif
                    </ul>
                    <div class="clear"></div>
                </div>
                <div class="tab_button" data-tab-num="4" data-slider-mode = "1">
                    <ul class="content_list" >
                        @foreach($secondArticles as $key=>$item)
                        <li id="item_block_{{$key}}" class="item_block {{$key == 0 ? 'active' : ''}}  wow" data-tab-index="{{$key}}" style="animation-delay:.{{$key}}s">
                            <div class="wrapper">
                                <a href="{{$item['path'].'/info/'.$item['id']}}" target="_blank">
                                <div class="item_img"><img src="{{$item['cover']}}" /></div>
                                <div class="item_wrapper">
                                    <div class="item_info">
                                        <p class="title ellipsis">{{$item['title']}}</p>
                                        <p class="subtitle">{{$item['subtitle']}}</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </li>
                        @endforeach
                    </ul>
                    <p class="icon"></p>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</div>