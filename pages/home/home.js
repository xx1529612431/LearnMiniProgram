// pages/home/home.js
const app = getApp()
const name = app.globalData.name
const db = wx.cloud.database()
const c = db.collection('comments')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    fileId: '',
    filePath: "",
    tempImg: [],
    fileIDs: [],
  },


  showPhoto() {
    var i = Math.floor(Math.random() * this.data.fileIDs.length);
    this.setData({
      fileId: this.data.fileIDs[i]
    })
    wx.showLoading({
      title: '下载中',
    })
    wx.cloud.downloadFile({
      fileID: this.data.fileId, // 文件 ID
      success: res => {
        wx.hideLoading()
        // 返回临时文件路径
        this.setData({
          filePath: res.tempFilePath
        })
      },
      fail: err => {
        wx.hideLoading()
        wx.showToast({
          title: err
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    c.get().then(res => {
      for (var i = 0; i < res.data.length; i++) {
        for (var j = 0; j < res.data[i].fileIDs.length; j++) {
          this.data.fileIDs.push(res.data[i].fileIDs[j])
        }
      }
    })
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