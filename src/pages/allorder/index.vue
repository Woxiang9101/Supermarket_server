<template>
  <div>

    <van-tabs sticky>

      <van-tab title="全部">
        <div class="card" v-for="(item,index) in orders"
             @click="toOrderDetail(item.ID)"
             wx:key="index">
          <div class="product">
            <van-card
              :price="item.tPrice"
              :title="item.list[0].Name + '... '"
              :desc="item.list[0].TypeName + '...'"
              :thumb="URL + '/products/' + item.list[0].ID +'/BI/' + item.list[0].Img"
            >
              <view slot="bottom">
                <div class="number">
                  x {{item.list.length}}
                </div>
              </view>
            </van-card>
          </div>
        </div>
      </van-tab>

      <van-tab title="待付款">
        <div class="card" v-for="(item,index) in waitPayOrders"
             @click="toOrderDetail(item.ID)"
             wx:key="index">
          <div class="product">
            <van-card
              :price="item.tPrice"
              :title="item.list[0].Name + '... '"
              :desc="item.list[0].TypeName + '...'"
              :thumb="URL + '/products/' + item.list[0].ID +'/BI/' + item.list[0].Img"
            >
              <view slot="bottom">
                <div class="number">
                  x {{item.list.length}}
                </div>
              </view>
            </van-card>
          </div>
        </div>
      </van-tab>

      <van-tab title="待收货">
        <div class="card" v-for="(item,index) in hasPayOrders"
             @click="toOrderDetail(item.ID)"
             wx:key="index">
          <div class="product">
            <van-card
              :price="item.tPrice"
              :title="item.list[0].Name + '... '"
              :desc="item.list[0].TypeName + '...'"
              :thumb="URL + '/products/' + item.list[0].ID +'/BI/' + item.list[0].Img"
            >
              <view slot="bottom">
                <div class="number">
                  x {{item.list.length}}
                </div>
              </view>
            </van-card>
          </div>
        </div>
      </van-tab>

      <van-tab title="已完成">
        <div class="card" v-for="(item,index) in endOrders"
             @click="toOrderDetail(item.ID)"
             wx:key="index">
          <div class="product">
            <van-card
              :price="item.tPrice"
              :title="item.list[0].Name + '... '"
              :desc="item.list[0].TypeName + '...'"
              :thumb="URL + '/products/' + item.list[0].ID +'/BI/' + item.list[0].Img"
            >
              <view slot="bottom">
                <div class="number">
                  x {{item.list.length}}
                </div>
              </view>
            </van-card>
          </div>
        </div>
      </van-tab>
    </van-tabs>


    <div class="footSpace"></div>
    <van-dialog id="van-dialog"/>


  </div>
</template>


<script>
    import Dialog from '../../../dist/wx/components/vant-weapp/dist/dialog/dialog';
    import Moment from 'moment';

    export default {
        onShow: function () {
            this.orders = [];
            console.log('onshow执行了');
            let allOrders = this.$store.state.orders;

            for(let i=0;i<allOrders.length;i++){
                let indexItem = allOrders[i];
                this.orders[i] = Object.assign({},indexItem);
            }
            console.log('onshow时orders为:',this.orders);

        },
        data: {
            URL:'http://192.168.0.110:5000/',
            orders:[],
        },
        methods: {
            toOrderDetail:(ID) => {
                console.log('在总订单页面点击了跳转到订单详情');
                wx.navigateTo({
                    url: '/pages/pay/main?ID=' + ID,
                })
            },

        },
        computed: {
            waitPayOrders:function () {
                return this.orders.filter(function (item,index){
                    return item.payed === false;
                })
            },
            hasPayOrders:function () {
                return this.orders.filter(function (item,index){
                    return item.payed === true;
                })
            },
            endOrders:function () {
                return this.orders.filter(function (item,index){
                    return item.end === true;
                })
            }
        },

    }
</script>

<style>
  .card {
    width: 95%;
    margin: 5px auto;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #c7c6be;
    overflow: hidden;
    background-color: #fafafa;
  }

  .number {
    float: right;
  }

  .footSpace {
    width: 100%;
    height: 45px;
    text-align: center;
  }
</style>
