<template>
    <div style="width:100%;height:100%">
        <transition name="fade">
            <div class="warp" v-show="show">
                <div class="warp-head">
                    <div class="head-img">
                        <img src="../assets/img/登录头像.png">
                    </div>
                    <p>用户注册</p>
                    <div class="register-input">
                        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
                            <FormItem prop="name">
                                <input class="name" placeholder="用户名：" v-model="formValidate.name"></input>
                            </FormItem>
                            <FormItem prop="rPassword">
                                <input class="name1" type="password" placeholder="密 码：" v-model="formValidate.rPassword"></input>
                            </FormItem>
                            <FormItem prop="password">
                                <input class="name1" type="password" placeholder="确认密码：" v-model="formValidate.password"></input>
                            </FormItem>
                        </Form>
                        <div class="button" @click="register">注册</div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
const nameValidate = (rule, value, callback) => {
    let reg = /^1(3|4|5|7|8)\d{9}$/;
    if (value == '') {
        return callback(new Error('请输入手机号'));
    } else if (!reg.test(value)) {
        return callback(new Error('请输入正确的手机号'));
    } else {
        callback();
    }
}
 const rPasswordValidate =(rule,value,callback) =>{
        if(value == ''){
            return callback(new Error('请输入密码'));
        }else if(value.length < 6){
            return callback(new Error('密码不能小于6位数'));
        }else{
            callback();
        }
    }
export default {
    data() {
        const passwordValidate = (rule, value, callback) => {
            if (value != this.formValidate.rPassword) {
                return callback(new Error('两次密码输入不一致'));
            } else if(value.length <6){
                return callback(new Error('密码不能小于6位'))
            }else{
                 callback()
            }
        }
        return {
            formValidate: {
                name: '',
                password: '',
                rPassword: ''
            },
            ruleValidate: {
                name: [
                    { required: true, validator: nameValidate, trigger: 'blur' }
                ],
                password: [
                    { required: true, validator: passwordValidate, trigger: 'blur' }
                ],
                rPassword: [
                    { required: true, validator: rPasswordValidate, trigger: 'blur' }
                ]
            },
            show: true
        }
    },
    created() {

    },
    methods: {
        register() {
            this.$refs.formValidate.validate((valid) => {
                if (valid) {
                    this.$http.get('/api/front/member/create.json', {
                        params: {
                            account: this.formValidate.name,
                            passWord: this.formValidate.password
                        }
                    }).then(res => {
                        if (res.status == 200 && res.data.success) {
                            this.$router.push('index');
                            this.$Message.success('注册成功');
                        } else {
                            this.$Message.error(res.data.message);
                        }
                    }).catch(err => {
                        if (err) {
                            this.$Message.error(err);
                        }
                    })
                }
            })

        }
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

{
    opacity: 0;
}
.ivu-form .ivu-form-label-right{
    width: 100%;
}
.warp .warp-head {
    position: absolute;
    top: 20%;
    /*left: 37%;*/
    width: 100%;
}

.warp .warp-head .head-img {
    width: 2.7rem;
    height: 3.9rem;
    margin: 0 auto;
}

.warp .warp-head .head-img img {
    width: 100%;
    height: 100%;
}

.warp .warp-head p {
    color: rgb(89, 46, 27);
    font-weight: bold;
    text-align: center;
    font-size: 0.7rem;
    margin-top: 5px;
}

.warp .register-input {
    text-align: center;
    padding: 0 2rem;
}

.warp .register-input .name1 {
    margin: 10px 0;
    margin-left: -7px;
    font-size: 0.5rem;
    font-weight: 500;
    height: 1.3rem;
    padding: 0 0 0 15px;
    width: 100%;
    border-radius: 7px;
    border: 2px solid rgb(170, 130, 96);
    color: #6a6f77;
    outline: 0;
    background-color: transparent;
    text-decoration: none;
    -web-kit-appearance: none;
    -moz-appearance: none;
}

.warp .register-input .name {
    margin: 10px 0;
    font-size: 0.5rem;
    font-weight: 500;
    height: 1.3rem;
    padding: 0 0 0 15px;
    width: 100%;
    border-radius: 7px;
    border: 2px solid rgb(170, 130, 96);
    color: #6a6f77;
    outline: 0;
    background-color: transparent;
    text-decoration: none;
    -web-kit-appearance: none;
    -moz-appearance: none;
}

input::-webkit-input-placeholder {
    color: rgb(96, 54, 33);
    font-family: Microsoft YaHei;
}

.warp .register-input .button {
    background-color: rgb(75, 32, 16);
    padding: 5px 0;
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
    border-radius: 4px;
    color: #fff;
    font-size: 0.4rem;
    margin: 30px 0 0 0;
}
</style>




