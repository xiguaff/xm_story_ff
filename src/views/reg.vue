<template>
    <div>
    <div class="reg-cont">
        <div><router-link to="/"><img src="image/index/logo.png" alt=""></router-link></div>
        <div class="reg">
            <div><h3>会员注册</h3></div>
            <div class="reg-content">
                <div class="reg-int">
                    <div>
                        <span>手机号</span><input type="text">
                    </div>
                    <div>
                        <span>密码</span><input type="text">
                    </div>
                    <div>
                        <span>确认密码</span><input type="text">
                    </div>
                    <div>
                        <span>图片验证码</span><input type="text"><span><img src="image/reg/ImageCode.png" alt=""></span><span>换一换</span>
                    </div>
                    <div>
                        <label for="s1"><input type="checkbox"  id="s1"><span>我已阅读并同意</span></label><span>《潇湘书院用户协议》</span>
                    </div>
                    <button>确定注册</button>
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
export default {
    
}
</script>
<style>
    @import url("../assets/css/reg.css");
</style>
