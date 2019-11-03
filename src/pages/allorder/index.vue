<template>
  <div>

    <van-tabs sticky>

      <van-tab title="全部">

        <div class="card" v-for="(item,index) in orders"
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

      <van-tab title="待付款">内容 2</van-tab>
      <van-tab title="待收货">内容 3</van-tab>
      <van-tab title="已完成" @click="tomain">内容 4</van-tab>
    </van-tabs>


    <div class="footSpace">亲，到底了油！^-^</div>
    <van-dialog id="van-dialog"/>


  </div>
</template>


<script>
    import Dialog from '../../../dist/wx/components/vant-weapp/dist/dialog/dialog';
    import Moment from 'moment';

    export default {
        onShow: function () {
            console.log('onshow执行了');
            let allOrders = this.$store.state.orders;

            //当前展示始终为store.orders的最后一项，并且加入到orders中
            for(let i=0;i<allOrders.length;i++){
                let indexItem = allOrders[i];
                this.orders.push(Object.assign({},indexItem));
            }
            console.log('当前orders:',this.orders);

        },
        data: {
            URL:'http://192.168.0.110:5000/',
            orders:[],
        },
        methods: {

            tomain: function () {
                console.log('去main');
                wx.switchTab({
                    url: '/pages/main/main'
                })
            }

        },
        computed: {},

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
