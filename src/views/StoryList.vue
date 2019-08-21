<template>
    <div>
        <my-nav :login="login" :num="num" :outLogin="outLogin"></my-nav>
        <!-- <list-one v-if="this.num==1" :num="num"></list-one>
        <list-two v-else-if="this.num==2" :num="num"></list-two>
        <list-three v-else-if="this.num==3" :num="num"></list-three>
        <list-four v-else-if="this.num==4" :num="num"></list-four>
        <list-five v-else :num="num"></list-five> -->
    <div class="list-header" :style="{'background-image':`url(../image/list/bg_${num}.jpg)`}">
        <div class="container">
            <div class="header-top">
                <div>
                    <img :src="`image/list/logo_${num}.png`" alt="">
                </div>
                <div class="intStyle">
                    <input type="text"><span><i></i><i></i></span>
                </div>
                <div class="imgStyle">
                    <a href=""><img src="image/index/header_author.jpg" alt="">我要当作家</a>
                    <a href=""><img src="image/index/header_liwu.jpeg" alt="">作家福利</a>
                </div>
            </div>
            <div class="header-bottom">
                <a href="javascript:;">{{Sfamily}}完本小说</a>
                <a href="javascript:;">{{Sfamily}}免费小说</a>
                <a href="javascript:;">{{Sfamily}}包月小说</a>
                <a href="javascript:;">{{Sfamily}}全部小说</a>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="list-top">
            <div class="list-top-left">
                <div class="list-top-content" v-for="(p,i) of oneList" :key="i">
                    <div>
                        <img :src="`http://127.0.0.1:1994/${p.imgUrl}`" alt="">
                    </div>
                    <div>
                        <p v-text="p.bname"></p>
                        <p><span v-text="p.author"></span>/ 著</p>
                        <p>
                            （双宠—双强—双纯）宇文玠所想的妻子是这样的：品性端良，德才兼备；秉性柔嘉，持恭淑慎。 
                            而白牡嵘完美的避过了以上每一条，对着镜子，这外形便不是居家妇女，白扯！ 穿越至此，便是新婚之夜，
                            白牡嵘暴躁的将那个娇柔易推倒的小白脸儿一顿揍。敢动手动脚？打不死这个战五渣！不过之后她就见识到了，
                            他还真不是战五渣，就是个披着完美人皮的狼！宇文玠—杀人诛心的邪魔。白牡嵘—上兵伐谋的恶鬼。 
                            二人为敌，天下大乱；二人为伍，天下更乱听风坑品有保证，欢迎亲们跳坑
                        </p>
                        <router-link :to="`/detail/${p.sid}`">书籍详情</router-link>
                    </div>
                </div>
            </div>
            <div class="list-top-right">
                <div class="right-top">
                    <div><span>编辑推荐</span><i></i></div>
                    <div>
                        <p>影月楼：我的小护卫</p>
                        <p style="color:#888;">旧时梦七月 / 著</p>
                        <p>影月楼。楼主青宛七，江湖人称：青姑娘。她从外面捡回</p>
                        <p>来个与她一样大的护卫，取名：影山。青宛七...</p>
                    </div>
                    <div>
                        <p>影月楼：我的小护卫</p>
                        <p style="color:#888;">旧时梦七月 / 著</p>
                        <p>影月楼。楼主青宛七，江湖人称：青姑娘。她从外面捡回</p>
                        <p>来个与她一样大的护卫，取名：影山。青宛七...</p> 
                    </div>
                </div>
                <div class="right-bottom">
                    <div><span>新书精选</span><i></i></div>
                    <p><span>厨女当家：山里汉子，宠不休一朝穿越成食不裹腹，家</span></p>
                    <p><span>嫡女归来之皇后太妖娆许沐晴是个狼人，比狠还多...</span></p>
                    <p><span>农家巧手妇【文案一】沈遇一觉醒来发...</span></p>
                </div>
            </div>
        </div>
        <div class="list-middle-ul">
            <div class="col-header">
                <h3>月票榜</h3>
            </div>
            <div class="i-3_content">
                <div class="list-one">
                    <img :src="`http://127.0.0.1:1994/${sixListOne.imgUrl}`" alt="">
                </div>
                <div class="icon_header">
                    <span class="num">NO.1</span>
                    <p><router-link :to="`/detail/${sixListOne.sid}`" v-text="sixListOne.bname"></router-link></p>
                    <p>作者：<span v-text="sixListOne.author"></span></p>
                    <p><span>分类：</span>&nbsp;|&nbsp;<span>{{Sfamily}}</span></p>
                </div>
            </div>
            <ul class="ul-list">
                <li v-for="(item,i) of sixList" :key="i" v-show="i!==0">
                    <span v-text="item.author"></span>
                    <span v-text="i+1">2</span>
                    <router-link :to="`/detail/${item.sid}`" v-text="item.bname"></router-link>
                </li>      
            </ul>
        </div>
        <div class="list-middle-nav">
            <h3>频道新书</h3>
        </div>
        <div class="list-middle">
        <div class="list-middle-content" v-for="(p,i) of twoList" :key="i">
            <div>
                <img :src="`http://127.0.0.1:1994/${p.imgUrl}`" alt="">
            </div>
            <div>
                <p><router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link></p>
                <p style="color:#888"><span v-text="p.author"></span>/ 著</p>
                <p>简介:更新时间，每日早上八点。算命师版:桥底算命，童叟无欺。
                        作为一个算命的，能说会道是本事，答疑解惑是常事。木欧在奈何桥底下算命千年有余，侃天侃地侃社会，
                        上到阎罗王，下到投胎鬼，几乎都光顾过她的摊子，哪个不说她信誉好？ 直到某天摊子面前来了一个如花似玉的小仙君……
                        “奈何桥底，禁止摆摊。”“小仙君可是来砸场子的？我在奈何桥算命千年，还没有人敢砸我的场子，你信不信，我一招手，
                        就是一帮小鬼弄死你。” “……”天界铁面无私城管小仙君VS阴界最强钉子户算命师地府众鬼版:黄泉陌路，魂灵万千， 
                        红尘纷扰，遗憾执念， 喝下这孟婆汤，渡过那奈何桥，前尘往事，皆会化作忘川河水，过眼云烟一去不返。
                        不愿投胎转世的魂灵，可是生前有放不下的执念？即是如此，便去那桥底的算命师摊上算上一卦吧……
                </p>
            </div>
        </div>
        </div>
        <div class="list-middle-ul">
            <div class="col-header">
                <h3>更新榜</h3>
            </div>
            <div class="i-3_content">
                <div class="list-one">
                    <img :src="`http://127.0.0.1:1994/${fiveListOne.imgUrl}`" alt="">
                </div>
                <div class="icon_header">
                    <span class="num">NO.1</span>
                    <p><router-link :to="`/detail${fiveListOne.sid}`" v-text="fiveListOne.bname"></router-link></p>
                    <p>作者：<span v-text="fiveListOne.author"></span></p>
                    <p><span>分类：</span>&nbsp;|&nbsp;<span>{{Sfamily}}</span></p>
                </div>
            </div>
                <ul class="ul-list">
                    <li v-for="(item,i) of fiveList" :key="i" v-show="i!==0">
                        <span v-text="item.author"></span>
                            <span>{{i+1}}</span>
                        <router-link :to="`/detail/${item.sid}`" v-text="item.bname"></router-link>
                    </li>
                </ul>
        </div>
        <div class="list-middle-nav">
                <h3>人气连载</h3>
        </div>
        <div class="list-middle">
                <div class="list-middle-content" v-for="(p,i) of threeList" :key="i">
                    <div>
                        <img :src="`http://127.0.0.1:1994/${p.imgUrl}`" alt="">
                    </div>
                    <div>
                        <p><router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link></p>
                        <p style="color:#888"><span v-text="p.author"></span> / 著</p>
                        <p>简介:更新时间，每日早上八点。算命师版:桥底算命，童叟无欺。
                            作为一个算命的，能说会道是本事，答疑解惑是常事。木欧在奈何桥底下算命千年有余，侃天侃地侃社会，
                            上到阎罗王，下到投胎鬼，几乎都光顾过她的摊子，哪个不说她信誉好？ 直到某天摊子面前来了一个如花似玉的小仙君……
                            “奈何桥底，禁止摆摊。”“小仙君可是来砸场子的？我在奈何桥算命千年，还没有人敢砸我的场子，你信不信，我一招手，
                            就是一帮小鬼弄死你。” “……”天界铁面无私城管小仙君VS阴界最强钉子户算命师地府众鬼版:黄泉陌路，魂灵万千， 
                            红尘纷扰，遗憾执念， 喝下这孟婆汤，渡过那奈何桥，前尘往事，皆会化作忘川河水，过眼云烟一去不返。
                            不愿投胎转世的魂灵，可是生前有放不下的执念？即是如此，便去那桥底的算命师摊上算上一卦吧……
                        </p>
                    </div>
                </div>
        </div>
        <div>
            <img src="image/list/gg.jpg" alt="">
        </div>
        <div class="list-bottom">
            <div class="list-bottom-content" v-for="(p,i) of fourList" :key="i">
                <div><img :src="`http://127.0.0.1:1994/${p.imgUrl}`" alt=""></div>
                <div>
                    <p><router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link></p>
                    <p style="color:#888;"><span v-text="p.author"></span> / 著</p>
                    <p>
                        【美食】+【系统】+【异能】+【宠文一对一】+【家长里短】+【虐极品】地球末世突然降临，
                        唐妖儿不曾想，人心难测！被自己最好的蜜友所害，一腔悲愤，绝望地落入丧尸口中。一朝重生，
                        她成了大宇国天岚县黎水村连小孩子都欺负上一脚的“傻子”黎幺儿，瘦不拉几的羸弱身子，单薄的可见几两骨头。
                        彪悍肥墩的二伯娘，偏袒大房的阿奶，兴风作浪的堂姐儿……这样的亲人要来作何，分家！有一颗接受了现代精英教育的脑袋在，
                        怕啥？她要坐拥自己的美食街，让欺负过她家的人都眼红去吧！黎幺儿的蓝图里，有温和疼爱自己的家人，
                        有村子里独一份的漂亮庄园，有数不完的金山银山！但为毛，现实跟想象差距这么大？这个色胚系统能不能退货？
                        不要三天两头“鞭策”她去勾搭男人啊！黎幺儿不仅要养家人，还要养某只失忆又失明的“兔儿”。幸好有一身杀过丧尸的勇气和见识，
                        调教兔儿不成问题，抵抗极品亲戚小意思，蹭蹭蹭升级系统，斗斗情敌，一切不在话下。
                    </p>
                    <router-link :to="`/detail/${p.sid}`">书籍详情</router-link>
                </div>
            </div>
        </div>
    </div>
        <my-footer></my-footer>
        <login :spanHid="spanHid" :loginMsg="loginMsg" :log="log" :imgUrl="imgUrl" :changeImg="changeImg" :toLogin="toLogin" v-on:sendValue="(val)=>this.authCode=val" @sendName="(val)=>this.uname=val" @sendPwd="(val)=>this.upwd=val"></login>   <!--父组件接收子组件传递的值-->
    </div>
</template>
<script>
// import listOne from '../components/listOne.vue'
// import listTwo from '../components/listTwo.vue'
// import listThree from '../components/listThree.vue'
// import listFour from '../components/listFour.vue'
// import listFive from '../components/listFive.vue'
export default {
    data(){
        return {
            log:null,    //登录框隐藏切换
            uname:"",    //双向绑定姓名框的值
            upwd:"",     //双向绑定密码框的值
            authCode:"", //双向绑定验证框的值
            arr:[1,18,11,33,34,1],    //验证码的答案
            imgUrl:1,       //记录验证码图片切换的张数
            authTrue:false,     //保存验证码输入框的状态
            oneList:[],
            twoList:[],
            threeList:[],
            fourList:[],
            fiveList:[],
            fiveListOne:{},
            sixList:[],
            sixListOne:{},
            Sfamily:"",
            loginMsg:"",
        }
    },
    created(){
        // this.getName();
        this.getList();
            if(this.num==1){
                this.Sfamily="玄幻";
            }else if(this.num==2){
                this.Sfamily="现言";
            }else if(this.num==3){
                this.Sfamily="悬疑";
            }else if(this.num==4){
                this.Sfamily="古言";
            }else{
                this.Sfamily="青春";
            };
        // this.$router.go(0)
    },
    methods:{
        getList(){
            this.axios.get("list",{
                params:{
                    fid:this.num
                }
            }).then(result=>{
                var data=result.data.data
                this.oneList=data.slice(0,4);
                this.twoList=data.slice(4,13);
                this.threeList=data.slice(13,22);
                this.fourList=data.slice(22,28);
                this.fiveList=data.slice(0,10);
                this.sixList=data.slice(11,21);
                this.fiveListOne=this.fiveList[0];
                this.sixListOne=this.sixList[0];
                // console.log(this.fiveList,this.sixList)
            })
        },
        outLogin(){
            this.axios.get("outlogin").then(result=>{
                if(result.data.code==1){
                    location.reload();
                    this.$message("退出成功！");
                    sessionStorage.removeItem("uname")
                    sessionStorage.removeItem("nickName");
                };
            });
        },
        toLogin(){          //验证验证码是否输入正确
            if(this.uname==""&&this.upwd==""){
                this.loginMsg="请输入用户名和密码";
                return;
            }else if(this.uname==""){
                this.loginMsg="请输入用户名";
                return;
            }else if(this.upwd==""){
                this.loginMsg="请输入密码";
                return;
            }else if(this.authCode==""){
                this.loginMsg="请输入验证码";
                return;
            };
            if(!this.authTrue){
                this.loginMsg="验证码输入错误";
            }else{
                this.axios.get("login",{
                    params:{
                        uname:this.uname,
                        upwd:this.upwd,
                    }
                }).then(res=>{
                    if(res.data.code==1){
                        var uname=(res.data.data[0]).slice(-4);
                        var nickName=res.data.data[1]
                        sessionStorage.setItem("uname","xxmy"+uname);
                        sessionStorage.setItem("nickName",nickName)
                        this.$alert("登录成功","提示",{confirmButtonText:'确定'}).then(active=>{
                            this.log=null;
                            location.reload();
                        }).catch(err=>{
                            location.reload();
                             this.log=null;
                        });
                    }else{
                        this.$message.error("用户名或密码错误");
                    }
                });
            }
        },
        // getName(){
        //     this.axios.get("getname").then(result=>{
        //         if(result.data.code==1){
        //             this.loginName=result.data.data;
        //         }else{
        //             this.loginName="";
        //         }
        //     })
        // },
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
    },
    watch:{
        authCode(){
            if(this.arr[this.imgUrl-1]==this.authCode){
                this.authTrue=true;
            }else{
                this.authTrue=false;
            };
        },
        num(){
            this.getList();
            if(this.num==1){
                this.Sfamily="玄幻";
            }else if(this.num==2){
                this.Sfamily="现言";
            }else if(this.num==3){
                this.Sfamily="悬疑";
            }else if(this.num==4){
                this.Sfamily="古言";
            }else{
                this.Sfamily="青春";
            };
        }
    },
    props:["num"],      //定义自定义属性，用用于接受其他页面传递的值，并用于页面绑定
    // components:{listOne,listTwo,listThree,listFour,listFive}
}
</script>
<style>
    @import url("../assets/css/list.css");         /*  引入css样式文件  */
</style>
