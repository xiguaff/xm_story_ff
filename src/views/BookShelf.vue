<template>
    <div>
    <my-nav :login="login" :outLogin="outLogin"/>
    <div class="container">
        <div class="bookshelf-content">
            <div class="left-content">
                <ul>
                    <li><img src="image/home.png" alt=""><span>会员中心</span><span></span><span></span><span></span></li>
                    <li :class="{active:isAct}" @click="oneActive"><img src="image/shouye1.png" alt=""><span>我的首页</span></li>
                    <li :class="{active:!isAct}" @click="oneActive"><img src="image/set2.png" alt=""><span>个人设置</span></li>
                    <li><img src="image/outlogin.png" alt=""><span>退出登录</span></li>
                    <li></li>
                </ul>
            </div>
            <div class="right-content-one" :class="{disNone:!isAct}">
                <div class="right-author">
                    <div><img :src="`http://127.0.0.1:1994/${infoArr.Icon}`" alt=""></div>
                    <div>
                        <p>用户名：<span>{{infoArr.nickName==null?infoArr.uname:infoArr.nickName}}</span></p>
                    </div>
                </div>
                <div class="myshelf">
                    <span>我的书架</span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>书名</th>
                            <th>最新章节</th>
                            <th>作者</th>
                            <th>加入时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(p,i) of list" :key="i">
                            <td><input type="checkbox" v-model="p.isCheck"><span style="color:#888">[{{p.story_family}}]</span><p><router-link :to="`/detail/${p.sid}`" v-text="p.bname"></router-link></p></td>
                            <td><p v-text="p.newchapter"></p></td>
                            <td v-text="p.author"></td>
                            <td>{{new Date(p.joinTime).toLocaleDateString()}}<button style="margin-left:50px;" @click="delBook" :data-sid="p.sid">删除</button></td>
                        </tr>
                    </tbody>
                </table>
                <div class="shlef-bottom">
                    <div> 
                        <input type="checkbox" id="int"  v-model="checkAll" ><label for="int" style="margin-left:10px;"><span style="cursor:pointer">全选</span></label><span style="margin-left:10px;cursor:pointer">删除</span>
                        <select name="" id="" v-model="numAct">
                            <option value="3">每页显示3条</option>
                            <option value="4">每页显示4条</option>
                            <option value="6">每页显示6条</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <img src="image/left.png" alt="" style="vertical-align:middle;cursor:pointer" @click="changeAct(-1)">
                        </div>
                        <div>
                            <span style="margin-left:6px;" v-for="i in count" :key="i" :class="{active:act==i}" @click="setAct(i)">{{i}}</span>
                        </div>
                        <div>
                            <img src="image/right.png" alt="" style="vertical-align:middle;margin-left:6px;cursor:pointer" @click="changeAct(+1)">
                        </div>
                        <span>共{{count}}页,到第</span>
                        <input type="text" v-model="toCount">页
                        <a href="javascript:;" @click="toPage">GO</a>
                    </div>
                </div>
            </div>
            <div class="right-content-one" :class="{disNone:isAct}">
                    <div class="userSet-top">
                        <span :class="{activeS:twoAct}" @click="twoActive">基本设置</span>
                        <span :class="{activeS:!twoAct}" @click="twoActive">修改密码</span>
                    </div>
                    <div class="userSet-content" :class="{notActive:!twoAct}">
                        <div>
                            <span>用户名：</span><span v-text="infoArr.uname"></span>
                        </div>
                        <div>
                            <span>昵称：</span>
                            <span v-show="setNick">{{infoArr.nickName==null?infoArr.uname:infoArr.nickName}}</span>
                                <input type="text" v-show="!setNick" v-model="nickName">
                                <a href="javascript:;" @click="setNickName">{{setCont}}</a>
                                <a href="javascript:;" @click="setOff" v-show="!setNick">取消</a>
                            <!-- <div class="setNickBg">
                                
                            </div>
                            <div class="setNick">
                                <input type="text"><button></button>
                            </div> -->
                        </div>
                        <div>
                            <span>注册时间：</span><span v-text="`${new Date(infoArr.regTime).toLocaleString('chinese',{hour12:false})}`"></span>
                        </div>
                        <div>
                            <span>头像：</span>
                            <div><img :src="`http://127.0.0.1:1994/${infoArr.Icon}`" alt=""></div>
                            <a href="javascript:;">修改</a>
                        </div>
                        <div>
                            <span>绑定手机：</span>
                            <span v-text="infoArr.uname" v-show="setPhone"></span>
                            <input type="text" placeholder="请输入正确的手机号" maxlength="11" v-show="!setPhone" v-model="setPhe">
                            <a href="javascript:;" @click="SetPhone">{{setpheCount}}</a>
                            <a href="javascript:;" v-show="!setPhone" @click="setphOff">取消</a>
                        </div>
                    </div>
                    <div class="userSet-content" :class="{notActive:twoAct}">
                        <div>
                            <span>原密码：</span><input type="text">
                        </div>
                        <div>
                            <span>新密码：</span><input type="text">
                        </div>
                        <div>
                            <span>重复新密码：</span><input type="text">
                        </div>
                        <div>
                            <button>确认</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <my-footer/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isAct:true,
            twoAct:true,
            list:[],
            count:1,
            act:1,
            numAct:3,
            toCount:1,
            infoArr:{},
            screenwid:0,
            screenhei:0,
            setNick:true,
            nickName:"",
            setCont:"修改",
            setPhone:true,
            setpheCount:"修改",
            setPhe:"",
            checkAll:false,
        }
    },
    watch:{
        checkAll(){
            for(var p of this.list){
                p.isCheck=this.checkAll;
            }
        },
        numAct(){
            this.act=1;
            this.getBookShelf(this.act,this.numAct);
        },
        act(){
            this.getBookShelf(this.act,this.numAct);
            console.log(this.act);
        },
    },
    created(){
        this.getBookShelf();
        this.getuserInfo();
    },
    methods:{
        delBook(e){      //删除书架书本
            var sid = e.target.dataset.sid;
            this.$confirm("此操作将删除图书，是否继续？").then(act=>{
                this.axios.get("delBook",{
                    params:{sid:sid}
                }).then(res=>{
                    if(res.data.code==1){
                        this.$message("删除成功","提示");
                        this.getBookShelf();
                    }
                }).catch(err=>{
                    return;
                })
            })
        },
        setphOff(){
            this.setPhone=true;
            this.setpheCount="修改";
        },
        SetPhone(){
            if(this.setpheCount=="修改"){
                this.setPhone=false;
                this.setpheCount="确认";
            }else{
                var sp = this.qs.stringify({
                    uname:this.setPhe
                });
                console.log(sp)
                this.axios.post("setName",sp).then(res=>{
                    this.$alert("修改成功","提示").then(res=>{
                        this.setphOff();
                        this.getuserInfo();
                    }).catch(err=>{
                         this.setphOff();
                        this.getuserInfo();
                    })
                })
            }
        },
        setOff(){
            this.setNick=true;
            this.setCont="修改";
        },
        setNickName(){
            if(this.setCont=="修改"){
                this.setNick=false;
                this.setCont="确认";
            }else{
                var nk = this.qs.stringify({
                    nickName:this.nickName,
                })
                this.axios.post("nickName",nk).then(res=>{
                    this.$alert("修改成功","提示").then(res=>{
                        this.setOff();
                        this.getuserInfo();
                    }).catch(err=>{
                         this.setOff();
                        this.getuserInfo();
                    })
                });
            };
        },
        getuserInfo(){
            this.axios.get("getInfo").then(res=>{
                this.infoArr=res.data.data[0];
            })
        },
        toPage(){
            if(this.toCount>this.count){
                this.$alert("请选择有效页数","警告").then(res=>{

                    return;
                }).catch(err=>{
                    return;
                });
                return;
            }else{
                this.act=Number(this.toCount);
                console.log(typeof(this.toCount))
                console.log(typeof(this.act))
                this.getBookShelf(this.toCount,this.numAct);
            }
        },
        changeAct(i){
            this.act+=i;
            if(this.act>this.count){
                this.act=this.count;
            }
            if(this.act<1){
                this.act=1;
            }
        },
        setAct(i){
            this.act=i;
        },
        getBookShelf(pn,ps){
            pn=pn||0;
            ps=ps||0;
            this.axios.get("selBook",{
                params:{
                    pageNum:pn,
                    pageSize:ps,
                }
            }).then(res=>{
                // this.$store.state.list=res;
                this.list=res.data.data.data;
                this.count=res.data.data.pCount;
                for(var i=0;i<this.list.length;i++){
                    this.list[i].isCheck=false;
                }
            })
        },
        login(){},
        outLogin(){
            this.axios.get("outlogin").then(result=>{
                if(result.data.code==1){
                    location.reload();
                    this.$message("退出成功！");
                    sessionStorage.removeItem("uname");
                };
            });
        },
        oneActive(){
            this.isAct=!this.isAct;
        },
        twoActive(){
            this.twoAct=!this.twoAct;
        }
    },
    mounted(){
        this.screenwid=window.innerWidth;        //监听浏览器窗口变化
        this.screenhei=document.body.clientHeight;
        window.onresize=()=>{
            console.log(window.innerWidth)
        }
    },
}
</script>
<style scoped>
body{
    background:#f7f7f7;
}
/* .setNickBg{
    background:#000;
    position:fixed;
    z-index:10;
}
.setNick{

} */
.bookshelf-content{
    margin-top:130px;
    display:flex;
    margin-bottom:130px;
}
.left-content{
    width:239px;
    /* border: 1px solid #e0e0e0; */
    border-right:none;
    border-top-left-radius:0.25rem;
    border-bottom-left-radius:0.25rem;
    background: #f8f8f8;
    height:800px;
}
.left-content>ul{
    height:100%;
}
.left-content>ul>li:first-child{
    border-top: 1px solid #e0e0e0;
}
.left-content>ul>li{
    width:100%;height:49px;
    /* border-bottom:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
    border-right:1px solid #e0e0e0; */
    border: 1px solid #e0e0e0;
    border-top:none;
    text-align: center;
    line-height:49px;
    color:#515151;
}
.left-content>ul>li:last-child{
    height:71.5%;
    
}
li.active{
    background:#fff !important;
    border-right:none !important;
}
.left-content>ul>li>img{
    margin-right:20px;
    vertical-align: middle;
}
.left-content>ul>li:first-child{
    height:79px;
    line-height: 79px;
    font-size:2rem;
    position: relative;
}
.left-content>ul>li:first-child>span:nth-child(3){
    /* display: inline-block; */
    width:45px;height:80px;
    background:#fb6b84;
    /* float: left; */
    position: absolute;
    top:0px;left:-11px;
}
.left-content>ul>li:first-child>span:nth-child(4){
    display:inline-block;
    width:0;height:0;
    border:40px solid transparent;
    border-left:20px solid #fb6b84;
    position:absolute;
    top:0px; left:34px;
}
.left-content>ul>li:first-child>span:nth-child(5){
    display: block;
    width:0;height:0;
    border:8px solid transparent;
    border-bottom:8px solid #fb6b84;
    transform: rotate(45deg);
    position: absolute;
    top:71px;left:-8px;
}
.left-content>ul>li:first-child>img{
    position: relative;
    left:-25px;
    z-index:10;
}
.left-content>ul>li:not(:first-child){
    cursor: pointer;
}

.right-content-one{
    width:959px;
    height:798px;
    border:1px solid #e0e0e0;
    border-top-right-radius:0.25rem;
    border-bottom-right-radius:0.25rem;
    border-left:none;
    padding:50px 40px;
    background:#fff;
}
.right-author>div:first-child{
    width:150px;height:150px;
    /* border:1px solid #f00; */
    border-radius: 50%;
    overflow: hidden;
}
.right-author>div:first-child>img{
    width:150px;height:150px;
}
.right-author>div:last-child{
    border-bottom:1px solid #e0e0e0;
    width:80%;
    height:50px;
    margin:100px 0 0 0;
}
.right-author>div:last-child span{
    font-size:30px;
}
.right-author{
    display: flex;
    justify-content: space-between
}
.myshelf{
    border-bottom:1px solid #e0e0e0;
    height:40px;
    margin-top:50px;
    padding:0 10px 0 0;
}
.myshelf>span{
    float:left;
    border-bottom:1px solid #fb6b84;
    padding:9px 0;
}
table{
    margin-top:30px;
    width:100%;
}
table th{
    width:25%;
    text-align: left;
    border-bottom:1px solid #e0e0e0;
    padding:0 10px 0 0;
}
table tr{
    height:50px;
    line-height: 50px;
}
table>tbody>tr>{
    border-bottom:1px solid #e0e0e0;  
}
table>tbody>tr>td{
    border-bottom:1px solid #e0e0e0; 
    font-size:14px;
    padding:0 10px 0 0;
}
table>tfoot>tr>td{
    /* border-bottom:1px solid #e0e0e0;  */
    font-size:14px;
    padding:0 10px 0 0;
}
table>tbody>tr>td:first-child>p{
    height:20px;width:145px;
    overflow: hidden;
    float: right;
    margin-top:15px;
    line-height: 20px;
}
table>tbody>tr>td:nth-child(2)>p{
    height:20px;width:217px;
    overflow: hidden;
    /* float: right; */
    /* margin-top:15px; */
    line-height: 20px;
}
table tr>td>input{
    vertical-align: middle;
}
table tr>td:last-child>button{
    width:70px;height:35px;
    text-align: center;
    line-height: 35px;
    background:#ffecf2;
    border:1px solid #fb6b84;
    outline:none;
    border-radius:0.25rem;
    margin-left:12px;
}

.shlef-bottom{
    display:flex;
    justify-content: space-between;
    margin-top:30px;
}
.shlef-bottom>div:last-child{
    display: flex;
    line-height:36px;
}
.shlef-bottom>div:last-child>div>span{
    display:inline-block;
    width:40px;height:36px;
    background: #fff;
    color:#000;
    border:1px solid #ededed;
    text-align: center;
    line-height: 36px;
    cursor: pointer;
}
span.active{
    background:#fb6b84 !important;
    color:#fff !important;
}
.shlef-bottom>div:last-child>input{
    /* display:inline-block; */
    width:40px;height:36px;
    background:#fff;
    border:1px solid #ededed;
    color:#000;
    text-align: center;
    line-height: 36px;
}
.shlef-bottom>div:last-child>a{
    display:inline-block;
    width:40px;height:36px;
    background:#ededed;
    color:#ccc;
    text-align: center;
    line-height: 36px;
}

.userSet-top{
    height:35px;
    border-bottom:1px solid #ededed;
}
.userSet-top>span{
    display:inline-block;
    width:100px;
    /* float:left; */

    padding:6px 0;
    margin-right:20px;
    text-align: center;
}
span.activeS{
    border-bottom:2px solid #fb6b84 !important;
}

.userSet-content>div{
    margin-top:40px;
}
.userSet-content>div>span:first-child{
    display:inline-block;
    width:140px; height:30px;
    text-align:right;
    line-height: 30px;
    color:#999;
}
.userSet-content>div:nth-child(4){
    display: flex;
}
.userSet-content>div:nth-child(4)>div{
    width:150px;height:150px;
    overflow: hidden;
}
.userSet-content>div:nth-child(4)>div>img{
    width:150px;height:150px;
}
.userSet-content>div:nth-child(2)>a{
    color:#009aff;
    margin-left:10px;
}
.userSet-content>div:nth-child(4)>a{
    display:block;
     margin-top:120px;
    height:30px;
    color:#009aff;
    margin-left:10px;
}
.userSet-content>div:last-child>a{
    color:#009aff;
    margin-left:10px;
}

.userSet-content>div>input{
    outline: none;
    height:30px;width:250px;
}
.userSet-content>div>button{
    width:160px;height:40px;
    background:#fb6b84;
    color:#fff;
    outline:none;
    border:none;
    border-radius:0.25rem;
    margin-left:140px;
}
.disNone{
    display: none;
}
.notActive{
    display: none;
}
</style>>
 /* @import url("../assets/css/bookshelf.css"); */