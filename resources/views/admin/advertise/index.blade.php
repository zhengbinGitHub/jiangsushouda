@section("title", "广告列表")
@extends('admin.layouts.base')

@section('content')
<form class="layui-form layui-card-body bgc-f2f C-border-10" id="search-form">
    <div class="layui-form-item">
        <div class="layui-col-md4 fl-row-center">
            <input type="text" name="title" maxlength="20" value="{{request('title')}}" placeholder="标题搜索" autocomplete="off"
                   class="layui-input col-xs-9" />
        </div>
    </div>

    <div class="fl-row-center">
        <input type="submit" class="layui-btn " value="搜索">
        <button type="reset" class="layui-btn layui-btn-primary" id="layui-form-close">重置</button>
    </div>
</form>
<div class="layui-card-body C-marginTop-10">
    <div class="layui-btn-container">
        <a href="javascript:;" data-href="{{url('admin/advertise/create')}}" class="layui-btn form_view">添加广告</a>
    </div>

    <table  lay-filter="table-hide" style="display: none" lay-data="{height:'full-310',height: 600, cellMinWidth: 80,toolbar: '#toolbar', defaultToolbar:['filter'], limit: {{$lists->perPage()}} }">
        <thead>
        <tr>
            <th lay-data="{field:'id',sort:'true'}">ID</th>
            <th lay-data="{field:'title'}">标题</th>
            <th lay-data="{field:'pic_url'}">图片</th>
            <th lay-data="{field:'position'}">所属</th>
            <th lay-data="{field:'priority'}">创建时间</th>
            <th lay-data="{field:'status'}">状态</th>
            <th lay-data="{field:'operate', fixed: 'right',width:160}">操作</th>
        </tr>
        </thead>
        <tbody>
        @foreach($lists as $item)
        <tr>
            <td>{{$item->id}}</td>
            <td>{{$item->title}}</td>
            <td><img src="{{$item->pic_url}}"></td>
            <td>{{$item->position}}</td>
            <td>{{$item->created_at}}</td>
            <td><input type="checkbox" lay-filter="tag-group" data-url="{{url('admin/advertise/switch', ['id' => $item->id])}}" lay-text="正常|关闭" lay-skin="switch" {{$item->status == 1 ? "checked" : ""}}></td>
            <td>
                <a href='javascript:void(0)' class="G-color-blue C-cursor-pointer C-paddingLr-5 form_view" data-href="{{url('admin/advertise/edit', ['id' => $item->id])}}">修改</a>
            </td>
        </tr>
        @endforeach
        </tbody>
    </table>
    <div id="page"></div>
</div>
@endsection

@section("script")
    <script>
        layui.use(['form', 'table'], function(){
            var table = layui.table
            var form = layui.form
            table.init("table-hide");
            admin.paginate("{{ $lists->total() }}", "{{ $lists->currentPage() }}","{{ $lists->perPage() }}");
        });
    </script>
@endsection