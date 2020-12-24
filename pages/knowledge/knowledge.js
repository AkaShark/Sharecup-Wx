// pages/knowledge/knowledge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: "https://m.weather.com.cn/",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showModal({
      title: '温馨提示',
      content: '提示内容。。。。。。。',
      showCancel: true,//是否显示取消按钮
      cancelText: "取消",//默认是“取消”
      cancelColor: '#000000',//取消文字的颜色
      confirmText: "确定",//默认是“确定”
      confirmColor: '#3cc51f',//确定文字的颜色
      success: function (res) {
        if (res.cancel) {
          //点击取消，wx.navigateBack
        } else {
          wx.navigateToMiniProgram({
            appId:'wxa974094a4b9bd09f',
            envVersion: 'release',
            success(res){
               console.log(res)
            },
            fail(err) {
                     console.log(err)
                    }
          })

        }
      },

      fail: function (res) { 
        //接口调用失败的回调函数，wx.navigateBack
      },
      complete: function (res) { 
        //接口调用结束的回调函数（调用成功、失败都会执行）
      },

    })




    // wx.navigateToMiniProgram({ //这里用uniapp的跳转方法，原生应该是wx.navigateToMiniProgram
		//   appId: 'wxa974094a4b9bd09f',
		//   success(res) {
		//   		// 打开成功
		// 	   console.log(res)
		//   },
		//   fail(err){
		//   		// 打开失败	
		// 	  console.log(err)
		//   }
    // })
    // wx.navigateToMiniProgram({
    //   appId: 'wx0e6ed4f51db9d078',
    //   envVersion: 'release',
    //   success(res) {
    //     // 打开成功
    //   }
    // })
    // wx.navigateToMiniProgram({ //这里用uniapp的跳转方法，原生应该是wx.navigateToMiniProgram
		//   appId: '',//这里的appid为目标小程序的appid，此处为携程小程序
		//   success(res) {
		//   		// 打开成功
		// 	   console.log(res)
		//   },
		//   fail(err){
		//   		// 打开失败	
		// 	  console.log(err)
		//   }
		// })
  },

 
})