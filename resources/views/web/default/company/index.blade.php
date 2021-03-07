@extends('web.default.layouts.base')

@section('title', $group->name)

@section('content')
    <div id="sitecontent" class="ff_sitecontent">
        <!--content_editor为区分新旧编辑器类名-->
        <div class="npagePage pageEditor " id="page_about">
            @if($banner)
            <div id="banner">
                <div style="background-image:url({{$banner->pic_url}});"></div>
                <img class="hide" src="{{$banner->pic_url}}">
            </div>
            @endif
            <!--内容-->
            <div class="content">
                <div class="mpageEditor module">
                    <div class="module_container">
                        <div class="container_header wow">
                            <p class="title">{{$group->name}}</p>
                            <p class="subtitle">{{ucfirst($group->alias)}}</p>
                        </div>

                        <div class="container_content">
                            <div class="content_wrapper">
                                <div class="postbody">
                                    {!! $info->detail->content !!}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--内容-->
            </div>
        </div>
@endsection

@section('script')
@endsection