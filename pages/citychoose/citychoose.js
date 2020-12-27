let staticData = require('../../data/staticData.js')
let utils = require('../../utils/utils.js')
var hotCityData = require('../../data/hotCity.js')


Page({
  data: {
    alternative: null,
    cities: [],
    // 需要显示的城市
    showItems: null,
    inputText: '',
    hotCities: [],
  },
  cancel () {
    this.setData({
      inputText: '',
      showItems: this.data.cities,
    })
  },
  inputFilter (e) {
    let alternative = {}
    let cities = this.data.cities
    let value = e.detail.value.replace(/\s+/g, '')
    if (value.length) {
      for (let i in cities) {
        let items = cities[i]
        for (let j = 0, len = items.length; j < len; j++) {
          let item = items[j]
          if (item.name.indexOf(value) !== -1) {
            if (utils.isEmptyObject(alternative[i])) {
              alternative[i] = []
            }
            alternative[i].push(item)
          }
        }
      }
      if (utils.isEmptyObject(alternative)) {
        alternative = null
      }
      this.setData({
        alternative,
        showItems: alternative,
      })
    } else {
      this.setData({
        alternative: null,
        showItems: cities,
      })
    }
  },
  // 按照字母顺序生成需要的数据格式
  getSortedAreaObj(areas) {
    // let areas = staticData.areas
    areas = areas.sort((a, b) => {
      if (a.letter > b.letter) {
        return 1
      }
      if (a.letter < b.letter) {
        return -1
      }
      return 0
    })
    let obj = {}
    for (let i = 0, len = areas.length; i < len; i++) {
      let item = areas[i]
      delete item.districts
      let letter = item.letter
      if (!obj[letter]) {
        obj[letter] = []
      }
      obj[letter].push(item)
    }
    // 返回一个对象，直接用 wx:for 来遍历对象，index 为 key，item 为 value，item 是一个数组
    return obj
  },
  choose(e) {
    let name = e.currentTarget.dataset.name
    
    // 缓存city数据
    // var choose_city_list = wx.getStorageSync("choose_city_list")
    // console.log(choose_city_list)
    // if ($.isEmptyObject(choose_city_list)) {
    //   var list = []
    //   list.push(name)
    //   wx.setStorageSync("choose_city_list",list) // 覆盖缓存数据
    // } else {
    //   if (!choose_city_list.indexOf(name)) {
    //     choose_city_list.push(name)
    //   }
    // }

    // wx.setStorageSync("choose_city_list",choose_city_list) // 覆盖缓存数据

    let pages = getCurrentPages()
    let len = pages.length
    let indexPage = pages[len - 2]
    if (name) {
      indexPage.search(name, () => {
        wx.navigateBack({})
      })
    } else {
      indexPage.init({}, () => {
        wx.navigateBack({})
      })
    }
  },
  getHotCities(callback) {
    let data = hotCityData.hotCity
    console.log(data)
    if (data) {
      // console.log("data")
      this.setData({
        hotCities:data
      })
    }
  },
  onLoad () {
    this.getHotCities()
    let cities = this.getSortedAreaObj(staticData.cities || [])
    this.setData({
      cities,
      showItems: cities,
    })
  },
})