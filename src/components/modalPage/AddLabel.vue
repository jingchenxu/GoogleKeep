<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <v-card>
      <v-card-title>
        <h2>修改标签</h2>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
        <AddLabelItem />
        <LabelItem :labelDetail="item" :key="index" v-for="(item, index) of labelList"></LabelItem>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey darken-1" flat @click.native="dialog = false">完成</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import LabelItem from '../LabelItem'
import AddLabelItem from '../AddLabelItem'

export default {
  name: 'add-label',
  components: {
    LabelItem,
    AddLabelItem
  },
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    labelList () {
      return this.$store.state.labelList
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
