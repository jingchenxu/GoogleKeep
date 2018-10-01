<template>
  <v-dialog v-model="dialog" persistent max-width="300px">
    <v-card>
      <v-card-title>
        <span class="headline">设置</span>
      </v-card-title>
      <v-card-text>

      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" flat @click.native="dialog = false">取消</v-btn>
        <v-btn color="grey" flat @click.native="dialog = false">保存</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      dialog: false
    }
  },
  mounted () {
    let me = this
    this.$bus.$on('showSetting', function (arg) {
      me.dialog = true
    })
  }
}
</script>

<style scoped>
.setting-container {

}
</style>
