// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperUrls: [
      "http://www.xenhui.com/uploads/e/eddbii1391736498/d/7/1/c/543df79306686.jpg",
      "http://pic.58pic.com/58pic/13/20/12/23U58PIC96T_1024.jpg",
      "http://pic.35pic.com/11/16/23/91bOOOPICc0.jpg"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "正在加载..."
    });
  },

  // 打开推荐列表
  openRecommend() {
    wx.navigateTo({
      url: '../test-list/test-list'
    })
  },

  // 打开专业小测试列表
  openSmallTest() {
    wx.navigateTo({
      url: '../test-list/test-list'
    })
  },

  // 打开更多好玩
  openClassify() {
    wx.switchTab({
      url: "../classify/classify"
    })
  },

  // 首页测试推荐
  openTestDetail(event) {
    wx.navigateTo({
      url: '../test-detail/test-detail'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading()
  }
})