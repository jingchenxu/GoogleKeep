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
    <Setting/>
    <AddLabel/>
    <SetShortkey/>
  </div>
</template>

<script>
import Setting from './modalPage/Setting'
import AddLabel from './modalPage/AddLabel'
import SetShortkey from './modalPage/SetShortKey'

export default {
  name: 'side-menu',
  components: {
    Setting,
    AddLabel,
    SetShortkey
  },
  data () {
    return {
      items: [
        { icon: 'lightbulb_outline', text: 'Notes', name: 'notes', params: {}, isModal: false },
        { icon: 'touch_app', text: 'Reminders', name: 'reminders', params: {}, isModal: false },
        { divider: true },
        { heading: 'Labels' },
        { icon: 'add', text: 'Create new label', name: 'newLabel', params: {}, isModal: true, emitName: 'showAddLabel' },
        { divider: true },
        { icon: 'archive', text: 'Archive', name: 'archive', params: {}, isModal: false },
        { icon: 'delete', text: 'Trash', name: 'trash', params: {}, isModal: false },
        { divider: true },
        { icon: 'settings', text: 'Settings', name: 'settings', params: {}, isModal: true, emitName: 'showSetting' },
        { icon: 'help', text: 'Help', name: 'help', params: {}, isModal: false },
        { icon: 'phonelink', text: 'App downloads', name: 'downloads', params: {}, isModal: false },
        { icon: 'keyboard', text: 'Keyboard shortcuts', name: 'shortcuts', params: {}, isModal: true, emitName: 'showSetShortKey' }
      ]
    }
  },
  methods: {
    menuClick (item) {
      let me = this
      if (item.isModal) {
        me.$bus.$emit(item.emitName)
      } else {
        this.$router.push(item)
      }
    },
    addLable () {
      this.$bus.$emit('showAddLabel')
    }
  }
}
</script>
