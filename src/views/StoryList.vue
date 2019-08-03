<template>
    <div>
        <my-nav :login="login"></my-nav>
        <list-one></list-one>
        <my-footer></my-footer>
        <login :spanHid="spanHid" :log="log" :imgUrl="imgUrl" :changeImg="changeImg" :toLogin="toLogin" v-on:sendValue="(val)=>this.authCode=val"></login>   <!--父组件接收子组件传递的值-->
    </div>
</template>
<script>
import listOne from '../components/listOne.vue'
export default {
    data(){
        return {
            log:null,    //登录框隐藏切换
            // uname:"",    //双向绑定姓名框的值
            // upwd:"",     //双向绑定密码框的值
            authCode:"", //双向绑定验证框的值
            arr:[1,18,11,33,34,1],    //验证码的答案
            imgUrl:1,       //记录验证码图片切换的张数
        }
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
    },
    components:{listOne}
}
</script>
<style>
    
</style>
