<template lang="pug">
  div
    q-page(padding)
      .q-pa-md
        .row.justify-center
          paper-card.q-ma-md(v-for="(paper, key, index) in allPapers"
                            :key="index"
                            :paper-id="key"
                            :paper="paper"
                            @showEditPaper="showEditModal($event.paperId)")
      q-dialog(v-model="showAddPaper")
        add-paper(@close="showAddPaper = false")
    div.floating-action-button
      q-btn(round
        @click="showAddPaper = true"
        color="primary"
        size="24px"
        icon="add")
    q-dialog(v-model="showEditPaper")
      edit-paper(:paper="editingPaper"
                @close="showEditPaper = false"
                :paper-id="editingPaperId")
</template>

<script>
import PaperCard from '../components/Papers/PaperCard'
import AddPaper from '../components/Papers/Modals/AddPaper'
import EditPaper from '../components/Papers/Modals/EditPaper'
import { mapGetters } from 'vuex'

export default {
  name: 'PagePapers',
  components: { PaperCard, AddPaper, EditPaper },
  data () {
    return {
      showAddPaper: false,
      showEditPaper: false,
      editingPaperId: '' // 編集対象のPaperId,
    }
  },
  computed: {
    ...mapGetters('papers', ['allPapers']),
    editingPaper () {
      if (this.editingPaperId !== '') {
        return this.allPapers[this.editingPaperId]
      } else {
        return null
      }
    }
  },
  methods: {
    showEditModal (paperId) {
      // うーん、なんでこれを書くと、editingPaper computedが反映されるんだろうか。。。
      new Promise((resolve, reject) => {
        this.editingPaperId = paperId
        resolve()
      })
        .then(() => {
          this.showEditPaper = true
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .floating-action-button {
    position:fixed;
    width:60px;
    height:60px;
    bottom:40px;
    right:40px;
    border-radius:50px;
    text-align:center;
    box-shadow: 2px 2px 3px #999;
  }
</style>
