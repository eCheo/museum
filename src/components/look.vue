<template>
  <div style="width:100%;height:100%">
    <div class="warp">
        <div class="content" v-for="(item,index) in lookList" :key="item.page" v-if="pageIndex == item.page">
            <div class="scroll">
                <div class="scroll-page">
                    <div class="page-view" v-for="(page,index) in item.list" :key="index">
                        <transition name="fade" >
                        <div v-if="page.class == undefined" class="page-view1" :class="page.class == undefined?'':'page-view2'">
                            <div :class="page.style==3?'page1-img':'page-img'" :style="page.style==1?'width:5rem':page.style==5?'width:7rem;height:4rem;':page.title=='督捕厅'?'width:7rem;height:6rem;':''">
                                <img :src="page.img" v-if="page.img">
                            </div>
                            <div class="page-title">
                                <span>{{page.title}}</span>
                                <div class="page-icon">
                                    <img style="vertical-align: top;" :src="page.titleIcon">
                                </div>
                            </div>
                            <p :style="page.title == '颈枷'?'margin-top:10px':''">{{page.desc}}</p>
                            <p v-if="page.desc1" :style="page.title=='廉政文化'?'margin-top:5px;':page.style==7?'':'margin-left: 4rem;text-indent:0.6rem'">{{page.desc1}}</p>
                        </div>
                        </transition>
                         <transition name="fade" >
                            <div v-if="page.class == 1" style="text-align:left;" class="page-view1" :class="page.class == 1?'page-view1':'page-view2'">
                                <div style="display:flex;">
                                    <div class="page-img2">
                                        <img :src="page.img">
                                    </div>
                                    <div class="page-title2" style="margin-left">
                                        <div style="display:inline-block;position: absolute;top: 37%;left: 4px">{{page.title}}</div>
                                        <div class="page-icon">
                                            <div class="page2-img" :style="page.style==1?'width:5rem':''">
                                                <img :src="page.titleImg">   
                                            </div>
                                           <div class="page2-icon">
                                            <img style="vertical-align: top;" :src="page.titleIcon">
                                           </div>
                                        </div>
                                    </div>
                                </div>
                                <p>{{page.desc}}</p>
                                <p v-if="page.desc1" style="margin-left: 4rem;">{{page.desc1}}</p>
                            </div>
                         </transition>
                         <transition name="fade" >
                            <div v-if="page.class == 3" style="text-align:left;" class="page-view1" :class="page.class == 3?'page-view1':'page-view2'">
                                <div style="display:flex;justify-content: space-around;padding-top:10px;">
                                    <div class="page-img3" :style="page.title=='射鬼箭'?'width:3.5rem':page.title=='宫刑刀'?'height:7rem':page.title=='婚姻家庭'?'height:7rem':''">
                                        <img :src="page.img">
                                    </div>
                                    <div style="width:50%;">
                                            <div class="page3-img" >
                                                    <img :src="page.titleImg">   
                                                    <div :class='page.style==2?"page3-text":"page2-text1"' :style="page.title=='继承制度'?'margin-left:1.2rem;':''">{{page.title}}</div>
                                                    <div :class='page.style==2?"page3-icon1":"page3-icon"' :style="page.title=='婚姻家庭'?'left:73%':''">
                                                        <img style="vertical-align: top;" :src="page.titleIcon">
                                                    </div>
                                            </div>
                                        <div class="page2-desc" v-if="page.class == 3">
                                            <p >{{page.desc}}</p>
                                        </div>
                                        <p v-else >{{page.desc}}</p>
                                    </div>
                                </div>
                                <p v-if="page.desc1" style="margin-left: 4rem;" >{{page.desc1}}</p>
                            </div>
                         </transition>
                         <transition name="fade" >
                            <div v-if="page.class == 4" style="text-align:left;" class="page-view1" :class="page.class == 4?'page-view1':'page-view2'">
                                <div style="display:flex;">
                                    <div class="page-img2">
                                        <img :src="page.img">
                                    </div>
                                    <div class="page-title2" style="margin-top:0px;">
                                        <div style="display:inline-block;width:1px;position: absolute;top: 37%;left: 4px">{{page.title}}</div>
                                        <div class="page-icon">
                                            <div class="page2-img" :style="page.style==1?'width:5rem':''">
                                                <img :src="page.titleImg">   
                                            </div>
                                           <div class="page2-icon">
                                            <img style="vertical-align: top;" :src="page.titleIcon">
                                           </div>
                                        </div>
                                    </div>
                                </div>
                                <p style="margin-left:2rem" >{{page.desc}}</p>
                                <p v-if="page.desc1"  style="margin-left: 4rem;">{{page.desc1}}</p>
                            </div>
                         </transition>

                          <transition name="fade" >
                            <div v-if="page.class == 6" class="page-view1" style="margin-top:2rem;" >
                            <div :class="page.style==3?'page1-img':'page-img'" :style="page.style==1?'width:5rem':page.style==5?'width:7rem;height:4rem;':''">
                                <img :src="page.img" v-if="page.img">
                            </div>
                            <div class="page-title">
                                <span>{{page.title}}</span>
                                <div class="page-icon">
                                    <img style="vertical-align: top;" :src="page.titleIcon">
                                </div>
                            </div>
                            <p :style="page.title == '颈枷'?'margin-top:10px':''">{{page.desc}}</p>
                            <p v-if="page.desc1" style="margin-left: 4rem;">{{page.desc1}}</p>
                        </div>
                         </transition>
                    </div>
                
                </div>
            </div>
            <div class="box-bottom" @click="getPage(item.page,item.linear)">
                <span v-if="item.linear ==22 && item.page==38"> 结束参观</span>
                <span v-else-if="item.linear && isTrue=='1'"> 结束参观</span>
                <span v-else-if="item.linear && item.linear !=22">前往下一个景点</span>
                <span v-else-if="!item.linear && item.linear !=22">继续前进</span>
                <div class="off">
                    <img src="../assets/img/开关.png">
                </div>
            </div>
            <div class="master">
                <img hspace="8" src="../assets//img/县太爷 卷轴背面.png">
            </div>
        </div>
    </div>
    <div class="modal" v-if="modalView">
        <div class="i-modal">
            <div class="modal-content">
                <div class="modal-top">
                    是否再次参观展览
                </div>
                <div style="text-align:right;margin-top:20px;">
                    <div class="modal-calce" @click="cancelButton">取消</div>
                    <div class="modal-ok"@click="okButton" >确定</div>
                </div>
            </div>
        </div>
    </div>
    <audio id="myaudio" :src='src+videoId' controls="controls"  autoplay='autoplay'  hidden="true" >
</audio>
  </div>
</template>

<script>
export default {
    data(){
        return{
            pageIndex:1,
            plays:'',
            pay:null,
            isTrue:sessionStorage.getItem('isTrue'),
            next:Number(sessionStorage.getItem('look')),
            lookList:[
                {
                    page:1,
                    linear:2,
                    list:[
                        {
                            img:require('../assets/img/home/1平遥县域.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'平遥县',
                            end:true,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'由图中可以看到，在县衙的大门口，在三开之间，建筑上方出檐，檐下赫然写着平遥衙署四个大字，这四个字是黑色金底的色彩搭配，是门匾材质，在大门前放着一对石狮，这在当时是威严的象征，并一直保留至今。',
                            desc1:'在走廊下面还放着一对架鼓，这种鼓又被人们叫做“登闻鼓”，也有些人会把它口头唤作是“喊冤大鼓”，这种鼓本质上是为百姓进行击鼓鸣冤而来的，至今仍在平遥的各种风俗文化节上进行展示和文化传承。'
                        }
                    ]
                },
                {
                    page:2,
                    linear:3,
                    list:[
                        {
                            img:require('../assets/img/home/2仪门.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'仪门',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'第二道县衙的门也被人们叫做“仪门”，代表着一种礼仪，这道门也就是礼仪之门，也是整个县衙中呈现出来最为雄伟壮观的一座门，这扇门的位置在两层的三级台阶上，青色的墙壁和灰色的瓦片建筑交相辉映，上面有黄铜作为门钉，有乌梁也有红色的大门，古人流传下来的“朱门酒肉臭”，便更多指的是这里了。',
                        }
                    ]
                },
                 {
                    page:3,
                    linear:4,
                    list:[
                        {
                            img:require('../assets/img/home/3牢狱.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'牢狱',
                            style:3,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'为了不走回头路，先从西南角的监狱参观。因为西方主杀，西南角是离鬼门关最近的地方这样也方便死囚们尽快过鬼门关，度奈何桥，早入轮回。',
                            desc1:'牢狱的鼎峰时期是在清朝，有重狱、轻狱、女狱、狱神庙、子孙房等。其中呈现里外套间建筑造型的是牢头处理各种繁杂事情的地方，而尧舜时期的刑官皋陶，被誉为狱神，监狱就是这位古人发明的。'
                        }
                    ]
                   
                },
                {
                    page:4,
                    list:[
                        {
                            img:require('../assets/img/home/3-1狱字.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'“狱”字',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'图中的狱字是进入大门后可以直接看到的，狱字左右两侧是二犬，寓意守卫的意思，中间是言字旁，寓意诉讼的意思。监狱存在的主要目的是关押犯人等候审理。',
                        }
                    ]
                   
                },
                {
                    page:5,
                     list:[
                        {
                            img:require('../assets/img/home/3-2狱神庙.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'狱神庙',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'上图展示的是狱神庙，起初我们可以看到的是牢头进行办公的场所，里外套件间的格局也充分说明了这一点，也就是现在监狱长的办公室。而发明监狱的狱神皋陶，每逢初一和十五也都会受到很多犯人狱吏的祭拜礼',
                        }
                    ]
                   
                },
                {
                    page:6,
                     list:[
                        {
                            img:require('../assets/img/home/3-3轻狱.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'轻狱',
                            style:3,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'接下来参观在靠近门口的地方可以看到的轻狱，一面格子单间，一面是高墙，这种建筑风格是仿照窑洞来的，不仅有门也有窗，中间是一条相对较窄的过道，这种轻狱的建筑风格冬暖夏凉，有炕有火，这也说明了当时被关押在此的囚犯生存条件还是不错的',
                        }
                    ]
                },
                {
                    page:7,
                    linear:5,
                    list:[
                        {
                            img:require('../assets/img/home/3-4犯人脚铐.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'犯人脚铐',
                            style:1,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'在轻狱靠墙边，有一对100对斤重的犯人脚铐。所以参观者也可以看到，牢狱之刑非常残酷，多样化的刑具让人不寒而栗。',
                        }
                    ]
                },
                {
                    page:8,
                    linear:6,
                    list:[
                        {
                            img:require('../assets/img/home/4督捕厅.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'督捕厅',
                            style:3,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'接下来，来到与牢狱南北呼应的督捕厅，主要便于当时提审犯人。第一、二、三展示，以大量的司法史料、文物展示了中国数千年法律实施活动及其成果。第四到第七展室以大量的实物刑具和文物图片展室开了中国古代刑具神秘的色彩。',
                            desc1:'在1644年的时候，清军大举入关，明代东西司和锦衣卫开始被正式废除，并在17省设立了督捕厅，对八旗以及各个省份的驻防逃人的事宜进行处理，本质上是在兵部管辖之下。'
                        }
                    ]
                },
                {
                    page:9,
                    list:[
                        {
                            img:require('../assets/img/home/4-1司法史料（一）.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'司法史料（一）',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'将军火票是这个展室体现的亮点，火票的意思就是十万火急，周边存在火的图案，因此中途在关卡的时候也只是看一眼，其余两张良民证，这种良民证是用布料做出来的，此类情况的形成也是日军侵华过程中造成的，从某种意义上来讲除了八路军、新四军之外，其余的老百姓都可以被当做良民',
                        }
                    ]
                  
                },
                {
                    page:10,
                    linear:6,
                      list:[
                        {
                            img:require('../assets/img/home/4-2司法史料（一）1.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'司法史料（一）',
                            style:7,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'公民证，相当于现在的身份证，可看到这两张照片上的当事者胸前都写有自己的的姓名，并且两个拇指都必须按印，这是当时的防伪，说明到了民国时防伪措施是比较成熟的。',
                            desc1:'“将军火票”，这个表示十万火急，所以周围都绘有火的图形，在路上，是不能耽搁的，过各个关卡时，看一下即可。'
                        }
                    ]
                 
                },
                {
                    page:11,
                       list:[
                        {
                            img:require('../assets/img/home/4-3司法史料（二）1.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'爱书(送达)',
                            style:3,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'古代的司法文书被人们称作是爱书，这种爱书的范畴包括了供词、记录、报告文书以及送达书等内容，主要应用在秦汉时期。但是在民国的时候，爱书是需要进行交税的，并且有税票需要上交。',
                        },
                       
                    ]
                    
                },
                {
                    page:12,
                    list:[
                         {
                            img:require('../assets/img/home/4-3司法史料（二）2.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'判决',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'清朝的时候，要进行判决必须有原告和被告出庭，但是按照清国的律法，从死罪到答罪，任何一种形式的犯罪都可以被收赎，主要体现的方式以官赎罪，以钱赎罪，这也在很大程度上体现出一种人与人之间不平等的待遇。',
                        }
                    ]
                },
                 {
                    page:13,
                    list:[
                        {
                            img:require('../assets/img/home/4-4司法史料（二）1.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'契约',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'契约，在民国时，必须有二人以上存在，并交税，法律才给予保护。刚才咋们看过红契，这里还有白契，白契是未经官府征税盖章的，两者所生的法律效应也是不同的，例如契买的奴婢，白契所买为雇工，除年限久远外，允许赎身，而红契所买的则为奴婢，其子孙也永远为奴。签约时，必须有保人签字，并负有法律责任。',
                        }
                    ]
                    
                },
                {
                    page:14,
                    list:[
                        {
                            img:require('../assets/img/home/4-5司法史料（二）21.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'诉状',
                            class:3,
                            style:2,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'对于诉状的呈上来说，在哪个年代出现了专门负责写状纸的职业人群，帮助需要上诉的人进行联名上告',
                        },
                        {
                            img:require('../assets/img/home/4-5司法史料（二）22.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'判决',
                            class:3,
                            style:2,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'调处就是现在的调节机构，这种方式在解决民事纠纷中发挥了重要作用。它的依据主要体现在法律和封建纲常上面。',
                        }
                    ]
                    
                },
                {
                    page:15,
                    list:[
                        {
                            img:require('../assets/img/home/4-6司法史料（二）31.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'婚姻家庭',
                            class:3,
                            style:2,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'婚姻家庭，在父系原则下，结婚的妇女被视为一个离开父系家庭进入另外一个父系家庭。如果寡妇再婚，她即使放弃了第一个丈夫家的财产要求，甚至她的嫁妆也只有她不改嫁才保留她的财产。一个改嫁的寡妇丧失对其结婚时带来的嫁妆的所有权利。',
                        }
                    ]
                    
                },
                {
                    page:16,
                    list:[
                        {
                            img:require('../assets/img/home/4-6司法史料（二）32.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'红契',
                            style:2,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'红契是清末民初买卖田地房宅所作文契，经官府征税盖章者。主要由契头契尾两部分组成的。红契，清末民初买卖田地、房宅，经官府征税盖章的称为“红契”。',
                        }
                    ]
                    
                },
                {
                    page:17,
                    linear:8,
                  list:[
                        {
                            img:require('../assets/img/home/4-7司法史料（二）41.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'继承制度',
                            class:3,
                            style:2,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'继承制度，清代继承分为身份继承和财产继承，身份继承又包括宗族继承和封爵继承，宗族继承通常以嫡长子为法定第一顺序继承人，无嫡子者立嫡长孙，以后按嫡次子，嫡次孙，庶长子，庶长孙，庶次孙依次继承。',
                        },
                        {
                            img:require('../assets/img/home/4-7司法史料（二）44.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'税契',
                            class:3,
                            style:2,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'税契，始于东晋，是指古代官府发给商甲贾以征税的文书。在民国时期，国民党政府承袭清朝民法有关债权的形式凡民间契约需要履行税契的法律程序。由此而出现了很多契约签订于前清时期。通过缴税加盖国民政府印的现象，以此通过所谓的“检验”，才视为具有法律效力。',
                        }
                    ]
                },
                 {
                    page:18,
                    linear:11,
                    list:[
                        {
                            img:require('../assets/img/home/押解刑具.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'押解刑具',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'霹雳车又被人们称作是骑木驴，在古代的刑具划分中是专门用来惩治谋害亲夫的行为。押解罪犯的囚车在中厅里面进行展示，右边展示的示众车，不管当官的还是平民犯法，都要通过这八个门，一个门停留一日，直到第九日的时候杀掉。放着的一只水桶是让押解人员和犯人喝水用的，站笼又被人们叫做立枷，凡是要执行死刑的犯人头上都会带着重枷站立于笼中服刑。',
                        }
                    ]
                },
                {
                    page:19,
                    list:[
                        {
                            img:require('../assets/img/home/5-2拘系刑具.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'拘系刑具',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'这个展室主要呈现的是拘系刑具，这种刑具主要是用来控制最罪犯的行动自由，套在罪犯脖子上的被叫做颈枷，最残酷的是开始与战国时期，终止于汉代时期的“翘钳，据说在秦代修建阿房宫的时候，会把犯人固定同个地方干活，这种情况下犯人是不能进行靠背休息的，只要头朝后稍微仰一下，就会受到刺痛。当然，除此之外，还有一些竹手铐、铁鬼衣、铁脚跟等刑罚工具。',
                        }
                    ]
                },
                {
                    page:20,
                    list:[
                        {
                            img:require('../assets/img/home/5-3颈枷.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'颈枷',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'颈枷是套在犯人脖子上的刑具。这个是长枷，可以看一下这个颈枷比较特殊，一边长一边短，这种枷用于宋代，长的这边用于写犯人的姓名，罪行等，囚长的这边很重，所以犯人要用手压住短的这边，那么长的这头就翘起来的，人们可以看到贴在上面字的内容了。',
                        }
                    ]
                },
                 {
                    page:21,
                    linear:12,
                    list:[
                        {
                            img:require('../assets/img/home/5-4手铐1.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'竹手铐',
                            class:3,
                            style:2,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'竹手铐，始于宋代，因竹子遇水愈坚，故一般广泛用于潮湿地带，如四川、湖南等，水牢里有时也会使用。',
                        },
                        {
                            img:require('../assets/img/home/5-4手铐2.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'拶指',
                            class:3,
                            style:2,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'拶指，用于夹女犯人的手指头，长七寸，径围四分五厘，用于隋唐，明清广泛使用。',
                        },
                         {
                            img:require('../assets/img/home/翘钳.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'翘钳',
                            class:3,
                            style:2,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'最残忍要数这个“翘钳”，这个始于战国，终于汉代，在秦代修阿房宫、长城是广泛使用，把犯人固定在一个地方干活，并且不能站直休息，因为只要头稍往后仰，后面的刺便刺入人的背部了。',
                        }
                    ]
                },
                {
                    page:22,
                    list:[
                        {
                            img:require('../assets/img/home/1铁质.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'铁质',
                            style:5,
                            class:6,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'最初，腰斩使用的刑具称为铁质。铁是大斧，质是下面垫的砧板，斧与质是分离的两件东西。后来这一刑具发展为用轴连在一起，铁演变为铡刀，质演变为铡床，铁质刑具出现在春秋战国时期。',
                        },
                    ]
                },
                {
                     page:23,
                     list:[
                         {
                            img:require('../assets/img/home/2砍头刀.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'砍头刀',
                            class:6,
                            style:5,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'砍头刀是砍掉头颈，使犯人身首异处的行刑工具，但要把人头一下子从脖子上砍下来，光凭利刃利斧和心狠是往往不够的。历代的刽子手们找到了各种方法，想出来了许多窍门。',
                        }
                     ]
                },
                {
                    page:24,
                    list:[
                        {
                            img:require('../assets/img/home/5-6宫刑刀1.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'宫刑刀',
                            style:3,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'宫刑刀始于夏朝苗民的椓刑，即用棍棒将男子的生殖器打断打废，椎击女性胸腹，使肠胃下垂压抑子宫坠入阴道，以防交接。战国以后出现了小型宫刑刀。宫刑刀小巧灵活又锋利无比，清朝出现了以割势为职业的“刀子匠”',
                        },
                        
                    ]
                },
                {
                    page:25,
                    linear:13,
                    list:[
                        {
                            img:require('../assets/img/home/5-6宫刑刀2.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'射鬼箭',
                            style:3,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'射鬼箭，箭头由骨头、铜、铁等制造，明清两代使用。射鬼箭，是死刑之一，即用箭射杀罪犯，源于契丹人的祭祀礼。据《辽史》记载，契丹人每次出征前，祭祀祖先时将一个死囚置于出征方向，乱箭射死，称为“驱邪消灾”，班师回朝再将俘虏射鬼箭。',
                        },
                    ]
                },
                {
                    page:26,
                    list:[
                        {
                            img:require('../assets/img/home/7.1亲民堂.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'亲民堂',
                            style:5,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'知县在处理重大事务的时候，会有专门的场所进行举办，这个场所就是大堂，被人们口头唤作是正堂、公堂、正厅等，也被人们称为亲民堂。“民”字上部分多划了一点，这样做的根本原因是当时社会背景文化决定的，是中国文字和文化遵循含蓄表达手法，这种表达手法可以体现亲民更多一点的意思。',
                        },
                    ]
                   
                },
                {
                    page:27,
                    list:[
                        {
                            img:require('../assets/img/home/6-3亲民堂1.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'廉政文化',
                            style:5,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'其中平遥县衙作为市、县纪委机关确定的廉政文化教育基地，该馆馆藏历史文化很丰富，最具有特色的是廉政文化。从古往今来看，平遥县的廉政文化一直让人们引以为豪，受益匪浅。',
                        },
                    ]
                },
                {
                    page:28,
                    list:[
                        {
                            img:require('../assets/img/home/7亲民思想.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'亲民思想',
                            style:5,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'在大堂赫然挂着三个字的牌匾，牌匾上写着“亲民堂”，这说明了这个地方虽然是一个严格执法地界。但如今看来，也是对县衙廉政文化的彰显有呼应作用。端坐在大堂上，映入眼帘的便是公生明，廉生威”六个大字。',
                        },
                    ]
                },
                 {
                    page:29,
                    list:[
                        {
                            img:require('../assets/img/home/7.2亲民堂.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'升堂表演',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'一位“县令”操着抑场顿挫的北方音腔升堂断案，“和谐社会”、“双规”等现代热词不时“穿越”到表演现场，引得围观群众哄然大笑。清政为民、恶扬善却是每场表演不变的主题。',
                        },
                    ]
                },
                {
                    page:30,
                    linear:14,
                     list:[
                        {
                            img:require('../assets/img/home/6-1衣服1.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'钱粮库',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'钱粮库是文官，官服补子（就是胸前背后方形的装饰图案）饰禽鸟纹，以彰显其贤德。一品仙鹤、二品锦鸡、三品孔雀、四品云雁、五品白鹇、六品鹭鸶、七品鸳鸯、八品鹌鹑、九品练雀。',
                        },
                        {
                            img:require('../assets/img/home/6-1衣服2.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'武备库',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'武备库是武官，官服补子饰走兽纹，以彰显其威武。一品麒麟、二品绣狮、三品绣豹、四品绣虎、五品绣熊、六品绣彪、七品绣犀牛、九品绣海马。',
                        },
                    ]
                },
                {
                    page:31,
                    linear:15,
                    list:[
                        {
                            img:require('../assets/img/home/7宅门.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'宅门',
                            style:3,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'在二堂前的是宅门，宅门是去内宅的必经之路，在一旁也有门子房的设立，这个特殊房门的设立就是走门子的历史来源。穿过宅门之后就可以看到四扇转门，转门的存在和仪门的效果是一样的，在重大活动举办时进行开放。',
                            desc1:'平日里的主要作用就是遮挡人们的视线，在屏门上面绘制有秦琼、尉迟恭以及两尊门神等，用以镇宅辟邪之用。屏风正对的门上写着天理国法人情的匾额，这六个大字也是在时刻提醒知县在办案时要遵循的态度。'
                        },
                    ]
                },
                {
                    page:32,
                    linear:16,
                    list:[
                        {
                            img:require('../assets/img/home/8二堂.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'二堂',
                            style:3,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'走过屏门就能看到二堂，二堂是我国至今保存相对完整的民万厉十九年的建筑遗迹。县衙的完整度也要得益于文革时期没有被破坏的幸运，因为县政府大部分时间都在这里办公，作为原来政府的办公室，自然会有一定的保护措施存在。',
                            desc1:'这里区别与大堂的是，没有了大堂那种森严的气氛，而是召集下集进行小范围研究民事案件的地方。'
                        },
                    ]
                },
                {
                    page:33,
                    linear:17,
                    list:[
                        {
                            img:require('../assets/img/home/9内宅.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'内宅',
                            class:6,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'走过二堂，接下来可以看到的就是内宅。内宅是知县日常生活的地方，东西厢房作为客房存在，接待好友或者是上级。内宅也被人们叫做勤慎堂，这也是在每日暗示知县，在这里做官要时刻谨记勤快和谨记两大原则。',
                        },
                    ]
                },
                {
                    page:34,
                    linear:18,
                    list:[
                        {
                            img:require('../assets/img/home/10大仙楼.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'大仙楼',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'距今已经有六百多年历史的是大仙楼，始建于1346年，位置在平遥县衙博物馆中最后一处院落，是当今为止最完整的元代建筑。知县吃饭的地方就在次此处，是北方典型性建筑窑洞，窑洞冬暖夏凉。',
                        },
                    ]
                },
                {
                    page:35,
                    linear:19,
                    list:[
                        {
                            img:require('../assets/img/home/11后花园.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'后花园',
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'从东厢房穿过后就到了县衙的花园地带。其中有一花厅，是知县修身养性的地方。还有一个对弈亭，原名“清心亭”，是供知县下棋的地方，并且刘伯温曾在这里下过棋，刘伯温是浙江人，但他的老家是平遥朱坑村人，他在元末做官受挫回来祭祖时，与知县达鲁海都在这里下棋，所以为纪念这段经历，改“清心亭”为“对弈亭”。',
                        },
                    ]
                },
                {
                    page:36,
                    linear:20,
                    list:[
                        {
                            img:require('../assets/img/home/12戏台.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'戏台',
                             class:6,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'接着是戏台，是唱给土地爷听戏的每逢重大节日，知县都会调来戏班来唱戏。戏台的匾额“风雅台”为清朝知县所立。檐下有匾“清风远播”，这戏台下有一通道修的很低，讲究人在神前不得不低头，是对土地爷的尊敬。',
                        },
                    ]
                },
                {
                    page:37,
                    linear:21,
                    list:[
                        {
                            img:require('../assets/img/home/13彭瘅厅.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'彭瘅厅',
                             class:6,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'然后往右转，到了彭瘅厅药王庙，此处供的是药王爷唐朝名医孙思邈，医官在这里办公，医官是正十品官，吃地方财政，属于咱们现在的科级干部。',
                        },
                    ]
                },
                {
                    page:38,
                    linear:22,
                    list:[
                        {
                            img:require('../assets/img/home/14 钟楼.png'),
                            titleImg:require('../assets/img/home/2.png'),
                            title:'钟楼',
                            style:3,
                            titleIcon:require('../assets/img/home/3.png'),
                            desc:'最后参观者看到的就是钟楼，钟楼主要用于时辰汇报，相对应的自然也有鼓楼，但因为鼓楼不慎遭到破坏，至今尚未恢复。',
                        },
                    ]
                },
            ],
            modalView:false,
            videoId:null,
            src:'/api/myTest/'
        }
    },
    created(){
         this.getMp3Id();
        if(sessionStorage.getItem('linear')=='1'){
             this.pageIndex =1;
        }else{
             this.pageIndex = this.next || 1;
        }
    },
    mounted(){
    },
   
    methods:{
        getMp3Id(index){
             this.plays ="";
                this.lookList.forEach(item=> {
                if(item.page == (index == undefined?this.next:index)){
                    item.list.forEach(obj=>{
                    this.plays += obj.desc + (obj.desc1==undefined?'':obj.desc1);
                });
                }
            });
            this.$http.get('/api/front/member/speechSynthesis.json',{
                params:{
                    conent: this.plays
                }
            }).then(res =>{
                if(res.status == 200 && res.data.success){
                    this.videoId = res.data.data;
                }else{
                    this.$Message.error(res.data.message);
                }
            })
        },

        getPage(page,linear){
            if(linear || this.isTrue=='1'){
                if(linear == 22){
                    this.modalView = true;
                    return;
                }
                if(this.isTrue=='1' && linear){
                    this.modalView = true;
                    return;
                }else if(this.isTrue=='1'){
                    if(page+1 <= 38){
                        this.pageIndex = page +1;
                        this.getMp3Id(this.pageIndex);
                    }
                }else{
                    sessionStorage.setItem('next',page);
                    this.$router.push('linear');
                    sessionStorage.setItem('page',linear);
                }
                
            }else{
                if(page+1 <= 38){
                 this.pageIndex = page +1;
                this.getMp3Id(this.pageIndex);
                }
            }
            
        },
        cancelButton(){
            this.modalView = false;
            sessionStorage.clear();
            this.$router.push('lookExhibition');
        },
        okButton(){
            this.modalView = false;
            sessionStorage.clear();
             this.$router.push('gps');
        },
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity ease-in-out 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.modal{
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
    background-color: rgba(55,55,55,.6);
    outline: 0;
}
.i-modal{
    width: auto!important;
    margin: 10px;
    position: relative;
    outline: 0;
    top: 100px;
}
.modal-content{
    padding: 16px;
    font-size: 12px;
    line-height: 1.5;
    background-color: rgba(218, 148, 95,1);
    border-radius: 4px;
}
.modal-top{
    padding-left: 42px;
    font-size: 14px;
    color: #515a6e;
    position: relative;
    color:rgb(82, 40, 25);
}
.modal-calce{
    display: inline-block;
    text-align: center;
    padding: 6px 20px;
    border: 1px solid rgb(82, 40, 25);
    border-radius: 4px;
    color:rgb(82, 40, 25);
}
.modal-ok{
    display: inline-block;
    text-align: center;
    padding: 6px 20px;
    border: 1px solid rgb(82, 40, 25);
    border-radius: 4px;
    color:rgb(82, 40, 25);
}

.warp .content{
    padding: 20px 20px 0 20px;
    text-align: center;
    height: 95%; 
}
.warp .content .master{
   width: 3.3rem;
    height: 7rem;
    position: absolute;
    bottom: 2px;
    float: left;
}
.warp .content .scroll{
    background: url('../assets/img/卷轴.png') top center no-repeat;
    background-size:cover;
    width: 100%;
    height:86%;  
    margin-top: 1rem;
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
.scroll-page{
    padding: 20px 10px;
}
.scroll-page p{
    text-indent: 1rem;
    text-align: left;
    font-size: 0.3rem;
    margin-left: 6px;
}
.scroll-page .page-view{
    width: 9.4rem;
    display: inline-block;
    transition: all ease-in-out 0.3s;
    opacity: 1;
    padding-top: 3px;
}
.page-view1{
    transition: all ease-in-out 0.3s;
    opacity: 1;
}
.scroll-page .page-view2{
    transition: all ease-in-out 0.3s;
    opacity: 0;
}
.scroll-page .page-view .page-img{
    width: 8rem;
    display: inline-block;
    margin: 10px 0;
}
.scroll-page .page-view .page-img2{
    width: 4rem;
    display: inline-block;
}
 .scroll-page .page-view .page-title{
     background:url('../assets/img/home/2.png') top center no-repeat;
     background-size: cover;
     width: 7rem;
     height: 1rem; 
     color: #333;
     font-size: 12px;
     line-height: 1rem;
     display: inline-block;
     margin-bottom: 10px;
 }
 .scroll-page .page-view .page-title span{
     vertical-align: middle;
 }
 .scroll-page .page-view .page-title .page-icon{
     width: 0.4rem;
     height: 0.4rem;
     vertical-align: middle;
     display: inline-block;
 }
 .scroll-page .page-view .page-title2 .page-icon .page2-img{
     width: 1rem;
     height: 5rem;
     position: absolute;
 }
 .scroll-page .page-view .page-title2 .page-icon .page2-icon{
     width: 0.4rem;
     height: 0.4rem;
     display: inline-block;
     position: absolute;
    top: 60%;
    left: 13px;
    margin-top:3px;
 }
.scroll-page .page-view .page-title2{
     width: 1rem;
     height: 5rem; 
     color: #333;
     font-size: 12px;
    text-align: center;
     display: inline-block;
     margin-top: 0.6rem;
    position: relative;
    margin-left: 2rem;
}
.scroll-page .page-view .page-title2 .page-icon{
    
}
 .scroll-page .page-view .page-title2 .page-icon .page-icon2{
     display: inline-block;
     position: absolute;
    top: 59%;
    left: 13px;
 }

 .page-img3{
    width:4.7rem
 }
 .page3-icon{
    position: absolute;
    width: 0.5rem;
    height: 0.4rem;
    top: 16%;
    left: 77%;
 }
 .page3-img{
     position: relative;
     width: 5rem;
 }
 .page-img5{
    width:4.7rem;
    height: 8rem;
 }
 .page3-text{
     display:inline-block;font-size: 12px; position: absolute;top:0;margin-left:1.5rem;
 }
 .page3-text1{
      display:inline-block;font-size: 12px; position: absolute;top:0;margin-left:1rem;
 }
 .page3-icon1{
      position: absolute;
    width: 0.5rem;
    height: 0.4rem;
    top: 16%;
    left: 64%;
 }
 .page1-img{
    width: 5rem;
    height: 7rem;
    display: inline-block;
    margin: 10px 0;
 }
 .page7-img{
     width: 100%;
      margin-left: 0.4rem;
 }
 .page7-img div:first-child{
     height: 3rem;
 }
 .page7-img div{
     width: 45%;
     float: left;
     margin-right: 5px;
 }
</style>
