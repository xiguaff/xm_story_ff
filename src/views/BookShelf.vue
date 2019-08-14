<template>
    <div>
    <my-nav/>
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
                    <div><img src="image/details/01.jpg" alt=""></div>
                    <div>
                        <p>用户名：<span>西瓜西瓜</span></p>
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
                        <tr>
                            <td><input type="checkbox"><span style="color:#888">[古言]</span><p><a href="javascript:;">娇妻驾到之世子倾城娇妻驾到之世子倾城</a></p></td>
                            <td>329、大婚（结局篇）</td>
                            <td>轻轻子衿</td>
                            <td>2019-07-27 04:19 <button>删除</button></td>
                        </tr>
                    </tbody>
                </table>
                <div class="shlef-bottom">
                    <div>
                        <input type="checkbox" id="int"><label for="int" style="margin-left:10px;"><span style="cursor:pointer">全选</span></label><span style="margin-left:10px;cursor:pointer">删除</span>
                    </div>
                    <div>
                        <img src="image/left.png" alt="" style="vertical-align:middle;cursor:pointer">
                        <div>
                            <span style="margin-left:6px;" class="active">1</span>
                            <span style="margin-left:6px;">2</span>
                        </div>
                        <img src="image/right.png" alt="" style="vertical-align:middle;margin-left:6px;cursor:pointer">
                        <span>共1页,到第</span>
                        <input type="text" value="1">页
                        <a href="javascript:;">GO</a>
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
                            <span>用户名：</span><span>17664056304</span>
                        </div>
                        <div>
                            <span>昵称：</span><span>17664056304</span><a href="javascript:;">修改</a>
                        </div>
                        <div>
                            <span>注册时间：</span><span>2019-08-05 12:40</span>
                        </div>
                        <div>
                            <span>头像：</span>
                            <div><img src="image/details/01.jpg" alt=""></div>
                            <a href="javascript:;">修改</a>
                        </div>
                        <div>
                            <span>绑定手机：</span><span>17664056304</span><a href="javascript:;">修改</a>
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
        }
    },
    methods:{
        oneActive(){
            this.isAct=!this.isAct;
        },
        twoActive(){
            this.twoAct=!this.twoAct;
        }
    }
}
</script>
<style>
@import url("../assets/css/bookshelf.css");
</style>