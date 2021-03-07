<div class="mlist project module ff_slider" style="" >
    <div class="bgmask"></div>
    <div class="module_container">
        <div class="container_header wow">
            <p class="title">典型项目</p>
            <p class="subtitle">Project</p>
        </div>
        <div class="container_category wow movedx" data-movedx-mid="2" data-movedx-distance="15">
            <a href="{{url('project')}}" class="active">
                <span>全部</span>
            </a>
            @foreach($projectChilds as $item)
            <a href="{{url($item['alias'])}}">
                <span>{{$item['name']}}</span>
            </a>
            @endforeach
        </div>
        <div class="container_content">
            <div class="content_wrapper slider" data-slider-num='4' data-slider-loop="0">
            <ul class="content_list clearfix">
                @foreach($projects as $key=>$item)
                    @php
                        $url = url((isset($item->group->parent) ? $item->group->parent->alias : $item->group->alias).'/info/'.$item->id);
                    @endphp
                <li id="item_block_{{$key}}" class="item_block wow fadeInUp" style="animation-delay:.{{$key}}s">
                    <a href="{{$url}}" class="item_box">
                        <div class="item_img" target="_blank">
                            <img src="{{$item->cover}}"/>
                            <div class="item_mask"></div>
                        </div>
                        <div class="item_wrapper clearfix">
                            <div class="item_info clearfix">
                                <div class="text_wrap">
                                    <p class="title ellipsis">{{$item->title}}</p>
                                    <p class="subtitle ellipsis">{{$item->memo}}</p>
                                </div>
                                <p class="date_wrap">
                                    <span class="year">{{$item->created_at->format('Y')}}</span>
                                    <span class="md">{{$item->created_at->format('m-d')}}</span>
                                </p>
                            </div>
                            <div  class="item_des">
                                <p class="description">{{$item->memo}}</p>
                            </div>
                        </div>
                    </a>
                    <a href="{{$url}}" class="details">详情<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                    <div class="item_tags clearfix"><i class="fa fa-tags"></i></div>
                </li>
                @endforeach
            </ul>
            <a href="{{url('project')}}" class="more wow" style="animation-delay:.5s">更多<i class="fa fa-angle-right" aria-hidden="true"></i></a>
        </div>
        </div>
        <div class="clear"></div>
    </div>
</div>