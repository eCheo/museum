<template>
  <div id="app">
    <transition name="fade" >
    <router-view />
    </transition>
  </div>
</template>

<script>
//  var slideUp = Vue.component('slideUp', {
//     template: '#app',
//     methods: {
//         enter: function enter(el, done) {
//             var tl = new TimelineMax({
//                 onComplete: done
//             });

//             tl.set(el, {
//                 y: window.innerWidth * 1.5,
//                 scale: 0.8,
//                 transformOrigin: '50% 50%'
//             });

//             tl.to(el, 0.5, {
//                 y: 0,
//                 ease: Power4.easeOut
//             });

//             tl.to(el, 1, {
//                 scale: 1,
//                 ease: Power4.easeOut
//             });
//         },
//         leave: function leave(el, done) {
//             TweenMax.to(el, 1, {
//                 y: window.innerHeight * -1.5,
//                 ease: Power4.easeOut,
//                 onComplete: done
//             });
//         }
//     }
// });
export default {
 
  name: 'App',
  data(){
    return{
      clientWidth:document.documentElement.clientWidth,
    }
  },
  created(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 13.6 +'px';
  },
  mounted(){
    window.onresize = () =>{
      return (() =>{
        window.screenWidth = document.documentElement.clientWidth;
        this.clientWidth = window.screenWidth;
      })()
    }
  },
  watch:{
    clientWidth(){
         setTimeout(()=>{
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 13.6 +'px';
         },200)
      
     
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity ease-in-out .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
  #app{
    height: 100%;
    width: 100%;
  }
   html {
  height: 100%;
    width: 100%;
}
h3{
    padding: 0;
    margin: 0;
    font-size: 0.6rem;
    color: #333;
}
img{
    width: 100%;
    height: 100%;
}
body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: SimHei;
}
ul li{
    list-style: none;
    margin: 0;
    padding: 0;
}
.warp {
    background: url('./assets/img/统一背景.png') top center no-repeat;
    width: 100%;
    height: 100%;  
    position: fixed;
    top: 0;
    overflow: hidden;
}
</style>
