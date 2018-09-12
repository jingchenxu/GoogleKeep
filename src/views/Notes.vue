<template>
  <v-container grid-list-md text-xs-center>
    <v-layout align-start row wrap justify-space-between>
      <v-flex xs1>
      </v-flex>
      <v-flex xs10>
        <AddCard></AddCard>
      </v-flex>
      <v-flex xs1>
      </v-flex>
      <v-flex v-for="(item, i) in noteList" :key="`4${i}`" :xs4="listType" :xs12="!listType">
        <NoteCard :noteDetail="item"></NoteCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NoteCard from '../components/NoteCard.vue'
import AddCard from '../components/AddCard.vue'

export default {
  name: 'notes',
  components: {
    NoteCard,
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
