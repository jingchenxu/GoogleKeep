<template>
  <div>
    <v-list dense class="grey lighten-4">
      <template v-for="(item, i) in items">
        <v-layout v-if="item.heading" :key="i" row align-center>
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-right">
            <v-btn @click="addLable" small flat>edit</v-btn>
          </v-flex>
        </v-layout>
        <v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>
        <v-list-tile v-else :key="i" @click="menuClick(item)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="grey--text">
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <v-card>
        <v-card-title>修改标签</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <LabelItem :key="index" v-for="(item, index) of labelList"></LabelItem>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import LabelItem from './LabelItem'

export default {
  name: 'side-menu',
  components: {
    LabelItem
  },
  data () {
    return {
      items: [
        { icon: 'lightbulb_outline', text: 'Notes', name: 'notes', params: {}, isModal: false },
        { icon: 'touch_app', text: 'Reminders', name: 'reminders', params: {}, isModal: false },
        { divider: true },
        { heading: 'Labels' },
        { icon: 'add', text: 'Create new label', name: 'newLabel', params: {}, isModal: false },
        { divider: true },
        { icon: 'archive', text: 'Archive', name: 'archive', params: {}, isModal: false },
        { icon: 'delete', text: 'Trash', name: 'trash', params: {}, isModal: false },
        { divider: true },
        { icon: 'settings', text: 'Settings', name: 'settings', params: {}, isModal: false },
        { icon: 'help', text: 'Help', name: 'help', params: {}, isModal: false },
        { icon: 'phonelink', text: 'App downloads', name: 'downloads', params: {}, isModal: false },
        { icon: 'keyboard', text: 'Keyboard shortcuts', name: 'shortcuts', params: {}, isModal: false }
      ],
      dialogm1: '',
      dialog: false,
      labelList: [
        {labelId: '1', labelName: '测试'},
        {labelId: '2', labelName: '测试'},
        {labelId: '3', labelName: '测试'},
        {labelId: '4', labelName: '测试'},
        {labelId: '5', labelName: '测试'},
        {labelId: '6', labelName: '测试'},
        {labelId: '7', labelName: '测试'},
        {labelId: '8', labelName: '测试'},
        {labelId: '9', labelName: '测试'},
        {labelId: '10', labelName: '测试'}
      ]
    }
  },
  methods: {
    menuClick (item) {
      if (item.isModal) {
        console.log('即将弹出modal框')
      } else {
        this.$router.push(item)
      }
    },
    addLable () {
      this.dialog = true
    }
  }
}
</script>
