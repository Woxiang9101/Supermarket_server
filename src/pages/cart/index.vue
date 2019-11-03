<template>
  <div>

    <div class="card" v-for="(item,index) in ALL" wx:key="index">

      <div class="checkBox">
        <van-checkbox class='checkBoxContent'
                      :value="checkArray[index]"
                      @change="checkSingle(index)"></van-checkbox>
      </div>

      <div class="product">
        <van-card
          @click="todetail(item.ID)"
          :tag="index===ALL.length - 1 ? 'New':''"
          :price="item.TPrice"
          :origin-price="item.TOrPrice"
          :title="item.Name"
          :desc="item.TypeName"
          :thumb="URL + '/products/' + item.ID +'/BI/' + item.Img"
        >
          <view slot="bottom">
            <div class="number">
              <van-stepper min='0' :value="item.Mount" @change="stepChange($event,index)"/>
            </div>
          </view>
        </van-card>
      </div>

    </div>


    <!--//底部-->
    <div>
      <van-submit-bar
        :price="allPrice"
        button-text="提交订单"
        bind:submit="onClickButton"
        :tip="true"
        @submit="toCommit"
      >
        <div class="allcheckBox">
          <van-checkbox :value="allCheck"
                        @change="checkAll">全选</van-checkbox>
        </div>
      </van-submit-bar>
    </div>

    <div class="footSpace">  </div>
    <van-dialog id="van-dialog" />


  </div>
</template>


<script>
  import Dialog from '../../../dist/wx/components/vant-weapp/dist/dialog/dialog';
  import Moment from 'moment';

  export default {
      onShow:function(){
          console.log('购物车onshow时orders为：', this.$store.state.orders);
          this.checkArray = [];
          this.ALL = this.$store.state.cart;
          for (let i=0;i<this.ALL.length;i++){
              this.checkArray.push(true);
          }
          console.log('this.ALL为：',this.ALL);
      },
    data () {
      return {
          URL:'http://192.168.0.110:5000/',
          ALL:null,
          checkArray:[],
        allCheck: true,
        imageURL: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
      }
    },
    methods: {
        todetail:(ID) => {
            console.log('点击了购物车条目')
            wx.navigateTo({
                url: '/pages/details/main?ID=' + ID,
            })
        },
      onChange: function(event){
        console.log(this.allCheck)
        this.allCheck = !this.allCheck;
      },
      toCommit:function() {
          console.log('点击了提交订单')
          // console.log(this.$store.state.orders);

          let order = Object;
          order.ID = new Date().getTime();
          order.createTime = Moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
          order.list = [];
          order.payed = false;
          order.tPrice = this.allPrice;
          order.weID = this.$store.state.weID;
          order.weName = this.$store.state.weName;

          console.log('for 循环之前', this.$store.state.orders);
          // console.log(this.checkArray);
          for (let i=0;i<this.checkArray.length;i++){
              if (this.checkArray[i] === true){
                  order.list.push(this.ALL[i]);
              }
          }
          this.$store.dispatch('addToOrder',order);
          this.$store.dispatch('modiAllCart',[]);
          wx.redirectTo({
            url: '/pages/pay/main?ID=' + order.ID,
          })
      },
      stepChange:function(event,index){
          console.log(this.ALL);
          let mount = event.mp.detail;
          this.ALL[index].TPrice = mount * this.ALL[index].TypeSinglePrice;
          this.ALL[index].TOrPrice = mount * this.ALL[index].TypeOrSinglePrice;
          this.ALL[index].Mount = mount;
          console.log('步数改变');
          console.log(event);

          if (mount===0){
              Dialog.confirm({
                  title: '确认删除？',
                  message: '当前商品数量已为 0 , 是否删除此项？'
              }).then(() => {
                  console.log('点击了确认');
                  this.ALL.splice(index,1);
                  this.checkArray.splice(index,1);
                  this.$store.dispatch('modiAllCart',this.ALL);
              }).catch(() => {
                  console.log('点击了取消');
                  this.$store.dispatch('modiAllCart',this.ALL);
              });
          }
          this.$store.dispatch('modiAllCart',this.ALL);
      },
      checkSingle:function(index){
          this.checkArray.splice(index,1,!this.checkArray[index]);
          if(this.checkArray.indexOf(false) === -1){
              this.allCheck = true;
          }else{
              this.allCheck = false;
          }
      },
      checkAll:function () {
          for (let i=0;i<this.ALL.length;i++){
              this.checkArray[i] = !this.allCheck;
          }
          this.allCheck = !this.allCheck;
      }
    },
    computed: {
        allPrice: function () {
            let all = 0;
            this.ALL.forEach((item,index)=>{
                if (this.checkArray[index] === true){
                    all += item.TPrice;
                }
            })
            return all*100;
        }
    },

  }
</script>

<style>
  .card {
    width: 95%;
    margin: 20rpx auto;
    border-radius: 10rpx;
    box-shadow: 5rpx 5rpx 20rpx #c7c6be;
    overflow: hidden;
    background-color: #fafafa;

  }
  .checkBox{
    width: 50rpx;
    background-color: #fafafa;
    float: left;
  }
  .checkBoxContent{
    width: 50rpx;
    height: 50rpx;
    display: block;
    position: relative;
    top: 60rpx;
    left: 10rpx;
  }
  .product{
    width: 90%;
    /*height: 200rpx;*/
    background-color: purple;
    float: left
  }
  .number {
    position: absolute;
    top: 55px;
    right: 0px;
  }
  .allcheckBox{
    margin-left: 20rpx;
  }
  .footSpace{
    width: 100%;
    height: 90rpx;
    text-align: center;

  }
</style>
