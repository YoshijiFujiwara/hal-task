<template lang="pug">
  q-card.paper-card
    img(src='~/assets/paper.jpg' ref="img")

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
    div.absolute-top.overlay(v-ripple
                    :style="bgColorStyle"
                    @click="updatePaper({ id: paperId, updates: { completed: !completed }})")

    q-card-actions(align='around')
      q-btn(flat round color='primary', icon='edit')
      q-btn(flat round color='red', icon='delete' @click="promptToDelete(paperId)")
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: [
    'paperId',
    'completed', // 完了したか

    'subjectSymbol', // 科目記号
    'subjectNumber', // 課題ナンバー
    'subjectTheme', // 課題主題
    'deliveryYear', // 納期（年）
    'deliveryMonth', // 納期（月）
    'deliveryDate', // 納期（日）
    'subjectTeacher', // 科目担当

    'classSymbol', // クラス記号
    'attendanceNumber', // 出席番号
    'optionClassSymbol', // 選択クラス記号
    'optionAttendanceNumber', // 出席番号

    'studentNumber', // 学籍番号
    'myName', // 氏名
    'homeroomTeacher' // 担任
  ],
  computed: {
    bgColorStyle () {
      const style = this.completed ? 'background-color: rgba(51, 255, 100, 0.2);' : 'background-color: rgba(255, 147, 51, 0.2)'
      return style
    }
  },
  methods: {
    ...mapActions('papers', ['updatePaper', 'deletePaper']),
    promptToDelete (id) {
      // confでDiglog指定してから使えるよ
      this.$q.dialog({
        title: '確認',
        message: 'この課題表紙を削除しますか？',
        ok: {
          push: true
        },
        cancel: {
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.deletePaper(id)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin absoluteText($maxWidth: 0px, $topRatio: 1, $leftRatio: 1, $letterSpacingRatio: false) {
    position: absolute;
    top: $maxWidth * $topRatio;
    left: $maxWidth * $leftRatio;
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

      .overlay {
        height: $maxWidth * (1644 / 1156) // 画像の縦横比率で調整する
      }

      .subject-symbol-text {
        @include absoluteText($maxWidth, 156/600, 0.205, true)
      }
      .subject-number-text {
        @include absoluteText($maxWidth, 158/600, 0.527, true)
      }
      .subject-theme-text {
        @include absoluteText($maxWidth, 212/600, 0.205, false)
      }
      .delivery-year-text {
        @include absoluteText($maxWidth, 267/600, 0.205, true)
      }
      .delivery-month-text {
        @include absoluteText($maxWidth, 267/600, 285/600, true)
      }
      .delivery-date-text {
        @include absoluteText($maxWidth, 267/600, 382/600, true)
      }
      .subject-teacher-text {
        @include absoluteText($maxWidth, 315/600, 0.205, false)
      }
      .class-symbol-text-1 {
        @include absoluteText($maxWidth, 394/600, 127/600, 1/35)
      }
      .class-symbol-text-2 {
        @include absoluteText($maxWidth, 394/600, 205/600, 1/40.5)
      }
      .class-symbol-text-3 {
        @include absoluteText($maxWidth, 394/600, 316/600, true)
      }
      .attendance-number-text {
        @include absoluteText($maxWidth, 394/600, 499/600, true)
      }
      .option-class-symbol-text-1 {
        @include absoluteText($maxWidth, 442/600, 127/600, 1/35)
      }
      .option-class-symbol-text-2 {
        @include absoluteText($maxWidth, 442/600, 205/600, 1/40.5)
      }
      .option-class-symbol-text-3 {
        @include absoluteText($maxWidth, 442/600, 316/600, true)
      }
      .option-attendance-number-text {
        @include absoluteText($maxWidth, 442/600, 499/600, true)
      }
      .student-number-text {
        @include absoluteText($maxWidth, 491/600, 122/600, 1/38)
      }
      .my-name-text {
        @include absoluteText($maxWidth, 491/600, 358/600, false)
      }
      .homeroom-teacher-text {
        @include absoluteText($maxWidth, 540/600, 122/600, false)
      }
    }
  }

  @media screen and (min-width: 620px) {
    @include stylesWithMaxWidth(400px)
  }
  @media screen and (max-width: 619px) {
    @include stylesWithMaxWidth(300px)
  }
</style>
