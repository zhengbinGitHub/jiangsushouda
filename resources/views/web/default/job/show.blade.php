@extends('web.default.layouts.base')

@section('title', $info->title)

@section('content')
    <div id="sitecontent" class="ff_sitecontent">
    @include('web.default.layouts.navmini')
        <!--content_editor为区分新旧编辑器类名-->
        <div class="npagePage post pageEditor ">
            <div id="pageTarget" class="ff_pageTarget module">
                <div class="module_container">
                    <div class="container_header wow hide">
                        <p class="title">人才招聘</p>
                        <p class="subtitle">Job</p>
                    </div>
                    <div class="container_target wow">您的位置：
                        {!! Breadcrumbs::render('job_info', $info); !!}
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
            <!--内容-->
            <div class="content">
                <div class="mlistpost team module" data-thumb="{{$info->cover}}">
                    <div class="module_container">
                        <div class="container_content">
                            <div class="content_wrapper">
                                <div id="postWrapper">
                                    <div id="postInfo">
                                        <div class="wrapper" data-sf-top="20">
                                            <p class="title">{{$info->title}}</p>
                                            <p class="subtitle">{{$info->title}}</p>
                                            <div class="description">
                                                {{$info->memo}}
                                            </div>
                                        </div>
                                    </div>
                                    <div id="postContent">
                                        <div class="postbody">
                                            {!! $info->detail->content !!}
                                        </div>
                                        <div class="postwrap">
                                            <div class="item_tags"></div>
                                            <ul class="navlist">
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <!--内容-->
                <div class="clear"></div>
            </div>
        </div>
@endsection

@section('script')
@endsection