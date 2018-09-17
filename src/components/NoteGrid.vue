<template>
  <div class="note-grid">
    <waterfall :align="align" :line-gap="200" :min-line-gap="100" :max-line-gap="220" :single-max-width="300" :watch="items" @reflowed="reflowed" ref="waterfall">
      <waterfall-slot v-for="(item, index) in noteList" :width="item.width" :height="item.height" :order="index" :key="item.index" move-class="item-move">
        <div class="item" :style="item.style" :index="item.index">
          <NoteCard :noteDetail="item"/>
        </div>
      </waterfall-slot>
    </waterfall>
  </div>
</template>

<script>
import Waterfall from './Waterfall'
import WaterfallSlot from './WaterSlot'
import NoteCard from './NoteCard'
import utils from '../utils/utils'

const ItemFactory = utils.ItemFactory()

export default {
  name: 'note-grid',
  props: {
    noteList: {
      type: Array,
      required: false,
      default: function () {
        return []
      }
    }
  },
  components: {
    Waterfall,
    WaterfallSlot,
    NoteCard
  },
  data () {
    return {
      align: 'center',
      items: ItemFactory.get(100),
      isBusy: false
    }
  },
  methods: {
    addItems: function () {
      if (!this.isBusy && this.items.length < 500) {
        this.isBusy = true
        this.items.push.apply(this.items, ItemFactory.get(50))
      }
    },
    shuffle: function () {
      this.items.sort(function () {
        return Math.random() - 0.5
      })
    },
    reflowed: function () {
      this.isBusy = false
    },
  },
  mounted () {
    // let me = this
    // document.body.addEventListener('click', function () {
    //   me.shuffle()
    // }, false)
    // window.addEventListener('scroll', function () {
    //   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    //   if (scrollTop + window.innerHeight >= document.body.clientHeight) {
    //     me.addItems()
    //   }
    // })
  }
}
</script>

<style scoped>
.note-grid {
  margin: 5px;
  width: 100%;
  height: 100%;
}
.item {
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  font-size: 1.2em;
  color: rgb(0, 158, 107);
}
.item:after {
  content: attr(index);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.wf-transition {
  transition: opacity 0.3s ease;
  -webkit-transition: opacity 0.3s ease;
}
.wf-enter {
  opacity: 0;
}
.item-move {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  -webkit-transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>


