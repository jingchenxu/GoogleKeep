<template>
<div id="waterfall" class="waterfall">
  <div :key="sizeType">
    <div class="item">

    </div>
    <div class="item">

    </div>
    <div class="item">

    </div>
    <div class="item">

    </div>
    <div class="item">

    </div>
  </div>
</div> 
</template>

<script>
export default {
  name: 'downloads',
  data () {
    return {
      sizeType: 1
    }
  },
  mounted () {
    let me = this
    me.updateLayout()
    window.onresize = function () {
      me.updateLayout()
    }
  },
  methods: {
    /**
     * @author jingchenxu2015@gmail.com
     * @description 更新页面布局 只有在页面布局发生大的改动的时候才会触发
     */
    updateLayout () {
      let me = this
      let items = document.getElementsByClassName("item")
      let width = document.getElementById('waterfall').offsetWidth
      for (let i = 0; i<items.length; i++) {
        if (width >= 784) {
          me.sizeType = 3
          let x = 0
          let y = 0
          let ob = me.countPosition3(i, x, y)
          console.log('位置', ob.x, ob.y)
          items[i].style.transform = 'translate('+ob.x+'px'+','+ob.y+'px'+')'
        }
        if (width >= 528) {
          me.sizeType = 2
          let x = 0
          let y = 0
          let ob = me.countPosition2(i, x, y)
          items[i].style.transform = 'translate('+ob.x+'px'+','+ob.y+'px'+')'
        }
        if (width < 528) {
          me.sizeType = 1
          let x = 0
          let y = 0
          let ob = me.countPosition1(i, x, y)
          items[i].style.transform = 'translate('+ob.x+'px'+','+ob.y+'px'+')'
        }
      }
    },
    /**
     * @author jingchenxu2015@gmail.com
     * @description 计算card的position 偶数为true
     */
    countPosition3 (index, x, y) {
      let me = this
      
      let order = index%3
      if (order === 0) {
        x = 0
        y = (index/3)*216
      }
      if (order === 1) {
        x = 256
        y = (index/3)*216
      }
      if (order === 2) {
        x = 312
        y = (index/3)*216
      }
      return {
        x,
        y
      }
    },
    /**
     * @author jingchenxu2015@gmail.com
     * @description 计算card的position 偶数为true
     */
    countPosition2 (index, x, y) {
      let me = this
      
      if (me._isOdd(index)) {
        console.log(true,index)
        x = 0;
        y = (index/2)*216
      } else {
        console.log(false,index)
        x = 256
        y = (index-1)/2*216
      }
      return {
        x,
        y
      }
    },
        /**
     * @author jingchenxu2015@gmail.com
     * @description 计算card的position 偶数为true
     */
    countPosition1 (index, x, y) {
      let me = this
      x = 0
      y = index * 216
      return {
        x,
        y
      }
    },
    _isOdd (number) {
      return number%2 === 0
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1390px) {
  /* 3列 */
  .waterfall {
    width: 784px;
    margin: auto;
  }
  .waterfall > div {
    position: relative;
    height: 1000px;
  }
  .waterfall .item {
    width: 240px;
    transform: translate(0px, 40px);
    height: 200px;
    background-color: brown;
    margin: 16px;
    transition-duration: .218s;
    position: absolute;
    transition-property: opacity,transform;
    box-sizing: border-box;
    opacity: 1;
  }
}

@media screen and (max-width: 870px) {
  /* 2列 */
  .waterfall {
    width: 528px;
    margin: auto;
  }
  .waterfall > div {
    position: relative;
    height: 1000px;
  }
  .waterfall .item {
    width: 240px;
    transform: translate(0px, 40px);
    height: 200px;
    background-color:darkgoldenrod;
    box-sizing: border-box;
    margin: 16px;
    transition-duration: .218s;
    position: absolute;
    transition-property: opacity,transform;
    box-sizing: border-box;
    opacity: 1;
  }
}

@media screen and (max-width: 600px) {
  /* 1列 */
  .waterfall {
    width: 100%;
    margin: auto;
    padding: 4px 0;
  }
  .waterfall > div {
    position: relative;
    height: 1000px;
  }
  .waterfall .item {
    width: 100%;
    height: 200px;
    background-color: rebeccapurple;
    margin: 0px;
    transition-duration: .218s;
    position: absolute;
    box-sizing: border-box;
    opacity: 1;
  }
}
</style>

