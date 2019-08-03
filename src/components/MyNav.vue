<template>
    <div>
    <div class="top_nav">
        <div class="container">
            <div class="top_info">
                <ul>
                    <li><a href="javascript:;" @click="login">登录</a></li>
                    <li><a href="">注册</a></li>
                    <li>
                        <a href="">我的书架
                            <span class="poin"></span>
                        </a>
                    </li>
                    <li><a href="">联系客服</a></li>
                </ul>
            </div>
            <ul>
                <li>Android版</li>
                <li>IOS版</li>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/list/1" :class="{isActive:num==1}">古代言情</router-link></li>
                <li><router-link to="/list/2" :class="{isActive:num==2}">现代言情</router-link></li>
                <li><router-link to="/list/3" :class="{isActive:num==3}">玄幻仙侠</router-link></li>
                <li><router-link to="/list/4" :class="{isActive:num==4}">浪漫青春</router-link></li>
                <li><router-link to="/list/5" :class="{isActive:num==5}">悬疑</router-link></li>
                <li><router-link to="/list/6" >改编频道</router-link></li>
                <li><router-link to="/list/7">男生频道</router-link></li>
            </ul>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props:{
        login:{tyle:Function},
        num:{default:""},
    }
}
</script>

<style>
    @import url("../assets/css/myNav.css");
</style>
