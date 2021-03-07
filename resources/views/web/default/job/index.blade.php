@extends('web.default.layouts.base')
@section('title', '人才招聘')

@section('content')
    <div id="sitecontent" class="ff_sitecontent">
        @include('web.default.layouts.navmini')
        <div class="npagePage ff_pageList">
            <div id="banner">
                <div style="background-image:url({{$banner->pic_url??''}});"></div>
                <img class="hide" src="{{$banner->pic_url??''}}">
            </div>
            <div id="pageTarget" class="ff_pageTarget module">
                <div class="module_container">
                    <div class="container_header wow hide">
                        <p class="title">人才招聘</p>
                        <p class="subtitle">Job</p>
                    </div>
                    <div class="container_target wow">您的位置：
                        {!! Breadcrumbs::render('job', $group); !!}
                        <div class="clear"></div>
                    </div>
                </div>
                <!--内容-->
                <div class="content">
                    <div class="mlist team module ff_noSlider" style="" >
                        <div class="bgmask"></div>
                        <div class="module_container">
                            <div class="container_content nocat">
                                <div class="content_wrapper">
                                    <div class="more_wrap"><a href="{{url('job')}}" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                                    <ul class="content_list clearfix">
                                        @foreach($lists as $key=>$item)
                                            <li id="item_block_0" class="item_block wow" >
                                                <a href="{{url('job/info', ['id' => $item->id])}}" class="item_box">
                                                    <div href="{{url('job/info', ['id' => $item->id])}}" class="item_img" target="_blank">
                                                        <img src="{{$item->cover}}" width="220px" />
                                                        <div class="item_mask"></div>
                                                    </div>
                                                    <div class="item_wrapper clearfix">
                                                        <div class="item_info clearfix">
                                                            <div class="text_wrap">
                                                                <p class="title ellipsis">{{$item->title}}</p>
                                                                <p class="subtitle ellipsis">{{$item->created_at->format('Y-m-d')}}</p>
                                                            </div>
                                                        </div>
                                                        <div  class="item_des description">
                                                            {{$item->memo}}
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="{{url('job/info', ['id' => $item->id])}}" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                                <div class="item_tags clearfix"><i class="fa fa-tags"></i></div>

                                            </li>
                                        @endforeach
                                    </ul>
                                    <a href="{{url('job')}}" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a>
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
            </div>
        </div>
@endsection

@section('script')
@endsection