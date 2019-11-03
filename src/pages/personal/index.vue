<template>
  <div>
    <div class="background"></div>

    <div class="top">
      <img :src="userInfo.avatarUrl" alt="欢迎您"/>

      <button class="login" v-if="canIUse&&userInfo.nickName===null" open-type="getUserInfo"
                    @getuserinfo="getUserInfo">微信登录</button>
      <view v-if="!canIUse">请升级微信版本</view>
      <view class="loginText" v-if="userInfo.nickName">{{userInfo.nickName}}</view>
    </div>

    <div class="cells">
      <van-cell title="我的订单" @click="toAllOrders" is-link />
      <van-cell title="我的地址" is-link />
    </div>

  </div>
</template>


<script>

  export default {
    data(){
      return {
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        userInfo: {
          nickName:null,
          avatarUrl:'/static/images/user.png'
        },
      }
    },
    onLoad: function () {
      // 查看是否授权
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            this.getUserInfo();
          }
        }
      })
    },
    methods: {
        getUserInfo: function () {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo;
              let weInfo = [];
              weInfo[0] = 1834250342;
              weInfo[1] = this.userInfo.nickName;
              this.$store.dispatch('modiWeInfo',weInfo);
              console.log('获取用户信息，授权成功！',this.$store);
            },
            fail: () => {
              console.log('获取用户信息，授权失败！');
            }
          })
        },
        toAllOrders:function () {
            wx.navigateTo({
                url: '/pages/allorder/main'
            })
        }
    },

  }
</script>

<style>

  .background{
    width: 150%;
    height: 600rpx;
    border-radius: 50%;
    background-color: #FE785A;
    margin-left: -25%;
    margin-top: -25%;
    z-index: -1;
    position: absolute;
  }
  .top{
    width: 500rpx;
    height: 100rpx;
    /*background-color: burlywood;*/
    position: absolute;
    top: 100rpx;
    left: 100rpx;
  }

  ._img {
    width: 150rpx;
    height: 150rpx;
    display: inline-block;
    border-radius: 50%;

  }
  .capsule{
    width: 150rpx;
    height: 60rpx;
    background-color: rgba(0, 0, 0, 0.2);
    display: inline-block;
    top: -10rpx;
    position: relative;
    margin-left: 30rpx;
    border-radius: 87.5rpx;
    text-align: center;

  }

  ._p {
    font-size: 30rpx;
    line-height: 60rpx;
    color: white;
  }
  .login {
    height: 60rpx;
    background-color: rgba(0, 0, 0, 0.2);
    display: inline-block;
    top: -30rpx;
    position: relative;
    margin-left: 30rpx;
    border-radius: 87.5rpx;
    text-align: center;
    font-size: 30rpx;
    line-height: 60rpx;
    color: white;
  }
  .loginText {
    height: 60rpx;
    display: inline-block;
    top: -30rpx;
    position: relative;
    margin-left: 30rpx;
    text-align: center;
    font-size: 40rpx;
    line-height: 60rpx;
    color: white;
  }

  .cells{
    width: 80%;
    position: absolute;
    top: 300rpx;
    left: 10%;
    overflow: hidden;
    border-radius: 15rpx;
    opacity: 0.96;
    box-shadow: 5rpx 5rpx 30rpx #d6d6d6;
  }

</style>
