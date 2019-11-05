<template>
  <div>

<!--    顶部swiper轮播图-->
    <swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">

      <swiper-item @click="todetail(201616060301)">
        <img class="swiperItem" src="/static/demo/swiper1.jpg" alt="">
      </swiper-item>

      <swiper-item @click="todetail(201616060302)">
        <img class="swiperItem" src="/static/demo/swiper2.jpg" alt="">
      </swiper-item>
      <swiper-item><img class="swiperItem" src="/static/demo/swiper1.jpg" alt=""></swiper-item>
      <swiper-item><img class="swiperItem" src="/static/demo/swiper2.jpg" alt=""></swiper-item>
    </swiper>

<!--    特惠好货字体样式-->
    <div class="thhhText">
      <div class="line"></div>
      <p class="thhh">特惠好货</p>
      <div class="line"></div>
    </div>

<!--    横向滑动条-->
    <scroll-view class="scrollX" scroll-x="true" bindscroll="scroll"
                  style="width: 100%">

      <mainXScrollItem ID='201616060301'
                       title="这是mainXScrollitem组件"
                       price="15.00"
                       orprice="25.25"
                       imgSrc="/static/demo/scrox.jpg">
      </mainXScrollItem>

      <mainXScrollItem ID='201616060301'
                       title="这是mainXScrollitem组件"
                       price="15.00"
                       orprice="25.25"
                       imgSrc="/static/demo/scrox.jpg">
      </mainXScrollItem>
      <mainXScrollItem ID='201616060301'
                       title="这是mainXScrollitem组件"
                       price="15.00"
                       orprice="25.25"
                       imgSrc="/static/demo/scrox.jpg">
      </mainXScrollItem>
      <mainXScrollItem ID='201616060301'
                       title="这是mainXScrollitem组件"
                       price="15.00"
                       orprice="25.25"
                       imgSrc="/static/demo/scrox.jpg">
      </mainXScrollItem>
      <mainXScrollItem ID='201616060301'
                       title="这是mainXScrollitem组件"
                       price="15.00"
                       orprice="25.25"
                       imgSrc="/static/demo/scrox.jpg">
      </mainXScrollItem>

    </scroll-view>

<!--    Tab标签页-->
    <van-tabs sticky animated swipeable :border="false" >
      <van-tab class="tab" title="超市精选">

        <mainYScrollItem ID='201616060302'
                         title="这是mainYScrollitem组件"
                         price="15.00"
                         orprice="25.25"
                         imgSrc="/static/demo/scrox.jpg">
        </mainYScrollItem>


        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
      </van-tab>
      <van-tab class="tab" title="宠物生活">
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
      </van-tab>
      <van-tab class="tab" title="家具日用">
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
      </van-tab>
      <van-tab class="tab" title="时令生鲜">
        <div class="scrollYItem">
        <img class="yimg" src="/static/demo/scrox.jpg"/>
        <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
        <p class="price">￥64.9</p>
        <s class="orprice">￥77.50</s>
      </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
      </van-tab>
      <van-tab class="tab" title="中外名酒">
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
      </van-tab>
    </van-tabs>


  </div>
</template>

<script>
  import mainXScrollItem from "../../components/mainXScrollItem/mainXScrollItem";
  import mainYScrollItem from "../../components/mainYScrollItem/mainYScrollItem";

  export default {

    data: function () {
      return {
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500
      }
    },
    methods:{
      todetail:(ID) => {
      console.log('点击了一下下')
      wx.navigateTo({
        url: '/pages/details/main?ID=' + ID,
      })
      }
    },
    components: {
        mainXScrollItem,
        mainYScrollItem
    }


  }
</script>

<style>
  page{
    /*background-color: #4f2bf7;*/
  }
  .swiper{
    width: 95%;
    height: 300rpx;
    background-color: burlywood;
    position: relative;
    margin-top: 20rpx;
    left: 2.5%;
    border-radius: 30rpx 10rpx 100rpx 10rpx;
    overflow: hidden;
  }
  .swiperItem{
    width: 100%;
    height: 100%;
  }
  .thhhText{
    width: 100%;
    height: 70rpx;
    /*background-color: aquamarine;*/
    padding-top: 30rpx;
    display: flex;
    justify-content: center;
  }
  .line{
    width: 50rpx;
    height: 20rpx;
    border-radius: 20rpx;
    display: inline-block;
    background-color: #FE785A;
    margin: 10rpx;
  }
  .thhh{
    display: inline-block;
    font-size: 40rpx;
    position: relative;
    top: -10rpx;
    margin-left: 10rpx;
    margin-right: 10rpx;
  }
  .scrollX{
    height: 410rpx;
    /*background-color: #c7c7c7;*/
    white-space:nowrap;
  }
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
  .tab{
    text-align: center;
  }
</style>
