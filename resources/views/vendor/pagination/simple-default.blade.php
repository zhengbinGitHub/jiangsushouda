@if ($paginator->hasPages())
    @if ($paginator->onFirstPage())
        <a class="prev disable hide" href="javascript:;"><i class="fa fa-angle-left"></i></a>
    @else
        <a class="prev" href="{{ $paginator->previousPageUrl() }}" rel="prev"><i class="fa fa-angle-left"></i></a>
    @endif

    {{-- Pagination Elements --}}
    @foreach ($elements as $element)
        {{-- "Three Dots" Separator --}}
        @if (is_string($element))
            <a class="disabled" href="javascript:;" aria-disabled="true">{{ $element }}</a>
        @endif

        {{-- Array Of Links --}}
        @if (is_array($element))
            @foreach ($element as $page => $url)
                @if ($page == $paginator->currentPage())
                    <a class="page-item active" aria-current="page">{{ $page }}</a>
                @else
                    <a href="{{ $url }}" class="page-item">{{ $page }}</a>
                @endif
            @endforeach
        @endif
    @endforeach

    {{-- Next Page Link --}}
    @if ($paginator->hasMorePages())
        <a class="next" href="{{ $paginator->nextPageUrl() }}"><i class="fa fa-angle-right"></i></a>
    @else
        <a class="next disable hide" href="javascript:;"><i class="fa fa-angle-right"></i></a>
    @endif

@endif
