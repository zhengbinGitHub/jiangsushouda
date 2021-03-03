<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>运营平台登录</title>
    <link rel="stylesheet" href="{{asset('assets/static/scss/common.css')}}" media="all">
    <link rel="stylesheet" href="{{asset('assets/static/layui/css/layui.css')}}" media="all">
    <link rel="stylesheet" href="{{asset('assets/static/scss/login.css')}}" media="all">
</head>
<body  class="layui-layout-body" layadmin-themealias="default">
<div class="layui-layout layui-layout-admin" id="LAY_app" >
    <div class="login-con  layui-form">
        <div class='login-hd'>
            <img class='hd-logo' src="{{asset('assets/static/images/shouda.png')}}" >
            <p class='hd-title'>{{trans('theme.login_title')}}</p>
            <p class='hd-prop'>{{trans('theme.login_desc')}}</p>
        </div>
        <form method="post">
            {!! csrf_field() !!}
            <div class="layui-form-item login-item">
                <label class="login-icon layui-icon layui-icon-username" for="login-username"></label>
                <input type="text" name="email" placeholder="邮箱" class="layui-input" value="{{old('email')}}">
            </div>
            <div class="layui-form-item login-item">
                <label class="login-icon layui-icon layui-icon-password" for="login-password"></label>
                <input type="password" name="password" placeholder="密码" class="layui-input">
            </div>
            <div class="layui-form-item">
                <button class="layui-btn layui-btn-fluid" type="submit">登  录</button>
            </div>
        </form>
        @if($errors->any())
            <div class="layui-form-item">
                <p class='error-msg'>
                    <i class='iconfont iconzhuyi'></i>
                    <span>{{ $errors->first('email') }}</span>
                    <span>{{ $errors->first('password') }}</span>
                </p>
            </div>
        @endif
    </div>
</div>
</body>
</html>