<template lang="pug">
  div(v-if="renderComponent")
    q-page(padding)
      .q-pa-md
        .row.justify-center
          paper-card.q-ma-md(v-for="(paper, key, index) in allPapers"
                            :key="index"
                            :paper-id="key"
                            :paper="paper")
      q-dialog(v-model="showAddPaper")
        add-paper(@close="showAddPaper = false")
    div.floating-action-button
      q-btn(round
        @click="showAddPaper = true"
        color="primary"
        size="24px"
        icon="add")
</template>

<script>
import PaperCard from '../components/Papers/PaperCard'
import AddPaper from '../components/Papers/Modals/AddPaper'
import { mapGetters } from 'vuex'

export default {
  name: 'PagePapers',
  components: { PaperCard, AddPaper },
  data () {
    return {
      showAddPaper: false,
      renderComponent: true // 強制的にコンポーネントをレンダーするのに使用
    }
  },
  computed: {
    ...mapGetters('papers', ['allPapers'])
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
