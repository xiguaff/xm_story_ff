<template>
    <div>
    <div class="top_nav">
        <div class="container">
            <div class="top_info">
                <ul>
                    <li style="display:none" :class="{liStyle:loginName==null}"><a href="javascript:;" @click="login">登录</a></li>
                    <li style="display:none" :class="{liStyle:loginName!=null}">欢迎：<router-link to="/center" style="color:#f55;">{{loginName}}</router-link><a href="javascript:;" @click="outLogin">退出登录</a></li>
                    <li><router-link to="/reg">注册</router-link></li>
                    <li :class="{active:act}" @mouseover="bkShelf" @mouseout="bkShelf" style="width:86px;padding:0 8px 0 3px;">
                        <a href="javascript:;" @click="toShelf">我的书架
                            <span class="poin" :class="{useAnimate:act,useAnimate1:!act}"></span>
                        </a>
                    </li>
                    <li><a href="">联系客服</a></li>
                </ul>
                <div class="bkShelf" :class="{bkNone:act}" @mouseover="bkShelf" @mouseout="bkShelf">
                    <div class="bk-top"><span>我的书架</span></div>
                </div>
            </div>
            <ul>
                <li>Android版</li>
                <li>IOS版</li>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/list/4" :class="{isActive:num==4}">古代言情</router-link></li>
                <li><router-link to="/list/2" :class="{isActive:num==2}">现代言情</router-link></li>
                <li><router-link to="/list/1" :class="{isActive:num==1}">玄幻仙侠</router-link></li>
                <li><router-link to="/list/5" :class="{isActive:num==5}">浪漫青春</router-link></li>
                <li><router-link to="/list/3" :class="{isActive:num==3}">悬疑</router-link></li>
                <li><router-link to="" >改编频道</router-link></li>
                <li><router-link to="">男生频道</router-link></li>
            </ul>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            loginName:sessionStorage.getItem("nickName")=="null"?sessionStorage.getItem("uname"):sessionStorage.getItem("nickName"),
            // bkNone:{display:"none"},
            act:false,
            // toShelf:this.$store.state.toShelf,
        }
    },
    created(){
        // this.loginName=this.$store.state.uname;
    },
    methods:{
        toShelf(){
            if(this.loginName){
                this.$router.push("/center")
            }else{
                this.$message("请先登录");
            }
        },
        bkShelf(){
            if(this.loginName!=null){
                this.act=!this.act;
                // this.bkNone={display:"block"};
            }
        },
    },
    props:{
        login:{type:Function},      //登录函数
        num:{default:""},       //选择的图书列表页
        // loginName:{default:""},       //登录用户名显示
        outLogin:{type:Function},   //退出登录函数
    }
}
</script>

<style>
    @import url("../assets/css/myNav.css");
</style>
