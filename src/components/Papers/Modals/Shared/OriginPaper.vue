<template lang="pug">
  q-card.paper-card
    modal-header(:add-modal-title="headerTitle"
      title-text-class="title-text"
      paper-top-actions-class="paper-top-actions")
    img(src="~/assets/add-paper.jpg" ref="img")
    div
      input(class="subject-symbol-input"
        ref="subjectSymbol"
        placeholder="HL11"
        :autofocus="autoFocusInput === 'subject-symbol-input'"
        v-model="paperToSubmit.subjectSymbol")
      input(class="subject-number-input"
        ref="subjectNumber"
        type="tel"
        maxlength="2"
        placeholder="01"
        v-model="paperToSubmit.subjectNumber")
      input(class="subject-theme-input"
        ref="subjectTheme"
        placeholder="受講レポート"
        :autofocus="autoFocusInput === 'subject-theme-input'"
        v-select-all
        v-model="paperToSubmit.subjectTheme")
      q-input(class="delivery-date-input"
        ref="deliveryDate"
        square
        outlined
        v-model="paperToSubmit.deliveryDate")
        template(v-slot:append)
          q-icon.cursor-pointer(name="event")
            q-popup-proxy
              q-date(v-model="paperToSubmit.deliveryDate")
      input(class="subject-teacher-input"
        ref="subjectTeacher"
        placeholder="田中太郎"
        v-model="paperToSubmit.subjectTeacher")
      input(class="class-symbol-input-1"
        ref="classSymbol1"
        placeholder="HL"
        v-model="paperToSubmit.classSymbol1")
      input(class="class-symbol-input-2"
        ref="classSymbol2"
        placeholder="11A"
        v-model="paperToSubmit.classSymbol2")
      input(class="class-symbol-input-3"
        ref="classSymbol3"
        type="tel"
        maxlength="3"
        placeholder="999"
        v-model="paperToSubmit.classSymbol3")
      input(class="attendance-number-input"
        ref="attendanceNumber"
        type="tel"
        maxlength="2"
        placeholder="01"
        v-model="paperToSubmit.attendanceNumber")
      input(class="option-class-symbol-input-1"
        ref="optionClassSymbol1"
        placeholder="HA"
        v-model="paperToSubmit.optionClassSymbol1")
      input(class="option-class-symbol-input-2"
        ref="optionClassSymbol2"
        placeholder="11B"
        v-model="paperToSubmit.optionClassSymbol2")
      input(class="option-class-symbol-input-3"
        ref="optionClassSymbol3"
        type="tel"
        maxlength="3"
        placeholder="999"
        v-model="paperToSubmit.optionClassSymbol3")
      input(class="option-attendance-number-input"
        ref="optionAttendanceNumber"
        type="tel"
        maxlength="2"
        placeholder="02"
        v-model="paperToSubmit.optionAttendanceNumber")
      input(class="student-number-input"
        ref="studentNumber"
        type="tel"
        maxlength="5"
        placeholder="99999"
        v-model="paperToSubmit.studentNumber")
      input(class="my-name-input"
        ref="myName"
        placeholder="山田二郎"
        v-model="paperToSubmit.myName")
      input(class="homeroom-teacher-input"
        ref="homeroomTeacher"
        placeholder="佐藤三郎"
        v-model="paperToSubmit.homeroomTeacher")
    q-input(label="課題の仕様などをメモ"
      v-model="paperToSubmit.memo"
      filled
      type="textarea")
    q-card-actions(align="around")
      q-btn(ref="submitButton" @click="submitAction" :loading="loading", color="primary" style="width: 150px")
        | {{ buttonTitle }}
        template(v-slot:loading)
          q-spinner-gears.on-left
            | Loading...

</template>

<script>
import ModalHeader from '../Shared/ModalHeader'
import { selectAll } from '../../../../directives/directive-select-all'
import { mapActions } from 'vuex'

export default {
  components: {
    ModalHeader
  },
  props: {
    preset: {
      type: Object,
      required: true
    },
    modalTitleData: {
      type: Array,
      required: true
    },
    pressSubmitButtonAction: {
      type: String,
      required: true
    },
    buttonTitle: {
      type: String,
      required: true
    },
    paperId: {
      type: String,
      default: ''
    },
    autoFocusInput: {
      type: String,
      default: 'subject-symbol-input'
    }
  },
  directives: {
    selectAll
  },
  data () {
    return {
      loading: false,
      imgWidth: 0,
      headerTitle: '',

      // 数字は、文字入力が完了した判定に使う。１文字でも入力されていればOKなものは0
      // 選択クラス記号は、入力しない事が多いので、飛ばします
      refsData: {
        subjectSymbol: 3,
        subjectNumber: 1,
        subjectTheme: 0,
        deliveryDate: 0,
        subjectTeacher: 0,
        classSymbol1: 1,
        classSymbol2: 2,
        classSymbol3: 2,
        attendanceNumber: 1,
        studentNumber: 4,
        myName: 0,
        homeroomTeacher: 0
      },

      paperToSubmit: {
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

      // 選択クラス記号の場合
      refsDataOption: {
        optionClassSymbol1: 1,
        optionClassSymbol2: 2,
        optionClassSymbol3: 2,
        optionAttendanceNumber: 1,
        studentNumber: 4,
        myName: 0,
        homeroomTeacher: 0
      }
    }
  },
  watch: {
    // 全角入力を半角入力に変化する処理
    'paperToSubmit.subjectSymbol': function (value, oldValue) {
      // 小文字を大文字に変換した上で処理
      this.paperToSubmit.subjectSymbol = this.convertToHalf(value.toUpperCase())
      if (this.paperToSubmit.subjectSymbol.length > 3) {
        this.nextFocus('subjectSymbol', this.refsData)
      }
    },
    'paperToSubmit.subjectNumber': function (value, oldValue) {
      this.paperToSubmit.subjectNumber = this.convertToHalf(value)
      if (this.paperToSubmit.subjectNumber.length > 1) {
        this.nextFocus('subjectNumber', this.refsData)
      }
    },
    'paperToSubmit.deliveryDate': function (value, oldValue) {
      if (this.paperToSubmit.deliveryDate.length > 9) {
        this.nextFocus('deliveryDate', this.refsData)
      }
    },
    'paperToSubmit.classSymbol1': function (value, oldValue) {
      this.paperToSubmit.classSymbol1 = this.convertToHalf(value.toUpperCase())
      if (this.paperToSubmit.classSymbol1.length > 1) {
        this.nextFocus('classSymbol1', this.refsData)
      }
    },
    'paperToSubmit.classSymbol2': function (value, oldValue) {
      this.paperToSubmit.classSymbol2 = this.convertToHalf(value.toUpperCase())
      if (this.paperToSubmit.classSymbol2.length > 2) {
        this.nextFocus('classSymbol2', this.refsData)
      }
    },
    'paperToSubmit.classSymbol3': function (value, oldValue) {
      this.paperToSubmit.classSymbol3 = this.convertToHalf(value)
      if (this.paperToSubmit.classSymbol3.length > 2) {
        this.nextFocus('classSymbol3', this.refsData)
      }
    },
    'paperToSubmit.attendanceNumber': function (value, oldValue) {
      this.paperToSubmit.attendanceNumber = this.convertToHalf(value)
      if (this.paperToSubmit.attendanceNumber.length > 1) {
        this.nextFocus('attendanceNumber', this.refsData)
      }
    },
    'paperToSubmit.optionClassSymbol1': function (value, oldValue) {
      this.paperToSubmit.optionClassSymbol1 = this.convertToHalf(value.toUpperCase())
      if (this.paperToSubmit.optionClassSymbol1.length > 1) {
        this.nextFocus('optionClassSymbol1', this.refsDataOption)
      }
    },
    'paperToSubmit.optionClassSymbol2': function (value, oldValue) {
      this.paperToSubmit.optionClassSymbol2 = this.convertToHalf(value.toUpperCase())
      if (this.paperToSubmit.optionClassSymbol2.length > 2) {
        this.nextFocus('optionClassSymbol2', this.refsDataOption)
      }
    },
    'paperToSubmit.optionClassSymbol3': function (value, oldValue) {
      this.paperToSubmit.optionClassSymbol3 = this.convertToHalf(value)
      if (this.paperToSubmit.optionClassSymbol3.length > 2) {
        this.nextFocus('optionClassSymbol3', this.refsDataOption)
      }
    },
    'paperToSubmit.optionAttendanceNumber': function (value, oldValue) {
      this.paperToSubmit.optionAttendanceNumber = this.convertToHalf(value)
      if (this.paperToSubmit.optionAttendanceNumber.length > 1) {
        this.nextFocus('optionAttendanceNumber', this.refsDataOption)
      }
    },
    'paperToSubmit.studentNumber': function (value, oldValue) {
      this.paperToSubmit.studentNumber = this.convertToHalf(value)
      if (this.paperToSubmit.studentNumber.length > 4) {
        this.nextFocus('studentNumber', this.refsData)
      }
    }
  },
  mounted () {
    // タイトルをシャッフル
    this.shuffleTitle()
    this.imgWidth = this.$refs.img.width

    // 送信内容をpropsのpresetで初期化する
    Object.keys(this.preset).forEach(key => {
      if (key !== 'completed') {
        this.paperToSubmit[key] = this.preset[key]
      }
    })
  },
  methods: {
    ...mapActions('papers', ['addPaper', 'updatePaper']),
    submitAction () {
      if (this.pressSubmitButtonAction === 'addPaper') {
        this.addPaperSubmitAction()
      } else if (this.pressSubmitButtonAction === 'updatePaper') {
        this.updatePaperSubmitAction()
      }
    },
    addPaperSubmitAction () {
      if (this.paperToSubmit.subjectSymbol.length === 0) {
        alert('科目記号だけは、入力してください')
      } else {
        this.addPaper(this.paperToSubmit)
        this.$emit('close')
      }
    },
    updatePaperSubmitAction () {
      this.updatePaper({ id: this.paperId, updates: this.paperToSubmit })
      this.$emit('close')
    },
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
      const randomKey = Math.floor(Math.random() * this.modalTitleData.length)
      this.headerTitle = this.modalTitleData[randomKey]
    },
    // 全角入力を半角文字に直す
    convertToHalf (value) {
      return value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248)
      })
    },
    // 半角入力を全角文字に直す
    convertToDouble (value) {
      return value.replace(/[A-Za-z0-9]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) + 65248)
      })
    },
    // 次のフォーカス対象を探す
    nextFocus (currentKey, refsData) {
      const keys = Object.keys(refsData)
      // 現在フォーカスされているinput以降から探す
      const currentIndex = keys.indexOf(currentKey)
      for (let i = currentIndex + 1; i < keys.length; i++) {
        if (this.paperToSubmit[keys[i]].length <= refsData[keys[i]]) {
          this.$refs[keys[i]].focus()
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    background: transparent;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    opacity: 0.5; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    opacity: 0.5;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    opacity: 0.5;
  }

  @mixin absoluteInput(
    $maxWidth: 0px,
    $topRatio: 1,
    $leftRatio: 1,
    $letterSpacingRatio: false,
    $inputHeightRatio: 40/600,
    $inputWidthRatio: 100/600,
    $paddingLeftRatio: 10/600
  ) {
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
        @include absoluteInput($maxWidth, 82/600, 0.15, 1/33, 38/600, 150/600);
      }
      .subject-number-input {
        @include absoluteInput($maxWidth, 82/600, 0.522, 1/38, 38/600, 75/600);
      }
      .subject-theme-input {
        @include absoluteInput($maxWidth, 138/600, 0.15, false, 55/600, 504/600);
      }
      .delivery-date-input {
        @include absoluteInput($maxWidth, 210/600, 0.134, true, 38/600, 200/600);
      }
      .subject-teacher-input {
        @include absoluteInput($maxWidth, 265/600, 0.15, false, 38/600, 240/600);
      }
      .class-symbol-input-1 {
        @include absoluteInput($maxWidth, 355/600, 0.15, 1/33, 38/600, 75/600);
      }
      .class-symbol-input-2 {
        @include absoluteInput($maxWidth, 355/600, 0.305, 1/30, 38/600, 112/600);
      }
      .class-symbol-input-3 {
        @include absoluteInput($maxWidth, 355/600, 0.52, 1/30, 38/600, 112/600);
      }
      .attendance-number-input {
        @include absoluteInput($maxWidth, 355/600, 520/600, 1/30, 38/600, 75/600);
      }
      .option-class-symbol-input-1 {
        @include absoluteInput($maxWidth, 410/600, 0.15, 1/33, 38/600, 75/600);
      }
      .option-class-symbol-input-2 {
        @include absoluteInput($maxWidth, 410/600, 0.305, 1/30, 38/600, 112/600);
      }
      .option-class-symbol-input-3 {
        @include absoluteInput($maxWidth, 410/600, 0.52, 1/30, 38/600, 112/600);
      }
      .option-attendance-number-input {
        @include absoluteInput($maxWidth, 410/600, 520/600, 1/30, 38/600, 75/600);
      }
      .student-number-input {
        @include absoluteInput($maxWidth, 466/600, 0.15, 1/29, 38/600, 187/600);
      }
      .my-name-input {
        @include absoluteInput(
            $maxWidth,
            466/600,
            355/600,
            false,
            38/600,
            239/600
        );
      }
      .homeroom-teacher-input {
        @include absoluteInput($maxWidth, 522/600, 0.15, false, 38/600, 240/600);
      }
    }
  }

  @media screen and (min-width: 620px) {
    @include stylesWithMaxWidth(600px);
  }
  @media screen and (max-width: 619px) {
    @include stylesWithMaxWidth(400px);
  }
</style>
