<template lang="pug">
  q-page(padding)
    .q-pa-md
      .row.justify-center
        paper-card.q-ma-md(v-for="(paper, index) in allPapers"
                          :key="index"
                          :paper-id="paper.id"
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
</template>

<style>
</style>

<script>
import PaperCard from '../components/PaperCard'
import { mapGetters } from 'vuex'

export default {
  name: 'PagePapers',
  components: { PaperCard },
  computed: {
    ...mapGetters('papers', ['allPapers'])
  }
}
</script>
