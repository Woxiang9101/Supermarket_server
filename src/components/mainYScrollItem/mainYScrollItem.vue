<template>
  <div class="scrollYItem" @click="todetail(ID)">
    <img class="yimg" :src="imgSrc"/>
    <p class="ytitle">{{title}}</p>
    <p class="price">￥{{price}}</p>
    <s class="orprice">￥{{orprice}}</s>
  </div>
</template>

<script>
    export default {
        name: "mainYScrollItem",
        props:['imgSrc','title','price','orprice','ID'],
        methods:{
            todetail:(ID) => {
                console.log('点击了main中的scrollYitem')
                wx.navigateTo({
                    url: '/pages/details/main?ID=' + ID,
                })
            }
        },
    }
</script>

<style scoped>
  .scrollYItem{
    height: 470rpx;
    width: 300rpx;
    margin: 10rpx 27rpx 20rpx 27rpx;
    display: inline-block;
    overflow: hidden;
    border-radius: 10rpx;
    background-color: white;
    box-shadow: 5rpx 5rpx 10rpx #dad9d1;
  }
  .yimg{
    width: 300rpx;
    height: 300rpx;
  }
  .ytitle{
    width: 280rpx;
    height: 87rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal !important;
    line-height: 43.5rpx;
    margin-top: 20rpx;
    margin-bottom: 7rpx;
    padding-left: 10rpx;
    padding-right: 10rpx;
  }
  .price{
    font-size: 30rpx;
    display: inline-block;
    margin-right: 20rpx;
    /*margin-top: 10rpx;*/
    color: #ff702d;
  }
  .orprice{
    font-size: 20rpx;
    text-decoration: line-through;
    display: inline-block;
    color: #aaaaaa;
  }
</style>
