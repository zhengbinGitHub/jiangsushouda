<div class="mlist imagelink module ff_slider" style="" >
    <div class="bgmask"></div>
    <div class="module_container">
        <div class="container_header wow">
            <p class="title">设备设施</p>
            <p class="subtitle">Equipment</p>
        </div>
        <div class="container_content">
            <div class="content_wrapper slider" data-slider-num='6' data-slider-loop="0">
                <ul class="content_list">
                    @foreach($equipments as $key=>$item)
                    <li id="item_block_{{$key}}" class="item_block wow" style="animation-delay:.{{$key}}s"><a href="javascript:;" target="_blank" class="item_img" title="Facebook"><img src="{{$item->pic_url}}" height="135" width="180"/></a></li>
                        @endforeach
                </ul>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</div>
