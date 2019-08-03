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
                <li><a href="">首页</a></li>
                <li><a href="">古代言情</a></li>
                <li><a href="">现代言情</a></li>
                <li><a href="">玄幻仙侠</a></li>
                <li><a href="">浪漫青春</a></li>
                <li><a href="">悬疑</a></li>
                <li><a href="">改编频道</a></li>
                <li><a href="">男生频道</a></li>
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
    }
}
</script>

<style>
    /* @import url("../assets/css/myNav.css"); */
</style>
