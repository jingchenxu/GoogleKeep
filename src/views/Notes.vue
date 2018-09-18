<template>
  <div class="notes">
    <AddCard></AddCard>
    <Downloads/>
  </div>
</template>

<script>
import NoteCard from '../components/NoteCard.vue'
import AddCard from '../components/AddCard.vue'
import Downloads from './Downloads.vue'

export default {
  name: 'notes',
  components: {
    NoteCard,
    AddCard,
    Downloads
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

