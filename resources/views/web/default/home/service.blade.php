<div class="mlist service module ff_slider" style="">
    <div class="bgmask"></div>
    <div class="module_container">
        <div class="container_header wow">
            <p class="title">业务范围</p>
            <p class="subtitle">Business</p>
        </div>
        <div class="container_category wow movedx" data-movedx-mid="2" data-movedx-distance="15">
            <a href="{{url('business')}}" class="active">
                <span>全部</span>
            </a>
        </div>
        <div class="container_content">
            <div class="content_wrapper slider" data-slider-num='4' data-slider-loop="0">
                <div class="more_wrap">
                    <a href="{{url('business')}}" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <ul class="content_list clearfix">
                    @foreach($business as $key=>$item)
                    <li id="item_block_{{$key}}" class="item_block wow fadeInUp" >
                        <a href="{{url('business/info', ['alias' => $item->alias])}}" class="item_box">
                            <div href="{{url('business/info', ['alias' => $item->alias])}}" class="item_img" target="_blank">
                                <img src="{{$item->cover}}"/>
                                <div class="item_mask"></div>
                            </div>
                            <div class="item_wrapper clearfix">
                                <div class="item_info clearfix">
                                    <p class="title ellipsis">{{$item->name}}</p>
                                    <p class="subtitle ellipsis">{{$item->memo}}</p>
                                </div>
                                <p class="date_wrap">
                                    <span class="year">{{$item->created_at->format('Y')}}</span>
                                    <span class="md">{{$item->created_at->format('m-d')}}</span>
                                </p>
                                <div  class="item_des">
                                    <p class="description">{{$item->memo}}</p>
                                </div>
                            </div>
                        </a>
                        <a href="{{url('business/info', ['alias' => $item->alias])}}" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                    </li>
                    @endforeach
                </ul>
                <a href="{{url('business')}}" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </div>

        </div>
    </div>
    <div class="clear"></div>
</div>