@section("title", "创建平台文章")
@extends('admin.layouts.base')

@section("content")
    <div class="layui-card">
        <div class="layui-card-header">编辑通栏图片</div>
        <div class="layui-card-body">
            <form class="layui-form base_form" action="{{route('admin.advertise.update', ['id' => $info->id])}}" method="post">
                @csrf
                <input value="PUT" name="_method" type="hidden">
                <div class="layui-form-item">
                    <label for="" class="layui-form-label"><span style="color: #FF5722;">*</span>标题</label>
                    <div class="layui-input-block">
                        <input type="text" name="title" value="{{$info->title}}" lay-verify="required" placeholder="请输入平台标题" class="layui-input col-xs-8" >
                    </div>
                </div>
                <div class="layui-form-item">
                    <label for="" class="layui-form-label">简介</label>
                    <div class="layui-input-block">
                        <input type="text" name="sub_title" value="{{$info->sub_title}}" lay-verify="required" placeholder="请输入标题简介" class="layui-input col-xs-8" >
                    </div>
                </div>
                <div class="layui-form-item">
                    <label for="" class="layui-form-label"><span style="color: #FF5722;">*</span>URl</label>
                    <div class="layui-input-block">
                        <input type="text" name="link" value="{{$info->link}}" lay-verify="required" placeholder="请输入图片连接" class="layui-input col-xs-8" >
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label"><span style="color: #FF5722;">*</span>所属</label>
                    <div class="layui-input-block">
                        <input type="checkbox" {{$info->is_index == 1 ? 'checked' : ''}} name="is_index" title="首页">
                        <input type="checkbox" {{$info->is_channel == 1 ? 'checked' : ''}} name="is_channel" title="频道">
                        <input type="checkbox" {{$info->is_info == 1 ? 'checked' : ''}} name="is_info" title="详情">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label for="" class="layui-form-label">通栏图片</label>
                    <div class="layui-input-block">
                        <div class="layui-upload" style="display: flex;align-items: flex-end;">
                            <div class="layui-upload-list" style="margin:0">
                                <ul id="layui-upload-box" class="layui-clear uploadPImg" style="padding-left: 0">
                                    @if($info->pic_url)
                                    <li>
                                        <img src="{{$info->pic_url}}">
                                        <input type="hidden" name="imgs[]" value="{{$info->pic_url}}">
                                        <span hidden="" class="img-delete"><i class="icon-shanchu iconfont"></i></span>
                                    </li>
                                        @endif
                                </ul>
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
                    <label for="" class="layui-form-label">显示描述</label>
                    <div class="layui-input-block">
                        <input type="checkbox" {{$info->is_description == 1 ? 'checked' : ''}} name="is_description" lay-skin="switch" lay-text="显示|隐藏">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label for="" class="layui-form-label"><span style="color: #FF5722;">*</span>状态</label>
                    <div class="layui-input-block">
                        <input type="checkbox" {{$info->status == 1 ? 'checked' : ''}} name="status" lay-skin="switch" lay-text="开启|关闭">
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
    <script>
        layui.use(['form','upload'], function(){
            var $ = layui.jquery
                ,form = layui.form;
            // 删除
            admin.uploadImgBox('#uploadP','.uploadPImg');
            form.render();
        });
    </script>
@endsection



