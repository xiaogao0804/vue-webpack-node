<template>
   <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0">
         <span class='inner icon-remove_circle_outline' @click="decreaseCart"></span>
      </div>
    </transition>
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click="addCart"></div>
   </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
     props: {
        food: {
           type: Object
        }
     },
     methods: {
        addCart() {
          if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
            this.food.count=1;
          } else {
            this.food.count++;
          }
        },
        decreaseCart() {
           if (this.food.count) {
              this.food.count--;
            }
          }
     }

  };
</script>
<style>
.cartcontrol{
   font-size:0;
}
.cartcontrol .cart-decrease{
   display:inline-block;
   transition:all 0.4s linear;
}
.cart-decrease .inner{
  display:inline-block;
  line-height:24px;
  font-size:24px;
  color:rgb(0,160,220);
  transition:all 0.4s linear;
  transform:rotate(0);
}
.move-enter-active,.move-leave-active{
   opacity:1;
   transform:translate3D(0,0,0);
}
.move-enter-active .inner, .move-leave-active .inner{
   transform:rotate(180deg);
}
.move-enter,.move-leave-active{
   opacity:0;
   transform:translate3D(24px,0,0);
}
.cartcontrol-wrapper .cart-count{
   display:inline-block;
   vertical-align:top;
   width:12px;
   line-height:24px;
   text-align:center;
   font-size:10px;
   color:rgb(147,153,159);
}
.cartcontrol-wrapper .cart-add{
   display:inline-block;
   line-height:24px;
   font-size:24px;
   color:rgb(0,160,220);
}
.cartcontrol-wrapper .icon-add_circle{
  width:22px;
  height:22px;
  background-image:url('add.png');
  background-size:22px 22px;
  background-repeat:no-repeat;
}
.cartcontrol .icon-remove_circle_outline{
  width:22px;
  height:22px;
  background-image:url('jian.png');
  background-size:22px 22px;
  background-repeat:no-repeat;
}
</style>
