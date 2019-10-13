### 页面效果
![列表切换](https://github.com/fancaixia/PagingView/blob/master/pic/001.PNG)

### 页面显示的列对应数组tags，若tags数组长度为2，则显示两列 
![列表切换](https://github.com/fancaixia/PagingView/blob/master/pic/002.png)

##### 引用页面----activity_list
**index.wxml**
```
<view >
  <PagingView id="PagingView" tags = "{{tags}}" bind:fnClick="fnclick" selectedone = "{{selectedone}}">
  </PagingView>
</view>

<view class="page-body">
  <view class="page-section">
    <view class="activity_list_box" wx:if="{{selectedone == 1}}">
       进行中活动
    </view>
   <view class="activity_list_box" wx:if="{{selectedone == 2}}">
      已结束活动
    </view>
     <view class="activity_list_box" wx:if="{{selectedone == 3}}">
       待评价活动
    </view>
  </view>
</view>
```
**index.json
```
{
  "usingComponents": {
    "PagingView": "/components/PagingView/index"
  },
  "navigationBarTitleText": "活动管理"
}
```
**index.js**
```
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
```
##### 组件 components/PagingView
**index.wxml**
```
<view class="header">
<scroll-view class="scroll-view_H" scroll-x="{{true}}">

       <view class="list">
            <view wx:for="{{tags}}" wx:key="{{index}}" style="width:{{100/(tags.length)}}%"  bindtap='fnclick' data-select="{{item.id}}" class="{{selectedone === item.id?'blue':''}}">{{item.name}}</view>
            
        </view>
  </scroll-view>
  <view  class="cur" style="left:{{(100/2/(tags.length))*(selectedone+(selectedone-1))}}%"></view>
 </view>
```
**index.json**
```
{
  "component": true,
  "usingComponents": {}
}
```
**index.js**
```
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

```
**index.wxss**
```
Page{
  font-size: 28rpx;
}
.header{
  background: #fff;
  width: 100%;
 border-bottom: 1rpx solid #d9d9d9;
 position: relative;
}
.header .list view{
 line-height: 88rpx;
 display: inline-block;
 text-align: center;
color: #999;
}
.header .list view.blue{
  color: #007aff;
}
.header .cur{
  position: absolute;
  left:0%;
  transform: translateX(-50%);
  bottom: 0;
  width: 100rpx;
  height: 6rpx;
  background: #007aff;
  transition: .5s all;
}
```
