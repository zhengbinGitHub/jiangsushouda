<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="{{asset('favicon.icon')}}" />
    <meta name="csrf_token" content="{{ csrf_token() }}"/>
    <title>{{trans('theme.admin_title')}}-@yield('title')</title>
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1471540_2lo3mrhr461.css?t=aaaa">
    <link rel="stylesheet" href="{{asset('assets/static/layui/css/layui.css')}}" media="all">
    <link rel="stylesheet" href="{{asset('assets/static/scss/common.css')}}" media="all">
    <link rel="stylesheet" href="{{asset('assets/static/scss/app.css')}}" media="all">
    <link rel="stylesheet" href="http://at.alicdn.com/t/font_1382198_ti4d3ypz0y.css">

</head>
<body layadmin-themealias="default" style="height:100%">
<div class="layui-fluid">
@yield('content')
</div>
<script src="/assets/static/vender/xmSelect/xm-select.js"></script>
<script src="{{asset('assets/static/modules/static.js')}}"></script>
<script src="{{asset('assets/static/vender/jquery/1.12.3/jquery-1.12.3.js')}}"></script>
<script src="{{asset('assets/static/vender/jqueryform/jquery-form.js')}}"></script>
<script src="{{asset('assets/static/layui/layui.js')}}"></script>
<script src="{{asset('assets/static/js/index.js')}}"></script>
<script src="https://map.qq.com/api/js?v=2.exp&key=ECUBZ-FRJW3-HD43M-YPU3P-LOIW5-SPFUT"></script>
<script>
    layui.config({
        base: '/assets/static/' //静态资源所在路径
    }).extend({
        index: 'lib/index', //主入口模块
        region:'modules/region',
        map:'modules/map',
        editor:'modules/editor'
    }).use('index');
</script>


@yield('script')
</body>
</html>
