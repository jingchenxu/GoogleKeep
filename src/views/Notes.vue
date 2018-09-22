<template>
  <div class="notes">
    <AddCard></AddCard>
    <NoteGrid groupTitle="已固定的记事"/>
  </div>
</template>

<script>
import NoteGrid from '../components/NoteGrid.vue'
import AddCard from '../components/AddCard.vue'

export default {
  name: 'notes',
  components: {
    NoteGrid,
    AddCard
  },
  data () {
    return {}
  },
  computed: {
    listType () {
      return this.$store.state.listType === 'mdi-view-stream'
    },
    noteList () {
      return this.$store.state.noteList
    }
  }
}
</script>

<style scoped>
.notes {
  width: 100%;
  height: auto;
}
</style>
