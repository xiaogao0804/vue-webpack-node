<template>
  <div class="ratingselect">
     <div class="rating-type">
        <span @click="select(2,$event)" class="block positive" :class="{'active':selectType===2}">
           {{desc.all}}
           <span class="count_rating">47</span>
        </span>
        <span @click="select(0,$event)" class="block positive" :class="{'active':selectType===0}">
           {{desc.positive}}
           <span class="count_rating">40</span>
        </span>
        <span @click="select(1,$event)" class="block negative" :class="{'active2':selectType===1}">
            {{desc.negative}}
            <span class="count_rating">7</span>
            </span>
     </div>
     <div class="switch">
        <span class="icon-check_circle"></span>
        <span class="text">只看有内容的评价</span>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
   const ALL = 2;

  export default {
     props: {
        ratings: {
           type: Array,
           default() {
              return [];
           }
        },
        selectType: {
           type: Number,
           default: ALL
        },
        onlyContent: {
            type: Boolean,
            default: false
        },
        desc: {
           type: Object,
           default() {
              return {
                 all: '全部',
                 positive: '满意',
                 negative: '不满意'
              };
           }
        }
     },
     events: {
        'ratingtype.select'(type) {
           this.selectType=type;
           this.$nextTick(() => {
              this.scroll.refresh();
           });
        },
        'content.toggle'(onlyContent) {
           this.onlyContent=onlyContent;
           this.$nextTick(() => {
              this.scroll.refresh();
           });
        }
     },
     methods: {
         select(type, event) {
            if (!event._constructed) {
               return;
            }
            this.selectType=type;
         }
     }
   };
</script>

<style>
   .ratingselect .rating-type{
      padding:18px 0;
      margin:0 18px;
      font-size:0;
   }
 .ratingselect .rating-type:after {
       display: block;
       position: absolute;
       left: 0;
       bottom: 0;
       width: 100%;
       border-top: 1px solid rgba(7,17,27,0.1);
       content: '';
   }
   .rating-type .block{
      display:inline-block;
      padding:8px 12px;
      margin-right:8px;
      border-radius:1px;
      color:rgb(77,85,93);
      font-size:12px;
   }
   .ratingselect .rating-type .active{
       background:rgb(0,160,220);
       color:#fff;
   }
   .ratingselect .rating-type .active2{
       background:rgb(77,85,93);
       color:#fff;
   }
   .rating-type .positive{
      background:rgba(0,160,220,0.2);
   }
   .rating-type .negative{
      background:rgba(77,85,93,0.2);
   }
   .block .count_rating{
      font-size:8px;
      margin-left:2px;
   }
   .switch{
      padding:12px 18px;
      line-height:24px;
      border-bottom:1px solid rgba(7,17,27,0.1);
      color:rgb(147,153,159);
   }
   .switch .text{
       font-size:12px;
       vertical-align:top;
   }
</style>
