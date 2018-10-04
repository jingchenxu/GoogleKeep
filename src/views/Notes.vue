<template>
  <div class="notes">
    <AddCard></AddCard>
    <NoteGrid :noteList="fixedNoteList" groupTitle="已固定的记事"/>
    <NoteGrid :noteList="otherNoteList" groupTitle="其它"/>
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
    fixedNoteList () {
      let noteList = this.$store.state.noteList.filter(item => item.isFlex)
      return noteList || []
    },
    otherNoteList () {
      let noteList = this.$store.state.noteList.filter(item => !item.isFlex)
      return noteList || []
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
