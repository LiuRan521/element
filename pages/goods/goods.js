// pages/footer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      list:[]
  },
  ready: function () {
    var that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/goods',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function (res) {
        console.log(res.data.goods)
        that.setData({
          list:res.data.goods
        })
      }
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
