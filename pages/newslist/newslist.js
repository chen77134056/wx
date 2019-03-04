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
  
  }

})