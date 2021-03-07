@extends('web.default.layouts.base')

@section('content')
    <div id="sitecontent" class="ff_sitecontent">
        @include('web.default.layouts.navmini')
        <div class="npagePage ff_pageList">
            <div id="pageTarget" class="ff_pageTarget module">
                <div class="module_container">
                    <div class="container_header wow hide">
                        <p class="title">动态</p>
                        <p class="subtitle">News</p>
                    </div>
                    <div class="container_target wow">您的位置：
                        {!! Breadcrumbs::render('news'); !!}
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <!--内容-->
            <div class="content">
                <div class="mlist news module ff_noSlider" style="" >
                    <div class="bgmask"></div>
                    <div class="module_container">
                        <div class="container_category wow movedx" data-movedx-mid="2" data-movedx-distance="15">
                            <a href="{{url('news')}}" class="{{is_null($alias) ? 'active' : ''}}">
                                <span>全部</span>
                            </a>
                            @foreach($groups->childs as $item)
                            <a href="{{url($groups->alias.'/'.$item->alias)}}" class="{{$item->alias == $alias ? 'active' : ''}}">
                                <span>{{$item->name}}</span>
                            </a>
                                @endforeach
                        </div>

                        <div class="container_content">
                            <div class="content_wrapper">
                                <div class="more_wrap"><a href="{{url('news')}}" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                                <ul class="content_list clearfix">
                                    @foreach($lists as $key=>$item)
                                    <li id="item_block_{{$key}}" class="item_block wow" >
                                        <a href="{{url('news/info/'.$item->id)}}" class="item_box">
                                            <div href="{{url('news/info/'.$item->id)}}" class="item_img" target="_blank">
                                                <img src="{{$item->cover}}" height="353" width="353"/>
                                                <div class="item_mask"></div>
                                            </div>
                                            <div class="item_wrapper clearfix">
                                                <p class="date_wrap">
                                                    <span class="year">{{$item->created_at->format('Y')}}</span>
                                                    <span class="md">{{$item->created_at->format('m-d')}}</span>
                                                </p>
                                                <div class="item_info clearfix">
                                                    <p class="title ellipsis">{{$item->title}}</p>
                                                    <p class="subtitle ellipsis"></p>
                                                </div>
                                                <div  class="item_des">
                                                    <p class="description">{{$item->memo}}</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="{{url('news/info/'.$item->id)}}" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <div class="item_tags clearfix"><i class="fa fa-tags"></i></div>
                                    </li>
                                    @endforeach
                                </ul>
                                <a href="{{url('news')}}" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                            </div>
                            <div id="pages">
                                {!! $lists->render() !!}
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <!--内容-->
        </div>
    </div>
    @endsection

@section('script')
    @endsection