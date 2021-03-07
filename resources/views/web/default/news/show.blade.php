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
                        您的位置：{!! Breadcrumbs::render('new_info', $info); !!}
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
                                        <div class="item_tags"></div>
                                        <div class="mlist type04">
                                            <div class="content_wrapper"><div class="more_wrap"><a href="{{url('news/'.(isset($info->group->parent)?$info->group->parent->alias : $info->group->alias) )}}" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                                                <ul class="content_list clearfix">
                                                    @foreach($relations as $key=>$item)
                                                    <li id="item_block_{{$key}}" class="item_block wow" >
                                                        <a href="{{url('news/info/'.$item->id)}}" class="item_box">
                                                            <div href="{{url('news/info/'.$item->id)}}" class="item_img" target="_blank">
                                                                <img src="{{$item->cover}}"/>
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
                                                <a href="{{url('news/'.(isset($info->group->parent)?$info->group->parent->alias : $info->group->alias) )}}" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
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