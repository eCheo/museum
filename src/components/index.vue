<template>

    <div style="width:100%;">
        <transition name="fade">
        <div class="warp" v-show="show">
            <div class="warp-head">
                <div class="head-img">
                    <img src="../assets/img/登录头像.png">
                </div>
                <p>用户登录</p>
                <div class="login-input">
                    <input class="name" placeholder="用户名：" v-model="name"></input>
                    <input class="name1" type="password" placeholder="密 码：" v-model="password"></input>
                    <div class="button" @click="login">登录</div>
                </div>
                 <div class="register" @click="$router.push('register')">没有账号？<span>立即注册</span></div>
            </div>
            
        </div>
        </transition>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:null,
            password:null,
             show: true
        }
    },
    created(){

    },
    methods:{
        login(){
            this.$http.get('/api/front/member/login.json',{
                params:{
                    account:this.name,
                    passWord:this.password
                }
            }).then(res =>{
                if(res.status == 200 && res.data.success){
                    this.$router.push('vcome');
                }else{
                    this.$Message.error(res.data.message);
                }
            }).catch(err =>{
                if(err){
                    this.$Message.error(err);
                }
            })
        },
     
    }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.register{
    width:100%;
    position: absolute;
    top: 17rem;
    text-align: center;
    color: rgb(89, 46, 27);
    font-size: 0.5rem;
    margin-top: 10px;
    cursor: pointer;
}
.register span{
    color: rgb(123, 9, 10);
}
.warp .warp-head {
    position: absolute;
    top: 20%;
    /*left: 37%;*/
    width: 100%;
    height: 100%;
}
.warp .warp-head .head-img{
    width: 2.7rem;
    height: 3.9rem;
    margin: 0 auto;
}
.warp .warp-head .head-img img{
    width: 100%;
    height: 100%;
}
.warp .warp-head p{
    color: rgb(89, 46, 27);
    font-weight: bold;
    text-align: center;
    font-size: 0.7rem;
    margin-top: 5px;
}
.warp .login-input{
    text-align:center;
    padding: 0 1rem;
}
.warp .login-input .name1{
    margin: 10px 0;
    margin-left: -7px;
     font-size: 0.5rem;
    font-weight: 500;
    height: 1.3rem;
    padding: 0 0 0 15px;
    width: 78%;
    border-radius:7px;
    border:2px solid rgb(170, 130, 96);
    color:#6a6f77;
    outline: 0;
    background-color: transparent;
    text-decoration:none;
    -web-kit-appearance:none;
  -moz-appearance: none;
}
.warp .login-input .name{
    margin: 10px 0;
    font-size: 0.5rem;
    font-weight: 500;
    height: 1.3rem;
    padding: 0 0 0 15px;
    width: 78%;
    border-radius:7px;
    border:2px solid rgb(170, 130, 96);
    color:#6a6f77;
    outline: 0;
    background-color: transparent;
    text-decoration:none;
    -web-kit-appearance:none;
    -moz-appearance: none;
}
input::-webkit-input-placeholder{
  color: rgb(96, 54, 33);
  font-family: Microsoft YaHei;
}

.warp .login-input .button{
    background-color: rgb(75, 32, 16);
    padding: 5px 0;
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
    border-radius: 4px;
    color: #fff;
    font-size: 0.4rem;
    margin: 30px 33px 0 33px;
}
</style>




