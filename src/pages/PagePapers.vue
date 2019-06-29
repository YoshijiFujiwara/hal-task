<template lang="pug">
  div
    q-page(padding)
      .q-pa-md
        .row.justify-center
          paper-card.q-ma-md(v-for="(paper, key) in allPapers"
                            :key="key"
                            :paper-id="key"
                            :completed="paper.completed"
                            :subject-symbol="paper.subjectSymbol"
                            :subject-number="paper.subjectNumber"
                            :subject-theme="paper.subjectTheme"
                            :delivery-year="paper.deliveryDate"
                            :delivery-month="paper.deliveryMonth"
                            :delivery-date="paper.deliveryDate"
                            :subject-teacher="paper.subjectTeacher"
                            :class-symbol="paper.classSymbol"
                            :attendance-number="paper.attendanceNumber"
                            :option-class-symbol="paper.optionClassSymbol"
                            :option-attendance-number="paper.optionAttendanceNumber"
                            :student-number="paper.studentNumber"
                            :my-name="paper.myName"
                            :homeroom-teacher="paper.homeroomTeacher")
      q-dialog(v-model="showAddPaper")
        add-paper
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
  data () {
    return {
      showAddPaper: false
    }
  },
  components: { PaperCard, AddPaper },
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
