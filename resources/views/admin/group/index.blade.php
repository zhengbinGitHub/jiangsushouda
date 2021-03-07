@extends('admin.layouts.base')

@section('content')
<form class="layui-form layui-card-body bgc-f2f C-border-10" id="search-form">
    <div class="layui-form-item">
        <div class="layui-col-md4 fl-row-center">
            <input type="text" name="name" maxlength="20" value="{{request('name')}}" placeholder="分类名称搜索" autocomplete="off"
                   class="layui-input col-xs-9" />
        </div>
    </div>

    <div class="fl-row-center">
        <input type="submit" class="layui-btn " value="搜索">
        <button type="reset" class="layui-btn layui-btn-primary" id="layui-form-close">重置</button>
    </div>
</form>

<div id='addGroupAlert' hidden>
    <div class='layui-form layui-card-body C-border-10'>
        <div class="layui-form-item" >
            <span class='layui-form-label'>分类名称:</span>
            <div class=" layui-input-inline layui-col-md8">
                <input type="text"  name="name" required  lay-verify="required" placeholder="请输入分类名称" autocomplete="off" class="layui-input alert-name">
                <input type="hidden" name="parent_id" value="{{$parentId}}" class="alert-pid">
            </div>
        </div>
        <div class="layui-form-item" >
            <span class='layui-form-label'>英文名称:</span>
            <div class=" layui-input-inline layui-col-md8">
                <input type="text" name="alias" required  lay-verify="required" placeholder="请输入分类英文名称" autocomplete="off" class="layui-input alert-alias">
            </div>
        </div>
        <div class="layui-form-item">
            <label for="" class="layui-form-label">封面:</label>
            <div class="layui-input-block">
                <div class="layui-upload" style="display: flex;align-items: flex-end;">
                    <div class="layui-upload-list" style="margin:0">
                        <ul id="layui-upload-box" class="layui-clear uploadPImg" style="padding-left: 0"></ul>
                    </div>
                    <button type="button" class="layui-btn" id="uploadP" lay-data="{name:'imgs[]',num:1}">
                        <i class="layui-icon">&#xe67c;</i>上传图片
                    </button>
                </div>
            </div>
        </div>
        <div class="layui-form-item" >
            <span class='layui-form-label'>备注:</span>
            <div class=" layui-input-inline layui-col-md8">
                <input type="text" name="memo" required  lay-verify="required" placeholder="请输入分类英文名称" autocomplete="off" class="layui-input alert-memo">
            </div>
        </div>
        <div class="layui-form-item" >
            <span class='layui-form-label'>类型:</span>
            <div class=" layui-input-inline">
                <input type="radio" name="type" class="alert-type" value="channel" title="列表">
                <input type="radio" name="type" class="alert-type" value="info" title="详情">
            </div>
        </div>
        <div class="layui-form-item" >
            <span class='layui-form-label'>子类:</span>
            <div class=" layui-input-inline">
                <input type="checkbox" name="is_sub" class="alert-is_sub" lay-skin="switch" lay-filter="switchSub" lay-text="ON|OFF">
            </div>
        </div>
    </div>
</div>
<div class="layui-card-body C-marginTop-10">
    <div class="layui-btn-container">
        <span class="layui-btn" id='addGroup'>添加分类</span>
    </div>

    <table  lay-filter="table-hide" style="display: none" lay-data="{height:'full-310',height: 600, cellMinWidth: 80,toolbar: '#toolbar', defaultToolbar:['filter'], limit: {{$lists->perPage()}} }">
        <thead>
        <tr>
            <th lay-data="{field:'id',sort:'true'}">ID</th>
            <th lay-data="{field:'name'}">分类名称</th>
            <th lay-data="{field:'alias'}">分类别名</th>
            <th lay-data="{field:'priority'}">子类</th>
            <th lay-data="{field:'status'}">状态</th>
            <th lay-data="{field:'operate', fixed: 'right',width:160}">操作</th>
        </tr>
        </thead>
        <tbody>
        @foreach($lists as $item)
        <tr>
            <td>{{$item->id}}</td>
            <td>{{$item->name}}</td>
            <td>{{$item->alias}}</td>
            <td>
                @if($item->is_sub == 1)
                <a class="G-color-blue C-cursor-pointer C-paddingLr-5 form_view" data-href="{{route('admin.group', ['level' => $level, 'id' => $item->id])}}">下级</a>
                    @endif
            </td>
            <td><input type="checkbox" lay-filter="tag-group" data-url="{{url('admin/group/switch', ['id' => $item->id])}}" lay-text="正常|关闭" lay-skin="switch" {{$item->status == 1 ? "checked" : ""}}></td>
            <td>
                <a href='javascript:void(0)' class="G-color-blue C-cursor-pointer C-paddingLr-5 editGroup" data-cover="{{$item->cover}}" data-is_sub="{{$item->is_sub}}" data-id="{{$item->id}}" data-memo="{{$item->memo}}" data-alias="{{$item->alias}}" data-type="{{$item->type}}" data-name="{{$item->name}}" >修改</a>
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
        layui.use(['form', 'table', 'upload'], function(){

            var table = layui.table
            var form = layui.form
            table.init("table-hide");

            admin.paginate("{{ $lists->total() }}", "{{ $lists->currentPage() }}","{{ $lists->perPage() }}");
            admin.uploadImgBox('#uploadP','.uploadPImg');
            $(document).on('click',"#addGroup",function(){
                //判断是添加还是修改
                $('.alert-name').val('')
                $('.uploadPImg').empty()
                layer.open({
                    type: 1,
                    btn: ['确定','取消'],
                    title:'添加一个新的分类',
                    content:$("#addGroupAlert"),
                    data:{'_xsrf':$('meta[name="csrf_token"]').attr("content")},
                    area: ['450px','500px'],
                    yes :function(index,layero){
                        let isSub = 0;
                        if($('.alert-is_sub').val() != 'on'){
                            isSub = $('.alert-is_sub').val()
                        }
                        if($('.alert-name').val()==''){
                            layer.msg('请输入标签组', {time: 1000, icon: 5})
                            return false
                        }
                        $.ajax({
                            type: "POST",
                            url:'{{url('admin/group/store')}}',
                            data:{'_token':$('meta[name="csrf_token"]').attr("content"),
                                'name': $('.alert-name').val(),
                                'memo': $('.alert-memo').val(),
                                'alias': $('.alert-alias').val(),
                                'parent_id': $('.alert-pid').val(),
                                'type': $('input[name="type"]:checked').val(),
                                'cover': $(document).find('input[name="imgs[]"]').val(),
                                'is_sub': isSub
                            },
                            success: function(response) {
                                if(response.status==0){
                                    layer.msg(response.message, {time: 1000, icon: 5})
                                    return false
                                }
                                layer.msg(response.message, {time: 1000, icon: 6})
                                setTimeout(function () {
                                    window.location.reload()
                                }, 1000);
                                layer.close(index)
                            },
                        });
                    }
                })
            })
            $(document).on('click',".editGroup",function(){
                let currentGroup = $(this).attr('data-name'),
                    currentId = $(this).attr('data-id'),
                    cover = $(this).attr('data-cover');
                $('.uploadPImg').empty()
                //判断是添加还是修改
                $('.alert-name').val(currentGroup)
                $('.alert-memo').val($(this).attr('data-memo'))
                $('.alert-alias').val($(this).attr('data-alias')).addClass('layui-radio-disbaled layui-disabled')
                let type = $(this).attr('data-type')
                $("input[name=type]").each(function(){
                    if($(this).val() == type){
                        $(this).prop("checked","true")
                    }
                    $(this).attr("disabled","disabled")
                    $(this).next().addClass('layui-radio-disbaled layui-disabled')
                })
                if($(this).attr('data-is_sub') == 1) {
                    $("input[name=is_sub]").prop("checked", true)
                }
                if(typeof (cover) != 'undefined'){
                    $('.uploadPImg').append('<li><img src="' + cover + '" /><input type="hidden" name="'+name+'" value="'+ cover + '"><span hidden="" class="img-delete" style="display: none;"><i class="icon-shanchu iconfont"></i></span></li>')
                }
                form.render(); //更新全部
                layer.open({
                    type: 1,
                    btn: ['确定','取消'],
                    title:'修改当前标签组名称',
                    content:$("#addGroupAlert"),
                    data:{'_token':$('meta[name="csrf_token"]').attr("content")},
                    area: ['450px','500px'],
                    yes :function(index,layero){
                        if($('.alert-name').val()==''){
                            layer.msg('请输入标签组', {time: 1000, icon: 5})
                            return false
                        }
                        let isSub = 0;
                        if($('.alert-is_sub').val() != 'on'){
                            isSub = $('.alert-is_sub').val()
                        }
                        $.ajax({
                            type: "POST",
                            url:'{{url('admin/group/update')}}',
                            data:{
                                '_method': 'PUT',
                                '_token':$('meta[name="csrf_token"]').attr("content"),
                                'id': currentId,
                                'name':$('.alert-name').val(),
                                'memo':$('.alert-memo').val(),
                                'cover': $(document).find('input[name="imgs[]"]').val(),
                                'is_sub': isSub
                            },
                            success: function(response) {
                                if(response.status==0){
                                    layer.msg(response.message, {time: 1000, icon: 5})
                                    return false
                                }
                                layer.msg(response.message, {time: 1000, icon: 6})
                                setTimeout(function () {
                                    window.location.reload()
                                }, 1000);
                                layer.close(index)
                            },
                        });


                    }
                })
            })

            //监听指定开关
            form.on('switch(switchSub)', function(data){
                if(this.checked){
                    $('input[name="is_sub"]').val(1)
                } else {
                    $('input[name="is_sub"]').val(0)
                }
                form.render();
            });
        });
    </script>
@endsection