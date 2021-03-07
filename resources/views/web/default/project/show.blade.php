@extends('web.default.layouts.base')

@section('title', $info->title)

@section('content')
    <div id="sitecontent" class="ff_sitecontent">
    @include('web.default.layouts.navmini')
    <!--content_editor为区分新旧编辑器类名-->
        <div class="npagePage post ff_postPage ">
            <div id="pageTarget" class="ff_pageTarget module">
                <div class="module_container">
                    <div class="container_target wow">您的位置：{!! Breadcrumbs::render('project_info', $group); !!}</div>
                    <div class="clear"></div>
                </div>
            </div>

            <div class="content">
                <div class="mlistpost project module" data-thumb="{{$group->cover}}">
                    <div class="module_container">
                        <div class="container_content">
                            <div class="content_wrapper">
                                <div id="postWrapper">
                                    <div id="postSlider" class="team_tabs mlist">
                                        <div class="tab_content">
                                            <ul class="content_list">
                                                <li id="item_block_0">
                                                    <div class="wrapper">
                                                        <div class="item_img">
                                                            <img src="{{$info->cover}}" />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="clear"></div>
                                        </div>
                                    </div>
                                    <div class="postMianCont">
                                        <div id="postInfo">
                                            <div class="wrapper" data-sf-top="20">
                                                <p class="title">{{$info->title}}</p>
                                                <p class="subtitle">{{$info->subtitle}}</p>
                                                <div class="description"><p>{{$info->memo}}</p></div>
                                            </div>
                                        </div>
                                        <div id="postContent">
                                            <div class="postbody">
                                                {!! $info->detail->content !!}
                                            </div>
                                            <div id="listContent">
                                                <div class="item_tags"><i class="fa fa-tags"></i>
                                                    @foreach($groups->childs as $item)
                                                    <a href="{{url('project', ['alias' => $item->alias])}}">{{$item->name}}</a>
                                                        @endforeach
                                                </div>
                                                <div class="mlist project">
                                                    <div class="content_wrapper">
                                                        <ul class="content_list clearfix">
                                                            @foreach($lists as $key=>$item)
                                                            <li id="item_block_{{$key}}" class="item_block wow" style="animation-delay:.{{$key}}s">
                                                                <a href="{{url('project/info', ['id' => $item->id])}}" class="item_box">
                                                                    <div class="item_img" target="_blank">
                                                                        <img src="{{$item->cover}}"/>
                                                                        <div class="item_mask"></div>
                                                                    </div>
                                                                    <div class="item_wrapper clearfix">
                                                                        <div class="item_info clearfix">
                                                                            <div class="text_wrap">
                                                                                <p class="title ellipsis">{{$item->title}}</p>
                                                                                <p class="subtitle ellipsis">{{$item->subtitle}}</p>
                                                                            </div>
                                                                            <p class="date_wrap">
                                                                                <span class="year">{{$item->created_at->format('Y')}}</span>
                                                                                <span class="md">{{$item->created_at->format('m-d')}}</span>
                                                                            </p>
                                                                        </div>
                                                                        <div  class="item_des">
                                                                            <p class="description">{{$item->memo}}</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a href="{{url('project/info', ['id' => $item->id])}}" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                                                <div class="item_tags clearfix"><i class="fa fa-tags"></i></div>
                                                            </li>
                                                            @endforeach
                                                        </ul>
                                                        <a href="{{url('project')}}" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                                    </div>
                                                    <div class="clear"></div>
                                                </div>
                                            </div>
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
        </div>
    </div>
@endsection

@section('script')
    <script type="text/javascript">
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
        SliderOption.slideMargin = 0
        var boxSlider = function(div, SliderOption){
            $(div+' .tab_content .content_list').bxSlider(SliderOption);
        }
        SliderOption.slideWidth = 1170
        SliderOption.maxSlides = 1
        SliderOption.moveSlides = 1
        boxSlider('#postSlider', SliderOption)
    </script>
@endsection