<template>
  <div class='seller' ref="seller">
     <div class="seller-content">
        <div class="overview-seller">
           <h1 class="title">{{seller.name}}</h1>
           <div class="desc">
               <star :size="36" :score="seller.score"></star>
               <span class="text">（{{seller.ratingCount}}）</span>
               <span class="text">月售{{seller.sellCount}}单</span>
           </div>
           <ul class="remark">
              <li class="block">
                  <h2>起送价</h2>
                  <div class="content">
                     <span class="stress">{{seller.minPrice}}</span>元
                  </div>
              </li>
              <li class="block">
                  <h2>商家配送</h2>
                  <div class="content">
                     <span class="stress">{{seller.deliveryPrice}}</span>元
                  </div>
              </li>
              <li class="block">
                  <h2>平均配送时间</h2>
                  <div class="content">
                     <span class="stress">{{seller.deliveryTime}}</span>分钟
                  </div>
              </li>
           </ul>
           <div class="favorite" @click="toggleFavorite">
              <span class="icon-favorite" :class="{'active':favorite}"></span>
              <span class="text">{{favoriteText}}</span>
           </div>
        </div>
       <split></split>
       <div class="bulletin-seller">
          <h1 class="title">公告与活动</h1>
          <div class="content-wrapper">
             <p class="content">{{seller.bulletin}}</div>
          </div>
           <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="(item,$index) in seller.supports">
                 <span class="icon" :class="classMap[seller.supports[$index].type]"></span>
                 <span class="text">{{seller.supports[$index].description}}</span>
               /li>
            </ul>
         <split></split>
         <div class="pics">
            <h1 class="title">商家实景</h1>
            <div class="pic-wrapper" ref="pic-wrapper">
                <ul class="pic-list" ref="pic-list">
                   <li class="pic-item" v-for="(pic, $index) in seller.pics">
                      <img :src="pic" width="120" height="90">
                   </li>
                </ul>
            </div>
         </div>
         <split></split>
         <div class="info-rating">
             <h1 class="title">商家信息</h1>
             <ul>
                <li class="info-item" v-for="info in seller.infos">{{info}}</li>
             </ul>
         </div>
       </div>
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import star from 'components/star/star';
  import split from 'components/split/split';

  export default {
     props: {
        seller: {
           type: Object
        }
     },
     data() {
        return {
           favorite: false
        };
     },
     computed: {
        favoriteText() {
           return this.favorite? '已收藏' : '收藏';
        }
     },
     components: {
       star,
       split
     },
     created() {
       this.classMap=['decrease', 'discount', 'special', 'invoice', 'guarantee'];
     },
     watch: {
       'seller'() {
         this._initScroll();
         this._initPics();
       }
     },
    mounted() {
      this._initScroll();
      this._initPics();
     },
     methods: {
        toggleFavorite(event) {
           if (!event._constructed) {
             return;
           }
           this.favorite=!this.favorite;
        },
        _initScroll() {
           if (!this.scroll) {
            this.scroll=new BScroll(this.$refs.seller, {
               click: true
            });
           } else {
              this.scroll.refresh();
           }
        },
        _initPics() {
          if (!this.seller.pics) {
            let picWidth=120;
            let margin=6;
            let width=(picWidth+margin)*4-margin;
            this.$refs.picList.style.width=width+'px';
            this.$nextTick(() => {
              if (!this.picScroll) {
               this.picScroll=new BScroll(this.$refs.picWrapper, {
                  scrollX: true,
                  eventPassthrough: 'vertical'
               });
               } else {
                 this.picScroll.refresh();
               }
            });
         }
       }
     }
  };
</script>

<style>
.seller{
    position:absolute;
    top:174px;
    bottom:0;
    left:0;
    width:100%;
    overflow:hidden;
}
.overview-seller{
   padding:18px;
   position:relative;
}
.overview-seller .title{
   margin-bottom:8px;
   line-height:14px;
   color:rgb(7,17,27);
   font-size:14px;
}
.overview-seller .desc{
   padding-bottom:18px;
   line-height:18px;
   font-size:0;
   position:relative;
}
.overview-seller .desc:after{
       display: block;
       position: absolute;
       left: 0;
       bottom: 0;
       width: 100%;
       border-top: 1px solid rgba(7,17,27,0.1);
       content: '';
}
.overview-seller .desc .star{
   display:inline-block;
   margin-right:8px;
   vertical-align:top;
}
.overview-seller .desc .text{
   margin-right:12px;
   display:inline-block;
   vertical-align:top;
   font-size:10px;
   color:rgb(77,85,93);
}
.overview-seller .remark{
   display:flex;
    padding-top:18px;
}
 .remark .block{
   flex:1;
   text-align:center;
   border-right:1px solid rgba(7,17,27,0.1);
}
 .remark .block:last-child{
   border:none;
}
 .remark .block h2{
    margin-bottom:4px;
    line-height:10px;
    font-size:10px;
    color:rgb(147,153,159);
 }
  .remark .block .content{
     line-height:24px;
     font-size:10px;
     color:rgb(7,17,27);
     }
 .block .content .stress{
    font-size:24px;
 }
 .bulletin-seller{
    padding:18px 18px 0 18px;
 }
 .bulletin-seller .title{
     margin-bottom:8px;
     line-height:14px;
     color:rgb(7,17,27);
     font-size:14px;
 }
 .bulletin-seller .content-wrapper:after{
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 1px solid rgba(7,17,27,0.1);
        content: '';
 }
 .bulletin-seller .content-wrapper{
     padding:0 12px 16px 12px;
 }
   .bulletin-seller .content-wrapper:after{
       display: block;
       position: absolute;
       left: 0;
       bottom: 0;
       width: 100%;
       border-top: 1px solid rgba(7,17,27,0.1);
       content: '';
   }
  .bulletin-seller .content-wrapper .content{
     line-height:24px;
     font-size:12px;
     color:rgb(240,20,20);
  }
 .seller-content .supports .support-item{
     padding:16px 12px;
     font-size:0;
     position:relative;
 }
  .seller-content .supports .support-item:last-child{
      border:none;
  }
 .seller-content .supports .support-item:after{
       display: block;
       position: absolute;
       left: 0;
       bottom: 0;
       width: 100%;
       border-top: 1px solid rgba(7,17,27,0.1);
       content: '';
 }
  .seller-content .supports .support-item .icon{
     display:inline-block;
     width:16px;
     height:16px;
     vertical-align:top;
     margin-right:6px;
     background-size:16px 16px;
     background-repeat:no-repeat;
    }
  .seller-content .support-item .decrease{
     background-image:url('decrease_4@2x.png');
   }
  .seller-content .support-item  .discount{
     background-image:url('discount_4@2x.png');
   }
  .seller-content .support-item  .guarantee{
     background-image:url('guarantee_4@2x.png');
    }
   .seller-content .support-item  .special{
      background-image:url('special_4@2x.png');
     }
 .seller-content .support-item .invoice{
       background-image:url('invoice_4@2x.png');
   }
  .seller-content .support-item .text{
     line-height:16px;
     font-size:12px;
     color:rgb(7,17,27);
  }
  .pics{
     padding:18px;
  }
  .pics .title{
     margin-bottom:12px;
     line-height:14px;
     color:rgb(7,17,27);
     font-size:14px;
  }
  .pics .pic-wrapper{
     width:100%;
     overflow:hidden;
     white-space:nowrap;
  }
  .pic-wrapper .pic-list{
     font-size:0;
  }
  .pic-list .pic-item{
    display:inline-block;
    margin-right:6px;
    width:120px;
    height:90px;
  }
   .pic-list .pic-item:last-child{
       margin:0;
   }
  .info-rating{
     padding:18px 18px 0 18px;
     color:rgb(7,17,27);
  }
 .info-rating .title{
    padding-bottom:12px;
    line-height:14px;
    font-size:14px;
 }
 .info-rating .title:after{
       display: block;
       position: absolute;
       left: 0;
       bottom: 0;
       width: 100%;
       border-top: 1px solid rgba(7,17,27,0.1);
       content: '';
 }
 .info-rating .info-item{
    padding:16px 12px;
    line-height:16px;
    font-size:12px;
 }
  .info-rating .info-item:after{
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 1px solid rgba(7,17,27,0.1);
        content: '';
  }
  .info-rating .info-item:last-child{
     border:none;
  }
  .overview-seller .favorite{
     width:50px;
     position:absolute;
     right:18px;
     top:18px;
     text-align:center;
  }
 .favorite .icon-favorite{
     display:block;
     width:10px;
     height:10px;
     border-radius:50%;
     background:#d4d6d9;
     margin-bottom:4px;
     margin-left:20px;
     line-height:24px;
     font-size:24px;
     color:#d4d6d9;
  }
.favorite .active{
     color:rgb(24,20,20);
     background-color:red;
   }
.favorite .text{
   line-height:10px;
   font-size:10px;
   color:rgb(77,85,93);
}
</style>
