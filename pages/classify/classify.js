// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyList: [
      {
        id: 0,
        picUrl: "http://www.qqttxx.com/upimg/allimg/110806/1439535U3-3.jpg",
        title: "情感"
      },
      {
        id: 0,
        picUrl: "http://img4.imgtn.bdimg.com/it/u=3208010032,1458669334&fm=26&gp=0.jpg",
        title: "性格"
      },
      {
        id: 0,
        picUrl: "http://img5.imgtn.bdimg.com/it/u=1811626409,3810618430&fm=26&gp=0.jpg",
        title: "健康"
      },
      {
        id: 0,
        picUrl: "http://img5.imgtn.bdimg.com/it/u=2917364908,4057368281&fm=26&gp=0.jpg",
        title: "职场"
      },
      {
        id: 0,
        picUrl: "http://img1.imgtn.bdimg.com/it/u=758155812,904294807&fm=11&gp=0.jpg",
        title: "人际"
      },
      {
        id: 0,
        picUrl: "http://img5.imgtn.bdimg.com/it/u=329995004,1592957199&fm=26&gp=0.jpg",
        title: "能力"
      }
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

  openTestList(event) {
    wx.navigateTo({
      url: '../test-list/test-list'
    })
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