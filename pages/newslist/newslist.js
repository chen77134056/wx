// pages/newslist/newslist.js
Page({
  data: {
    images: {}
  },
  viewnews:function(e){
    console.log(e)
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