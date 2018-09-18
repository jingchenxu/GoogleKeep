<template>
  <v-card :id="noteDetail.id" ref="notecard" hover active-class="noteDisabled noteActive">
    <v-card-title @click="noteClick">
      <v-badge color="white" left>
        <v-btn @click="deleteNote" slot="badge" small icon>
          <v-icon small color="grey">mdi-close</v-icon>
        </v-btn>
        <div class="headline">{{noteDetail.noteTitle}}</div>
        <div>{{noteDetail.noteContent}}</div>
      </v-badge>
    </v-card-title>
    <v-card-actions>
      <v-tooltip bottom>
        <v-btn slot="activator" small icon>
          <v-icon small color="grey">mdi-reminder</v-icon>
        </v-btn>
        <span>提醒我</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator" small icon>
          <v-icon small color="grey">mdi-account-plus</v-icon>
        </v-btn>
        <span>协作者</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator" small icon>
          <v-icon small color="grey">mdi-palette</v-icon>
        </v-btn>
        <span>更改颜色</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator" small icon>
          <v-icon small color="grey">image</v-icon>
        </v-btn>
        <span>添加图片</span>
      </v-tooltip>
      <v-btn small icon>
        <v-icon small color="grey">mdi-package-down</v-icon>
      </v-btn>
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
    </v-card-actions>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title primary-title>
          <v-layout align-start row wrap>
            <v-flex xs12>
              <v-text-field autofocus flat full-width v-model="note.noteTitle" label="标题" single-line solo>
                <div slot="append">
                  <v-spacer></v-spacer>

                  <v-btn small icon>
                    <v-icon small color="grey">mdi-pin</v-icon>
                  </v-btn>
                </div>
              </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-textarea full-width auto-grow flat solo name="input-7-4" placeholder="添加记事..." label="Solo textarea" v-model="note.noteContent"></v-textarea>
            </v-flex>
          </v-layout>

        </v-card-title>

        <v-card-actions>
          <v-btn small icon>
            <v-icon small color="grey">mdi-reminder</v-icon>
          </v-btn>
          <v-btn small icon>
            <v-icon small color="grey">mdi-account-plus</v-icon>
          </v-btn>
          <v-btn small icon>
            <v-icon small color="grey">mdi-palette</v-icon>
          </v-btn>
          <v-btn small icon>
            <v-icon small color="grey">image</v-icon>
          </v-btn>
          <v-btn small icon>
            <v-icon small color="grey">mdi-package-down</v-icon>
          </v-btn>
          <v-btn small icon>
            <v-icon small color="grey">mdi-dots-vertical</v-icon>
          </v-btn>
          <v-btn small icon>
            <v-icon small color="grey">mdi-undo</v-icon>
          </v-btn>
          <v-btn small icon>
            <v-icon small color="grey">mdi-redo</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="close" small flat color="grey">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
let { ipcRenderer } = window.require('electron')

export default {
  name: 'note-card',
  props: {
    noteDetail: {
      type: Object,
      required: false,
      default: {
        noteTitle: 'note title',
        noteContent: 'note content'
      }
    }
  },
  data () {
    return {
      card: { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      items: [
        { title: '删除这条记事' },
        { title: '添加标签' },
        { title: '添加绘图' },
        { title: '复制' }
      ],
      dialog: false,
      note: {},
    }
  },
  mounted () {
    let me = this
    me.updateNoteSize()
    window.onresize = function () {
      setTimeout( function() {
        me.updateNoteSize()
      },1000)
    }
  },
  computed: {
    noteWidth () {
      let me = this
      let refid = this._props.noteDetail.id
      return 400
    },
    noteHeight () {
      let me = this
      let refid = this._props.noteDetail.id
      return 400
    }
  },
  methods: {
    noteClick () {
      this.dialog = true
    },
    deleteNote () {
      // 删除note
      this.$store.commit('deleteNote', this._props.noteDetail)
      ipcRenderer.send('deleteNote', this._props.noteDetail)
      // 发送系统消息
      // const notification = {
      //   title: '基本通知',
      //   body: '短消息部分'
      // }
      // const myNotification = new window.Notification(notification.title, notification)
      // myNotification.onclick = () => {
      //   console.log('Notification clicked')
      // }
    },
    close () {
      this.dialog = false
    },
    getNoteWidth () {
      let me = this
      let width = window.getComputedStyle(document.getElementById(me.noteDetail.id)).width
      return parseInt(width.substring(0, width.length-2))
    },
    getNoteHeight () {
      let me = this
      let height = window.getComputedStyle(document.getElementById(me.noteDetail.id)).height
      return parseInt(height.substring(0, height.length-2))
    },
    updateNoteSize () {
      let me = this
      // console.log(this.getNoteWidth(), this.getNoteHeight())
      // 开始更行vuex中对应的数据
      let noteList = me.$store.state.noteList
      for (let i=0; i<noteList.length; i++) {
        if (noteList[i].id === me._props.noteDetail.id ) {
          noteList[i].width = me.getNoteWidth() ? me.getNoteWidth() : 300
          noteList[i].height = me.getNoteHeight() ?  me.getNoteHeight() : 400
        }
      }
      me.$store.commit('setNoteList', noteList)
    }
  }
}
</script>

<style scoped>
.noteDisabled {
  display: block;
}
.noteDisabled .v-card__actions {
  visibility: visible;
}
.noteActive {
  display: block;
}
.noteActive .v-card__actions {
  visibility: hidden;
}
.headline {
  font-family: 'Roboto Condensed',arial,sans-serif;
  font-size: 17px;
  font-weight: bold;
  line-height: 23px;
  min-height: 38px;
}
</style>
