<template>
    <div>
        <my-nav :login="login" :outLogin="outLogin"></my-nav>
        <div class="allBook-top">
            <div>
                <router-link to="/"><img src="image/index/logo.png" alt=""></router-link>
            </div>
            <div class="intStyle">
                <input type="text" v-model="search" @keyup.13="searchAllBook"><span @click="searchAllBook"><i></i><i></i></span>
            </div>
            <div class="imgStyle">
                <a href=""><img src="image/index/header_author.jpg" alt="">我要当作家</a>
                <a href=""><img src="image/index/header_liwu.jpeg" alt="">作家福利</a>
            </div>
        </div>
        <hr style="margin-top:50px;"/>
        <div class="container">
            <div class="allBook-Content">
                <div class="contentList" v-for="(p,i) of allList" :key="i">
                    <div>
                        <router-link :to="`/detail/${p.sid}`"><img v-lazy="`${url}${p.imgUrl}`" alt=""></router-link>
                    </div>
                    <div>
                        <div v-text="p.bname"></div>
                        <div v-text="p.author"></div>
                        <div> 矜贵而冷漠，雅致而深沉，狷狂而偏执。但在郁知意的心里，霍纪寒却像一只粘人的巨型犬。
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
                            </div>
                        <router-link :to="`/detail/${p.sid}`">书籍详情</router-link>
                    </div>
                </div>
            </div>
            <div class="intr-all">
                <button @click="toAct(-1)" :disabled="leftBtn" v-show="isHidden">上一页</button>
                <ul>
                    <li v-show="liHidden>7">...</li>
                    <li :class="{active:allAct==i}" v-for="i in count" :key="i" @click="changeAct(i)" v-show="liHidden-7<i&&i<liHidden" >{{i}}</li>
                    <li>...</li>
                </ul>
                <button @click="toAct(+1)" :disabled="rightBtn" v-show="isHidden">下一页</button>
            </div>
        </div>
        <my-footer></my-footer>
        <login :spanHid="spanHid" :loginMsg="loginMsg" :log="log" :imgUrl="imgUrl" :changeImg="changeImg" :toLogin="toLogin" v-on:sendValue="(val)=>this.authCode=val" @sendName="(val)=>this.uname=val" @sendPwd="(val)=>this.upwd=val"></login>   <!--父组件接收子组件传递的值-->
    </div>
</template>
<script>
import Event from '../Even.js';
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            url:this.$store.state.url,
            arr:this.$store.state.arr,    //验证码的答案
            log:this.$store.state.log,    //登录框隐藏切换
            imgUrl:Math.ceil(Math.random()*6),       //记录验证码图片切换的张数
            authTrue:false,     //保存验证码输入框的状态
            loginMsg:"",
            uname:"",    //双向绑定姓名框的值
            upwd:"",     //双向绑定密码框的值
            authCode:"", //双向绑定验证框的值
            search:"",
            allList:[],
            count:1,
            allAct:1,
            isHidden:true,
            liHidden:7,
            isClick:false,
            // isClick:true,

        }
    },
    watch:{
        search(){
            this.searchAllBook();
        },
        authCode(){
            if(this.arr[this.imgUrl-1]==this.authCode){
                this.authTrue=true;
            }else{
                this.authTrue=false;
            }
        },
        allAct(){
            this.searchAllBook();
        }
    },
    created(){
        // Event.$on("send",(val)=>{
        //     console.log(val)
        //     this.search=val;
        // }) 
        this.search=this.$store.state.search;
    },
    methods:{
        toAct(i){
            if(this.isClick){
                this.allAct+=i;
                this.liHidden+=i;
                this.isClick=false
                console.log(this.liHidden)
            }
        },
        changeAct(i){
            this.allAct=i;
        },
        searchAllBook(){
            this.axios.get("search",{
                params:{
                    search:this.search,
                    pageNum:this.allAct,
                }
            }).then(res=>{
                this.allList=res.data.data.data;
                this.count=res.data.data.count;
                this.isClick=true;
                if(this.count==0){
                    this.isHidden=false;
                }else{
                    this.isHidden=true;
                }
            })
        },
        outLogin(){         //退出登录
            this.common.out.call(this)
        },
        login(){            //点击按钮显示登录框
            this.logl(); 
        },
        spanHid(){          //点击按钮隐藏登录框
            this.spanHidden();  
        },
        changeImg(){        //变换验证码图片
            this.imgUrl++;
            if(this.imgUrl==7){
                this.imgUrl=1; 
            };
        },
        toLogin(){          //用户登录
            this.common.userLogin.call(this);
        },
    },
    mounted(){
        this.searchAllBook();
    },
    computed:{
        leftBtn(){
            return this.allAct==1;
        },
        rightBtn(){
            return this.allAct==this.count
        }
    }
}
</script>
<style>
    @import url("../assets/css/allList.css");
</style>