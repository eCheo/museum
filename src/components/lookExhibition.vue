<template>
  <div style="width:100%;height:100%">
    <div class="warp">
        <div class="content">
            <div class="looks">参观展览</div>
            <div class="look-input">
                <input class="name" v-model="name" placeholder="姓名："/>
                <input class="name1" v-model="phone" placeholder="联系电话：" />
                <textarea class="name2" type="textarea" placeholder="备注："></textarea>
            </div>
            <div class="button" @click="goTo">参加展览</div>
            <!--<div class="box-bottom">
                <span>继续前进</span>
                <div class="off">
                    <img src="../assets/img/开关.png">
                </div>
            </div>-->
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:'',
            phone:'',
        }
    },
    methods:{
        goTo(){
            if(this.name == ''){
                this.$Message.error('请输入联系人姓名');
            }else if(this.phone == ''){
                this.$Message.error('请输入联系人电话');
            }else{
                this.$Message.success('参加展览成功');
                this.$router.push('lookArrange');
            }
        }
    }
}
</script>

<style>


.warp .content{
    padding: 20px 20px 0 20px;
    text-align: center;
     height: 95%; 
}
.warp .content .looks{
    border: 1px solid rgb(89, 46, 27);
    padding:0 10px;
    width: 5rem;
    display: inline-block;
    border-radius: 29px;
    color: rgb(89, 46, 27);
    font-size: 0.6rem;
    font-weight: 100;
    margin: 2rem 0;
}
.warp .look-input .name{
    margin: 10px 0;
    font-size: 0.5rem;
    font-weight: 500;
    height: 1.3rem;
    padding: 0 0 0 15px;
    width: 78%;
    border-radius:7px;
    border:2px solid rgb(246, 226, 201);
    color:#6a6f77;
    outline: 0;
    background-color: rgb(246, 226, 201);
    text-decoration:none;
    -web-kit-appearance:none;
    -moz-appearance: none;
}
.warp .look-input .name1{
    margin: 10px 0;
    font-size: 0.5rem;
    font-weight: 500;
    height: 1.3rem;
    padding: 0 0 0 15px;
    width: 78%;
    border-radius:7px;
    border:2px solid rgb(246, 226, 201);
    color:#6a6f77;
    outline: 0;
    background-color: rgb(246, 226, 201);
    text-decoration:none;
    -web-kit-appearance:none;
    -moz-appearance: none;
}
.warp .look-input .name2{
    margin: 10px 0;
    font-size: 0.5rem;
    font-weight: 500;
    height: 5.3rem;
    padding: 10px 0 0 15px;
    width: 78%;
    border-radius:7px;
    border:2px solid rgb(246, 226, 201);
    color:#6a6f77;
    outline: 0;
    background-color: rgb(246, 226, 201);
    text-decoration:none;
    -web-kit-appearance:none;
    -moz-appearance: none;
}
input::-webkit-input-placeholder{
  color: rgb(96, 54, 33);
  font-family: SimHei;
}
.warp .look-input .name2::-webkit-input-placeholder{
    color: rgb(96, 54, 33);
  font-family: SimHei;
}

.warp .content .button{
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

.warp .content .box-bottom{
    text-align: right;
    margin-top: 10px;
    position: fixed;
    bottom: 12px;
    right: 24px;
}
.warp .content .box-bottom .off{
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
}
.warp .content .box-bottom .off img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
    cursor: pointer;
}
.warp .content .box-bottom  span{
    vertical-align: middle;
    cursor: pointer;
    font-size: 0.5rem;
    color: rgb(82, 40, 25)
}
</style>
