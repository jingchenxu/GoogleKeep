<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-text-field height=36 v-model="message" type="text">
        <v-tooltip slot="prepend" bottom>
          <v-icon slot="activator">mdi-label</v-icon>
          I'm a tooltip
        </v-tooltip>
        <v-icon slot="append-outer" color="grey">mdi-pencil</v-icon>
      </v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'label-item',
  data () {
    return {
      message: 'Hey!',
      loading: false
    }
  },
  methods: {
    clickMe () {
      this.loading = true
      this.message = 'Wait for it...'
      setTimeout(() => {
        this.loading = false
        this.message = 'You\'ve clicked me!'
      }, 2000)
    }
  }
}
</script>
