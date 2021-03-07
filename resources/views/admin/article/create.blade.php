@section("title", "创建平台文章")
@extends('admin.layouts.base')

@section("content")
    <div class="layui-card">
        <div class="layui-card-header">创建平台文章</div>
        <div class="layui-card-body">
            <form class="layui-form base_form" action="{{route('admin.article.store')}}" method="post">
                @csrf
                <div class="layui-form-item">
                    <label for="" class="layui-form-label"><span style="color: #FF5722;">*</span>文章标题</label>
                    <div class="layui-input-block">
                        <input type="text" name="title" value="{{old('title')}}" lay-verify="required" placeholder="请输入文章标题" class="layui-input col-xs-8" >
                    </div>
                </div>
                <div class="layui-form-item">
                    <label for="" class="layui-form-label"><span style="color: #FF5722;">*</span>文章短标题</label>
                    <div class="layui-input-block">
                        <input type="text" name="subtitle" value="{{old('subtitle')}}" lay-verify="required" placeholder="请输入文章短标题" class="layui-input col-xs-8" >
                    </div>
                </div>
                <div class="layui-form-item">
                    <label for="" class="layui-form-label"><span style="color: #FF5722;">*</span>分类</label>
                    <div class="layui-input-inline">
                        <select class="layui-select layui-form-select" name="group_id">
                            <option value="">请选择</option>
                            @foreach($groups as $item)
                                @if($item['parent_id'] == 0)
                                    <option value="{{$item['id']}}">{{$item['name']}}</option>
                                @else
                                    <option value="{{$item['id']}}">{{'|'.str_pad("",$item['level']*2, "-",STR_PAD_RIGHT).$item['name']}}</option>
                                @endif
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="layui-form-item">
                    <label for="" class="layui-form-label">封面图片</label>
                    <div class="layui-input-block">
                        <div class="layui-upload" style="display: flex;align-items: flex-end;">
                            <div class="layui-upload-list" style="margin:0">
                                <ul id="layui-upload-box" class="layui-clear uploadPImg" style="padding-left: 0"></ul>
                            </div>
                            <button type="button" class="layui-btn" id="uploadP" lay-data="{name:'imgs[]',num:1}">
                                <i class="layui-icon">&#xe67c;</i>上传图片
                            </button>
                            <div class="C-lineHeight-1 C-marginLeft-10">
                                <span>建议上传图片尺寸:800×800</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="layui-form-item">
                    <label for="" class="layui-form-label"><span style="color: #FF5722;">*</span>描述</label>
                    <div class="layui-input-block">
                        <textarea name="desc" placeholder="请输入内容" class="layui-textarea col-xs-8"></textarea>
                    </div>
                </div>
                <div class="layui-form-item">
                    <label for="" class="layui-form-label"><span style="color: #FF5722;">*</span>文章详情</label>
                    <div class="layui-input-block">
                        <textarea id="editor" name="content" type="text/plain" class="col-xs-8"  style="width:850px;height:300px;" ></textarea>
                    </div>
                </div>
                <div class="layui-form-item">
                    <label for="" class="layui-form-label">热门</label>
                    <div class="layui-input-block">
                        <input type="checkbox" name="is_hot" lay-skin="switch" lay-text="是|否">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label for="" class="layui-form-label"><span style="color: #FF5722;">*</span>状态</label>
                    <div class="layui-input-block">
                        <input type="checkbox" checked name="status" lay-skin="switch" lay-text="开启|关闭">
                    </div>
                </div>
                <div class="layui-form-item  layui-layout-admin">
                    <div class="layui-input-block">
                        <div class="layui-footer" style="left: 0;">
                            <button type="submit" class="layui-btn layui-btn-normal">确定</button>
                            <a class="layui-btn layui-btn-primary" id="layui-form-close"> 返回 </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
@stop
@section('script')
    @include('vendor.ueditor.assets')
    <script>
        layui.use(['form','editor','upload'], function(){
            var $ = layui.jquery
                ,form = layui.form;
            // 删除
            admin.uploadImgBox('#uploadP','.uploadPImg');
            form.render();
        });
    </script>
@endsection



