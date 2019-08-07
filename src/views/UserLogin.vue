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
                        <span>请输入用户名和密码</span>
                        <input type="text" placeholder="手机号">
                        <input type="password" placeholder="密码">
                        <input type="text" placeholder="验证码" id="int3">
                        <span id="span2">换一换</span>
                        <span><img src="image/yan1.png" alt="" id="img1"></span>
                        <button id="btn">登录</button>
                        <p><router-link to="/reg">免费注册></router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
@import url("../assets/css/userLogin.css");
</style>
