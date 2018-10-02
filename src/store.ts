import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export interface Note {
  id?: string,
  name?: string,
  type?: string,
  noteTitle?: string,
  noteContent?: string,
  status?: string,
  color?: string,
  tableName: string,
  isFixed?: true
}
export interface Label {
  id?: string,
  labelName?: string,
  tableName: string
}
export interface State {
  noteList: Array<Note>,
  labelList: Array<Label>,
  listType: string
}

// 初始化state
const state: State = {
  noteList: new Array<Note>(),
  labelList: new Array<Label>(),
  listType: 'mdi-view-stream'
}

export default new Vuex.Store({
  state: state,
  mutations: {
    changeListType (state: State, listType: string) {
      if (listType === 'mdi-view-stream') {
        state.listType = 'mdi-view-dashboard-variant'
      } else {
        state.listType = 'mdi-view-stream'
      }
    },
    setNoteList (state: State, noteList: Array<Note>) {
      state.noteList = noteList
    },
    addNote (state: State, note: Note) {
      state.noteList.push(note)
    },
    updateNote (state: State, note: Note) {
      let temp: Array<Note>
      temp = state.noteList.filter(function(item){
        if (item.id === note.id) {
          return note
        } else {
          return item
        }
      })
      state.noteList = temp
    },
    deleteNote (state: State, note: Note) {
      // TODO 此处的算法需要优化
      let temp: Array<Note>
      temp = state.noteList.filter(item => item.id !== note.id)
      state.noteList = temp
    },
    setLabelList (state: State, labelList: Array<Label>) {
      state.labelList = labelList
    },
    addLabel (state: State, label: Label) {
      state.labelList.push(label)
    },
    updateLabel (state: State, label: Label) {
      let temp: Array<Label>
      temp = state.labelList.filter(function(item){
        if (item.id === label.id) {
          return label
        } else {
          return item
        }
      })
      state.labelList = temp
    },
    deleteLabel (state: State, label: Label) {
      // TODO 此处的算法需要优化
      let temp: Array<Label>
      temp = state.labelList.filter(item => item.id !== label.id)
      state.labelList = temp
    }
  },
  actions: {

  }
})
