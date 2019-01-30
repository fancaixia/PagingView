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
  //鼠标跟随
  fnclick(e) {
    const ev = e.detail;
    this.setData({
      selectedone: ev.currentTarget.dataset.select
    })
    if (ev.currentTarget.dataset.select == 1) {
        console.log('点击进行中回调')
    } else if (ev.currentTarget.dataset.select == 2) {
        console.log('点击已结束回调')
    }else{
        console.log('点击待评价回调')
    }

  },

})