<template>
  <div>
    <div class="label-list-title">
      <span>为记事添加标签</span>
    </div>
    <div class="label-list-search">
      <v-text-field label="Regular"></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'label-picker',
  data () {
    return {}
  },
  computed: {
    labelList () {
      return this.$store.state.labelList
    }
  }
}
</script>

<style scoped>
.label-list-title {
  height: 36px;
  line-height: 36px;
}
</style>
