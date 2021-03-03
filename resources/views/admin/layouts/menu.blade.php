<div class="layui-side layui-side-menu">
    <div class="layui-side-scroll">
        <div class="layui-logo">
            <span>{{trans('theme.login_title')}}</span>
        </div>
        <ul class="layui-nav layui-nav-tree" lay-shrink="all" id="LAY-system-side-menu" lay-filter="layadmin-system-side-menu">
           @foreach($navigations as $i=>$nv)
                @if(isset($nv['children']) && $nv['children'])
                    <li class="layui-nav-item @if($i == 0 )layui-nav-itemed @endif">
                        <a href="javascript:;">
                            <i class="layui-icon {!! $nv['icon'] ?? '' !!}"></i><cite>{{$nv['name']}}</cite>
                        </a>
                        @foreach($nv['children'] as $ck=>$cv)
                            <dl class="layui-nav-child">
                                <dd class="{{ request()->path() == trim($cv['url'], '/') ? 'layui-this' : '' }}">
                                    <a lay-href="{{$cv['url']}}">{{$cv['name']}}</a>
                                </dd>
                            </dl>
                        @endforeach
                    </li>
                @else
                    <li class="layui-nav-item">
                        @if(isset($nv['icon'])) <i class="layui-icon {!! $nv['icon'] ?? '' !!}"></i> @endif
                        <a lay-href="{{ $nv['url'] }}">{{ $nv['name'] }}</a>
                    </li>
                @endif
            @endforeach
        </ul>

    </div>
</div>
