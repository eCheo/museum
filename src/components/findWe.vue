<template>
  <div style="width:100%;height:100%">
    <div class="warp">
        <div class="content">
            <div class="lookc">找到我们</div>
            <div class="phone">
                <div class="phone-img">
                    <img src="../assets/img/电话.png">
                </div>
                <span>188 9876 6755</span>
            </div>
            <div class="map">
                <div class="map-img">
                    <img src="../assets/img/地图.png">
                </div>
                <p>地址：平遥县博物馆</p>
            </div>
             <div class="box-bottom" @click="$router.push('gps')">
                <span>再次参观</span>
                <div class="off">
                    <img src="../assets/img/开关.png">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.warp .content{
    padding: 20px 20px 0 20px;
    text-align: center;
     height: 95%; 
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
.warp .content .lookc{
    border: 1px solid rgb(89, 46, 27);
    padding:0 10px;
    width: 5rem;
    display: inline-block;
    border-radius: 29px;
    color: rgb(89, 46, 27);
    font-size: 0.6rem;
    font-weight: 100;
    margin: 3rem 0 2rem 0;
}
.warp .content .phone{
    color: rgb(89, 46, 27);
}
.warp .content .phone .phone-img{
    width:1rem;
    height: 1rem;
    vertical-align: middle;
    display:inline-block;
}

.warp .content .phone span{
    font-size: 0.7rem;
    vertical-align: middle;
}
.warp .content .map{
color: rgb(89, 46, 27);
text-align: center;
margin-top: 1.6rem;
}
.warp .content .map .map-img{
    width: 9rem;
    height: 6rem;
    display: inline-block;
}
.warp .content .map p{
    font-size: 0.5rem;
    margin-top: 10px;
}
</style>
