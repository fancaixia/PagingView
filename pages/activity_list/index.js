Page({
  data: {
    tags: [
      { id: 1, name: "进行中活动" },
      { id: 2, name:"已结束活动"},
      { id: 3, name: "待评价活动" }
    ],
    selectedone:1,
  },
  onLoad(){


  },
  onShow(){
  
  },

  tap(e) {

  },
  // 导航条鼠标跟随
  fnclick(e) {
    // 根据类型渲染对应数据
    const ev = e.detail;

    // const {  } = this.data;
    this.setData({
      selectedone: ev.currentTarget.dataset.select
    })
    if (ev.currentTarget.dataset.select == 1) {

    } else if (ev.currentTarget.dataset.select == 2) {

    }else{
    
    }

  },

})