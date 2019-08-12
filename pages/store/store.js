// pages/store/store.js
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    storeData:{type:Object}
  },
  data: {
    // 这里是一些组件内部数据
    someData: {},
    imgs:[
      {"src":"../img/decrease_3@2x.png"},
      { "src":"../img/discount_3@2x.png"},
      { "src":"../img/special_3@2x.png"},
      { "src":"../img/invoice_1@2x.png"},
      { "src":"../img/guarantee_1@2x.png"}
    ]
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})
