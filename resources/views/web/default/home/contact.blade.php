<div id="mcontact" class="mcontact module bgShow "
     style="
  background-image:url(//resources.jsmo.xin/templates/upload/2384/201704/1492581573555.jpg);    ">
    <div class="module_container">    <div class="container_header wow">
            <p class="title">加入</p>
            <p class="subtitle">Join</p>
        </div>
        <div class="container_content">
            <div class="content_wrapper">
                <div id="contactlist" class="contactlist">
                    <div id="contactinfo" class="contactinfo wow">
                        <h3 class="ellipsis contact_name">{{config('store.web_title')}}</h3>
                        <p class="ellipsis contact_add">地址：{{trans('theme.company.address')}}</p>
                        <p class="ellipsis contact_zip">邮编：{{trans('theme.company.post')}}</p>
                        <p class="ellipsis contact_tel">电话：{{trans('theme.company.tel')}}</p>
                        <p class="ellipsis contact_mob">手机：{{trans('theme.company.mobile')}}</p>
                        <p class="ellipsis contact_fax">传真：{{trans('theme.company.fax')}}</p>
                        <p class="ellipsis contact_eml">邮箱：{{trans('theme.company.email')}}</p>
                        <div class="ff_social">
                            <a class="fl" target="_blank" href="tencent://message/?uin={{config('store.qq')}}&Site=uelike&Menu=yes"><i class="fa fa-qq"></i></a>
                        </div>
                    </div>
                    <div id="contactform" class="contactform wow">
                        <form class="base_form" action="{{url('comment')}}" method="post">
                            <p class="contactform_name">
                                <input type="text" required class="inputtxt" name="name" placeholder="姓名" autocomplete="off" />
                            </p>
                            <p class="contactform_eml">
                                <input type="text" required class="inputtxt" name="email" placeholder="邮箱"  autocomplete="off"/>
                            </p>
                            <p class="contactform_tel">
                                <input type="text" required class="inputtxt" name="tel" placeholder="电话"  autocomplete="off"/>
                            </p>
                            <p class="contactform_content">
                                <textarea class="inputtxt" required name="content" placeholder="内容" autocomplete="off"></textarea>
                            </p>
                            <p class="contactform_submit">
                                <input class="inputtxt submit" id="comment" type="button" value="提交" />
                            </p>
                        </form>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
</div>