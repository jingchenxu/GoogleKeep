<template>
  <div class="note-card-actions">
      <v-layout row wrap>
        <v-flex xs2>
          <v-tooltip bottom>
            <v-btn slot="activator" small icon>
              <v-icon small color="grey">mdi-reminder</v-icon>
            </v-btn>
            <span>提醒我</span>
          </v-tooltip>
        </v-flex>
        <v-flex xs2>
          <v-tooltip bottom>
            <v-btn slot="activator" small icon>
              <v-icon small color="grey">mdi-account-plus</v-icon>
            </v-btn>
            <span>协作者</span>
          </v-tooltip>
        </v-flex>
        <v-flex xs2>
          <v-tooltip bottom>
          <v-btn @mouseenter="enter" @mouseleave="leave" slot="activator" small icon>
            <div v-if="show" class="color-selector white">
              <div @click="colorCheck(item)" :key="index" v-for="(item, index) of colorList" :class="['selector-item', item.color]">
                <v-icon v-if="item.isCheck">mdi-check</v-icon>
              </div>
            </div>
            <v-icon small color="grey">mdi-palette</v-icon>
          </v-btn>
            <span>更改颜色</span>
          </v-tooltip>
        </v-flex>
        <v-flex xs2>
          <v-tooltip bottom>
            <v-btn slot="activator" small icon>
              <v-icon small color="grey">image</v-icon>
            </v-btn>
            <span>添加图片</span>
          </v-tooltip>
        </v-flex>
        <v-flex xs2>
          <v-btn small icon>
            <v-icon small color="grey">mdi-package-down</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs2>
          <v-menu offset-y>
            <v-btn slot="activator" small icon>
              <v-icon color="grey">mdi-dots-vertical</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="(item, index) in items" :key="index">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
      </v-layout>
  </div>
</template>

<script>
export default {
  name: 'note-card-actions',
  data () {
    return {
      items: [
        { title: '删除这条记事' },
        { title: '添加标签' },
        { title: '添加绘图' },
        { title: '复制' }
      ],
      show: false,
      colorList: [
        {
          id: 1,
          isCheck: true,
          color: 'white'
        }, {
          id: 2,
          isCheck: false,
          color: 'red accent-1'
        }, {
          id: 3,
          isCheck: false,
          color: 'orange accent-1'
        }, {
          id: 4,
          isCheck: false,
          color: 'yellow accent-1'
        }, {
          id: 5,
          isCheck: false,
          color: 'green accent-1'
        }, {
          id: 6,
          isCheck: false,
          color: 'light-blue accent-1'
        }, {
          id: 7,
          isCheck: false,
          color: 'blue lighten-1'
        }, {
          id: 8,
          isCheck: false,
          color: 'indigo accent-2'
        }, {
          id: 9,
          isCheck: false,
          color: 'deep-purple accent-2'
        }, {
          id: 10,
          isCheck: false,
          color: 'pink lighten-2'
        }, {
          id: 11,
          isCheck: false,
          color: 'grey lighten-1'
        }, {
          id: 11,
          isCheck: false,
          color: 'blue-grey lighten-4'
        }
      ]
    }
  },
  methods: {
    enter () {
      console.log('鼠标移入了')
      let me = this
      setTimeout(function () {
        me.show = true
      }, 200)
    },
    leave () {
      console.log('鼠标移出了')
      let me = this
      setTimeout(function () {
        me.show = false
      }, 200)
    },
    colorCheck (item) {
      for (let i=0; i<this.colorList.length; i++) {
        if (this.colorList[i].color === item.color) {
          this.colorList[i].isCheck = true
          this.bgcolor = item.color
        } else {
          this.colorList[i].isCheck = false
        }
      }
    }
  }
}
</script>

<style scoped>
.note-card-actions {
  width: 240px;
  height: auto;
}
.color-selector {
  width: 160px;
  height: 120px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  position: absolute;
  bottom: 25px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  transition: visibility 0s ease 0ms,opacity .218s linear;
}
.selector-item {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  border: 2px solid transparent;
}
.selector-item:hover {
  border: 2px solid grey!important;
}
</style>
