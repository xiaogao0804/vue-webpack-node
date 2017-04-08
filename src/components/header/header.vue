<template>
  <div class='header'>
      <div class="content-wrapper">
         <div class="avatar">
            <img width="64" height="64" v-bind:src="seller.avatar"/>
         </div>
         <div class="content">
            <div class="title">
               <span class="brand"></span>
               <span class="name">{{seller.name}}</span>
            </div>
            <div class="description">
               {{seller.description}}/{{seller.deliveryTime}}分钟送达
            </div>
            <div v-if="seller.supports" class="support">
                <span class="icon" v-bind:class="classMap[seller.supports[2].type]"></span>
                <span class="text">{{seller.supports[2].description}}</span>
             </div>
         </div>
          <div v-if="seller.supports" class="support-count" @click="showDetail">
             <span class="count">{{seller.supports.length}}个</span>
             <i class="icon-keyboard_arrow_right">&gt;</i>
          </div>
      </div>
          <div class="bulletin-wrapper" v-on:click="showDetail">
             <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
             <i class="icon-keyboard_arrow_right">&gt;</i>
          </div>
          <div class='background'>
              <img :src="seller.avatar" width="100%" height="100%"/>
           </div>
       <transition name="fade">
          <div class="detail" v-show="detailShow" v-if="show">
              <div class="detail-wrapper clearfix">
                  <div class="detail-main">
                     <h1 class="name">{{seller.name}}</h1>
                     <div class="star-wrapper">
                        <star :size="48" :score="seller.score"></star>
                     </div>
                     <div class="title">
                        <div class="line"></div>
                        <div class="text">优惠信息</div>
                        <div class="line"></div>
                     </div>
                     <ul v-if="seller.supports" class="supports">
                        <li class="support-item" v-for="(item,$index) in seller.supports">
                            <span class="icon" :class="classMap[seller.supports[$index].type]"></span>
                            <span class="text">{{seller.supports[$index].description}}</span>
                        </li>
                     </ul>
                     <div class="title">
                        <div class="line"></div>
                        <div class="text">商家公告</div>
                        <div class="line"></div>
                     </div>
                     <div class="bulletin">
                        <p class="content">{{seller.bulletin}}</div>
                     </div>
                  </div>
                   <div class="detail-close" @click="hideDetail">
                       <i class="icon-close">X</i>
                   </div>
              </div>
          </div>
        </transition>
   </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';
  export default {
     props: {
       seller: {
         type: Object
       }
     },
     data() {
        return {
          detailShow: false,
          show: true
        };
     },
     methods: {
       showDetail() {
         this.detailShow=true;
       },
       hideDetail() {
         this.detailShow=false;
       }
     },
     created() {
       this.classMap=['decrease', 'discount', 'special', 'invoice', 'guarantee'];
     },
     components: {
        star
     }
  };
</script>

<style>
   .header{
      position:relative;
      color:#fff;
      background:rgba(7,17,27,0.5);
      overflow:hidden;
    }
    .content-wrapper{
       padding:24px 12px 18px 24px;
       font-size:0;
       position:relative;
    }
     .avatar{
         display:inline-block;
         vertical-align:top;
      }
      .avatar img{
        border-radius:2px;
      }
      .content-wrapper .content{
         display:inline-block;
         font-size:14px;
         margin-left:16px;
      }
      .content .title{
        margin: 2px 0 8px 0;
      }
      @media screen and (max-width:450px) {
        .brand{
           display:inline-block;
           vertical-align:top;
           width:30px;
           height:18px;
           background-image:url('brand@2x.png');
           background-size:30px 18px;
           background-repeat:no-repeat;
        }
      }
       @media screen and (min-width:460px) {
              .brand{
                 display:inline-block;
                 vertical-align:top;
                 width:45px;
                 height:27px;
                 background-image:url('brand@3x.png');
                 background-size:45px 27px;
                 background-repeat:no-repeat;
              }
            }
       .title .name{
          margin-left:6px;
          font-size:16px;
          line-height:18px;
          font-weight:bold;
       }
       .content .description{
          margin-bottom:10px;
          line-height:12px;
          font-size:12px;
       }
       .support .icon{
         display:inline-block;
         width:12px;
         height:12px;
         margin-right:4px;
         background-size:12px 12px;
         background-repeat:no-repeat;
       }
         .decrease{
             background-image:url('decrease_1@2x.png');
         }
         .discount{
             background-image:url('discount_1@2x.png');
         }
          .guarantee{
              background-image:url('guarantee_1@2x.png');
          }
          .special{
              background-image:url('special_1@2x.png');
          }
           .invoice{
               background-image:url('invoice_1@2x.png')
           }
       .support .text{
         vertical-align:top;
          font-size:12px;
          line-height:12px;
       }
       .support-count{
          position:absolute;
          right:12px;
          bottom:14px;
          padding:0 8px;
          height:24px;
          line-height:24px;
          border-radius:14px;
          background:rgba(0,0,0,0.2);
          text-align:center;
       }
       .count{
         font-size:10px;
         vertical-align:top;
       }
       .support-count .icon-keyboard_arrow_right{
          margin-left:2px;
          line-height:24px;
          font-size:10px;
       }
       .bulletin-wrapper{
          height:28px;
          line-height:28px;
          padding:0 22px 0 12px;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
          position:relative;
          background:rgba(7,17,27,0.2);
       }
        @media screen and (max-width:450px) {
               .bulletin-title{
                        display:inline-block;
                        width:22px;
                        height:12px;
                        margin-top:7px;
                        background-image:url('bulletin@2x.png');
                        background-size:22px 12px;
                        background-repeat:no-repeat;
                     }
             }
          @media screen and (min-width:460px) {
                 .bulletin-title{
                         display:inline-block;
                         width:33px;
                         height:18px;
                         margin-top:8px;
                         background-image:url('bulletin@3x.png');
                         background-size:22px 12px;
                         background-repeat:no-repeat;
                         }
                   }
          .bulletin-text{
             vertical-align:top;
             margin:0 4px;
             font-size:10px;
          }
           .bulletin-wrapper .icon-keyboard_arrow_right{
                position:absolute;
                right:10px;
                top:2px;
                font-size:10px;
            }
        .background{
           position:absolute;
           top:0;
           left:0;
           width:100%;
           height:100%;
           z-index:-1;
           filter:blur(10px);
        }
        .detail{
           position:fixed;
           z-index:100;
           top:0;
           left:0;
           width:100%;
           height:100%;
           overflow:auto;
           background:rgba(7,17,27,0.8);
           backdrop-filter:blur(10px);
           transition: all 0.5s;
        }
       .fade-enter-active,.fade-leave-active{
           opacity:1;
           background:rgba(7,17,27,0.8);
        }
         .fade-enter, .fade-leave-active{
           opacity:0;
           background:rgba(7,17,27,0);
        }
        .detail .detail-wrapper{
           min-height:100%;
           width:100%;
        }
        .detail-wrapper .detail-main{
           margin-top:64px;
           padding-bottom:64px;
        }
        .detail-main .name{
           line-height:16px;
           text-align:center;
           font-size:16px;
           font-weight:700;
        }
        .detail .detail-close{
           position:relative;
           width:32px;
           height:32px;
           margin:-64px auto 0 auto;
           clear:both;
           font-size:32px;
        }
        .star-wrapper{
           margin-top:18px;
           padding:2px 0;
           text-align:center;
        }
        .detail-main .title{
           display:flex;
           width:80%;
           margin:28px auto 24px auto;
        }
        .title .line{
           flex:1;
           position:relative;
           top:-6px;
           border-bottom:1px solid rgba(255,255,255,0.2);
        }
        .title .text{
           padding:0 12px;
           font-size:14px;
           font-weight:700;
        }
        .supports{
           width:80%;
           margin:0 auto;
        }
        .supports .support-item{
           padding:0 12px;
           margin-bottom:12px;
           font-size:0;
        }
        .support-item .icon{
           display:inline-block;
           width:16px;
           height:16px;
           vertical-align:top;
           margin-right:6px;
           background-size:16px 16px;
           background-repeat:no-repeat;
        }
        .support-item .text{
           line-height:16px;
           font-size:12px;
        }
         .support-item .decrease{
              background-image:url('decrease_2@2x.png');
          }
         .support-item  .discount{
              background-image:url('discount_2@2x.png');
          }
          .support-item  .guarantee{
               background-image:url('guarantee_2@2x.png');
           }
          .support-item  .special{
               background-image:url('special_2@2x.png');
           }
          .support-item  .invoice{
                background-image:url('invoice_2@2x.png')
            }

          .detail-main .bulletin{
             width:80%;
             margin:0 auto;
          }
          .bulletin .content{
             padding:0 12px;
             line-height:24px;
             font-size:12px;
          }
</style>
