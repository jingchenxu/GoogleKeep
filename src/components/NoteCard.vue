<template>

  <v-card @click="noteClick" hover active-class="noteDisabled noteActive">

    <v-card-title>
      <v-badge color="white" left>
        <v-btn slot="badge" small icon>
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

  </v-card>

</template>

<script>
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
      ]
    }
  },
  methods: {
    noteClick () {
      console.log('单个笔记被点击')
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
</style>
