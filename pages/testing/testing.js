// pages/testing/testing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId: 1,
    currentOption: '',
    chosenList: {}, //做过的题
    totalNum: 3,
    testList: [
      {
        id: 1,
        questions: "1.灾害对你的精神状态会有打击？",
        answer: '',
        options: [
          {
            value: "A",
            text: "A. 不会有任何打击",
            checked: false
          },
          {
            value: "B",
            text: "B. 会偶尔有些接不住气",
            checked: false
          },
          {
            value: "C",
            text: "C. 非常焦虑，打击十分大",
            checked: false
          }
        ]
      },
      {
        id: 2,
        questions: "2.你是否有时感到很疲倦？",
        answer: '',
        options: [
          {
            value: "A",
            text: "A. 从不疲倦",
            checked: false
          },
          {
            value: "B",
            text: "B. 有时候会感到疲倦",
            checked: false
          },
          {
            value: "C",
            text: "C. 天天都很疲倦",
            checked: false
          }
        ]
      },
      {
        id: 3,
        questions: "3.在你过去的人生中，有没有做过对不起自己的事情？",
        answer: '',
        options: [
          {
            value: "A",
            text: "A. 从来没有",
            checked: false
          },
          {
            value: "B",
            text: "B. 做过对不起自己的事情，但是次数不多",
            checked: false
          },
          {
            value: "C",
            text: "C. 经常做对不起自己得事情",
            checked: false
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "测试题" + this.data.currentId + "/" + this.data.totalNum
    })
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

  },

  // 选项
  radioChange(event) {
    this.setData({
      currentOption: event.detail.value
    })
  },

  // 上一题
  prevTest() {
    this.setData({
      currentId: this.data.currentId - 1
    })
    this.setData({
      currentOption: this.data.chosenList[this.data.currentId]
    })
    wx.setNavigationBarTitle({
      title: "测试题" + this.data.currentId + "/" + this.data.totalNum
    })
  },

  // 下一题和提交
  formSubmit(event) {
    if (this.data.currentOption === '') {
      wx.showToast({
        title: "您还没选择选项哦!",
        icon: "none"
      })
      return
    }
    if (this.data.currentId === this.data.totalNum) {
      wx.showLoading({
        title: "请稍候...",
        mask: true
      })
      setTimeout(() => {
        wx.hideLoading();
        console.log(event.detail.value);
        wx.redirectTo({
          url: '../test-result/test-result'
        })
      }, 1000)
      return;
    }
    this.setData({
      currentOption: '',
      currentId: this.data.currentId + 1,
      chosenList: event.detail.value
    })
    this.setData({
      currentOption: this.data.chosenList[this.data.currentId]
    })
    wx.setNavigationBarTitle({
      title: "测试题" + this.data.currentId + "/" + this.data.totalNum
    })
  }
})