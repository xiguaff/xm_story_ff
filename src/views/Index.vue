<template>
    <div>
    <my-nav :login="login" :outLogin="outLogin"></my-nav>
    <div class="header">
        <div class="container">
            <div class="header-top">
                <img src="image/index/logo.png" alt="">
                <div>
                    <input type="text" v-model="search" @keyup.13="searchBook"><span @click="searchBook"><i></i><i></i></span>
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
                        <li v-for="(p,i) of topleft" :key="i"><span>[{{p.fname}}]</span>
                            <router-link :to="`detail/${p.sid}`" v-text="p.bname"></router-link>
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
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item>
                    <img src="image/index/bot4-list.jpg" alt="" class="image">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="image/index/bot4-list2.jpg" alt="" class="image">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="image/index/bot4-list3.jpg" alt="" class="image">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="image/index/bot4-list4.jpg" alt="" class="image">
                </el-carousel-item>
            </el-carousel>
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
            <div class="hot_content_1" @mouseover="timeMove" @mouseleave="timeLea">
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
                        <img :src="`http://127.0.0.1:1994/${middleOne[0].imgUrl}`" alt="">
                    </div>
                    <div class="icon_header">
                        <span class="num">NO.1</span>
                        <p><router-link :to="`/detail/${middleOne[0].sid}`" v-text="middleOne[0].bname"></router-link></p>
                        <p><span>11841</span>月票</p>
                        <p><span>{{middleOne[0].fname}}</span>&nbsp;|&nbsp;<span v-text="middleOne[0].author"></span></p>
                    </div>
                </div>
                <ul class="ul-list">
                    <li v-for="(p,i) of middleOne" :key="i" v-show="i!==0">
                        <span v-text="p.author"></span>
                        <span>{{i+1}}</span>
                        <router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link>
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
                            <img :src="`http://127.0.0.1:1994/${middleTwo[0].imgUrl}`" alt="">
                        </div>
                        <div class="icon_header">
                            <span class="num">NO.1</span>
                            <p><router-link :to="`/detail/${middleTwo[0].sid}`" v-text="middleTwo[0].bname"></router-link></p>
                            <p>作者：<span v-text="middleTwo[0].author"></span></p>
                            <p><span>分类：</span>&nbsp;|&nbsp;<span v-text="middleTwo[0].fname"></span></p>
                        </div>
                    </div>
                    <ul class="ul-list">
                        <li v-for="(p,i) of middleTwo" :key="i" v-show="i!==0">
                            <span v-text="p.author"></span>
                            <span>{{i+1}}</span>
                            <router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link>
                        </li>
                    </ul>
                </div>
                <div class="nav_content" :class="{navActive:dh==1}">
                    <div class="i-3_content">
                        <div class="list-one">
                            <img :src="`http://127.0.0.1:1994/${middleThree[0].imgUrl}`" alt="">
                        </div>
                        <div class="icon_header">
                            <span class="num">NO.1</span>
                            <p><router-link :to="`/detail/${middleThree[0].sid}`" v-text="middleThree[0].bname"></router-link></p>
                            <p>作者：<span v-text="middleThree[0].author"></span></p>
                            <p><span>分类：</span>&nbsp;|&nbsp;<span v-text="middleThree[0].fname"></span></p>
                        </div>
                    </div>
                    <ul class="ul-list">
                        <li v-for="(p,i) of middleThree" :key="i" v-show="i!==0">
                            <span v-text="p.author"></span>
                             <span>{{i+1}}</span>
                            <router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link>
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
                        <img :src="`http://127.0.0.1:1994/${middleFour[0].imgUrl}`" alt="">
                    </div>
                    <div class="icon_header">
                        <span class="num">NO.1</span>
                        <p><router-link :to="`/detail/${middleFour[0].sid}`" v-text="middleFour[0].bname"></router-link></p>
                        <p>作者：<span v-text="middleFour[0].author"></span></p>
                        <p><span>分类：</span>&nbsp;|&nbsp;<span>{{middleFour[0].fname}}</span></p>
                    </div>
                </div>
                <ul class="ul-list">
                    <li v-for="(p,i) of middleThree" :key="i" v-show="i!==0">
                        <span v-text="p.author"></span>
                        <span>{{i+1}}</span>
                        <router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link>
                    </li>
                </ul>
            </div>
            <div class="i-3">
                <div class="col-header">
                    <h3>更新榜</h3>
                </div>
                <div class="i-3_content">
                    <div class="list-one">
                        <img :src="`http://127.0.0.1:1994/${middleFive[0].imgUrl}`" alt="">
                    </div>
                    <div class="icon_header">
                        <span class="num">NO.1</span>
                        <p><router-link :to="`/detail/${middleFive[0].sid}`" v-text="middleFive[0].bname"></router-link></p>
                        <p>作者：<span v-text="middleFive[0].author"></span></p>
                        <p><span>分类：</span>&nbsp;|&nbsp;<span>{{middleFive[0].fname}}</span></p>
                    </div>
                </div>
                <ul class="ul-list">
                    <li v-for="(p,i) of middleFive" :key="i" v-show="i!==0">
                        <span v-text="p.author"></span>
                        <span>{{i+1}}</span>
                        <router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link>
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
                            <img :src="`http://127.0.0.1:1994/${middleSix[0].imgUrl}`" alt="">
                        </div>
                        <div class="icon_header">
                            <span class="num">NO.1</span>
                            <p><router-link :to="`/detail/${middleSix[0].sid}`" v-text="middleSix[0].bname"></router-link></p>
                            <p>作者：<span v-text="middleSix[0].author"></span></p>
                            <p><span>分类：</span>&nbsp;|&nbsp;<span>{{middleSix[0].fname}}</span></p>
                        </div>
                    </div>
                    <ul class="ul-list">
                        <li v-for="(p,i) of middleSix" :key="i" v-show="i!==0">
                            <span v-text="p.author"></span>
                            <span>{{i+1}}</span>
                            <router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link>
                        </li>
                    </ul>
                </div>
                <div class="bottom_content" :class="{bottActive:bott==1}">
                    <div class="i-3_content">
                        <div class="list-one">
                            <img :src="`http://127.0.0.1:1994/${middleSeven[0].imgUrl}`" alt="">
                        </div>
                        <div class="icon_header">
                            <span class="num">NO.1</span>
                            <p><router-link :to="`/detail/${middleSeven[0].sid}`" v-text="middleSeven[0].bname"></router-link></p>
                            <p>作者：<span v-text="middleSeven[0].author"></span></p>
                            <p><span>分类：</span>&nbsp;|&nbsp;<span>{{middleSeven[0].fname}}</span></p>
                        </div>
                    </div>
                    <ul class="ul-list">
                        <li v-for="(p,i) of middleSeven" :key="i" v-show="i!==0">
                            <span v-text="p.author"></span>
                            <span>{{i+1}}</span>
                            <router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link>
                        </li>
                    </ul>
                </div> 
                <div class="bottom_content" :class="{bottActive:bott==2}">
                    <div class="i-3_content">
                        <div class="list-one">
                            <img :src="`http://127.0.0.1:1994/${middleEight[0].imgUrl}`" alt="">
                        </div>
                        <div class="icon_header">
                            <span class="num">NO.1</span>
                            <p><router-link :to="`/detail/${middleEight[0].sid}`" v-text="middleEight[0].bname"></router-link></p>
                            <p>作者：<span v-text="middleEight[0].author"></span></p>
                            <p><span>分类：</span>&nbsp;|&nbsp;<span>{{middleEight[0].fname}}</span></p>
                        </div>
                    </div>
                    <ul class="ul-list">
                        <li v-for="(p,i) of middleEight" :key="i" v-show="i!==0">
                            <span v-text="p.author"></span>
                            <span>{{i+1}}</span>
                            <router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link>
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
                            <img :src="`http://127.0.0.1:1994/${bottomOne[0].imgUrl}`" alt="">
                            <p><router-link :to="`/detail/${bottomOne[0].sid}`" v-text="bottomOne[0].bname"></router-link></p>
                            <p>{{bottomOne[0].author}} / 著</p>
                        </div>
                        <div class="right_list">
                            <ul>
                                <li v-for="(p,i) of bottomOne" :key="i" v-show="i!==0"><router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bot4-nav mt">
                        <span>>更多</span>
                        <h3>最新上架</h3>
                    </div>
                    <div class="bot4-list">
                        <div class="left_list">
                            <img :src="`http://127.0.0.1:1994/${bottomTwo[0].imgUrl}`" alt="">
                            <p><router-link :to="`/detail/${bottomTwo[0].sid}`" v-text="bottomOne[0].bname"></router-link></p>
                            <p>{{bottomTwo[0].author}} / 著</p>
                        </div>
                        <div class="right_list">
                            <ul>
                                <li v-for="(p,i) of bottomTwo" :key="i" v-show="i!==0"><router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bot4-nav mt">
                        <span>>更多</span>
                        <h3>精选V文</h3>
                    </div>
                    <div class="bot4-list">
                        <div class="left_list">
                            <img :src="`http://127.0.0.1:1994/${bottomThree[0].imgUrl}`" alt="">
                            <p><router-link :to="`/detail/${bottomThree[0].sid}`" v-text="bottomThree[0].bname"></router-link></p>
                            <p>{{bottomThree[0].author}} / 著</p>
                        </div>
                        <div class="right_list">
                            <ul>
                                <li v-for="(p,i) of bottomThree" :key="i" v-show="i!==0"><router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link></li>
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
                            <img :src="`http://127.0.0.1:1994/${bottomFour[0].imgUrl}`" alt="">
                            <p><router-link :to="`/detail/${bottomFour[0].sid}`" v-text="bottomFour[0].bname"></router-link></p>
                            <p>{{bottomFour[0].author}} / 著</p>
                        </div>
                        <div class="right_list">
                            <ul>
                                <li v-for="(p,i) of bottomFour" :key="i" v-show="i!==0"><router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bot4-nav mt">
                        <span>>更多</span>
                        <h3>高分完结</h3>
                    </div>
                    <div class="bot4-list">
                        <div class="left_list">
                            <img :src="`http://127.0.0.1:1994/${bottomFive[0].imgUrl}`" alt="">
                            <p><router-link :to="`/detail/${bottomFive[0].sid}`" v-text="bottomFive[0].bname"></router-link></p>
                            <p>{{bottomFive[0].author}} / 著</p>
                        </div>
                        <div class="right_list">
                            <ul>
                                <li v-for="(p,i) of bottomFive" :key="i" v-show="i!==0"><router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bot4-nav mt">
                        <span>>更多</span>
                        <h3>完本力推</h3>
                    </div>
                    <div class="bot4-list">
                        <div class="left_list">
                            <img :src="`http://127.0.0.1:1994/${bottomSix[0].imgUrl}`" alt="">
                            <p><router-link :to="`/detail/${bottomSix[0].sid}`" v-text="bottomSix[0].bname"></router-link></p>
                            <p>{{bottomSix[0].author}} / 著</p>
                        </div>
                        <div class="right_list">
                            <ul>
                                <li v-for="(p,i) of bottomSix" :key="i" v-show="i!==0"><router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link></li>
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
    <login :spanHid="spanHid" :loginMsg="loginMsg" :log="log" :imgUrl="imgUrl" :changeImg="changeImg" :toLogin="toLogin" v-on:sendValue="(val)=>this.authCode=val" @sendName="(val)=>this.uname=val" @sendPwd="(val)=>this.upwd=val"></login>   <!--父组件接收子组件传递的值-->
    </div>
</template>
<script>
import { setInterval, clearInterval, setTimeout } from 'timers';
import Event from '../Even.js';
import login from '@/assets/js/login.js'
export default {
    data(){
        return {
            idx:0,       //定义变量保存元素初始样式
            dh:0,        //定义变量保存元素初始样式
            bott:0,      //定义变量保存元素初始样式
            marleft:0,   //定义变量保存元素的marginLeft值
            timer:"",    //保存定时器函数，用于释放
            log:this.$store.state.log,    //登录框隐藏切换
            uname:"",    //双向绑定姓名框的值
            upwd:"",     //双向绑定密码框的值
            authCode:"", //双向绑定验证框的值
            arr:this.$store.state.arr,    //验证码的答案
            imgUrl:Math.ceil(Math.random()*6),       //记录验证码图片切换的张数
            authTrue:false,     //保存验证码输入框的状态
            loginMsg:"",
            search:"",
            indexList:[],
            fname:[],
            topleft:[],
            middleOne:[{}],
            middleTwo:[{imgUrl:""}],
            middleThree:[{imgUrl:""}],
            middleFour:[{imgUrl:""}],
            middleFive:[{imgUrl:""}],
            middleSix:[{imgUrl:""}],
            middleSeven:[{imgUrl:""}],
            middleEight:[{imgUrl:""}],
            bottomOne:[{imgUrl:""}],
            bottomTwo:[{imgUrl:""}],
            bottomThree:[{imgUrl:""}],
            bottomFour:[{imgUrl:""}],
            bottomFive:[{imgUrl:""}],
            bottomSix:[{imgUrl:""}],
        }
    },
    watch:{
        authCode(){
            // if(this.arr[this.imgUrl-1]==this.authCode){
            //     this.authTrue=true;
            // }else{
            //     this.authTrue=false;
            // }
            this.code();
        },
    },
    created(){
        this.getIndex();
        this.timer=setInterval(()=>{   //页面加载完成时启用定时器，调用函数，改变元素的marginLeft
            this.marginLeft();
        },15);
        window.onload=function(){
            window.scrollTo(0,0)
        }

        // this.getName();
    },
    methods:{
        getIndex(){
            this.axios.get("/getIndex").then(res=>{
                this.indexList=res.data.data[0];
                this.fname=res.data.data[1];
                for(var i=0;i<this.indexList.length;i++){
                    this.indexList[i].fname=this.fname[this.indexList[i].family_id-1].fname;
                }
                this.topleft=this.indexList.splice(0,15);
                this.middleOne=this.indexList.slice(0,10);
                this.middleTwo=this.indexList.slice(10,20);
                this.middleThree=this.indexList.slice(20,30);
                this.middleFour= this.indexList.slice(30,40);
                this.middleFive=this.indexList.slice(40,50);
                this.middleSix=this.indexList.slice(50,60);
                this.middleSeven=this.indexList.slice(60,70);
                this.middleEight=this.indexList.slice(70,80);
                this.bottomOne=this.indexList.slice(80,89);
                this.bottomTwo=this.indexList.slice(90,99);
                this.bottomThree=this.indexList.slice(100,109);
                this.bottomFour=this.indexList.slice(110,119);
                this.bottomFive=this.indexList.slice(116,129);
                this.bottomSix=this.indexList.slice(85,94);
                console.log(this.bottomOne)
            }).catch(err=>{
                console.log(err);
            })
        },
        searchBook(){
            // Event.$emit("send",this.search);
            this.$store.state.search=this.search;
            this.$router.push("/allbook");
        },
        outLogin(){
            this.common.out.call(this)
        },
        // getName(){          //页面刷新获取用户名，如果已登录则显示在导航栏
        //     this.axios.get("getname").then(result=>{
        //         if(result.data.code==1){
        //             this.loginName=result.data.data;
        //         }else{
        //             this.loginName="";
        //         }
        //     })
        // },
        toLogin(){          //用户登录
            this.common.userLogin.call(this);
        },
        changeImg(){        //变换验证码图片
            this.imgUrl++;
            if(this.imgUrl==7){
                this.imgUrl=1; 
            };
        },
        login(){            //点击按钮显示登录框
            this.logl();
            // this.$store.commit("setLog")
            // console.log(this.log)
        },
        spanHid(){          //点击按钮隐藏登录框
            // window.addEventListener("click",this.spanHid)
            this.spanHidden(); 
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
    mounted(){
        // var span=document.getElementById("span");
        // console.log(span)
        // window.onclick=(e)=>{
        //     if(e.target!=span){     //判断点击不是取消按钮，才可以使log=1
        //     this.log=1;
        //     }
        // };
        var i = 0;      //记录图片的张数
        var len = 740;  //每次移动的距离
        function moveTo(){      //调用全局函数
            i++;
            move();
        }
        var timer = setInterval(moveTo,3000);
        var $imgs=$("#imgs");
        var $idns=$("#idns li");
        function move(){
            $imgs.css("margin-left",-i*len+"px").addClass("trans");
            if(i==4){
                i=0;
                setTimeout(function(){
                    $imgs.css("margin-left",0).removeClass("trans");
                },500)
            };
            if(i<0){
                i=3;
                $imgs.css("margin-left",-4*len+"px").removeClass("trans");
                setTimeout(function(){
                    $imgs.css("margin-left",-i*len+"px").addClass("trans");
                },100)
            }
            $idns.eq(i).addClass("active").siblings("li").removeClass("active")
        }
        var canClick=true;
        $idns.click(function(){
            if(canClick){
                i=$(this).index();
                move();
                canClick=false;
                setTimeout(function(){
                    canClick=true;
                },600)
            }
        });
        var $banner=$("#banner");
        $banner.mouseenter(function(){
            clearInterval(timer);
        })
        $banner.mouseleave(function(){
            timer = setInterval(moveTo,3000);
        });
        var $btnRight=$("#btn-right");
        var $btnLeft=$("#btn-left");
        var canClick=true;
        $btnRight.click(function(){
            if(canClick){
                i++;
                move();
                canClick=false;
                setTimeout(function(){
                    canClick=true;
                },600);
            }
        });
        $btnLeft.click(function(){
            if(canClick){
                i--;
                move();
                canClick=false;
                setTimeout(function(){
                    canClick=true;
                },600);
            }
        });
    },
    components:{}
}
</script>
<style>
    @import url("../assets/css/index.css");
</style>
