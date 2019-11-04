<template>
  <div>

    <van-cell title="订单编号" :value="orders[orderIdex].ID"/>
    <van-cell title="创建日期" :value="orders[orderIdex].createTime"/>


    <van-cell-group>
      <van-field
        :disabled="orders[orderIdex].payed===true?true:fasle"
        :required="orders[orderIdex].payed===true?fasle:true"
        :value="orders[orderIdex].payed===true?orders[orderIdex].consignee:consignee"
        @change="fieldChange($event,'consignee')"
        label="收件人"
        placeholder="请输入姓名"
      />
      <van-field
        :disabled="orders[orderIdex].payed===true?true:fasle"
        :required="orders[orderIdex].payed===true?fasle:true"
        @change="fieldChange($event,'phone')"
        :value="orders[orderIdex].payed===true?orders[orderIdex].phone:phone"
        label="手机号"
        placeholder="请输入手机号"
      />


      <van-cell :required="orders[orderIdex].payed===true?fasle:true"
                :disabled="orders[orderIdex].payed===true?true:fasle"
                :title="orders[orderIdex].payed===true?'收货地址':'请选择收货地址'"
                :value="orders[orderIdex].payed===true?orders[orderIdex].city:city"
                :is-link="orders[orderIdex].payed===true?fasle:true"
                @click="showPopup" />
      <van-popup
        :show="show"
        closeable
        position="bottom"
        custom-style="height: 40%"
        @close="popupClose"
      >
        <van-area @confirm='areaConfirm($event)'
                  @cancel="popupClose" :area-list="areaList"/>
      </van-popup>


      <van-field
        :disabled="orders[orderIdex].payed===true?true:fasle"
        :required="orders[orderIdex].payed===true?fasle:true"
        :value="orders[orderIdex].payed===true?orders[orderIdex].address:address"
        placeholder="请输入详细地址"
        @change="fieldChange($event,'address')"
        label="详细地址"
        type="textarea"
        autosize
      />
      <van-field
        :disabled="orders[orderIdex].payed===true?true:fasle"
        :value="orders[orderIdex].payed===true?orders[orderIdex].message:message"
        :placeholder="orders[orderIdex].payed===true?'':'给店主留言'"
        @change="fieldChange($event,'message')"
        label="留言"
        type="textarea"
        autosize
      />

    </van-cell-group>


    <van-collapse :value="activeNames" @change="onChangeColl"
                  :clickable="true" :border="false">
      <van-collapse-item title="详情" name="cardList">

        <div class="card" v-for="(item,index) in orders[orderIdex].list"
             wx:key="index">
          <div class="product" @click="todetail(item.ID)">
            <van-card
              :price="item.TPrice"
              :origin-price="item.TOrPrice"
              :title="item.Name"
              :desc="item.TypeName"
              :thumb="URL + '/products/' + item.ID +'/BI/' + item.Img"
            >
              <view slot="bottom">
                <div class="number">
                  x {{item.Mount}}
                </div>
              </view>
            </van-card>
          </div>
        </div>

      </van-collapse-item>
    </van-collapse>


    <div class="footSpace"></div>


    <div>
      <van-submit-bar
        :disabled="orders[orderIdex].payed===true?true:fasle"
        :price="orders[orderIdex].tPrice"
        :button-text="orders[orderIdex].payed===true?'已经支付':'微信支付'"
        @submit="pay"
        :tip="true"
      >

      </van-submit-bar>
    </div>
    <van-dialog id="van-dialog" />


  </div>
</template>


<script>
  import Dialog from '../../../dist/wx/components/vant-weapp/dist/dialog/dialog';
  import areaList from './area'

  export default {
      onLoad:function(options){
          console.log('当前的订单的ID为：', options.ID);
          this.ID = options.ID;
      },
      onShow:function(){
          console.log('onshow执行了');
          this.orderIdex = -1;
          let allOrders = this.$store.state.orders;
          console.log('store中orders的数据为：',allOrders);

          for(let i = 0;i<allOrders.length ;i++){
              if(allOrders[i].ID == this.ID){
                  this.orderIdex = i;
              }
          }
          console.log('检索到的orderIndex为：', this.orderIdex);

          let indexItem = allOrders[this.orderIdex];
          this.orders[this.orderIdex] = Object.assign({},indexItem);
          console.log('当前orders:',this.orders);
      },
      data () {
        return {
            orders:[],
            orderIdex:0,

            ID:-1,
            consignee: '',
            phone: '',
            city:'',
            address:'',
            message: '',
            payed:false,

            URL:'http://192.168.0.110:5000/',
            activeNames: ['cardList'],
            areaList,
            show: false,
            allCheck: true,
            imageURL: 'https://img.yzcdn.cn/vant/t-thirt.jpg',
        }
      },
      methods: {
          todetail:(ID) => {
              console.log('在pay页面点击了跳转到详情');
              wx.navigateTo({
                  url: '/pages/details/main?ID=' + ID,
              })
          },
          onChange: function (event) {
            console.log(this.allCheck)
            this.allCheck = !this.allCheck
          },
          showPopup: function () {
              if(this.orders[this.orderIdex].payed===false){
                  this.show = true
              }
          },
          popupClose: function () {
            this.show = false
          },
          onChangeColl: function (event) {
            console.log(this.activeNames[0])
            if (this.activeNames[0] === 'cardList') {
              this.activeNames = ['0']
            } else {
              this.activeNames = ['cardList']
            }
          },
          onClickButton:function() {
              wx.request({
                  url: 'http://192.168.0.110:5000', //仅为示例，并非真实的接口地址
                  success (res) {
                      console.log(res.data)
                  }
              })
          },
          pay:function () {
              if(this.consignee && this.phone && this.city && this.address ){
                  this.orders[this.orderIdex].consignee = this.consignee;
                  this.orders[this.orderIdex].phone = this.phone;
                  this.orders[this.orderIdex].city = this.city;
                  this.orders[this.orderIdex].address = this.address;
                  this.orders[this.orderIdex].message = this.message;
                  //暂时将是否付款payed设置为当点击了付款按钮就为true
                  this.orders[this.orderIdex].payed = true;

                  this.$store.dispatch('modiAllOrder',this.orders);
              } else{
                  Dialog.alert({
                      title: '信息未完善',
                      message: '提示：请将收货信息填写完整，再进行支付！'
                  }).then(() => {
                      // on close
                  });

              }

          },
          fieldChange:function (event,name) {
              switch (name) {
                  case 'consignee':
                      this.consignee = event.mp.detail;
                      console.log('进入userName修改');
                      break;
                  case 'phone':
                      this.phone = event.mp.detail;
                      console.log('进入userName修改');
                      break;
                  case 'message':
                      this.message = event.mp.detail;
                      console.log('进入userName修改');
                      break;
                  case 'address':
                      this.address = event.mp.detail;
                      console.log('进入userName修改');
                      break;
                  default:
                      break;
              }
          },
          areaConfirm:function (event) {
              console.log('点击了确认');
              this.city = event.mp.detail.values[0].name + '  ' +
                  event.mp.detail.values[1].name + '  ' +
                  event.mp.detail.values[2].name + '  ';
              this.popupClose();
          },
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

  .checkBox {
    width: 50rpx;
    background-color: #fafafa;
    float: left;
  }

  .checkBoxContent {
    width: 50rpx;
    height: 50rpx;
    display: block;
    position: relative;
    top: 60rpx;
    left: 10rpx;
  }

  .product {
    width: 100%;
    /*height: 200rpx;*/
    background-color: purple;
    float: left
  }

  .number {
    float: right;
  }

  .allcheckBox {
    margin-left: 20rpx;
  }

  .footSpace {
    width: 100%;
    height: 100rpx;
    text-align: center;

  }
</style>
