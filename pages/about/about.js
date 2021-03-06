let utils = require('../../utils/utils')
Page({
  data: {
    projectAddress: 'https://github.com/AkaShark/Sharecup-Wx',
    github: 'https://github.com/AkaShark',
    email: '1548742234@qq.com',
    qq: '1548742234',
    swiperHeight: 'auto',
    // banner轮播图图片切换
    bannerImgList: [
      {
        src: "../../img/accomplishment-adventure-clear-sky-585825.jpg",
        // src: 'https://raw.githubusercontent.com/myvin/miniprogram/master/quietweather/images/miniqrcode.jpg',
        title: '天气美图欣赏',
      },
      {
        // src: 'https://raw.githubusercontent.com/myvin/miniprogram/master/juejin/images/miniqrcode.jpg',
        src: "../../img/aerial-climate-cold-296559.jpg",
        title: '天气美图欣赏',
      },
      {
        src: "../../img/asphalt-blue-sky-clouds-490411.jpg",
        // src: 'https://raw.githubusercontent.com/myvin/miniprogram/master/suijiyitu/images/suijiyitu.jpg',
        title: '天气美图欣赏',
      },
    ],
  },
  onLoad () {
    this.initSwiper()
  },
  previewImages (e) {
    let index = e.currentTarget.dataset.index || 0
    let urls = this.data.bannerImgList
    let arr = []
    let imgs = urls.forEach(item => {
      arr.push(item.src)
    })
    wx.previewImage({
      current: arr[index],
      urls: arr,
      success: function (res) { },
      fail: function (res) {
        console.error('previewImage fail: ', res)
      }
    })
  },
  initSwiper () {
    let systeminfo = getApp().globalData.systeminfo
    if (utils.isEmptyObject(systeminfo)) {
      wx.getSystemInfo({
        success: (res) => {
          this.setSwiperHeight(res)
        },
      })
    } else {
      this.setSwiperHeight(systeminfo)
    }
  },
  setSwiperHeight (res) {
    this.setData({
      swiperHeight: `${(res.windowWidth || res.screenWidth) / 375 * 200}px`
    })
  },
  copy(e) {
    let dataset = (e.currentTarget || {}).dataset || {}
    let title = dataset.title || ''
    let content = dataset.content || ''
    wx.setClipboardData({
      data: content,
      success () {
        wx.showToast({
          title: `已复制${title}`,
          duration: 2000,
        })
      },
    })
  },
})