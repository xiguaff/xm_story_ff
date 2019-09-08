<template>
    <div>
        <div class="login-bg">
        <table></table>
        <div class="container cont">
            <div>
                <router-link to="/"><img src="image/index/logo.png" alt=""></router-link>
            </div>
            <div class="loginContent" id="login_input">
                <div class="login_header">
                    <h2>账号登录</h2>
                    <table></table>
                    <div class="login_list">
                        <span>{{loginMsg}}</span>
                        <input type="text" placeholder="手机号" v-model="uname">
                        <input type="password" placeholder="密码" v-model="upwd">
                        <input type="text" placeholder="验证码" id="int3" v-model="authCode">
                        <span id="span2" @click="changeImg">换一换</span>
                        <span  @click="changeImg"><img :src="`image/yan${imgNum}.png`" alt="" id="img1"></span>
                        <button @click="userLogin">登录</button>
                        <p><router-link to="/reg">免费注册></router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Event from '../Even.js';
import { setInterval } from 'timers';
export default {
    data(){
        return {    
            imgNum:Math.ceil(Math.random()*6),           //记录验证码图片切换的张数
            arr:this.$store.state.arr,   //验证码的答案
            authCode:"",        //双向绑定验证框的值
            uname:"",
            upwd:"",
            authTrue:false,     //保存验证码输入框的状态
            loginMsg:"",
        }
    },
    watch:{
        authCode(){
            this.code();
        },
    },
    methods:{
        userLogin(){
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
                        this.$alert("登录成功,点击确定跳转到首页","提示",{confirmButtonText:'确定'}).then(active=>{
                            this.$router.push("/");
                        }).catch(err=>{
                            location.reload();
                        });
                    }else{
                        this.$message.error("用户名或密码错误");
                    }
                });
            }
        },
        changeImg(){
            this.imgNum++;
            if(this.imgNum>6){
                this.imgNum=1;
            }
        }
    },
    // mounted(){
    //     Event.$on("send",(val)=>{
    //         console.log(val)
    //         this.imgNum=val;
    //     })
    // },

}
</script>
<style>
@import url("../assets/css/userLogin.css");
</style>
