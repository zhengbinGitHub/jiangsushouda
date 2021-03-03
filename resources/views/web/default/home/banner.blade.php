<div id="topSlider" class="ff_topSlider mslider module">
    <ul class="content_list" data-slider-height="680" data-slider-auto="1" data-slider-mode="horizontal" data-slider-pause="4" data-slider-ease="ease-out" data-slider-speed="1" data-slider-thumb="1" style="height:680px">
        @foreach($banners as $key=>$item)
        <li class="{{$key == 0 ? 'active' : ''}}">
            <div class="item_bg image" style="background-image:url('{{$item->pic_url}}')">
                <img class="hide" style="display: none;" src="{{$item->pic_url}}" />
            </div>
            @if($item->is_description)
                <div class="mask"></div>
                <a target="_blank" >
                    <div class="description" style="vertical-align:middle; text-align:center">
                        <p class="title ellipsis">{{$item->title}}</p>
                        <p class="subtitle">{{$item->sub_title}}</p>
                    </div>
                </a>
            @else
                <a target="_blank" ></a>
            @endif
        </li>
        @endforeach
    </ul>
    <div class="sliderArrow">
        <div></div>
    </div>
</div>