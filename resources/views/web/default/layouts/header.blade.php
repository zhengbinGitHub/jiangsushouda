<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" class="agent-pc theme-w theme-wblack" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name=renderer content=webkit>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>{{config('store.web_title')}}@yield('title')</title>
    <meta name="keywords" content="@yield('keywords')">
    <meta name="description" content="@yield('description')">
    <meta name="author" content="YY-MO">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="shortcut icon" href="{{asset('favicon.icon')}}" />
    <meta name="csrf_token" content="{{ csrf_token() }}"/>
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta content="black" name="apple-mobile-web-app-status-bar-style" />
    <meta name="format-detection" content="telephone=no"/>
    <link rel="stylesheet" type="text/css" href="{{asset('css/editorPageStyle.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/lib.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/style.2107.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/des.2107.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/wblack.css')}}" id="themeCssPath">
    <link rel="stylesheet" type="text/css" href="{{asset('css/2384.css')}}" id="ucssurl">
    @yield('style')
</head>