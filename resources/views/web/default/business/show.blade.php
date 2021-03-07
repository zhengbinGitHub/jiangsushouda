@extends('web.default.layouts.base')

@section('content')
    <div id="sitecontent" class="ff_sitecontent">
        @include('web.default.layouts.navmini')
        <div class="npagePage post ff_pageList">
            <div id="pageTarget" class="ff_pageTarget module">
                <div class="module_container">
                    <div class="container_header wow hide">
                        <p class="title">业务范围</p>
                        <p class="subtitle">Business</p>
                    </div>
                    <div class="container_target wow">
                        您的位置：{!! Breadcrumbs::render('business_info', $group); !!}
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <!--内容-->
            <div class="content">
                <div class="mlistpost service module" data-thumb="{{$group->cover}}">
                    <div class="module_container">
                        <div class="container_content">
                            <div class="content_wrapper">
                                <div id="postWrapper">
                                    <div id="postNav">
                                        <div class="wrapper scrollFixed" data-sf-top="20">
                                            <h3>相关内容</h3>
                                            <div class="item_tags"></div>
                                            <ul class="nav bgMove"></ul>
                                        </div>
                                    </div>
                                    <div id="postContent">
                                        <div id="postInfo">
                                            <p class="title">{{$group->name}}</p>
                                            <p class="subtitle">{{$info->subtitle}}</p>
                                            <div class="description"><p>{{$info->memo}}</p></div>
                                        </div>
                                        <div class="postbody">{!! $info->detail->content !!}</div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="clear"></div>
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