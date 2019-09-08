<template>
    <div>
    <my-nav :login="login" :outLogin="outLogin"></my-nav>
    <div class="container">
        <div class="view-top">
            <div>
                <img src="image/index/logo.png" alt="">
            </div>
            <div class="intStyle">
                <input type="text"><span><i></i><i></i></span>
            </div>
            <div class="imgStyle">
                <a href=""><img src="image/index/header_author.jpg" alt="">我要当作家</a>
                <a href=""><img src="image/index/header_liwu.jpeg" alt="">作家福利</a>
            </div>
        </div>
        <div class="view-nav">
            <span>当前位置：</span><span><router-link to="/">潇湘首页</router-link>></span>
            <span><router-link :to="`/list/${num}`" v-text="fname.fname"></router-link>></span><span v-text="arr.bname"></span>
        </div>
        <div class="detalis-top">
            <div @mouseover="fdjDiv" @mouseout="fdjDiv" @mousemove="fdjMove" class="divStyle" ref="divOne">
                <img :src="`http://127.0.0.1:1994/${arr.imgUrl}`" alt="">
            </div>
            <div class="fdj-sp" :class="{fdjStyle:isNone}" :style="spanStyle" ref="divTwo"></div>
            <div class="fdj-top" :class="{fdjStyle:isNone}">
                <img :src="`http://127.0.0.1:1994/${arr.imgUrl}`" alt="" :style="imgStyle">
            </div>
            <div class="right-detail">
                <div class="title">
                    <h1>{{arr.bname}}<span>文 / {{arr.author}}</span></h1>
                </div>
                <p>
                    <span>会员作品</span>
                    <span>已完成</span>
                    <span>类别：{{fname.fname}}</span>
                    <span>发布：<span v-text="arr.pubtime"></span></span>
                    <span>本书评价（已有1755人评价）</span>
                </p>
                <div>
                    <p>
                        <span><b>{{arr.numWords}}万</b>字</span>
                        <span><b>{{arr.redWords}}万</b>阅读</span>
                        <span><b>{{arr.collect}}万</b>收藏</span>
                    </p>
                    <p>
                        <span v-for="n in arr.review"  :key="n"><img src="image/details/star-mini.png" alt=""></span>
                        <span v-show="arr.review==4||arr.review==3||arr.review==2"><img src="image/details/mini.png" alt=""></span>
                        <span v-show="arr.review==3||arr.review==2"><img src="image/details/mini.png" alt=""></span>
                        <span v-show="arr.review==2||arr.review==1"><img src="image/details/mini.png" alt=""></span>
                        <span v-show="arr.review==1"><img src="image/details/mini.png" alt=""></span>
                    </p>
                </div>
                <p>最新公共章节：<span v-text="arr.newchapter"></span>2018-12-24 14:36:32</p>
                <p></p>
                <div>
                    <a href="javascript:;">开始阅读</a>
                    <a href="javascript:;" @click="insertBook" :style="disable">{{InsertBook}}</a>
                    <a href="javascript:;">投票互动</a>
                    <a href="javascript:;">打赏支持</a>
                </div>
            </div>
        </div>
        <div class="detail-content-nav">
            <h3 class="active">作品介绍</h3>
            <h3>作品目录</h3>
            <h3>作品讨论区</h3>
        </div>
        <div class="detail-list">
            <div class="detail-list-title">
                <h3>优秀作品</h3>
            </div>
            <ul class="detail-ul">
                <li v-for="(item,i) of recomListOne" :key="i"><span>[{{item.story_family}}]</span><span style="color:#333;cursor:pointer" @click="toDetail(item.sid)">{{item.bname}}</span><span v-text="item.author"></span></li>
            </ul>
            <div class="detail-list-title">
                <h3>完结作品</h3>
            </div>
            <ul class="detail-ul">
                <li v-for="(p,i) of recomListTwo" :key="i"><span>[{{p.story_family}}]</span><span style="color:#333;cursor:pointer" @click="toDetail(p.sid)">{{p.bname}}</span><span v-text="p.author"></span></li>
            </ul>
            <div class="detail-list-title">
                <h3>编辑组推荐</h3>
            </div>
            <ul class="detail-ul">
                <li v-for="(p,i) of recomListThree" :key="i"><span>[{{p.story_family}}]</span><span style="color:#333;cursor:pointer" @click="toDetail(p.sid)">{{p.bname}}</span><span v-text="p.author"></span></li>
            </ul>
        </div>
        <div class="detail-middle">
            <div class="detail-intr">
                            <p ref="pHeight" :style="pStyle">帝京豪门圈有个心照不宣的秘密，霍家二少是个精神病患。
                            矜贵而冷漠，雅致而深沉，狷狂而偏执。但在郁知意的心里，霍纪寒却像一只粘人的巨型犬。
                             嗯，又粘人又霸道又忠诚，天天呢喃着，只爱她一个人。一开始，霍二少小心翼翼。“知知，你只喜欢我一个人好不好？” 
                             后来，面对和郁知意搭戏的某年轻帅气的影帝，霍二少霸气把未婚妻圈在怀里。“知知看我，不许看那个又老又臭的丑男人！” 
                             再后来，霍纪寒的眼里杀戾并生，语气却温柔如水。 “知知不要怕，谁也不能伤害你。”别人说，宁可老虎头上拔毛，
                             不能霍纪寒跟前犯事。 别人还说，嫁给霍纪寒的女人，可能倒了八辈子的霉。可别人都不知道，霍纪寒爱郁知意，
                             从懵懂年少到青年岁月。十六年，相思成疾，偏爱成瘾，恨不得把心把命都交到郁知意的手里。小剧场【霍二少和狗争宠的日常】
                              “知知，我和爱斯基谁更重要？”平日高贵冷漠的霍二少修长的手指指着躺在郁知意沙发上的狗，语气委屈。郁知意有点为难，
                              问，“两个都很重要不可以么？”“不行，必须选一个！”霍纪寒语气固执。 郁知意抱了抱霍纪寒，“可是爱斯基晚上要给我看家。
                              ”霍纪寒黏上去，“我比爱斯基更听话，不挑食，更爱你……”郁知意心软得不行，“你比较重要。”第二天，郁知意被狗叫声吵醒，
                              就看到霍纪寒一边愉快地给爱斯基剪毛一边说，“以后知知有我，你不用长毛了。”总有一天，跨过山河原野，走过草木葳蕤，
                              越过茫茫人海，你会知道，有个人，他在时光深深里，伴你始终。有一种爱情，叫做，为了你，一念成魔，一念成佛。
                        </p>
                        <button @click="orderTo">{{btnContent}}<img :src="`image/${clickBtn}.png`" alt=""></button>
                    
            </div>
            <div class="detail-middle-title">
                <h3>粉丝互动</h3>
            </div>
            <div class="detail-middle-content">
                <div class="detail-middle-left">
                    <ul>
                        <li>本书粉丝榜<span>更多></span></li>
                        <li><span>1</span>olivia朵朵酱<span>23423432</span></li>
                        <li><span>2</span>尉泱泱<span>12354323</span></li>
                        <li><span>3</span>alleyliu<span>8424344</span></li>
                        <li><span>4</span>月洌s<span>7456834</span></li>
                        <li><span>5</span>钟欣云<span>6434523</span></li>
                        <li><span>6</span>XIAO浣熊<span>6123412</span></li>
                        <li><span>7</span>QQ28d9b046eac<span>5975245</span></li>
                        <li><span>8</span>薇薇鱼w<span>5432233</span></li>
                        <li><span>9</span>秋意瑟瑟<span>4553433</span></li>
                        <li><span>10</span>静jing等ing<span>3423453</span></li>
                    </ul>
                </div>
                <div class="detail-middle-center">
                    <div>
                        <div>
                            <span>月票</span><span>评价票</span>
                        </div>
                        <p>当前票数</p>
                        <p>2821</p>
                        <a href="javascript:;">立即投票</a>
                    </div>
                    <div>
                        <p>打赏</p>
                        <p>粉丝总数</p>
                        <p>17027</p>
                        <a href="javascript:;">打赏作者</a>
                    </div>
                </div>
                <div class="detail-middle-right">
                    <p>本书粉丝动态</p>
                    <p>缘來是你送了<span>1张月票</span></p>
                    <p>卢春霞送了<span>3张月票</span></p>
                    <p>szhappytime送了<span>1朵鲜花</span></p>
                    <p>cuihonghua1送了<span>2张月票</span></p>
                    <p>糖糖宝宝321送了<span>5张月票</span></p>
                    <p>szhappytime送了<span>1朵鲜花</span></p>
                    <p>limin197903<span>送了1张月票</span></p>
                    <p>安安大坏蛋<span>送了3张月票</span></p>
                    <p>卢春霞<span>送了1张月票</span></p>
                    <p>月儿1314<span>送了4张月票</span></p>
                </div>
            </div>
            <div class="detail-bottom">喜欢这作品的人还喜欢</div>
            <div class="detail-bottom-content">
                <div class="bottom-content" v-for="(p,i) of recomListFour" :key="i">
                    <div @click="toDetail(p.sid)">
                        <img :src="`http://127.0.0.1:1994/${p.imgUrl}`" alt="">
                    </div>
                    <div>
                        <p v-text="p.bname" @click="toDetail(p.sid)" style="cursor:pointer"></p>
                        <p>{{p.author}} / 著</p>
                        <p>帝京豪门圈有个心照不宣的秘密，霍家二少是个精神病患。
                            矜贵而冷漠，雅致而深沉，狷狂而偏执。但在郁知意的心里，霍纪寒却像一只粘人的巨型犬。
                             嗯，又粘人又霸道又忠诚，天天呢喃着，只爱她一个人。一开始，霍二少小心翼翼。“知知，你只喜欢我一个人好不好？” 
                             后来，面对和郁知意搭戏的某年轻帅气的影帝，霍二少霸气把未婚妻圈在怀里。“知知看我，不许看那个又老又臭的丑男人！” 
                             再后来，霍纪寒的眼里杀戾并生，语气却温柔如水。 “知知不要怕，谁也不能伤害你。”别人说，宁可老虎头上拔毛，
                             不能霍纪寒跟前犯事。 别人还说，嫁给霍纪寒的女人，可能倒了八辈子的霉。可别人都不知道，霍纪寒爱郁知意，
                             从懵懂年少到青年岁月。十六年，相思成疾，偏爱成瘾，恨不得把心把命都交到郁知意的手里。小剧场【霍二少和狗争宠的日常】
                              “知知，我和爱斯基谁更重要？”平日高贵冷漠的霍二少修长的手指指着躺在郁知意沙发上的狗，语气委屈。郁知意有点为难，
                              问，“两个都很重要不可以么？”“不行，必须选一个！”霍纪寒语气固执。 郁知意抱了抱霍纪寒，“可是爱斯基晚上要给我看家。
                              ”霍纪寒黏上去，“我比爱斯基更听话，不挑食，更爱你……”郁知意心软得不行，“你比较重要。”第二天，郁知意被狗叫声吵醒，
                              就看到霍纪寒一边愉快地给爱斯基剪毛一边说，“以后知知有我，你不用长毛了。”总有一天，跨过山河原野，走过草木葳蕤，
                              越过茫茫人海，你会知道，有个人，他在时光深深里，伴你始终。有一种爱情，叫做，为了你，一念成魔，一念成佛。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <my-footer style="margin-top:150px;"></my-footer>
    <login :spanHid="spanHid" :loginMsg="loginMsg" :log="log" :imgUrl="imgUrl" :changeImg="changeImg" :toLogin="toLogin" v-on:sendValue="(val)=>this.authCode=val" @sendName="(val)=>this.uname=val" @sendPwd="(val)=>this.upwd=val"></login>   <!--父组件接收子组件传递的值-->
    </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            authCode:"", //双向绑定验证框的值
            arr1:this.$store.state.arr,    //验证码的答案
            imgUrl:1,       //记录验证码图片切换的张数
            log:this.$store.state.log,    //登录框隐藏切换
            // fdjStyle:{
            //     display:"none",
            // },
            spanStyle:{
                top:0,
                left:0,
            },
            imgStyle:{
                top:0,
                left:0,
            },
            isNone:false,
            widthOne:0,     //保存触发鼠标移动事件元素的宽高
            heightOne:0,
            divWidth:0,     //保存小滑块元素的宽高
            divHeight:0,
            arr:{imgUrl:"gy/dnyf.jpg"},
            fname:{},
            loginMsg:"",
            authTrue:false,     //保存验证码输入框的状态
            uname:"",
            upwd:"",
            InsertBook:"加入书架",
            bookShelfTrue:false,
            disable:{},
            recomList:[],
            recomFamily:[],
            recomListOne:[],
            recomListTwo:[],
            recomListThree:[],
            recomListFour:[],
            num:0,
            clickBtn:"toBottom",
            can:null,
            btnContent:"展开",
            Pheight:0,
            pStyle:{},
        }
    },
    watch:{
        authCode(){
            if(this.arr1[this.imgUrl-1]==this.authCode){
                this.authTrue=true;
            }else{
                this.authTrue=false;
            };
        },
    },
    created(){
        this.getDetali();
        this.getBookShelf();
        this.getrecomlist();
    },
    methods:{ 
        orderTo(){
            if(this.can==true){
                this.btnContent="收起";
                this.clickBtn="toTop";
                this.pStyle={
                    height:"auto",
                }
                this.can=false;
            }else if(this.can==false){
                this.btnContent="展开";
                this.clickBtn="toBottom";
                this.pStyle={
                    height:"300px",
                    overflow:"hidden",
                }
                this.can=true;
            }
        },
        pHet(){
            if(this.Pheight>300){
                this.pStyle={
                    height:"300px",
                    overflow:"hidden",
                }
                this.can=true;
            }
        },
        toDetail(i){
            this.$router.push(`/detail/${i}`)
            location.reload();
        },
        getrecomlist(){
            this.axios.get("recomlist").then(res=>{
                this.recomList=res.data.data[0];
                this.recomFamily=res.data.data[1];          //将每本书的类型添加到对应的对象中
                for(var i=0;i<this.recomList.length;i++){
                    //给对象强行赋值一个属性story_famile 等于  图书对象中对应着图书详情中的family_id值，因为数组下标1开始，所以减1
                    this.recomList[i].story_family=this.recomFamily[this.recomList[i].family_id-1].fname;
                }
                this.recomListOne=this.recomList.splice(0,10);
                this.recomListTwo=this.recomList.splice(0,10);
                this.recomListThree=this.recomList.splice(0,10);
                this.recomListFour=this.recomList.splice(0);
            })
        },
        getBookShelf(){
            this.axios.get("getBookShelf",{
                params:{sid:this.sid}
            }).then(res=>{
                if(res.data.code==1){
                    this.InsertBook="已在书架";
                    this.bookShelfTrue=true;
                    this.disable={
                        background:"#ffffff",
                        color:"#a6a6a6",
                        "border-color":"#a6a6a6",
                    }
                }else{
                    this.InsertBook="加入书架";
                    this.bookShelfTrue=false;
                }
            })
        },
        insertBook(){
            var sid = this.arr.sid;
            var bname = this.arr.bname;
            var story_family = this.fname.fname;
            var newchapter = this.arr.newchapter;
            var author = this.arr.author;
            var joinTime = new Date().toLocaleDateString();
            var obj = this.qs.stringify({
                sid,
                bname,
                story_family,
                newchapter,
                author,
                joinTime,
            })
            if(this.bookShelfTrue){
                return;
            }else{
                this.axios.post("/userBook",obj).then(res=>{
                    if(res.data.code==-1){
                        this.$message.error("请先登录");
                        setTimeout(()=>{
                            this.log=1;
                        },1000)
                    }else{
                        this.$alert("加入成功","提示").then(act=>{
                            // location.reload();
                            this.getBookShelf();
                        }).catch(err=>{
                            this.getBookShelf();
                            // location.reload();
                        });
                    }
                });
            }
        },
        getDetali(){
            this.axios.get("detail",{
                params:{
                    sid:this.sid
                }
            }).then(res=>{
                this.arr=res.data.data[0][0];
                this.fname=res.data.data[1][0]
                this.num=this.fname.fname=="玄幻"?1:this.fname.fname=="现言"?2:this.fname.fname=="悬疑"?3:this.fname.fname=="古言"?4:5
            })
        },
        fdjMove(e){
            var top=e.offsetY-71;
            var left=e.offsetX-52;
            if(top<0){
                top=0;
            }else if(top>285-142){
                top=285-142;
            }
            if(left<0){
                left=0;
            }else if(left>210-105){
                left=210-105;
            }
            this.spanStyle={
                top:top+"px",
                left:left+"px",
            };
            this.imgStyle={
                top:-2*top+"px",
                left:-2*left+"px",
            }
        },
        fdjDiv(){
            this.isNone=!this.isNone;
        },
        outLogin(){
            this.common.out.call(this)
        },
        toLogin(){          //用户登录时间
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
        },
        spanHid(){          //点击按钮隐藏登录框
            this.spanHidden(); 
        },
    },
    mounted(){
        // var widthOne=this.$refs.divOne.offsetWidth;
        this.Pheight=this.$refs.pHeight.offsetHeight;
        this.pHet();
    },
    props:["sid"], 
}
</script>
<style>
    @import url("../assets/css/detalis.css");
</style>
