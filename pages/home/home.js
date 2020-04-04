// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'CoderWhy',
    age: 18,
    students: [{
        id: 110,
        name: 'kobo',
        age: 20
      },
      {
        id: 120,
        name: 'hebi',
        age: 21
      },
      {
        id: 130,
        name: 'nabo',
        age: 22
      }
    ],
    counter: 0
  },
  func1() {

    this.setData({
      counter: this.data.counter + 1
    })
    console.log("按钮点击")
  },
  func2() {

    this.setData({
      counter: this.data.counter - 1
    })
    console.log("按钮减号")
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