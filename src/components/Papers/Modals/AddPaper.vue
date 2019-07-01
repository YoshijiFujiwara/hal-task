<template lang="pug">
  origin-paper(button-title="作成"
                :preset="paperToSubmit"
                :modal-title-data="addModalTitleData"
                press-submit-button-action="addPaper"
                @close="$emit('close')")
</template>

<script>
import OriginPaper from './Shared/OriginPaper'

export default {
  components: {
    OriginPaper
  },
  data () {
    return {
      paperToSubmit: {
        completed: false,
        subjectSymbol: '',
        subjectNumber: '',
        subjectTheme: '',
        deliveryDate: '',
        subjectTeacher: '',
        classSymbol1: '',
        classSymbol2: '',
        classSymbol3: '',
        attendanceNumber: '',
        optionClassSymbol1: '',
        optionClassSymbol2: '',
        optionClassSymbol3: '',
        optionAttendanceNumber: '',
        studentNumber: '',
        myName: '',
        homeroomTeacher: '',
        memo: ''
      },
      addModalTitleData: [
        '新しい課題が出た！',
        '仕様漏れが無いように！',
        '今日も頑張ろう！',
        '課題を追加する',
        '○|￣|＿',
        '( ・´_・｀)'
      ]
    }
  }
}
</script>
