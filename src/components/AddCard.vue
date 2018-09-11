<template>
  <v-container>
    <v-text-field v-if="noteType === 'list'" @focus="addNote" label="添加记事..." single-line solo>
      <div slot="append">
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-format-list-checkbox</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>image</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-pen</v-icon>
        </v-btn>
      </div>
    </v-text-field>
    <v-card v-if="noteType === 'note'">
      <v-card-title primary-title>
        <v-layout align-start row wrap>
          <v-flex xs12>
            <v-text-field flat full-width :value="note.noteTitle" label="标题" single-line solo>
              <div slot="append">
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-pin</v-icon>
                </v-btn>
              </div>
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-textarea full-width auto-grow flat solo name="input-7-4" placeholder="添加记事..." label="Solo textarea" :value="note.noteContent"></v-textarea>
          </v-flex>
        </v-layout>

      </v-card-title>

      <v-card-actions>
        <v-btn icon>
          <v-icon>mdi-reminder</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-palette</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>image</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-package-down</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-undo</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-redo</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="close" flat color="grey">关闭</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'add-card',
  data () {
    return {
      noteType: 'list', // list | note | image | pen
      note: {
        noteTitle: '',
        noteContent: ''
      }
    }
  },
  methods: {
    addNote (val) {
      this.noteType = 'note'
    },
    close () {
      this.noteType = 'list'
    }
  }
}
</script>
