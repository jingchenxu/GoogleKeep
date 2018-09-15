<template>
  <div class="reminder">
    <NoteGrid/>
  </div>
</template>

<script>
import NoteGrid from '../components/NoteGrid'

export default {
  name: 'reminders',
  components: {
    NoteGrid
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.reminder {
  margin: 5px;
  width: 100%;
  height: 100%;
}
</style>

