<template>
  <div class="scrollXItem" @click="todetail(ID)">
    <img class="ximg" :src="imgSrc"/>
    <p class="title">{{title}}</p>
    <p class="price">￥{{price}}</p>
    <s class="orprice">￥{{orprice}}</s>
  </div>
</template>

<script>
    export default {
        name: "mainXScrollItem",
        props:['imgSrc','title','price','orprice','ID'],
        methods:{
            todetail:(ID) => {
                console.log('点击了main中的scrollXitem')
                wx.navigateTo({
                    url: '/pages/details/main?ID=' + ID,
                })
            }
        },

    }
</script>

<style scoped>
  .scrollXItem{
    height: 357rpx;
    width: 200rpx;
    margin-left: 10rpx;
    display: inline-block;
    overflow: hidden;
    padding: 20rpx;
    border-radius: 10rpx;
    background-color: white;
    box-shadow: 5rpx 5rpx 10rpx #dad9d1;
    margin-right: 10rpx;
  }
  .ximg{
    width: 200rpx;
    height: 200rpx;
  }
  .title{
    width: 200rpx;
    height: 87rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal !important;
    line-height: 43.5rpx;
    margin-top: 20rpx;
    margin-bottom: 10rpx;
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
