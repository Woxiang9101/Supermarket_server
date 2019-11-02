<template>
  <div>


    <!--顶部swiper轮播图-->
    <swiper class="swiper" indicator-dots="true"
            :style="{height: scrWidth/detailJson.BIratio + 'px'}">
      <swiper-item v-for="(item,index) in detailJson.BIs" wx:key="index" :key="index">
        <img class="swiperItem"
             :src="URL + '/products/' + detailJson.ID +'/BI/' + item" alt="">
      </swiper-item>
    </swiper>

    <!--    价格-->
    <div class="priceText">
      <p class="price">￥{{tagSelectedSinglePrice}}</p>
      <span class="orprice" v-if="detailJson.orprice">原价￥{{detailJson.orprice}}</span>
    </div>

    <!--    标题-->
    <h1 class="title">&nbsp;&nbsp;&nbsp;&nbsp;{{detailJson.Name}}</h1>

    <!--    标签-->
    <div>
      <div class="tag" v-if="detailJson.tags"
           v-for="(item,index) in detailJson.tags"
           wx:key="index" :key="index">
        <van-tag  round v-if="index%4===0" type="primary">{{item}}</van-tag>
        <van-tag  round v-if="index%4===1" type="success">{{item}}</van-tag>
        <van-tag  round v-if="index%4===2" type="danger">{{item}}</van-tag>
        <van-tag  round v-if="index%4===3" type="warning">{{item}}</van-tag>
      </div>
    </div>

    <!--    滚动通告栏-->
    <div class="noticeBar">
      <van-notice-bar
        v-if="detailJson.tip"
        left-icon="http://192.168.0.110:5000/icon/喇叭.png"
        :text="detailJson.tip"
      />
    </div>

<!--    选择商品-->
    <van-cell title="请选择"  value="请选择商品类型和数量"
              v-bind:center="true" :clickable="false" arrow-direction="down" />
    <view class="select">
      <div class="selected">
        <p class="selText">已选</p>
        <p class="selectedInfo">
          {{tagSelectedName}}
        </p>
      </div>


      <div class="product">
        <p class="selText chanpin">产品</p>
        <div class="proType">
          <div v-for="(item,index) in detailJson.TypeandPrice"
               wx:key="index" :key="index"
               @click="tagSelect(index)"
               class="proTag"
               :class="{'proTagSelected':tagSelected == index}"
              >
            {{item[0]}}
          </div>
        </div>
      </div>


      <div class="mount">
        <p class="selText">数量</p>
        <van-stepper :value="1"  @change="mountChange"/>
      </div>


    </view>


    <!--    //商品参数弹出-->
    <van-cell title="商品参数" is-link @click="showPopup" />
    <van-popup
      :show="show"
      position="bottom"
      custom-style="height: 60%"
      @close="onClose"
    >
      <div class="chart">
        <div class="chartLine" v-for="(item,index) in detailJson.Paras" wx:key="index">
          <div class="proName">{{item[0]}}</div>
          <div class="proValue">{{item[1]}}</div>
        </div>
      </div>
    </van-popup>

    <!--    //商品详情小字-->
    <div class="detailText">
      <van-tag class="detailTag" round type="primary">商品详情</van-tag>
    </div>


    <!--    详情图片box-->
    <div class="imgBox">
      <img class="detailImg"  v-for="(item,index) in detailJson.DIs" wx:key="index"
           :src="URL + '/products/' + detailJson.ID +'/DI/' + item.name"
           :style="{height: scrWidth/item.ratio + 'px'}" />
    </div>

<!--    底部购物功能区-->
    <van-goods-action >
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon  @click="toCart" icon="cart-o" text="购物车" info="5" />
      <van-goods-action-button text="加入购物车" type="warning" @click="addToCart"/>
      <van-goods-action-button text="立即购买" />
    </van-goods-action>

    <div class="lastTip">亲！到底了油！^-^</div>

    <van-toast id="van-toast" />

  </div>
</template>


<script>
    import Toast from '../../../dist/wx/components/vant-weapp/dist/toast/toast';

  export default {

      onLoad: function (options) {
          this.ID = options.ID;
          this.scrWidth = wx.getSystemInfoSync().windowWidth;
          wx.request({
              url: 'http://192.168.0.110:5000/getproduct?ID=' + this.ID,
              success: (res)=> {
                  console.log('【发起网络请求成功！】',res.data);
                  this.detailJson = res.data;
                  this.tagSelectedSinglePrice = res.data.Price;
                  this.swiWidth = this.scrWidth / this.detailJson.BIratio;
              }
          })
      },

    data:{
        ID:null,
        scrWidth:20,//屏幕原始尺寸
        URL:'http://192.168.0.110:5000/',
        show: false,//产品参数是否显示
        detailJson:666,//产品完整Json数据
        tagSelected:null,
        tagSelectedName:'',
        tagSelectedMount:1,
        tagSelectedSinglePrice:0,
    },

    methods: {
        showPopup: function () {
            this.show = true;
        },
        onClose: function () {
            this.show = false;
            console.log(this.detailJson);
            console.log(this.scrWidth / this.detailJson.BIratio);
        },
        toCart: () => {
            console.log('点击了一下下')
            console.log(wx)
            wx.navigateTo({
                url: '/pages/cart/main',
            })
        },
        tagSelect: function(i) {
            this.tagSelected = i;
            this.tagSelectedName = this.detailJson.TypeandPrice[this.tagSelected][0];
            this.tagSelectedSinglePrice = this.detailJson.TypeandPrice[this.tagSelected][1];
            console.log('当前选择的是', this.detailJson.TypeandPrice[this.tagSelected]);
        },
        mountChange:function(event) {
            this.tagSelectedMount = event.mp.detail;
        },
        addToCart:function () {
            Toast.success('加入成功！');
        }
    }

  }
</script>

<style>

  page{
    margin: 0;
    padding: 0;
  }
  .swiper{
    width: 100%;
    /*height: 740rpx;*/
    /*background-color: burlywood;*/
    position: relative;
  }
  .swiperItem{
    width: 375px;
    height: 100%;
  }
  .priceText{
    width: 100%;
    height: 70rpx;
    margin-top: 10rpx;
    /*background-color: lime;*/
    padding-left: 20rpx;
  }
  .price{
    font-size: 50rpx;
    display: inline-block;
    margin-right: 20rpx;
    color: #ff702d;
  }
  .orprice{
    font-size: 30rpx;
    text-decoration: line-through;
    color: #aaaaaa;
  }
  .title{
    padding: 0 40rpx 0 40rpx;
    margin-bottom: 10rpx;
  }
  .tag{
    margin: 10rpx;
    display: inline-block;
  }
  .select{
    margin: 0 auto;
    padding-left: 40rpx;
    width: 99%;
    /*height: 320rpx;*/
    /*background-color: #d9ff77;*/
    border-top: 2rpx solid rgba(154, 154, 154, 0.2);
    border-bottom: 2rpx solid rgba(154, 154, 154, 0.2);
    overflow: hidden;
  }
  .selText{
    display: inline-block;
    font-size: 25rpx;
    color: #424242;
    width: 100rpx;
    float: left;
    margin-top: 10rpx;
    /*background-color: peachpuff;*/
  }
  .selected{
    /*background-color: peachpuff;*/
  }
  .selectedInfo{
    display: inline-block;
    font-size: 20rpx;
    margin-left: 20rpx;
  }
  .product{
    width: 100%;
    /*height: 200rpx;*/
    margin-top: 20rpx;
    /*background-color: darkorchid;*/
    display: block;
  }
  .chanpin{
    /*height: 200 rpx;*/
  }
  .proType{
    float: left;
    width: 500rpx;
    /*height: 200rpx;*/
    /*background-color: darkblue;*/
  }
  .proTag{
    padding: 5rpx;
    padding-left: 15rpx;
    padding-right: 15rpx;
    display: inline-block;
    border-radius: 5rpx;
    border: 1px solid rgba(154, 154, 154, 0.71);
    margin: 10rpx;
    font-size: 25rpx;
  }
  .proTagSelected{
    background-color: #07c160;
    color:white;
  }
  .mount{
    height: 70rpx;
    display: block;
    float: left;
    margin-top: 20rpx;
    width: 100%;
    /*background-color: khaki;*/
  }
  .detailText{
    margin-top: 10rpx;
    margin-bottom: 10rpx;
    text-align: center;
  }
  .imgBox{
    width: 100%;
  }
  .detailImg{
    width: 100%;
    /*height: 740rpx;*/
    margin: 0;
    padding: 0;
    display: block;
  }
  .lastTip{
    width: 100%;
    height: 96rpx;
    text-align: center;
  }
  .chart{
    /*background-color: coral;*/
    margin: 15%;
    width: 70%;
    /*height: 70%;*/
    border-radius: 50rpx;
    border: 1px solid #abaaa2;
    overflow: hidden;
  }
  .chartLine{
    width: 100%;
    height: 80rpx;
    border: 1px solid rgba(154, 154, 154, 0.45);
    border-right: none;
    border-left: none;
    border-top: none;
  }
  .proName{
    width: 30%;
    height: 80rpx;
    line-height: 80rpx;
    display: inline-block;
    text-align: right;
    padding-right: 20rpx;
    border: 1px solid #9a9a9a;
    border-bottom: none;
    border-left: none;
    border-top: none;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .proValue{
    width: 60%;
    height: 80rpx;
    line-height: 80rpx;
    display: inline-block;
    text-align: left;
    padding-left: 20rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    /*background-color: darkslategray;*/
  }
  .noticeBar{
    margin-top: 10rpx;
  }
</style>
