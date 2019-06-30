<template lang="pug">
  q-card.paper-card
    q-card-actions.row.paper-top-actions
      p.title-text {{ addModalTitle }}
      q-space
      q-btn(flat round dense icon="close" color="black" v-close-popup)
    img(src="~/assets/add-paper.jpg" ref="img")

    input.subject-symbol-input(placeholder="hogehoge" v-model="paperToSubmit.subjectSymbol")
    input.subject-number-input(type="tel" maxlength="2" placeholder="hogehoge" v-model="paperToSubmit.subjectNumber")
    input.subject-theme-input(placeholder="hogehoge" v-model="paperToSubmit.subjectTheme")
    input.delivery-year-input(placeholder="hogehoge" v-model="paperToSubmit.deliveryYear")
    input.delivery-month-input(placeholder="hogehoge" v-model="paperToSubmit.deliveryMonth")
    input.delivery-date-input(placeholder="hogehoge" v-model="paperToSubmit.deliveryDate")
    input.subject-teacher-input(placeholder="hogehoge" v-model="paperToSubmit.subjectTeacher")
    input.class-symbol-input-1(placeholder="hogehoge" v-model="paperToSubmit.classSymbol1")
    input.class-symbol-input-2(placeholder="hogehoge" v-model="paperToSubmit.classSymbol2")
    input.class-symbol-input-3(placeholder="hogehoge" v-model="paperToSubmit.classSymbol3")
    input.attendance-number-input(placeholder="hogehoge" v-model="paperToSubmit.attendanceNumber")
    input.option-class-symbol-input-1(placeholder="hogehoge" v-model="paperToSubmit.optionClassSymbol1")
    input.option-class-symbol-input-2(placeholder="hogehoge" v-model="paperToSubmit.optionClassSymbol2")
    input.option-class-symbol-input-3(placeholder="hogehoge" v-model="paperToSubmit.optionClassSymbol3")
    input.option-attendance-number-input(placeholder="hogehoge" v-model="paperToSubmit.optionAttendanceNumber")
    input.student-number-input(placeholder="hogehoge" v-model="paperToSubmit.studentNumber")
    input.my-name-input(placeholder="hogehoge" v-model="paperToSubmit.myName")
    input.homeroom-teacher-input(placeholder="hogehoge" v-model="paperToSubmit.homeroomTeacher")

    q-card-actions(align="around")
      q-btn(:loading="loading", color="primary", @click="simulateProgress(4)", style="width: 150px")
        | Button
        template(v-slot:loading)
          q-spinner-gears.on-left
            | Loading...

</template>

<script>
export default {
  data () {
    return {
      loading: false,
      imgWidth: 0,

      paperToSubmit: {
        completed: false,
        subjectSymbol: '',
        subjectNumber: '',
        subjectTheme: '',
        deliveryYear: '',
        deliveryMonth: '',
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
        homeroomTeacher: ''
      },

      addModalTitle: '課題を追加する',
      addModalTitleData: [
        '新しい課題が出た！',
        '仕様漏れが無いように！',
        '今日も頑張ろう！',
        '課題を追加する',
        '○|￣|＿',
        '( ・´_・｀)'
      ]
    }
  },
  watch: {
    // 全角入力を半角入力に変化する処理
    'paperToSubmit.subjectSymbol': function (value, oldValue) {
      this.paperToSubmit.subjectSymbol = this.convertToHalf(value)
    },
    'paperToSubmit.subjectNumber': function (value, oldValue) {
      this.paperToSubmit.subjectNumber = this.convertToHalf(value)
    },
    'paperToSubmit.deliveryYear': function (value, oldValue) {
      this.paperToSubmit.deliveryYear = this.convertToHalf(value)
    },
    'paperToSubmit.deliveryMonth': function (value, oldValue) {
      this.paperToSubmit.deliveryMonth = this.convertToHalf(value)
    },
    'paperToSubmit.deliveryDate': function (value, oldValue) {
      this.paperToSubmit.deliveryDate = this.convertToHalf(value)
    },
    'paperToSubmit.classSymbol1': function (value, oldValue) {
      this.paperToSubmit.classSymbol1 = this.convertToHalf(value)
    },
    'paperToSubmit.classSymbol2': function (value, oldValue) {
      this.paperToSubmit.classSymbol2 = this.convertToHalf(value)
    },
    'paperToSubmit.classSymbol3': function (value, oldValue) {
      this.paperToSubmit.classSymbol3 = this.convertToHalf(value)
    },
    'paperToSubmit.attendanceNumber': function (value, oldValue) {
      this.paperToSubmit.attendanceNumber = this.convertToHalf(value)
    },
    'paperToSubmit.optionClassSymbol1': function (value, oldValue) {
      this.paperToSubmit.optionClassSymbol1 = this.convertToHalf(value)
    },
    'paperToSubmit.optionClassSymbol2': function (value, oldValue) {
      this.paperToSubmit.optionClassSymbol2 = this.convertToHalf(value)
    },
    'paperToSubmit.optionClassSymbol3': function (value, oldValue) {
      this.paperToSubmit.optionClassSymbol3 = this.convertToHalf(value)
    },
    'paperToSubmit.optionAttendanceNumber': function (value, oldValue) {
      this.paperToSubmit.optionAttendanceNumber = this.convertToHalf(value)
    },
    'paperToSubmit.studentNumber': function (value, oldValue) {
      this.paperToSubmit.studentNumber = this.convertToHalf(value)
    }
  },
  methods: {
    simulateProgress (number) {
      // we set loading state
      this.loading = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this.loading = false
      }, 3000)
    },
    shuffleTitle () {
      this.addModalTitle = this.addModalTitleData[Math.floor(Math.random() * this.addModalTitleData.length)]
    },
    // 全角入力を半角文字に直す
    convertToHalf (value) {
      return value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) { return String.fromCharCode(s.charCodeAt(0) - 65248) })
    },
    // 半角入力を全角文字に直す
    convertToDouble (value) {
      return value.replace(/[A-Za-z0-9]/g, function (s) { return String.fromCharCode(s.charCodeAt(0) + 65248) })
    }
  },
  mounted () {
    this.shuffleTitle()
    this.imgWidth = this.$refs.img.width
  }
}
</script>

<style lang="scss" scoped>
  input {
    background: transparent;
  }

  @mixin absoluteInput($maxWidth: 0px, $topRatio: 1, $leftRatio: 1, $letterSpacingRatio: false, $inputHeightRatio: 40/600, $inputWidthRatio: 100/600, $paddingLeftRatio: 13/600) {
    position: absolute;
    top: $maxWidth * $topRatio;
    left: $maxWidth * $leftRatio;
    height: $maxWidth * $inputHeightRatio;
    width: $maxWidth * $inputWidthRatio;
    border: none;
    padding-left: $maxWidth * $paddingLeftRatio;

    @if $letterSpacingRatio != false and $letterSpacingRatio != true {
      letter-spacing: $maxWidth * $letterSpacingRatio;
    } @else if $letterSpacingRatio == true {
      letter-spacing: $maxWidth / 40;
    }
  }

  @mixin stylesWithMaxWidth($maxWidth: 300px) {
    .paper-card {
      width: 100%;
      min-width: $maxWidth;
      max-width: $maxWidth;
      position: relative;
      font-size: $maxWidth / 20;

      .paper-top-actions {
        height: $maxWidth * (77 / 600);
      }

      .subject-symbol-input {
        @include absoluteInput($maxWidth, 82/600, 0.15, true, 38/600, 150/600)
      }
      .subject-number-input {
        @include absoluteInput($maxWidth, 82/600, 0.522, true, 38/600, 75/600)
      }
      .subject-theme-input {
        @include absoluteInput($maxWidth, 138/600, 0.15, false, 55/600, 504/600)
      }
      .delivery-year-input {
        @include absoluteInput($maxWidth, 210/600, 0.15, true, 38/600, 150/600)
      }
      .delivery-month-input {
        @include absoluteInput($maxWidth, 210/600, 276/600, true, 38/600, 75/600)
      }
      .delivery-date-input {
        @include absoluteInput($maxWidth, 210/600, 388/600, true, 38/600, 75/600)
      }
      .subject-teacher-input {
        @include absoluteInput($maxWidth, 265/600, 0.15, false, 38/600, 240/600)
      }
      .class-symbol-input-1 {
        @include absoluteInput($maxWidth, 355/600, 0.15, 1/35, 38/600, 75/600)
      }
      .class-symbol-input-2 {
        @include absoluteInput($maxWidth, 355/600, 0.305, 1/40.5, 38/600, 112/600)
      }
      .class-symbol-input-3 {
        @include absoluteInput($maxWidth, 355/600, 0.52, 1/35, 38/600, 112/600)
      }
      .attendance-number-input {
        @include absoluteInput($maxWidth, 355/600, 520/600, true, 38/600, 75/600)
      }
      .option-class-symbol-input-1 {
        @include absoluteInput($maxWidth, 410/600, 0.15, 1/35, 38/600, 75/600)
      }
      .option-class-symbol-input-2 {
        @include absoluteInput($maxWidth, 410/600, 0.305, 1/40.5, 38/600, 112/600)
      }
      .option-class-symbol-input-3 {
        @include absoluteInput($maxWidth, 410/600, 0.52, 1/35, 38/600, 112/600)
      }
      .option-attendance-number-input {
        @include absoluteInput($maxWidth, 410/600, 520/600, true, 38/600, 75/600)
      }
      .student-number-input {
        @include absoluteInput($maxWidth, 466/600, 0.15, 1/38, 38/600, 187/600)
      }
      .my-name-input {
        @include absoluteInput($maxWidth, 466/600, 355/600, false, 38/600, 239/600)
      }
      .homeroom-teacher-input {
        @include absoluteInput($maxWidth, 522/600, 0.15, false, 38/600, 240/600)
      }
    }
  }

  @media screen and (min-width: 620px) {
    @include stylesWithMaxWidth(600px)
  }
  @media screen and (max-width: 619px) {
    @include stylesWithMaxWidth(400px)
  }
</style>
