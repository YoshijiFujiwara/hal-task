<template lang="pug">
  div
    q-page(padding)
      div.row.q-mb-lg
        search
        sort
      .q-pa-md
        // TODO 高さをレスポンシブにする
        q-scroll-area(style="height: 750px;")
          // todo課題
          div(v-if="Object.keys(allPapersToDo).length")
            transition(appear
                      enter-active-class="animated zoomIn"
                      leave-active-class="animated zoomOut")
              div
                list-banner.corner-round(title="TODO" bg-class="bg-orange-5")
                .row.justify-center
                  paper-card.q-ma-md(v-for="(paper, key, index) in allPapersToDo"
                                  :key="index"
                                  :paper-id="key"
                                  :paper="paper"
                                  @showEditPaper="showEditModal($event.paperId)")
          // todoがないとき
          no-papers(v-else-if="!search")
          // 完了課題
          div.q-mt-lg(v-if="Object.keys(allPapersCompleted).length")
            transition(appear
                        enter-active-class="animated zoomIn"
                        leave-active-class="animated zoomOut")
              div
                list-banner.corner-round(title="完了" bg-class="bg-green-4")
                .row.justify-center
                  paper-card.q-ma-md(v-for="(paper, key, index) in allPapersCompleted"
                                    :key="index"
                                    :paper-id="key"
                                    :paper="paper"
                                    @showEditPaper="showEditModal($event.paperId)")
          // 検索結果がないとき
          p(v-if="search && !Object.keys(allPapersToDo).length && !Object.keys(allPapersCompleted).length")
            | 検索結果  なし
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
import ListBanner from '../components/Shared/ListBanner'
import NoPapers from '../components/Papers/NoPapers'
import Search from '../components/Papers/Tools/Search'
import Sort from '../components/Papers/Tools/Sort'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'PagePapers',
  components: { PaperCard, AddPaper, EditPaper, ListBanner, NoPapers, Search, Sort },
  data () {
    return {
      showAddPaper: false,
      showEditPaper: false,
      editingPaperId: '', // 編集対象のPaperId
    }
  },
  computed: {
    ...mapGetters('papers', ['allPapersToDo', 'allPapersCompleted']),
    ...mapState('papers', ['search']),
    editingPaper () {
      if (this.editingPaperId !== '') {
        if (this.allPapersToDo[this.editingPaperId] !== undefined) {
          return this.allPapersToDo[this.editingPaperId]
        } else {
          return this.allPapersCompleted[this.editingPaperId]
        }
      } else {
        return null
      }
    }
  },
  mounted () {
    this.$root.$on('showAddPaper', () => {
      this.showAddPaper = true
    })
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

  .corner-round {
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
</style>
