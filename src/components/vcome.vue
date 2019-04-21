<template>
  <div style="width:100%;height:100%">
    <div class="warp">
        <div class="content">
             <Tooltip content="欢迎参观" placement="right" :always='isTrue' theme="light" >
                        <div class="box-head">
                            <img src="../assets/img/登录头像.png">
                        </div>
                    </Tooltip>
            <div class="box-one">
               
                <div class="one-title">
                    <span style="vertical-align: middle;">尊敬的先生/女士:</span>
                    <p>参观路线定制为导游式路线，保证用户合理参观遥县衙博物馆，拥有更好的体验。</p>
                    <p>接下来，看完参观攻略及亮点，就可进入平面布局图，跟随页面指示，扮演县太爷的身份开始进入县衙当地古代生活或断案氛围中。</p>
                    <p>最后，祝大家参观愉快！</p>
                </div>
            </div>
            <div class="box-one">
                <!--<div class="look">参观攻略</div>-->
                 <div class="one-title">
                    <p>在平遥古城县衙大堂前，县太爷升堂表演已成为当地弘扬廉政文化，开展廉政教育的有效形式。</p>
                    <p>平遥县衙太爷升堂断案表演时间：</p>
                 </div>
                <div class="box-table">
                    <div class="table-top">
                        <div>周一至周五</div>
                        <div>10:00</div>
                        <div>11:30</div>
                        <div>15:30</div>
                        <div></div>
                    </div>
                    <div class="table-bottom">
                        <div>周六 / 周日</div>
                        <div>10:00</div>
                        <div>11:30</div>
                        <div>15:30</div>
                        <div>16:00</div>
                    </div>
                </div>
            </div>
            <div class="box-one">
                 <!--<div class="look">参观亮点</div>-->
                 <p>一位“县令”操着抑扬顿挫的北方音腔升堂断案，“和谐社会”“双规”等现代热词不时“穿越到表演现场”，引得围观群众哄然大笑。清政为民，惩恶扬善却是每场表演不变的主题</p>
                 <p>其中，主要区域部分，即牢狱，督捕厅和亲民堂重点展示以及介绍相关的历史，让大家进一步深度了解平遥县博物馆的历史来源</p>
            </div>
            <div class="box-bottom" @click="next">
                <span>继续前进</span>
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
    data(){
        return{
            isTrue:true,
        }
    },
    methods:{
        next(){
            this.isTrue=false;
            setTimeout(()=>{
                 sessionStorage.setItem('page',1);
                this.$router.push('linear');
            },100)
           
        }
    }
}
</script>

<style>
.ivu-poptip-body{
    padding: 0;
}
.warp {
    background: url('../assets/img/统一背景.png') top center no-repeat;
    width: 100%;
    height: 100%;  
}

.warp .content{
    padding: 20px 20px 0 20px;
    text-align: center;
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
    color: rgb(82, 40, 25);
}
.warp .content .box-one{
    background-color: rgb(246, 226, 201);
    padding:10px;
    margin-top: 20px;
    border-radius: 4px;
    font-size: 0.4rem;
    text-align: center;
    position: relative;
}
.warp .content .box-one p{
    text-indent: 1rem;
    text-align: left;
}
.warp .content .box-one .one-title{
    text-align: left;
}
.warp .content   .box-head{
    width: 1rem;
    height: 1rem;
    display: inline-block;
    padding-right: 0.2rem;
 
}
.warp .content   .box-head img{
    width: 83%;
    height: 100%;
}
.warp .content .box-one .one-title p{
    text-indent:1rem;
    text-align: left;
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
    margin-bottom: 15px;
}
.warp .content .box-one .box-table{
    background-color: rgb(237, 225, 216);
    padding: 0.2rem 5px;
}
.warp .content .box-one .box-table .table-top{
    padding: 5px 0;
     display: flex;
     font-size: 0.3rem;
    justify-content: space-between;
    border-bottom: 1px solid rgb(219, 209, 205);
}
.warp .content .box-one .box-table .table-top div{
    border-right: 1px solid rgb(219, 209, 205);
    padding-right:0.4rem;
    color: rgb(82, 40, 25);
}
.warp .content .box-one .box-table .table-top div:first-child{
    color: #000;
}
.warp .content .box-one .box-table .table-top div:last-child{
    border-right: none;
}

.warp .content .box-one .box-table .table-bottom{
    padding: 5px 0;
    display: flex;
    font-size: 0.3rem;
    justify-content: space-between;
}
.warp .content .box-one .box-table .table-bottom div{
    border-right: 1px solid rgb(219, 209, 205);
    padding-right:0.4rem;
    color: rgb(82, 40, 25)
}
.warp .content .box-one .box-table .table-bottom div:first-child{
    color: #000;
}
.warp .content .box-one .box-table .table-bottom div:last-child{
    border-right: none;
}
</style>

