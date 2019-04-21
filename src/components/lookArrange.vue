<template>
  <div style="width:100%;height:100%">
    <div class="warp">
        <div class="content">
            <div class="box-one">
                <div class="look">参观安排</div>
                <div class="times">
                   <ul class="nav-list">
                       <li class="nav-item">周一至周五</li>
                       <li class="nav-item">
                           <span>09:00-10:00</span>
                           <span>签到入场</span>
                       </li>
                       <li class="nav-item">
                           <span>11:00-11:30</span>
                           <span>签到入场</span>
                       </li>
                       <li class="nav-item">
                           <span>15:00-15:30</span>
                           <span>签到入场</span>
                       </li>
                   </ul>
                </div>
                <div class="times">
                   <ul class="nav-list">
                       <li class="nav-item">周六 / 周日</li>
                       <li class="nav-item">
                           <span>09:00-10:00</span>
                           <span>签到入场</span>
                       </li>
                       <li class="nav-item">
                           <span>11:00-11:30</span>
                           <span>签到入场</span>
                       </li>
                       <li class="nav-item">
                           <span>15:00-15:30</span>
                           <span>签到入场</span>
                       </li>
                       <li class="nav-item">
                           <span>16:00-16:30</span>
                           <span>签到入场</span>
                       </li>
                   </ul>
                </div>
            </div>
            <div class="box-bottom" @click="$router.push('findWe')">
                <span>继续前进</span>
                <div class="off">
                    <img src="../assets/img/开关.png">
                </div>
            </div>
            <div class="master">
                <img src="../assets//img//县太爷 背面.png">
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
.warp .content .master{
    width: 3rem;
    height: 7rem;
    position: absolute;
    bottom: 0;
}

.warp .content .box-one{
    background-color: rgb(246, 226, 201);
    padding:1rem 10px 0.2rem 10px;
    margin-top: 20px;
    border-radius: 4px;
    font-size: 0.4rem;
    text-align: center;
}
.warp .content .box-one .look{
    border: 1px solid rgb(231, 191, 143);
    padding:0 10px;
    width: 5rem;
    display: inline-block;
    border-radius: 29px;
    color: rgb(231, 191, 143);
    font-size: 0.6rem;
    font-weight: 100;
}
.warp .content .box-one .times{

}
.warp .content .box-one .times .nav-list{
    margin: 1rem 0;
}
.warp .content .box-one .times .nav-list .nav-item{
    padding: 0.3rem 0;
    font-size: 0.5rem;
    border: 1px solid rgb(230, 210, 199);
    background-color: rgb(238, 226, 217);
    color: #333;
}
.warp .content .box-one .times .nav-list .nav-item:first-child{
    background-color: rgb(197, 163, 137);
    color: rgb(89, 46, 27);
}
.warp .content .box-one .times .nav-list .nav-item span:first-child{
    margin-right: 0.5rem;
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
