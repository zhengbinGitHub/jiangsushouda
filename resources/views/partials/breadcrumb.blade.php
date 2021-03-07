@if (count($breadcrumbs))
	@foreach ($breadcrumbs as $breadcrumb)
		@if ($loop->last)
			@if ($breadcrumb->url)
				<a href="{{ $breadcrumb->url }}">{{ $breadcrumb->title }}</a>
			@else
				{{ $breadcrumb->title }}
			@endif

		@elseif ($breadcrumb->url)
			<a href="{{ $breadcrumb->url }}">{{ $breadcrumb->title }}</a><i class="fa fa-angle-right"></i>

		@else

			{{-- Using .active to give it the right colour (grey by default) --}}
			{{ $breadcrumb->title }}<i class="fa fa-angle-right"></i>

		@endif
	@endforeach

@endif
