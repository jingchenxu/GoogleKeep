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
            <v-btn slot="activator" small icon>
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
      ]
    }
  }
}
</script>

<style scoped>
.note-card-actions {
  width: 240px;
  height: auto;
}
</style>
