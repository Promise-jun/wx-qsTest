var mockList = [
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
  },
  {
    "id": 4,
    "picUrl": "http://img4.imgtn.bdimg.com/it/u=1330553818,2541095382&fm=26&gp=0.jpg",
    "title": "想知道你未来的女朋友是个什么样的人吗？",
    "smallTitle": "看到你这张图片你先看了什么呢？",
    "testNum": 20112
  },
  {
    "id": 5,
    "picUrl": "http://img5.imgtn.bdimg.com/it/u=427822075,2337651982&fm=26&gp=0.jpg",
    "title": "让你的心灵走进大自然吧！",
    "smallTitle": "看到你这张图片你先看了什么呢？",
    "testNum": 20112
  },
  {
    "id": 6,
    "picUrl": "http://img5.imgtn.bdimg.com/it/u=2917364908,4057368281&fm=26&gp=0.jpg",
    "title": "测测自己是不是美铝吧！",
    "smallTitle": "看到你这张图片你先看了什么呢？",
    "testNum": 20112
  }
]

// pages/test-list/test-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topTitle: "测试列表",
    totalList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data.topTitle
    })
    wx.showLoading({
      title: "正在加载..."
    });
    wx.showNavigationBarLoading();
    setTimeout(() => {
      wx.hideLoading();
      wx.hideNavigationBarLoading();
      this.setData({
        totalList: mockList
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.vibrateShort();
    wx.showNavigationBarLoading();
    setTimeout(() => {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    }, 2000)
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

  }
})