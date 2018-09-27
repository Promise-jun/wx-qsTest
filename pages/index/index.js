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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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