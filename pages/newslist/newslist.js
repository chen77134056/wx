// pages/newslist/newslist.js
Page({
  data: {
    images: {}
  },
  onPullDownRefresh(){
    console.log(1)
  },

  xxx:function(){
    console.log(123)
  },

  imageLoad: function (e) {
       console.log(e)

  },
  onLoad:function(){
      wx.request({
        url: 'https://www.easynode.cn',
        success:function(data){
            console.log(data)
        },
        fail: function (data){
          console.log(data)
        }
      })
  },

  onReady:function(){
    
    console.log( wx.getLaunchOptionsSync().scene )
  },
  ab:()=>{
    wx.openSetting({
      success(res) {
        console.log(res.authSetting)
      }
    })
  },

  abc:function(){
    wx.startRecord({
      success(res) {
         console.log(res)
      }
    })
  },
  login(){
      wx.login({
        success(res) {
          console.log(res)
        }
      })
  },
  getu(){
    wx.getUserInfo({
      withCredentials:true,
      success(res) {
         console.log(res)
      }
    })
  }
})