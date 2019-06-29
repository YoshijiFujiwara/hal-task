<template lang="pug">
  q-card.paper-card
    img(src='~/assets/paper.jpg')
    p.subject-symbol-text {{ subjectSymbol }}
    p.subject-number-text {{ subjectNumber }}
    p.subject-theme-text {{ subjectTheme }}
    p.delivery-year-text {{ deliveryYear }}
    p.delivery-month-text {{ deliveryMonth }}
    p.delivery-date-text {{ deliveryDate }}
    p.subject-teacher-text {{ subjectTeacher }}
    p.class-symbol-text-1 {{ classSymbol.substr(0, 2) }}
    p.class-symbol-text-2 {{ classSymbol.substr(2, 3) }}
    p.class-symbol-text-3 {{ classSymbol.substr(5, 3) }}
    p.attendance-number-text {{ attendanceNumber }}
    p.option-class-symbol-text-1 {{ optionClassSymbol.substr(0, 2) }}
    p.option-class-symbol-text-2 {{ optionClassSymbol.substr(2, 3) }}
    p.option-class-symbol-text-3 {{ optionClassSymbol.substr(5, 3) }}
    p.option-attendance-number-text {{ optionAttendanceNumber }}
    p.student-number-text {{ studentNumber }}
    p.my-name-text {{ myName }}
    p.homeroom-teacher-text {{ homeroomTeacher }}
    q-card-actions(align='around')
      q-btn(flat='', round='', color='red', icon='favorite')
      q-btn(flat='', round='', color='teal', icon='bookmark')
      q-btn(flat='', round='', color='primary', icon='share')
</template>

<script>
export default {
  data () {
    return {
      subjectSymbol: 'JV11', // 科目記号
      subjectNumber: '01', // 課題ナンバー
      subjectTheme: '受講レポート', // 課題主題
      deliveryYear: '2019', // 納期（年）
      deliveryMonth: '11', // 納期（月）
      deliveryDate: '10', // 納期（日）
      subjectTeacher: '山田忠明', // 科目担当

      classSymbol: 'IH13A905', // クラス記号
      attendanceNumber: '15', // 出席番号
      optionClassSymbol: 'IH22A922', // 選択クラス記号
      optionAttendanceNumber: '22', // 出席番号

      studentNumber: '70145', // 学籍番号
      myName: '藤原吉司', // 氏名
      homeroomTeacher: '川島智弘' // 担任
    }
  }
}
</script>

<style lang="scss" scoped>
  $maxWidth: 600px;

  .paper-card {
    width: 100%;
    max-width: $maxWidth;
    position: relative;
    font-size: $maxWidth / 20;

    .subject-symbol-text {
      position: absolute;
      top: $maxWidth * (156 / 600);
      left: $maxWidth * 0.205;
      letter-spacing: $maxWidth / 40;
    }
    .subject-number-text {
      position: absolute;
      top: $maxWidth * (158 / 600);
      left: $maxWidth * 0.527;
      letter-spacing: $maxWidth / 40;
    }
    .subject-theme-text {
      position: absolute;
      top: $maxWidth * (212 / 600);
      left: $maxWidth * 0.205;
    }
    .delivery-year-text {
      position: absolute;
      top: $maxWidth * (267 / 600);
      left: $maxWidth * 0.205;
      letter-spacing: $maxWidth / 40;
    }
    .delivery-month-text {
      position: absolute;
      top: $maxWidth * (267 / 600);
      left: $maxWidth * (285 / 600);
      letter-spacing: $maxWidth / 40;
    }
    .delivery-date-text {
      position: absolute;
      top: $maxWidth * (267 / 600);
      left: $maxWidth * (382 / 600);
      letter-spacing: $maxWidth / 40;
    }
    .subject-teacher-text {
      position: absolute;
      top: $maxWidth * (315 / 600);
      left: $maxWidth * 0.205;
    }
    .class-symbol-text-1 {
      position: absolute;
      top: $maxWidth * (394 / 600);
      left: $maxWidth * (127 / 600);
      letter-spacing: $maxWidth / 35;
    }
    .class-symbol-text-2 {
      position: absolute;
      top: $maxWidth * (394 / 600);
      left: $maxWidth * (205 / 600);
      letter-spacing: $maxWidth / 40.5;
    }
    .class-symbol-text-3 {
      position: absolute;
      top: $maxWidth * (394 / 600);
      left: $maxWidth * (316 / 600);
      letter-spacing: $maxWidth / 40;
    }
    .attendance-number-text {
      position: absolute;
      top: $maxWidth * (394 / 600);
      left: $maxWidth * (499 / 600);
      letter-spacing: $maxWidth / 40;
    }
    .option-class-symbol-text-1 {
      position: absolute;
      top: $maxWidth * (442 / 600);
      left: $maxWidth * (127 / 600);
      letter-spacing: $maxWidth / 35;
    }
    .option-class-symbol-text-2 {
      position: absolute;
      top: $maxWidth * (442 / 600);
      left: $maxWidth * (205 / 600);
      letter-spacing: $maxWidth / 40.5;
    }
    .option-class-symbol-text-3 {
      position: absolute;
      top: $maxWidth * (442 / 600);
      left: $maxWidth * (316 / 600);
      letter-spacing: $maxWidth / 40;
    }
    .option-attendance-number-text {
      position: absolute;
      top: $maxWidth * (442 / 600);
      left: $maxWidth * (499 / 600);
      letter-spacing: $maxWidth / 40;
    }
    .student-number-text {
      position: absolute;
      top: $maxWidth * (491 / 600);
      left: $maxWidth * (122 / 600);
      letter-spacing: $maxWidth / 38;
    }
    .my-name-text {
      position: absolute;
      top: $maxWidth * (491 / 600);
      left: $maxWidth * (358 / 600);
    }
    .homeroom-teacher-text {
      position: absolute;
      top: $maxWidth * (540 / 600);
      left: $maxWidth * (122 / 600);
    }
  }
</style>
