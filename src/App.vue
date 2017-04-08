<template>
  <div>
   <v-header v-bind:seller="seller"></v-header>
    <div class='tab'>
      <div class='tab-item'>
        <router-link to="/goods">商品</router-link>   
      </div>
      <div class='tab-item'>
       <router-link to="/ratings">评论</router-link>
      </div>
      <div class='tab-item'>
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller" keep-alive></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
 // import {urlParse} from 'common/js/util';
  import header from './components/header/header.vue';
  console.log(header);
   const ERR_OK = 0;
  export default {
    data: function() {
       return {
         seller: {
           //id: (() => {
             // let queryParam=urlParse();
              //console.log(queryParam);
              //return queryParam.id;
          // })()
         }
       };
    },
    created() {
       this.$http.get('/api/seller').then((response) => {
          response=response.body;
          if (response.errno === ERR_OK) {
          this.seller = response.data;
          }
       });
    },
    components: {
     'v-header': header
    }
  };

</script>

<style>
body,html{
  line-height:1;
  font-weight:200;
  font-family:'PingFang SC','STHeitiSC-Light','Helvetica-Light',arial,sans-serif;
}
  .tab{
     display:flex;
     width:100%;
     height:40px;
     line-height:40px;
     position:relative;
   }
   .tab:after{
     display:block;
     position:absolute;
     left:0;
     bottom:0;
     width:100%;
     border-top:1px solid rgba(7,17,27,0.1);
     content:'';
   }
   .tab .tab-item{
     flex:1;
     text-align:center;
   }
   .tab-item a{
     display:block;
     font-size:14px;
     color:rgb(77,85,93);
   }
   .tab-item .active{
     color:#f01414;
   }
</style>
