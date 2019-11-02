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
        @submit="toPay"
      >
        <div class="allcheckBox">
          <van-checkbox :value="allCheck"
                        @change="checkAll">全选</van-checkbox>
        </div>
      </van-submit-bar>
    </div>

    <div class="footSpace">亲，到底了油！^-^ </div>
    <van-dialog id="van-dialog" />


  </div>
</template>


<script>
    import Dialog from '../../../dist/wx/components/vant-weapp/dist/dialog/dialog';

  export default {
      onLoad:function(){
          this.checkArray = [];
          this.ALL = this.$store.state.cart;
          for (let i=0;i<this.ALL.length;i++){
              this.checkArray.push(true);
          }
          console.log(this.ALL);
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
      onChange: function(event){
        console.log(this.allCheck)
        this.allCheck = !this.allCheck;
      },
      toPay:() => {
    console.log('点击了一下下')
    console.log(wx)
    wx.navigateTo({
      url: '/pages/pay/main',
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
              }).catch(() => {
                  console.log('点击了取消');
              });
          }
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
    float: right;
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
