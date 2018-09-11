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
          <v-radio-group v-model="dialogm1" column>
            <v-radio label="Bahamas, The" value="bahamas"></v-radio>
            <v-radio label="Bahrain" value="bahrain"></v-radio>
            <v-radio label="Bangladesh" value="bangladesh"></v-radio>
            <v-radio label="Barbados" value="barbados"></v-radio>
            <v-radio label="Belarus" value="belarus"></v-radio>
            <v-radio label="Belgium" value="belgium"></v-radio>
            <v-radio label="Belize" value="belize"></v-radio>
            <v-radio label="Benin" value="benin"></v-radio>
            <v-radio label="Bhutan" value="bhutan"></v-radio>
            <v-radio label="Bolivia" value="bolivia"></v-radio>
            <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
            <v-radio label="Botswana" value="botswana"></v-radio>
            <v-radio label="Brazil" value="brazil"></v-radio>
            <v-radio label="Brunei" value="brunei"></v-radio>
            <v-radio label="Bulgaria" value="bulgaria"></v-radio>
            <v-radio label="Burkina Faso" value="burkina"></v-radio>
            <v-radio label="Burma" value="burma"></v-radio>
            <v-radio label="Burundi" value="burundi"></v-radio>
          </v-radio-group>
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
export default {
  name: 'side-menu',
  data () {
    return {
      items: [
        { icon: 'lightbulb_outline', text: 'Notes', name: 'notes', params: {} },
        { icon: 'touch_app', text: 'Reminders', name: 'reminders', params: {} },
        { divider: true },
        { heading: 'Labels' },
        { icon: 'add', text: 'Create new label', name: 'newLabel', params: {} },
        { divider: true },
        { icon: 'archive', text: 'Archive', name: 'archive', params: {} },
        { icon: 'delete', text: 'Trash', name: 'trash', params: {} },
        { divider: true },
        { icon: 'settings', text: 'Settings', name: 'settings', params: {} },
        { icon: 'help', text: 'Help', name: 'help', params: {} },
        { icon: 'phonelink', text: 'App downloads', name: 'downloads', params: {} },
        { icon: 'keyboard', text: 'Keyboard shortcuts', name: 'shortcuts', params: {} }
      ],
      dialogm1: '',
      dialog: false
    }
  },
  methods: {
    menuClick (item) {
      console.dir(item)
      this.$router.push(
        item
      )
    },
    addLable () {
      this.dialog = true
    }
  }
}
</script>
