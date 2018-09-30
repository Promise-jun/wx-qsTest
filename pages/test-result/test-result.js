// pages/test-result/test-result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalList: [
      {
        "id": 1,
        "picUrl": "http://img3.imgtn.bdimg.com/it/u=1369107536,3606127013&fm=26&gp=0.jpg",
        "title": "恋爱风格评估",
        "smallTitle": "看到你这张图片你先看了什么呢？",
        "testNum": 20112
      },
      {
        "id": 2,
        "picUrl": "http://img1.imgtn.bdimg.com/it/u=1391327856,1436148337&fm=26&gp=0.jpg",
        "title": "你第一眼看到了什么反映了你的性格就是什么样子的",
        "smallTitle": "看到你这张图片你先看了什么呢？",
        "testNum": 20112
      },
      {
        "id": 3,
        "picUrl": "http://img2.imgtn.bdimg.com/it/u=3790269048,4248860580&fm=26&gp=0.jpg",
        "title": "测测你的内心隐藏的多深？",
        "smallTitle": "看到你这张图片你先看了什么呢？",
        "testNum": 20112
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 重新测试
  retest() {
    wx.redirectTo({
      url: '../testing/testing'
    })
  }
})