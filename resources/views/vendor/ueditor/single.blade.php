<!-- 配置文件 -->
<script type="text/javascript" src="{{ asset('vendor/ueditor/single.config.js') }}"></script>
<!-- 编辑器源码文件 -->
<script type="text/javascript" src="{{ asset('vendor/ueditor/ueditor.all.js') }}"></script>
<script>
    window.UEDITOR_CONFIG.serverUrl = '{{ config('store.route.ueditor') }}'
</script>
