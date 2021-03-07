@section("title", "创建设备设施")
@extends('admin.layouts.base')

@section("content")
    <div class="layui-card">
        <div class="layui-card-header">编辑设备图片</div>
        <div class="layui-card-body">
            <form class="layui-form base_form" action="{{route('admin.equipment.update', ['id' => $info->id])}}" method="post">
                @csrf
                <input value="PUT" name="_method" type="hidden">
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



