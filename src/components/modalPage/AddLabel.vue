<template>
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
</template>

<script>
import LabelItem from '../LabelItem'

export default {
  name: 'add-label',
  components: {
    LabelItem
  },
  data () {
    return {
      dialog: false,
      labelList: [
        { labelId: '1', labelName: '测试' },
        { labelId: '2', labelName: '测试' },
        { labelId: '3', labelName: '测试' },
        { labelId: '4', labelName: '测试' },
        { labelId: '5', labelName: '测试' },
        { labelId: '6', labelName: '测试' },
        { labelId: '7', labelName: '测试' },
        { labelId: '8', labelName: '测试' },
        { labelId: '9', labelName: '测试' },
        { labelId: '10', labelName: '测试' }
      ]
    }
  },
  mounted () {
    let me = this
    this.$bus.$on('showAddLabel', function (arg) {
      me.dialog = true
    })
  }
}
</script>
