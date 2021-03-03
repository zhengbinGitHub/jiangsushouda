<div id="header">
    <div class="wrapper"> <div class="content">
            <div id="headTop">
                <a href="{{config('app.url')}}" id="logo">
                    <img src="{{config('store.logo')}}" height="44" />
                    <div style="display:none;">
                        <h1>{{config('store.site_type')}}</h1>
                        <h2>{{config('store.web_title')}}</h2>
                    </div>
                </a>
                <div id="hcontact" class="fr"><i class="fa fa-phone"></i>
                    <p><span class="telNum">{{trans('theme.company.tel')}}</span><br />
                        <a href="mailto:{{trans('theme.company.email')}}">{{trans('theme.company.email')}}</a>
                    </p>
                </div>
                <div id="openBtn" class="fl btn">
                    <div class="lcbody">
                        <div class="lcitem top">
                            <div class="rect top"></div>
                        </div>
                        <div class="lcitem center hide">
                            <div class="rect bottom"></div>
                        </div>
                        <div class="lcitem bottom">
                            <div class="rect bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="navWrapper">
                <div class="content">
                    @inject("navigation","App\Presenters\NavigationPresenter")
                    {!! $navigation->navigation() !!}
                    <div id="search-nav" class="searchGroup" style="display: none">
                        <div class="search_wrap">
                            <div class="searchOnOff">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </div>
                            <div class="searchBox">
                                <div class="searchFormGroup">
                                    <input type="text" aria-label="搜索" placeholder="搜索" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" />
                                    <div class="searchSub"><span>搜索</span><i class="fa fa-search" aria-hidden="true"></i></div>
                                </div>
                                <div class="searchClose"><i class="fa fa-times" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</div>