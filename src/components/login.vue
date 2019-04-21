<template>
  <div style="width:100%;height:100%">
    <div class="warp-login">
        <div  class="content" >
            <div :class="show==true?'home-one2':'home-one'" >
            <img src="../assets/img/首页 标题.png">
            </div>
            <div :class="show==true?'home-two2':'home-two'">
                <img src="../assets/img/首页主图.png">
            </div>
            <div :class="show==true?'home-tree2':'home-tree'">
                <img src="../assets/img/首页 文化体现.png">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
        show:false
      }
  },
  beforeCreate () {
        setTimeout(()=>{
          this.$router.push('index');
      },2000)
     
      
  },
  created(){
  
  },
  mounted (){
        setTimeout(()=>{
            this.show = true;
      },100)
  }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}

.warp-login {
    position: relative;
    background: url('../assets/img/首页背景.png') top center no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;  
    text-align: center;
    top: -1px;
}
.warp-login .content{
    padding: 20px 20px 0 20px;
    text-align: center;
    height: 95%; 
}

.warp-login .home-one{
    position: relative;
   width: 8rem;
    height: 11rem;
    left:-100px;
    transition:left ease-in-out 0.5s;
}
.warp-login .home-one2{
    position: relative;
    width: 8rem;
    height: 11rem;
    left:0;
    transition:left ease-in-out 0.5s;
    
}
.warp-login .home-one2 img{
     margin-top: -50px;
}
.warp-login .home-one img{
    margin-top: -50px;
}
   
.warp-login .home-two{
    width: 3rem;
    height: 3rem;
    margin-top: -83px;
    padding: 0 6px;
    display: inline-block;
    transition: all ease-in-out 0.5s;
}
.warp-login .home-two2{
     width: 12rem;
    height: 11rem;
    margin-top: -83px;
    padding: 0 6px;
    display: inline-block;
    transition: all ease-in-out 0.5s;
}
.warp-login .home-tree{
    position: fixed;
    width:100%;
    bottom: 0;
    right: -247px;
    transition: right ease-in-out 0.5s;
}
.warp-login .home-tree2{
    position: fixed;
    width:100%;
    bottom: 0;
    right: 0;
    transition: right ease-in-out 0.5s;
}
</style>
