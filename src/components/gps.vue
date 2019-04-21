<template>
  <div style="width:100%;height:100%">
    <div class="warp-gps">
       <img src="../assets/img/gps.png">
       <div class="linear">
          <div class="one">
              <div class="arrow" @click="setNextPage(17,33)">
                  <img src="../assets/img/linear/统一箭头.png">
              </div>
              <div class="arrow" style="margin-left:1.6rem;" @click="setNextPage(18,34)">
                  <img src="../assets/img/linear/统一箭头.png">
              </div>
          </div>
          <div class="two">
               <div class="arrow" @click="setNextPage(16,32)">
                  <img src="../assets/img/linear/统一箭头.png">
              </div>
          </div>
          <div class="thirteen">
               <div class="arrow" @click="setNextPage(5,7)">
                  <img src="../assets/img/linear/统一箭头.png">
              </div>
          </div>
          <div class="three">
              <div class="arrow" @click="setNextPage(15,31)">
                  <img src="../assets/img/linear/统一箭头.png">
              </div>
        </div>
          <div class="four">
            <div class="arrow" @click="setNextPage(14,30)">
                  <img src="../assets/img/linear/统一箭头.png">
              </div>
          </div>
          <div class="five">
              <div class="arrow" @click="setNextPage(13,25)">
                  <img src="../assets/img/linear/统一箭头.png">
              </div>
          </div>
          <div class="six">
              <div class="arrow" @click="setNextPage(2,1)">
                  <img src="../assets/img/linear/统一箭头.png">
              </div>
          </div>
          <div class="seven">
            <div class="arrow" @click="setNextPage(3,2)">
                  <img src="../assets/img/linear/统一箭头.png">
              </div>
          </div>
          <div class="eight">
            <div class="arrow" @click="setNextPage(19,35)">
                  <img src="../assets/img/linear/统一箭头.png">
              </div>
          </div>
          <div class="nine">
            <div class="arrow" @click="setNextPage(20,36)">
                  <img src="../assets/img/linear/统一箭头.png">
              </div>
          </div>
          <div class="ten">
            <div class="arrow" @click="setNextPage(1,1)">
                  <img src="../assets/img/linear/统一箭头.png">
              </div>
          </div>
          <div class="eleven">
            <div class="arrow" @click="setNextPage(21,37)">
                  <img src="../assets/img/linear/统一箭头.png">
              </div>
          </div>
          <div class="twelve">
            建议从县衙大门开始参观
          </div>
        </div> 
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{

      }
  },
  methods:{
      setNextPage(linear,look){
        sessionStorage.setItem('page',linear);
        sessionStorage.setItem('next',look);
        sessionStorage.setItem('isTrue',1);
        this.$router.push('linear');
      }
  }
}
</script>

<style>
.warp-gps{
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(202, 159, 104,0.84)
}
.warp-gps img{
    /*width: auto;*/
    height: 99%;
  
}
.warp-gps .linear{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
}

.warp-gps .linear .arrow{
    width: 0.8rem;
    height: 0.9rem;
    display: inline-block;
}

.warp-gps .linear .one{
    margin-top: 5.3rem;
    padding-left: 8.2rem;
}
.warp-gps .linear .two{
    margin-top: 1.7rem;
    padding-left: 8.2rem;
}
.warp-gps .linear .three{
    margin-top: 1.1rem;
    padding-left: 8.2rem;
}
.warp-gps .linear .four{
    padding-left: 8.2rem;
}
.warp-gps .linear .five{
    margin-top: 0.3rem;
    padding-left: 8.2rem;
}
.warp-gps .linear .six{
    margin-top: 3.6rem;
     padding-left: 8.2rem;
}
.warp-gps .linear .seven{
    margin-top: 0.5rem;
    padding-left: 4.3rem;
}
.warp-gps .linear .eight{
    margin-top: -0.3rem;
    padding-left: 9.78rem;
}
.warp-gps .linear .nine{
    margin-top: -0.3rem;
    padding-left: 9.18rem;
}
.warp-gps .linear .ten{
     margin-top: -0.8rem;
    padding-left:8.2rem;
}
.warp-gps .linear .eleven{
    margin-top: -1rem;
    padding-left: 9.8rem;
}
.warp-gps .linear .twelve{
    position: fixed;
    bottom: 0;
    /*right:0;*/
    color: #ff0000;
}
.warp-gps .linear .thirteen{
    position: absolute;
    margin-top: -1.8rem;
    padding-top: 0.8rem;
    padding-left: 5.2rem;
}
</style>

