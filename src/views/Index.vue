<template>
    <div>
    <my-nav :login="login"></my-nav>
    <div class="header">
        <div class="container">
            <div class="header-top">
                <img src="image/index/logo.png" alt="">
                <div>
                    <input type="text"><span><i></i><i></i></span>
                </div>  
                <p>
                    <a href=""><img src="image/index/header_author.jpg" alt="">我要当作家</a>
                    <a href=""><img src="image/index/header_liwu.jpeg" alt="">作家福利</a>
                </p>
            </div>
            <div>
                <img src="image/index/header_img.jpg" alt="">
            </div>
            <div class="header_bottom">
                <ul>
                    <li><a href="">全部作品</a></li>
                    <li><a href="">完本</a></li>
                    <li><a href="">免费</a></li>
                    <li><a href="">包月</a></li>
                    <li><a href="">影视改编</a></li>
                    <li><a href="">领取红包</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="contont">
        <div class="row">
            <div class="col-3">
                <div class="col-header">
                    <h3>订阅金榜</h3>
                </div>
                <div class="col-3-content">
                    <ul>
                        <li><span>[古言]</span>
                            <a href="">盛宠之嫡妻归来</a>
                        </li>
                        <li><span>[古言]</span>
                            <a href="">琴妃倾城</a>
                        </li>
                        <li><span>[古言]</span>
                            <a href="">花颜策</a>
                        </li>
                        <li><span>[现言]</span>
                            <a href="">夫人你马甲又掉了</a>
                        </li>
                        <li><span>[现言]</span>
                            <a href="">陆先生的闪婚甜妻</a>
                        </li>
                        <li><span>[仙侠]</span>
                            <a href="">战神魔妃</a>
                        </li>
                        <li><span>[现言]</span>
                            <a href="">名门暖婚之权爷追妻攻略</a>
                        </li>
                        <li><span>[玄幻]</span>
                            <a href="">玄医枭后</a>
                        </li>
                        <li><span>[古言]</span>
                            <a href="">侯门医妃有点毒</a>
                        </li>
                        <li><span>[古言]</span>
                            <a href="">盛嫁无双之神医王爷不良妃</a>
                        </li>
                        <li><span>[古言]</span>
                            <a href="">盛世娇宠之名门闺香</a>
                        </li>
                        <li><span>[古言]</span>
                            <a href="">贪财萌宝俏娘亲</a>
                        </li>
                        <li><span>[现言]</span>
                            <a href="">爷是病娇得宠着</a>
                        </li>
                        <li><span>[古言]</span>
                            <a href="">山河盛宴</a>
                        </li>
                        <li><span>[古言]</span>
                            <a href="">神医娘亲之腹黑小萌宝</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-6">
                <div id="banner">
                    <div id="btn-left"></div>
                    <ul id="imgs">
                        <li><a href=""><img src="image/index/banner1.jpg" alt=""></a></li>
                        <li><a href=""><img src="image/index/banner2.jpg" alt=""></a></li>
                        <li><a href=""><img src="image/index/banner3.jpg" alt=""></a></li>
                        <li><a href=""><img src="image/index/banner4.jpg" alt=""></a></li>
                        <li><a href=""><img src="image/index/banner1.jpg" alt=""></a></li>
                    </ul>
                    <ul id="idns">
                        <li class="active"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div id="btn-right"></div>
                </div>
                <ul class="col-nav" @mouseover="ulMouse">
                    <li :class="{liActive:idx==0}" data-idx="0">今日推荐</li>
                    <li :class="{liActive:idx==1}" data-idx="1">限时折扣</li>
                </ul>
                <div class="col-list" :class="{divActive:idx==0}">
                    <div class="col-list-hide">
                        <table></table>
                        <ul>
                            <li><a href="javascript:;">重生之腹黑天师</a></li>
                            <li><a href="javascript:;">偏爱我的陆先生</a></li>
                            <li><a href="javascript:;">将门崛起之凰女倾天下</a></li>
                            <li><a href="javascript:;">暖王医妃</a></li>
                            <li><a href="javascript:;">倾世绝宠之错位王妃</a></li>
                        </ul>
                        <ul>
                            <li><a href="javascript:;">重生之腹黑天师</a></li>
                            <li><a href="javascript:;">偏爱我的陆先生</a></li>
                            <li><a href="javascript:;">将门崛起之凰女倾天下</a></li>
                            <li><a href="javascript:;">暖王医妃</a></li>
                            <li><a href="javascript:;">倾世绝宠之错位王妃</a></li>
                        </ul>
                        <ul>
                            <li><a href="javascript:;">重生之腹黑天师</a></li>
                            <li><a href="javascript:;">偏爱我的陆先生</a></li>
                            <li><a href="javascript:;">将门崛起之凰女倾天下</a></li>
                            <li><a href="javascript:;">暖王医妃</a></li>
                            <li><a href="javascript:;">倾世绝宠之错位王妃</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-list" :class="{divActive:idx==1}">
                    7890    
                </div>
            </div>
            <div class="col-3 p-2">
                <div class="col-header">
                    <h3>书友力荐</h3>
                </div>
                <div class="col-3-content">
                    <ul>
                        <li><span>[古言]</span>
                            <a href="javascrip:;">盛世娇宠之名门闺香</a></li>
                        <li><span>[古言]</span>
                            <a href="javascrip:;">盛世娇宠之名门闺香</a></li>
                        <li><span>[古言]</span>
                            <a href="javascrip:;">盛世娇宠之名门闺香</a></li>
                        <li><span>[古言]</span>
                            <a href="javascrip:;">盛世娇宠之名门闺香</a></li>
                        <li><span>[古言]</span>
                            <a href="javascrip:;">盛世娇宠之名门闺香</a></li>
                        <li><span>[古言]</span>
                            <a href="javascrip:;">盛世娇宠之名门闺香</a></li>
                        <li><span>[古言]</span>
                            <a href="javascrip:;">盛世娇宠之名门闺香</a></li>
                        <li><span>[古言]</span>
                            <a href="javascrip:;">盛世娇宠之名门闺香</a></li>
                    </ul>
                </div>
                <div class="right-content">
                    <p>潇湘资讯</p>
                    <p><span>[公告]</span>2019潇湘作家福利</p>
                    <p><span>[公告]</span>2019扬子江网络文学原创</p>
                    <p><span>[公告]</span>2019网络文学全明星</p>
                    <p><span>[公告]</span>潇湘书院衍生版权盘点</p>
                    <p><span>[公告]</span>潇湘书院官方编辑联系方</p>
                    <p><span>[公告]</span>潇湘包月库重磅升级</p>
                    <p><span>[公告]</span>全国网络文学优秀作品联</p>
                </div>
            </div>
        </div>
    </div>
    <div class="middle_img">
        <img src="image/index/middle_img.jpg" alt="">
        <img src="image/index/middle_img2.jpg" alt="">
    </div>
    <div class="row">
        <div class="col-2">
            <div>
                <img src="image/index/author_fuli.jpg" alt="">
            </div>
        </div>
        <div class="col-8">

        </div>
        <div class="col-2">
            <div class="small_car">

            </div>
        </div>
    </div>
    <div class="hot_tui">
        <div class="hot_top">
            <h3>热门推荐</h3>
        </div>
        <div class="hot_content">
            <div class="hot_content_1" @mousemove="timeMove" @mouseleave="timeLea">
                <div id="div-imgs" :style="{'margin-left':`-${marleft}px`}">
                    <div><a href="javascript:;"><img src="image/index/hot_tui1.jpg" alt="">
                        <p>侯门嫡女之一品夫人</p>
                    </a><p>凌七七 / 著</p></div>
                    <div><a href="javascript:;"><img src="image/index/hot_tui2.jpg" alt="">
                        <p>霍先生婚姻无效</p>
                    </a><p>铭希 / 著</p></div>
                    <div><a href="javascript:;"><img src="image/index/hot_tui3.jpg" alt="">
                        <p>神君有个小师妹</p>
                    </a><p>公子无争 / 著</p>
                    </div>
                    <div><a href="javascript:;"><img src="image/index/hot_tui4.jpg" alt="">
                        <p>天命凰徒</p>
                    </a><p>木林铃 / 著</p></div>
                    <div><a href="javascript:;"><img src="image/index/hot_tui5.jpg" alt="">
                        <p>星际未来之寻妻指南</p>
                    </a><p>淡粥 / 著</p></div>
                    <div><a href="javascript:;"><img src="image/index/hot_tui6.jpg" alt="">
                        <p>主母Boss又精分了</p>
                    </a><p>澄夏 / 著</p></div>
                </div>
                <div id="div-imgs1">
                    <div><a href="javascript:;"><img src="image/index/hot_tui1.jpg" alt="">
                        <p>侯门嫡女之一品夫人</p>
                    </a><p>凌七七 / 著</p></div>
                    <div><a href="javascript:;"><img src="image/index/hot_tui2.jpg" alt="">
                        <p>霍先生婚姻无效</p>
                    </a><p>铭希 / 著</p></div>
                    <div><a href="javascript:;"><img src="image/index/hot_tui3.jpg" alt="">
                        <p>神君有个小师妹</p>
                    </a><p>公子无争 / 著</p>
                    </div>
                    <div><a href="javascript:;"><img src="image/index/hot_tui4.jpg" alt="">
                        <p>天命凰徒</p>
                    </a><p>木林铃 / 著</p></div>
                    <div><a href="javascript:;"><img src="image/index/hot_tui5.jpg" alt="">
                        <p>星际未来之寻妻指南</p>
                    </a><p>淡粥 / 著</p></div>
                    <div><a href="javascript:;"><img src="image/index/hot_tui6.jpg" alt="">
                        <p>主母Boss又精分了</p>
                    </a><p>澄夏 / 著</p></div>
                </div>
            </div>
        </div>
    </div>
    <div class="gg_img">
        <img src="image/index/gg.jpg" alt="">
    </div>
    <div class="container">
        <div class="icon">
            <div class="i-3">
                <div class="col-header">
                    <h3>原创风云榜</h3>
                </div>
                <div class="i-3_content">
                    <div class="list-one">
                        <img src="image/index/bangdan1.jpg" alt="">
                    </div>
                    <div class="icon_header">
                        <span class="num">NO.1</span>
                        <p><a href="">山河盛宴</a></p>
                        <p><span>11841</span>月票</p>
                        <p><span>古言</span>&nbsp;|&nbsp;<span>天下归元</span></p>
                    </div>
                </div>
                <ul class="ul-list">
                    <li>
                        <span>11153</span>
                        <span>2</span>
                        <a href="javascript:;">夫人你马甲又掉了</a>
                    </li>
                    <li>
                        <span>9508</span>
                        <span>3</span>
                        <a href="javascript:;">名门暖婚之权爷追妻攻略</a>
                    </li>
                    <li>
                        <span>7001</span>
                        <span>4</span>
                        <a href="javascript:;">狂医废材妃</a>
                    </li>
                    <li>
                        <span>6678</span>
                        <span>5</span>
                        <a href="javascript:;">最美不过小时光</a>
                    </li>
                    <li>
                        <span>6412</span>
                        <span>6</span>
                        <a href="javascript:;">盛世娇宠之名门闺香</a>
                    </li>
                    <li>
                        <span>5425</span>
                        <span>7</span>
                        <a href="javascript:;">神医娘亲之腹黑小萌宝</a>
                    </li>
                    <li>
                        <span>4865</span>
                        <span>8</span>
                        <a href="javascript:;">战神魔妃</a>
                    </li>
                    <li>
                        <span>4235</span>
                        <span>9</span>
                        <a href="javascript:;">爷是病娇得宠着</a>
                    </li>
                    <li>
                        <span>3514</span>
                        <span>10</span>
                        <a href="javascript:;">神殿倾天之妖妃好甜</a>
                    </li>
                </ul>
            </div>
            <div class="i-3">
                <div class="nav_mouse" @mousemove="divMouse">
                    <h3 :class="{h3Active:dh==0}" data-dh="0">新书热销榜</h3>
                    <h3 :class="{h3Active:dh==1}" data-dh="1">新书畅销榜</h3>
                </div>
                <div class="nav_content" :class="{navActive:dh==0}">
                    <div class="i-3_content">
                        <div class="list-one">
                            <img src="image/index/bangdan1.jpg" alt="">
                        </div>
                        <div class="icon_header">
                            <span class="num">NO.1</span>
                            <p><a href="">山河盛宴</a></p>
                            <p>作者：<span>天下归元</span></p>
                            <p><span>分类：</span>&nbsp;|&nbsp;<span>玄幻</span></p>
                        </div>
                    </div>
                    <ul class="ul-list">
                    <li>
                        <span>11153</span>
                         <span>2</span>
                        <a href="javascript:;">夫人你马甲又掉了</a>
                    </li>
                    <li>
                        <span>9508</span>
                        <span>3</span>
                        <a href="javascript:;">名门暖婚之权爷追妻攻略</a>
                    </li>
                    <li>
                        <span>7001</span>
                        <span>4</span>
                        <a href="javascript:;">狂医废材妃</a>
                    </li>
                    <li>
                        <span>6678</span>
                        <span>5</span>
                        <a href="javascript:;">最美不过小时光</a>
                    </li>
                    <li>
                        <span>6412</span>
                        <span>6</span>
                        <a href="javascript:;">盛世娇宠之名门闺香</a>
                    </li>
                    <li>
                        <span>5425</span>
                        <span>7</span>
                        <a href="javascript:;">神医娘亲之腹黑小萌宝</a>
                    </li>
                    <li>
                        <span>4865</span>
                        <span>8</span>
                        <a href="javascript:;">战神魔妃</a>
                    </li>
                    <li>
                        <span>4235</span>
                        <span>9</span>
                        <a href="javascript:;">爷是病娇得宠着</a>
                    </li>
                    <li>
                        <span>3514</span>
                        <span>10</span>
                        <a href="javascript:;">神殿倾天之妖妃好甜</a>
                    </li>
                    </ul>
                </div>
                <div class="nav_content" :class="{navActive:dh==1}">
                    <div class="i-3_content">
                        <div class="list-one">
                            <img src="image/index/bangdan2.jpg" alt="">
                        </div>
                        <div class="icon_header">
                            <span class="num">NO.1</span>
                            <p><a href="">名门暖婚之权爷追妻攻略</a></p>
                            <p>作者：<span>天下第一</span></p>
                            <p><span>分类：</span>&nbsp;|&nbsp;<span>玄幻</span></p>
                        </div>
                    </div>
                    <ul class="ul-list">
                        <li>
                            <span>11153</span>
                             <span>2</span>
                            <a href="javascript:;">夫人你马甲又掉了</a>
                        </li>
                        <li>
                            <span>9508</span>
                            <span>3</span>
                            <a href="javascript:;">名门暖婚之权爷追妻攻略</a>
                        </li>
                        <li>
                            <span>7001</span>
                            <span>4</span>
                            <a href="javascript:;">狂医废材妃</a>
                        </li>
                        <li>
                            <span>6678</span>
                            <span>5</span>
                            <a href="javascript:;">最美不过小时光</a>
                        </li>
                        <li>
                            <span>6412</span>
                            <span>6</span>
                            <a href="javascript:;">盛世娇宠之名门闺香</a>
                        </li>
                        <li>
                            <span>5425</span>
                            <span>7</span>
                            <a href="javascript:;">神医娘亲之腹黑小萌宝</a>
                        </li>
                        <li>
                            <span>4865</span>
                            <span>8</span>
                            <a href="javascript:;">战神魔妃</a>
                        </li>
                        <li>
                            <span>4235</span>
                            <span>9</span>
                            <a href="javascript:;">爷是病娇得宠着</a>
                        </li>
                        <li>
                            <span>3514</span>
                            <span>10</span>
                            <a href="javascript:;">神殿倾天之妖妃好甜</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="i-3">
                <div class="col-header">
                    <h3>更新榜</h3>
                </div>
                <div class="i-3_content">
                    <div class="list-one">
                        <img src="image/index/bangdan1.jpg" alt="">
                    </div>
                    <div class="icon_header">
                        <span class="num">NO.1</span>
                        <p><a href="">山河盛宴</a></p>
                        <p>作者：<span>天下归元</span></p>
                        <p><span>分类：</span>&nbsp;|&nbsp;<span>玄幻</span></p>
                    </div>
                </div>
                <ul class="ul-list">
                    <li>
                        <span>11153</span>
                        <span>2</span>
                        <a href="javascript:;">夫人你马甲又掉了</a>
                    </li>
                    <li>
                        <span>9508</span>
                        <span>3</span>
                        <a href="javascript:;">名门暖婚之权爷追妻攻略</a>
                    </li>
                    <li>
                        <span>7001</span>
                        <span>4</span>
                        <a href="javascript:;">狂医废材妃</a>
                    </li>
                    <li>
                        <span>6678</span>
                        <span>5</span>
                        <a href="javascript:;">最美不过小时光</a>
                    </li>
                    <li>
                        <span>6412</span>
                        <span>6</span>
                        <a href="javascript:;">盛世娇宠之名门闺香</a>
                    </li>
                    <li>
                        <span>5425</span>
                        <span>7</span>
                        <a href="javascript:;">神医娘亲之腹黑小萌宝</a>
                    </li>
                    <li>
                        <span>4865</span>
                        <span>8</span>
                         <a href="javascript:;">战神魔妃</a>
                    </li>
                    <li>
                        <span>4235</span>
                        <span>9</span>
                        <a href="javascript:;">爷是病娇得宠着</a>
                    </li>
                    <li>
                        <span>3514</span>
                        <span>10</span>
                        <a href="javascript:;">神殿倾天之妖妃好甜</a>
                    </li>
                </ul>
            </div>
            <div class="i-3">
                <div class="col-header">
                    <h3>更新榜</h3>
                </div>
                <div class="i-3_content">
                    <div class="list-one">
                        <img src="image/index/bangdan1.jpg" alt="">
                    </div>
                    <div class="icon_header">
                        <span class="num">NO.1</span>
                        <p><a href="">山河盛宴</a></p>
                        <p>作者：<span>天下归元</span></p>
                        <p><span>分类：</span>&nbsp;|&nbsp;<span>玄幻</span></p>
                    </div>
                </div>
                <ul class="ul-list">
                            <li>
                                <span>11153</span>
                                <span>2</span>
                                <a href="javascript:;">夫人你马甲又掉了</a>
                            </li>
                            <li>
                                <span>9508</span>
                                <span>3</span>
                                <a href="javascript:;">名门暖婚之权爷追妻攻略</a>
                            </li>
                        <li>
                            <span>7001</span>
                            <span>4</span>
                            <a href="javascript:;">狂医废材妃</a>
                        </li>
                        <li>
                            <span>6678</span>
                            <span>5</span>
                            <a href="javascript:;">最美不过小时光</a>
                        </li>
                        <li>
                            <span>6412</span>
                            <span>6</span>
                            <a href="javascript:;">盛世娇宠之名门闺香</a>
                        </li>
                        <li>
                            <span>5425</span>
                            <span>7</span>
                            <a href="javascript:;">神医娘亲之腹黑小萌宝</a>
                        </li>
                        <li>
                            <span>4865</span>
                            <span>8</span>
                            <a href="javascript:;">战神魔妃</a>
                        </li>
                        <li>
                            <span>4235</span>
                            <span>9</span>
                            <a href="javascript:;">爷是病娇得宠着</a>
                        </li>
                        <li>
                            <span>3514</span>
                            <span>10</span>
                        <a href="javascript:;">神殿倾天之妖妃好甜</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <img src="image/index/58_img5.jpg" alt="">
            <img src="image/index/61_img5.jpg" alt="">
        </div>
        <div class="bottom-list">
            <div class="bot-2">
                <div id="bottom_mouse" @mouseover="mouseDiv">
                    <h3 :class="{h3Active:bott==0}" data-bott="0">周订榜</h3>
                    <h3 :class="{h3Active:bott==1}" data-bott="1">月订榜</h3>
                    <h3 :class="{h3Active:bott==2}" data-bott="2">总订榜</h3>
                </div>
                <div class="bottom_content" :class="{bottActive:bott==0}">
                    <div class="i-3_content">
                        <div class="list-one">
                            <img src="image/index/bangdan1.jpg" alt="">
                        </div>
                        <div class="icon_header">
                            <span class="num">NO.1</span>
                            <p><a href="">山河盛宴</a></p>
                            <p>作者：<span>天下归元</span></p>
                            <p><span>分类：</span>&nbsp;|&nbsp;<span>玄幻</span></p>
                        </div>
                    </div>
                    <ul class="ul-list">
                    <li>
                        <span>11153</span>
                         <span>2</span>
                        <a href="javascript:;">夫人你马甲又掉了</a>
                    </li>
                    <li>
                        <span>9508</span>
                        <span>3</span>
                        <a href="javascript:;">名门暖婚之权爷追妻攻略</a>
                    </li>
                    <li>
                        <span>7001</span>
                        <span>4</span>
                        <a href="javascript:;">狂医废材妃</a>
                    </li>
                    <li>
                        <span>6678</span>
                        <span>5</span>
                        <a href="javascript:;">最美不过小时光</a>
                    </li>
                    <li>
                        <span>6412</span>
                        <span>6</span>
                        <a href="javascript:;">盛世娇宠之名门闺香</a>
                    </li>
                    <li>
                        <span>5425</span>
                        <span>7</span>
                        <a href="javascript:;">神医娘亲之腹黑小萌宝</a>
                    </li>
                    <li>
                        <span>4865</span>
                        <span>8</span>
                        <a href="javascript:;">战神魔妃</a>
                    </li>
                    <li>
                        <span>4235</span>
                        <span>9</span>
                        <a href="javascript:;">爷是病娇得宠着</a>
                    </li>
                    <li>
                        <span>3514</span>
                        <span>10</span>
                        <a href="javascript:;">神殿倾天之妖妃好甜</a>
                    </li>
                    </ul>
                </div>
                <div class="bottom_content" :class="{bottActive:bott==1}">
                    <div class="i-3_content">
                        <div class="list-one">
                            <img src="image/index/bangdan2.jpg" alt="">
                        </div>
                        <div class="icon_header">
                            <span class="num">NO.1</span>
                            <p><a href="">名门暖婚之权爷追妻攻略</a></p>
                            <p>作者：<span>天下第一</span></p>
                            <p><span>分类：</span>&nbsp;|&nbsp;<span>玄幻</span></p>
                        </div>
                    </div>
                    <ul class="ul-list">
                        <li>
                            <span>11153</span>
                             <span>2</span>
                            <a href="javascript:;">夫人你马甲又掉了</a>
                        </li>
                        <li>
                            <span>9508</span>
                            <span>3</span>
                            <a href="javascript:;">名门暖婚之权爷追妻攻略</a>
                        </li>
                        <li>
                            <span>7001</span>
                            <span>4</span>
                            <a href="javascript:;">狂医废材妃</a>
                        </li>
                        <li>
                            <span>6678</span>
                            <span>5</span>
                            <a href="javascript:;">最美不过小时光</a>
                        </li>
                        <li>
                            <span>6412</span>
                            <span>6</span>
                            <a href="javascript:;">盛世娇宠之名门闺香</a>
                        </li>
                        <li>
                            <span>5425</span>
                            <span>7</span>
                            <a href="javascript:;">神医娘亲之腹黑小萌宝</a>
                        </li>
                        <li>
                            <span>4865</span>
                            <span>8</span>
                            <a href="javascript:;">战神魔妃</a>
                        </li>
                        <li>
                            <span>4235</span>
                            <span>9</span>
                            <a href="javascript:;">爷是病娇得宠着</a>
                        </li>
                        <li>
                            <span>3514</span>
                            <span>10</span>
                            <a href="javascript:;">神殿倾天之妖妃好甜</a>
                        </li>
                    </ul>
                </div> 
                <div class="bottom_content" :class="{bottActive:bott==2}">
                    <div class="i-3_content">
                        <div class="list-one">
                            <img src="image/index/bangdan2.jpg" alt="">
                        </div>
                        <div class="icon_header">
                            <span class="num">NO.1</span>
                            <p><a href="">名门暖婚之权爷追妻攻略</a></p>
                            <p>作者：<span>天下第一</span></p>
                            <p><span>分类：</span>&nbsp;|&nbsp;<span>玄幻</span></p>
                        </div>
                    </div>
                    <ul class="ul-list">
                        <li>
                            <span>11153</span>
                             <span>2</span>
                            <a href="javascript:;">夫人你马甲又掉了</a>
                        </li>
                        <li>
                            <span>9508</span>
                            <span>3</span>
                            <a href="javascript:;">名门暖婚之权爷追妻攻略</a>
                        </li>
                        <li>
                            <span>7001</span>
                            <span>4</span>
                            <a href="javascript:;">狂医废材妃</a>
                        </li>
                        <li>
                            <span>6678</span>
                            <span>5</span>
                            <a href="javascript:;">最美不过小时光</a>
                        </li>
                        <li>
                            <span>6412</span>
                            <span>6</span>
                            <a href="javascript:;">盛世娇宠之名门闺香</a>
                        </li>
                    </ul>
                </div> 
                <div class="bot-say">
                    <div class="say-nav">
                        <span>更多</span>
                        <h3>大神访谈</h3>
                    </div>
                    <div>
                        <img src="image/index/bot-say.jpg" alt="">
                    </div>
                    <p>心有繁花，笔尖下的大千世界——</p>
                </div>
                <div class="zhuan_bottom">
                    <div class="say-nav">
                        <span>更多</span>
                        <h3>作品专题</h3>
                    </div>
                    <div>
                        <img src="image/index/zhuanti.jpg" alt="">
                    </div>
                    <p>谈情说案 揭秘真相</p>
                    <p>你是步步沦陷，还是破除迷雾……</p>
                </div>
            </div>
            <div class="bot-4">
                <div class="bot4-content">
                    <div class="bot4-nav">
                        <span>>更多</span>
                        <h3>潜力新秀</h3>
                    </div>
                    <div class="bot4-list">
                        <div class="left_list">
                            <img src="image/index/bot4-list.jpg" alt="">
                            <p>夫人嚣张我惯的</p>
                            <p>一襟晚照 / 著</p>
                        </div>
                        <div class="right_list">
                            <ul>
                                <li><a href="javascript:;">言先生的竹马小迷糊</a></li>
                                <li><a href="javascript:;">穿越之医路芬芳</a></li>
                                <li><a href="javascript:;">田园之医妻有毒</a></li>
                                <li><a href="javascript:;">他许她错爱情深</a></li>
                                <li><a href="javascript:;">邪王宠妃之公主别想淘</a></li>
                                <li><a href="javascript:;">只许一人入君心</a></li>
                                <li><a href="javascript:;">神医魔女之攻略冷萌龙神</a></li>
                                <li><a href="javascript:;">重生之相门虎女</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bot4-nav mt">
                        <span>>更多</span>
                        <h3>最新上架</h3>
                    </div>
                    <div class="bot4-list">
                        <div class="left_list">
                            <img src="image/index/bot4-list2.jpg" alt="">
                            <p>夫人嚣张我惯的</p>
                            <p>一襟晚照 / 著</p>
                        </div>
                        <div class="right_list">
                            <ul>
                                <li><a href="javascript:;">言先生的竹马小迷糊</a></li>
                                <li><a href="javascript:;">穿越之医路芬芳</a></li>
                                <li><a href="javascript:;">田园之医妻有毒</a></li>
                                <li><a href="javascript:;">他许她错爱情深</a></li>
                                <li><a href="javascript:;">邪王宠妃之公主别想淘</a></li>
                                <li><a href="javascript:;">只许一人入君心</a></li>
                                <li><a href="javascript:;">神医魔女之攻略冷萌龙神</a></li>
                                <li><a href="javascript:;">重生之相门虎女</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bot4-nav mt">
                        <span>>更多</span>
                        <h3>精选V文</h3>
                    </div>
                    <div class="bot4-list">
                        <div class="left_list">
                            <img src="image/index/bot4-list3.jpg" alt="">
                            <p>夫人嚣张我惯的</p>
                            <p>一襟晚照 / 著</p>
                        </div>
                        <div class="right_list">
                            <ul>
                                <li><a href="javascript:;">言先生的竹马小迷糊</a></li>
                                <li><a href="javascript:;">穿越之医路芬芳</a></li>
                                <li><a href="javascript:;">田园之医妻有毒</a></li>
                                <li><a href="javascript:;">他许她错爱情深</a></li>
                                <li><a href="javascript:;">邪王宠妃之公主别想淘</a></li>
                                <li><a href="javascript:;">只许一人入君心</a></li>
                                <li><a href="javascript:;">神医魔女之攻略冷萌龙神</a></li>
                                <li><a href="javascript:;">重生之相门虎女</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bot-4">
                <div class="bot4-content">
                    <div class="bot4-nav">
                        <span>>更多</span>
                        <h3>免费新作</h3>
                    </div>
                    <div class="bot4-list">
                        <div class="left_list">
                            <img src="image/index/bot4-list4.jpg" alt="">
                            <p>夫人嚣张我惯的</p>
                            <p>一襟晚照 / 著</p>
                        </div>
                        <div class="right_list">
                            <ul>
                                <li><a href="javascript:;">言先生的竹马小迷糊</a></li>
                                <li><a href="javascript:;">穿越之医路芬芳</a></li>
                                <li><a href="javascript:;">田园之医妻有毒</a></li>
                                <li><a href="javascript:;">他许她错爱情深</a></li>
                                <li><a href="javascript:;">邪王宠妃之公主别想淘</a></li>
                                <li><a href="javascript:;">只许一人入君心</a></li>
                                <li><a href="javascript:;">神医魔女之攻略冷萌龙神</a></li>
                                <li><a href="javascript:;">重生之相门虎女</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bot4-nav mt">
                        <span>>更多</span>
                        <h3>高分完结</h3>
                    </div>
                    <div class="bot4-list">
                        <div class="left_list">
                            <img src="image/index/bot4-list5.jpg" alt="">
                            <p>夫人嚣张我惯的</p>
                            <p>一襟晚照 / 著</p>
                        </div>
                        <div class="right_list">
                            <ul>
                                <li><a href="javascript:;">言先生的竹马小迷糊</a></li>
                                <li><a href="javascript:;">穿越之医路芬芳</a></li>
                                <li><a href="javascript:;">田园之医妻有毒</a></li>
                                <li><a href="javascript:;">他许她错爱情深</a></li>
                                <li><a href="javascript:;">邪王宠妃之公主别想淘</a></li>
                                <li><a href="javascript:;">只许一人入君心</a></li>
                                <li><a href="javascript:;">神医魔女之攻略冷萌龙神</a></li>
                                <li><a href="javascript:;">重生之相门虎女</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bot4-nav mt">
                        <span>>更多</span>
                        <h3>完本力推</h3>
                    </div>
                    <div class="bot4-list">
                        <div class="left_list">
                            <img src="image/index/bot4-list6.jpg" alt="">
                            <p>夫人嚣张我惯的</p>
                            <p>一襟晚照 / 著</p>
                        </div>
                        <div class="right_list">
                            <ul>
                                <li><a href="javascript:;">言先生的竹马小迷糊</a></li>
                                <li><a href="javascript:;">穿越之医路芬芳</a></li>
                                <li><a href="javascript:;">田园之医妻有毒</a></li>
                                <li><a href="javascript:;">他许她错爱情深</a></li>
                                <li><a href="javascript:;">邪王宠妃之公主别想淘</a></li>
                                <li><a href="javascript:;">只许一人入君心</a></li>
                                <li><a href="javascript:;">神医魔女之攻略冷萌龙神</a></li>
                                <li><a href="javascript:;">重生之相门虎女</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt">
            <img src="image/index/bottom_img.jpg" alt="">
        </div>
    </div>
    <my-footer></my-footer>
    <login :spanHid="spanHid" :log="log" :imgUrl="imgUrl" :changeImg="changeImg" :toLogin="toLogin" v-on:sendValue="(val)=>this.authCode=val"></login>   <!--父组件接收子组件传递的值-->
    </div>
</template>
<script>
import { setInterval, clearInterval } from 'timers';
export default {
    data(){
        return {
            idx:0,       //定义变量保存元素初始样式
            dh:0,        //定义变量保存元素初始样式
            bott:0,      //定义变量保存元素初始样式
            marleft:0,   //定义变量保存元素的marginLeft值
            timer:"",    //保存定时器函数，用于释放
            log:null,    //登录框隐藏切换
            // uname:"",    //双向绑定姓名框的值
            // upwd:"",     //双向绑定密码框的值
            authCode:"", //双向绑定验证框的值
            arr:[1,18,11,33,34,1],    //验证码的答案
            imgUrl:1,       //记录验证码图片切换的张数
        }
    },
    created(){
        this.timer=setInterval(()=>{   //页面加载完成时启用定时器，调用函数，改变元素的marginLeft
            this.marginLeft();
        },15);
    },
    methods:{
        toLogin(){          //验证验证码是否输入正确
            if(this.authCode==this.arr[this.imgUrl-1]){
                console.log("验证成功");
            }else{
                console.log("验证失败");
            };
        },
        changeImg(){        //变换验证码图片
            this.imgUrl++;
            if(this.imgUrl==7){
                this.imgUrl=1; 
            };
        },
        login(){            //点击按钮显示登录框
            this.log=1;     
        },
        spanHid(){          //点击按钮隐藏登录框
            this.log=null;   
        },
        timeMove(){         //绑定鼠标事件，进入停止定时器，离开启动定时器
            clearInterval(this.timer);
        },
        timeLea(){
            this.timer=setInterval(()=>{
                this.marginLeft();
            },15);  
        },
        marginLeft(){       //改变元素的marginLeft值
            this.marleft++;
            if(this.marleft==1687){
                this.marleft=241;
            };
        },
        ulMouse(e){         //定义函数改变元素隐藏样式
            if(e.target.nodeName=="LI"){
                this.idx=e.target.dataset.idx;
            };
        },
        divMouse(e){        //定义函数改变元素隐藏样式
            if(e.target.nodeName=="H3"){
                this.dh=e.target.dataset.dh;
            }
        },
        mouseDiv(e){        //定义函数改变元素隐藏样式
            if(e.target.nodeName=="H3"){
                this.bott=e.target.dataset.bott;
            }
        },
    },
    components:{}
}
</script>
<style>
    @import url("../assets/css/index.css");
</style>
