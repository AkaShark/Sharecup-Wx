// pages/knowledge/knowledge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: "https://m.weather.com.cn/d/town/index?lat=39.95933&lon=116.29845&areaid=101010200",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.src)
  },

 
})