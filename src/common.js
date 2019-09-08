export default {
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
                    console.log(uname,nickName)
                    sessionStorage.setItem("uname","xxmy"+uname);
                    sessionStorage.setItem("nickName",nickName)
                    this.$alert("登录成功","提示",{confirmButtonText:'确定'}).then(active=>{ 
                        this.log=null;
                        this.$store.getters.getUname;
                        location.reload();
                    }).catch(err=>{
                        this.log=null;
                        location.reload();
                    });
                }else{
                    this.$message.error("用户名或密码错误");
                }
            });
        }
    },
    out(){
        this.axios.get("outlogin").then(result=>{
            if(result.data.code==1){
                if(this.$route.path==="/center"){
                    this.$router.push("/");
                }else{
                    location.reload();
                }
                this.$message("退出成功！");
                sessionStorage.removeItem("uname");
            };
        });
    }
 }