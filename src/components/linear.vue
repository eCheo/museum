<template>
  <div style="width:100%;height:100%">
    <div class="warp-linear">
        <transition name="fade">
        <div class="linear" v-for="(item,index) in linearList" :key="index" v-if="linearIndex == item.page">
            <img :src="item.img">
             <div class="linear-click" @click="nextLook(item.page)">
                <img  :class="item.class" src="../assets/img/linear/箭头.png" >
            </div>
          </div>
        </transition>
            
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            linearIndex:1,
            page:Number(sessionStorage.getItem('page')),
            next:Number(sessionStorage.getItem('next')),
            linearList:[
                {
                    img:require('../assets/img/linear/1县衙大门.png'),
                    page:1,
                    class:'arrow-one'
                },
                {
                    img:require('../assets/img/linear/2仪门全图.png'),
                    page:2,
                     class:'arrow-two'
                },
                {
                    img:require('../assets/img/linear/3牢狱全图.png'),
                    page:3,
                     class:'arrow-three'
                },
                {
                    img:require('../assets/img/linear/4牢狱全图.png'),
                    page:4,
                     class:'arrow-four'
                },
                {
                    img:require('../assets/img/linear/5督捕厅全图.png'),
                    page:5,
                     class:'arrow-five'
                },
                 {
                    img:require('../assets/img/linear/6司法史科东（右）全图.png'),
                    page:6,
                     class:'arrow-six'
                },
                {
                    img:require('../assets/img/linear/7司法史科西（左）全图.png'),
                    page:7,
                     class:'arrow-seven'
                },
                {
                    img:require('../assets/img/linear/8督捕厅二进院全图.png'),
                    page:8,
                     class:'arrow-eight'
                },
                {
                    img:require('../assets/img/linear/9押解刑具南全图.png'),
                    page:9,
                     class:'arrow-nine'
                },
                {
                    img:require('../assets/img/linear/10押解刑具北全图.png'),
                    page:10,
                     class:'arrow-ten'
                },
                {
                    img:require('../assets/img/linear/11二进院东立面全面.png'),
                    page:11,
                     class:'arrow-eleven'
                },
                {
                    img:require('../assets/img/linear/12二进院西立面全图.png'),
                    page:12,
                     class:'arrow-twelve'
                },
                {
                    img:require('../assets/img/linear/13亲民堂全图.png'),
                    page:13,
                     class:'arrow-one'
                },
                 {
                    img:require('../assets/img/linear/14门宅全图.png'),
                    page:14,
                     class:'arrow-fourteen'
                },
                 {
                    img:require('../assets/img/linear/15二堂全图.png'),
                    page:15,
                     class:'arrow-one'
                },
                 {
                    img:require('../assets/img/linear/16内宅全图.png'),
                    page:16,
                     class:'arrow-one'
                },
                {
                    img:require('../assets/img/linear/17大仙楼全图.png'),
                    page:17,
                     class:'arrow-one'
                },
                {
                    img:require('../assets/img/linear/18后花园全图.png'),
                    page:18,
                     class:'arrow-eighteen'
                },
                {
                    img:require('../assets/img/linear/19戏楼全图.png'),
                    page:19,
                     class:'arrow-one'
                },
                {
                    img:require('../assets/img/linear/20彰瘅亭全图.png'),
                    page:20,
                     class:'arrow-one'
                },
                {
                    img:require('../assets/img/linear/21钟楼全图.png'),
                    page:21,
                     class:'arrow-twentyone'
                },
            ],
            style:'',
            isStyle:true
        }
    },
    created(){
        // if(this.page){
            this.linearIndex = this.page || 1;
            // this.$refs.arrow.style='margin-top:5.8rem;';
            //     setInterval(()=>{
            //     this.isStyle = !this.isStyle;
            // },700)
           
            
        // }
    },
    methods:{
        nextLook(page){
            if(page == 8 || page == 9){
                this.linearIndex +=1; 
            }else{
                sessionStorage.setItem('linear',page);
                sessionStorage.setItem('look',this.next+1);
                this.$router.push('look');
            }
            
        }
    },
    computed: {
        linear(){

        }
    }
}
</script>

<style>
.warp-linear{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(232,196, 144,0.63);
    
}
.warp-linear .linear{
   position: relative;
    top: -7px;
}
.warp-linear .linear img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
.warp-linear .linear  .linear-click{
    width: 100%;
    height: 8rem;
    position: absolute;
    top: 42%;
    text-align: center;
}
.warp-linear .linear  .linear-click img{
     width: 1rem;
    height: 1.5rem;
     margin-top: 6rem;
}
 .warp-linear .linear .arrow-eleven{
     margin-left: 2rem;
}
.warp-linear .linear .arrow-three{
    margin-left: -6rem; 
}
.warp-linear .linear .arrow-twelve{
    margin-left: -2rem;
}
.warp-linear .linear .arrow-fourteen{
     margin-left: -0.8rem;
}
.warp-linear .linear .arrow-eighteen{
    margin-left: -0.7rem;
}
.warp-linear .linear .arrow-twentyone{
    margin-left: 3rem;
}


    .warp-linear .linear  .linear-click img {
            animation: myfirst 2s infinite;
        }
        
        @keyframes myfirst {
            0% {
                transform: translate(0px, 0px);
                opacity: 0;
            }
            50% {
                transform: translate(0px, -10px);
                opacity: 1;
            }
            100% {
                transform: translate(0px, 0px);
                opacity: 0;
            }
        }
</style>
