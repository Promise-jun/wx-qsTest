var mockDetail = {
  "binnerPic": "http://img1.imgtn.bdimg.com/it/u=336496587,3858172864&fm=26&gp=0.jpg",
  "title": "测测你的内心隐藏的多深？",
  "testNum": 20112,
  "questionNum": 24,
  "detailPic": [
    "http://img1.imgtn.bdimg.com/it/u=3193604480,665648363&fm=200&gp=0.jpg",
    "http://img4.imgtn.bdimg.com/it/u=1303611731,3082239135&fm=26&gp=0.jpg",
    "http://img2.imgtn.bdimg.com/it/u=331602901,2003681857&fm=200&gp=0.jpg",
    "http://img4.imgtn.bdimg.com/it/u=4242042144,3033936794&fm=200&gp=0.jpg",
    "http://img1.imgtn.bdimg.com/it/u=3659813353,412304706&fm=200&gp=0.jpg"
  ]
}

// pages/test-detail/test-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCollect: false,
    detail: {}
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "正在加载..."
    });
    wx.showNavigationBarLoading();
    setTimeout(() => {
      wx.hideLoading();
      wx.hideNavigationBarLoading();
      this.setData({
        detail: mockDetail
      })
    }, 1000)
  },

  // 收藏
  collectTest() {
    let that = this
    wx.showLoading({
      mask: true
    });
    setTimeout(() => {
      wx.hideLoading();
      that.setData({
        isCollect: !this.data.isCollect
      })
      wx.showToast({
        mask: true
      });
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})