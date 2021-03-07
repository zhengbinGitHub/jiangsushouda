<ul class="nav movedx" data-movedx-mid="1">
    @foreach($navigations as $key=>$items)
    <li class="navitem">
        @php
           $isChild = $items->childs->count();
        @endphp
        <a {{$key == 0 ? 'class="active"' : ''}} href="{{url($items->alias)}}" target="_self"> <span data-title="{{$items->name}}">{{$items->name}}</span> @if($isChild)<i class="fa fa-angle-down"></i> @endif</a>
        @if($isChild)
            <ul class="subnav">
                @foreach($items->childs as $item)
                    <li> <a href="{{url($items->alias.'/'.$item->alias)}}" target="_self">{{$item->name}}</a></li>
                @endforeach
            </ul>
        @endif
    </li>
    @endforeach
    <li class="navitem" style="display:none"> <a class="active"></a></li>
</ul>