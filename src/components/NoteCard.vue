<template>
  <v-card hover active-class="noteDisabled noteActive">
    <v-card-title primary-title>
      <div class="headline">Unlimited music now</div>
      <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat icon>
        <v-icon color="grey">mdi-reminder</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="grey">mdi-account-plus</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="grey">mdi-palette</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="grey">image</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="grey">mdi-package-down</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="grey">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'note-card',
  data () {
    return {
      card: { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 }
    }
  }
}
</script>

<style scoped>
.noteDisabled {
  display: block;
}
.noteDisabled .v-card__actions {
  visibility: visible;
}
.noteActive {
  display: block;
}
.noteActive .v-card__actions {
  visibility: hidden;
}
</style>
