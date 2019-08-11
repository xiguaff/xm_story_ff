<template>
    <div>
    <div class="userLogin" id="login_bg" :class="{isBlock:log==1}">
    </div>
    <div class="loginInput" id="login_input" :class="{isBlock:log==1}">
        <span @click="spanHid">Ⅹ</span>
        <div class="input_header">
            <h2>账号登录</h2>
            <table></table>
            <div class="int_list">
                <span>{{loginMsg}}</span>
                <input type="text" placeholder="手机号/邮箱/用户名" v-model="uname">
                <input type="password" placeholder="密码" v-model="upwd">
                <input type="text" placeholder="验证码" v-model="authCode">
                <span @click="changeImg">换一换</span>
                <span><img :src="`image/yan${imgUrl}.png`" alt="" id="img1"></span>
                <button @click="toLogin">登录</button>
                <p><router-link to="/reg">免费注册></router-link></p>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            authCode:"",
            uname:"",
            upwd:"",
        }
    },
    watch:{
        authCode(val){   //将验证框数据传递给父组件
            this.$emit("sendValue",val);
        },
        uname(){
            this.$emit("sendName",this.uname);
        },
        upwd(){
            this.$emit("sendPwd",this.upwd);
        }
    },
    props:["loginMsg","spanHid","log","imgUrl","changeImg","toLogin"]
    // props:{
    //     spanHid:{type:Function},
    //     log:{default:""},
    //     authCode:{default:""},
    //     imgUrl:{default:""},
    //     changeImg:{type:Function},
    //     toLogin:{type:Function}
    // }

}
</script>
