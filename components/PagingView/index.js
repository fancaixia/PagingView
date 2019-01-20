// components/component-tag-name.js
Component({

  properties: {

    tags:{
      type:Array,
      value:"表头信息"
    },
    selectedone: {
      type: Number,
      value: "表头信息"
    },

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    fnclick(e) {
      // 调用父组件  事件
      this.triggerEvent("fnClick", e);

    },

  }
})
