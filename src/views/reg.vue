<template>
    <div>
    <div class="reg-cont">
        <div><router-link to="/"><img src="image/index/logo.png" alt=""></router-link></div>
        <div class="reg">
            <div><h3>会员注册</h3></div>
            <div class="reg-content">
                <div class="reg-int">
                    <div>
                        <span>手机号</span><input type="text" v-model="uname" @focus="unameFocus" @blur="unameBlur"><span :class="styleInt">{{msgUname}}</span>
                    </div>
                    <div style="position:relative">
                        <span>密码</span><input :type="intType" v-model="upwd" @focus="upwdFocus" @blur="upwdBlur" maxlength="20"><span class="eyeSpan" :style="eyeStyle" @click="showPwd"><img :src="`image/yanjing${showImg}.png`" alt=""></span><span :class="styleUpwd">{{msgUpwd}}</span><span :class="spanStyle"><span :class="{isUpwd:isupwd==1}">弱</span><span :class="{isUpwd:isupwd==2}">中</span><span :class="{isUpwd:isupwd==3}">强</span><span>{{upwdAuth}}</span></span>
                    </div>
                    <div>
                        <span>确认密码</span><input type="password" v-model="pwd" @focus="pwdFocus" @blur="pwdBlur" maxlength="20" @input="pwdAuth"><span :class="isTrue">{{msgPwd}}</span>
                    </div>
                    <div>
                        <span>图片验证码</span><input type="text" v-model="auth"><span @click="changeImg"><img :src="`image/yan${imgNum}.png`" alt=""></span><span @click="changeImg">换一换</span>
                    </div>
                    <div>
                        <label for="s1"><input type="checkbox"  id="s1" v-model="isAgree"><span>我已阅读并同意</span></label><span>《潇湘书院用户协议》</span>
                    </div>
                    <button @click="userReg">确定注册</button>
                </div>
                <div class="reg-right">
                    <p>已有潇湘账号，<router-link to="/login">直接登录>></router-link></p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import { URLSearchParams } from 'url';
export default {
    data(){
        return {
            widthout:0,
            imgNum:Math.ceil(Math.random()*6),    //记录验证码图片切换的张数
            imgs:[1,18,11,33,34,1],    //验证码的答案
            auth:"",    //绑定验证码输入内容
            uname:"",   //保存用户输入的用户名
            upwd:"",    //保存用户输入的密码
            pwd:"",     //保存用户确认的密码
            msgUname:"",     //保存用户框获得焦点与失去焦点显示的内容
            msgUpwd:"",     //保存密码框获得焦点与失去焦点显示的内容
            msgPwd:"",      //保存确认密码框获得焦点与失去焦点显示的内容
            upwdAuth:"",
            styleInt:{      //定义对象保存样式
                'int-focus':true,
                'int-success':false,
                'int-err':false,
            },
            styleUpwd:{     //定义对象保存样式
                'upwd-focus':false,
                'dis-none':true,
            },
            isupwd:0,
            spanStyle:{     //定义对象保存样式
                'span-sp':false,
                'dis-none':true,
            },
            isTrue:{
                'int-focus':true,
                'is-success':false,
                'is-err':false,
            },
            unameIstrue:false,      //保存每个输入框的状态，都是true才可以提交注册
            upwdIstrue:false,
            pwdIstrue:false,
            authIstrue:false,
            isAgree:false,
            eyeStyle:{
                display:"none",
            },
            intType:"password", //保存密码框的属性
            int6:false,     //保存正则验证的状态
            int5:false,
            showImg:1,     //记录显示密码状态图片的切换
        }
    },
    watch:{
        // widthout(){
        //     console.log(this.widthout)
        // },
        uname(){    //监听用户框的值，即时验证手机号的格式
            var reg=/^1[3-8]\d{9}$/     //创建正则表达式验证格式
            if(!reg.test(this.uname)){
                this.msgUname="请输入正确的手机格式"
                this.styleInt={
                    'int-focus':true,
                    'int-success':false,
                    'int-err':true,
                }
            }else{
                this.msgUname="手机格式正确"
                this.styleInt={
                    'int-focus':true,
                    'int-success':true,
                    'int-err':false,
                }
             };
        },
        auth(){     //监听验证码框输入的值，改变验证码框的状态
            if(this.auth==this.imgs[this.imgNum-1]){
                this.authIstrue=true;
            }else{
                this.authIstrue=false;
            }
        },
        upwd(){                 //即时验证输入的密码。验证密码强度
            this.styleUpwd={
                'upwd-focus':false,
                'dis-none':true,
            }; 
            this.eyeStyle={
                display:"block",
            };
            this.isupwd=1;
            this.upwdAuth="大写字母+小写字母+数字+符号+8位以上";
            this.spanStyle={
                'span-sp':true,
                'dis-none':false,
            };
            var int1=/\d/.test(this.upwd);
            var int2=/[a-z]/.test(this.upwd);
            var int3=/[A-Z]/.test(this.upwd);
            var int4=/[,./?;]/.test(this.upwd);
            this.int5=/\s/.test(this.upwd);
            this.int6=/[\u4e00-\u9fa5]/.test(this.upwd);
            if(this.int5){
                this.upwdAuth="密码只能由字母、数字及常用标点符号组成";
                return;
            };
            if(this.int6){
                this.upwdAuth="密码只能由字母、数字及常用标点符号组成";
                return;  
            };
            if((int1==true&&int2==true)||(int1==true&&int3==true)||(int2==true&&int3==true)){
                this.isupwd=2;
            };
            if(int1==true&&int2==true&&int3==true&&int4){
                this.isupwd=3;
            };
        },
    },
    methods:{
        showPwd(){      //使密码显示与隐藏
            if(this.showImg==1){
                this.intType="text";
                this.showImg=2;
            }else{
                this.intType="password";
                this.showImg=1; 
            }
        },
        userReg(){                      //注册按钮 ，并判断用户输入是否正确，并进行相应提示
            if(!this.unameIstrue){
                this.$alert("号码格式错误","警告",{confirmButtonText: '确定'}).then(active=>{
                    return;
                }).catch(err=>{
                    return;
                })
            }else if(!this.upwdIstrue){
                this.$alert("密码格式错误","警告",{confirmButtonText: '确定'}).then(active=>{
                    return;
                }).catch(err=>{
                    return;
                })
            }else if(!this.authIstrue){
                this.$alert("验证码输入错误","警告",{confirmButtonText: '确定'}).then(active=>{
                    return;
                }).catch(err=>{
                    return;
                })
            }else if(!this.isAgree){
                this.$alert("请阅读并同意相关协议","警告",{confirmButtonText: '确定'}).then(active=>{
                    return;
                }).catch(err=>{
                    return;
                })
            }else{
                // var date=new URLSearchParams();
                // date.append('uname','this.uname');
                // date.append('upwd','this.upwd');
                // console.log(date);
                var regTime = new Date().toLocaleString('chinese',{hour12:false});
                    regTime = regTime.replace(/\//g,"-");
                var res=this.qs.stringify({
                    uname:this.uname,
                    upwd:this.upwd,
                    regTime:regTime,
                })
                console.log(res)
                this.axios.post("reg",
                    res
                ).then(result=>{
                        if(result.data.code==1){
                            this.$alert("注册成功,点击确定跳转登录页面","提示",{confirmButtonText:'确定'}).then(success=>{
                                this.$router.push("/login");
                            }).catch(err=>{
                                location.reload();
                            });
                        };
                    });
            };
        },
        pwdAuth(){          //即时验证确认密码框输入是否一致
            if(this.pwd==this.upwd){
                this.msgPwd="确认密码一致";
                this.isTrue={     
                    'int-focus':true,
                    'int-success':true,
                    'int-err':false, 
                }
            }else{
                this.msgPwd="两次输入密码不一致";
                this.isTrue={     
                    'int-focus':true,
                    'int-success':false,
                    'int-err':true, 
                }
            };
        },
        pwdBlur(){             //确认密码框失去焦点验证两次密码是否一致
            if(this.pwd==this.upwd&&this.pwd!=""){
                this.msgPwd="确认密码一致";
                this.isTrue={     
                    'int-focus':true,
                    'int-success':true,
                    'int-err':false, 
                };
                this.pwdIstrue=true;
            }else{
                this.msgPwd="两次输入密码不一致";
                this.isTrue={     
                    'int-focus':true,
                    'int-success':false,
                    'int-err':true, 
                };
                this.pwdIstrue=false;
            };
        },
        upwdBlur(){     //密码框失去焦点
            this.styleUpwd={
                'upwd-focus':false,
                'dis-none':true,
            };
            this.spanStyle={
                'span-sp':true,
                'dis-none':false,
            };
            if(this.upwd==""){
                this.eyeStyle={
                    display:"none",
                };
            };
            this.upwdAuth="大写字母+小写字母+数字+符号+8位以上";
            if((this.upwd.length>=8)&&this.int5==false&&this.int6==false){
                this.upwdIstrue=true;
            };
        },
        unameBlur(){        //用户框失去焦点
            var reg=/^1[3-8]\d{9}$/     //创建正则表达式验证格式
            if(!reg.test(this.uname)){
                this.msgUname="请输入正确的手机格式"
                this.styleInt={
                    'int-focus':true,
                    'int-success':false,
                    'int-err':true,
                }
                this.unameIstrue=false;
            }else{
                this.msgUname="手机格式正确"
                this.styleInt={
                    'int-focus':true,
                    'int-success':true,
                    'int-err':false,
                };
                this.unameIstrue=true;
            }
        },
        pwdFocus(){       //确认密码框获得焦点
            this.msgPwd="请输入确认密码";
            this.isTrue={
                'int-focus':true,
                'is-success':false,
                'is-err':false,
            };
        },
        upwdFocus(){    //密码框获得焦点
            this.msgUpwd="8-20位字符，支持字母、数字、常用标点符号(区分大小写)";
            this.styleUpwd={    //显示密码格式提示
                'upwd-focus':true,
                'dis-none':false,
            };
            this.spanStyle={    //隐藏密码强度提示
                'span-sp':false,
                'dis-none':true,
            };
            if(this.upwd!=""){
                this.eyeStyle={
                    display:"block",
                }
            };
        },
        unameFocus(){   //用户框获得焦点
            this.msgUname="请输入手机号";
            this.styleInt={         //显示用户输入格式
                'int-focus':true,
                'int-success':false,
                'int-err':false,
            }
        },
        changeImg(){    //切换验证码图片
            this.imgNum++;
            if(this.imgNum>6){
                this.imgNum=1;
            }
        },
    },
    // mounted(){    
    //     this.widthout=window.outerWidth;
    //     console.log(this.widthout)
    // },
}
</script>
<style>
    @import url("../assets/css/reg.css");
</style>
