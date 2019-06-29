<template lang="pug">
  q-page(padding)
    .q-pa-md
      .row.justify-start
        paper-card.q-ma-md(v-for="(paper, index) in papers"
                :key="index"
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

export default {
  name: 'PageIndex',
  components: { PaperCard },
  data () {
    return {
      papers: [
        {
          completed: true,
          subjectSymbol: 'JV31',
          subjectNumber: '01',
          subjectTheme: 'きほん',
          deliveryYear: '2019',
          deliveryMonth: '11',
          deliveryDate: '10',
          subjectTeacher: '山田忠明',
          classSymbol: 'IH13A905',
          attendanceNumber: '15',
          optionClassSymbol: 'IH15A333',
          optionAttendanceNumber: '01',
          studentNumber: '01234',
          myName: '藤原きち',
          homeroomTeacher: '川島ひろ'
        },
        {
          completed: true,
          subjectSymbol: 'JV31',
          subjectNumber: '01',
          subjectTheme: 'きほん',
          deliveryYear: '2019',
          deliveryMonth: '11',
          deliveryDate: '10',
          subjectTeacher: '山田忠明',
          classSymbol: 'IH13A905',
          attendanceNumber: '15',
          optionClassSymbol: 'IH15A333',
          optionAttendanceNumber: '01',
          studentNumber: '01234',
          myName: '藤原きち',
          homeroomTeacher: '川島ひろ'
        },
        {
          completed: true,
          subjectSymbol: 'JV31',
          subjectNumber: '01',
          subjectTheme: 'きほん',
          deliveryYear: '2019',
          deliveryMonth: '11',
          deliveryDate: '10',
          subjectTeacher: '山田忠明',
          classSymbol: 'IH13A905',
          attendanceNumber: '15',
          optionClassSymbol: 'IH15A333',
          optionAttendanceNumber: '01',
          studentNumber: '01234',
          myName: '藤原きち',
          homeroomTeacher: '川島ひろ'
        },
        {
          completed: false,
          subjectSymbol: 'JV31',
          subjectNumber: '01',
          subjectTheme: 'きほん',
          deliveryYear: '2019',
          deliveryMonth: '11',
          deliveryDate: '10',
          subjectTeacher: '山田忠明',
          classSymbol: 'IH13A905',
          attendanceNumber: '15',
          optionClassSymbol: 'IH15A333',
          optionAttendanceNumber: '01',
          studentNumber: '01234',
          myName: '藤原きち',
          homeroomTeacher: '川島ひろ'
        },
        {
          completed: true,
          subjectSymbol: 'JV31',
          subjectNumber: '01',
          subjectTheme: 'きほん',
          deliveryYear: '2019',
          deliveryMonth: '11',
          deliveryDate: '10',
          subjectTeacher: '山田忠明',
          classSymbol: 'IH13A905',
          attendanceNumber: '15',
          optionClassSymbol: 'IH15A333',
          optionAttendanceNumber: '01',
          studentNumber: '01234',
          myName: '藤原きち',
          homeroomTeacher: '川島ひろ'
        },
        {
          completed: false,
          subjectSymbol: 'JV31',
          subjectNumber: '01',
          subjectTheme: 'きほん',
          deliveryYear: '2019',
          deliveryMonth: '11',
          deliveryDate: '10',
          subjectTeacher: '山田忠明',
          classSymbol: 'IH13A905',
          attendanceNumber: '15',
          optionClassSymbol: 'IH15A333',
          optionAttendanceNumber: '01',
          studentNumber: '01234',
          myName: '藤原きち',
          homeroomTeacher: '川島ひろ'
        }
      ]
    }
  }
}
</script>
