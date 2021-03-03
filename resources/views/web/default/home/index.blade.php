@extends('web.default.layouts.base')
@section('content')
    <div id="sitecontent" class="ff_sitecontent">
        @include('web.default.layouts.navmini')
        <div id="indexPage" class="ff_indexPage" data-scroll-ease="Expo.easeInOut" data-control="0" data-scroll-speed="1" data-control-wheel="0" data-singlescreen="0">
            @include('web.default.home.banner')
            <div class="mcounter module " style="">
                <div class="bgmask"></div>
                <div id="counterBgdx" style="position:absolute; width:100%; height:100%"></div>
                <div class="module_container">
                    <div class="container_content">
                        <ul class="content_list">
                            <li>
                                <div>
                                    <p class="number"><span class="counterDX" data-counterup-nums="2566">2,566</span><span class="unit">年</span></p>
                                    <p class="title">项目量</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p class="number"><span class="counterDX" data-counterup-nums="4506">4,506</span><span class="unit"></span></p>
                                    <p class="title">影响力</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p class="number"><span class="counterDX" data-counterup-nums="186">186</span><span class="unit">项</span></p>
                                    <p class="title">获奖工程</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p class="number"><span class="counterDX" data-counterup-nums="128">128</span><span class="unit">城市</span></p>
                                    <p class="title">经营分布</p>
                                </div>
                            </li>
                        </ul>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
            @include('web.default.home.service')
            @include('web.default.home.project')
            @include('web.default.home.about')
            @include('web.default.home.product')
            @include('web.default.home.imagelink')
            @include('web.default.home.contact')
        </div>
    </div>
    @stop
@section('script')
    <script type="text/javascript" src="{{asset('assets/static/js/home.js')}}"></script>
    @stop