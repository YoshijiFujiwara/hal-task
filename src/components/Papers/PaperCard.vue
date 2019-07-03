<template lang="pug">
  transition(appear
            enter-active-class="animated zoomIn"
            leave-active-class="animated zoomOut")
    q-card.paper-card
      img(src='~/assets/paper.jpg' ref="img")

      p.subject-symbol-text(v-html="$options.filters.searchHighLight(paper.subjectSymbol, search)")
      p.subject-number-text(v-html="$options.filters.searchHighLight(paper.subjectNumber, search)")
      p.subject-theme-text(v-html="$options.filters.searchHighLight(paper.subjectTheme, search)")
      p.delivery-year-text(v-html="$options.filters.searchHighLight(paper.deliveryDate.split('/')[0], search)")
      p.delivery-month-text(v-html="$options.filters.searchHighLight(paper.deliveryDate.split('/')[1], search)")
      p.delivery-date-text(v-html="$options.filters.searchHighLight(paper.deliveryDate.split('/')[2], search)")
      p.subject-teacher-text(v-html="$options.filters.searchHighLight(paper.subjectTeacher, search)")
      p.class-symbol-text-1 {{ paper.classSymbol1 }}
      p.class-symbol-text-2 {{ paper.classSymbol2 }}
      p.class-symbol-text-3 {{ paper.classSymbol3 }}
      p.attendance-number-text {{ paper.attendanceNumber }}
      p.option-class-symbol-text-1 {{ paper.optionClassSymbol1 }}
      p.option-class-symbol-text-2 {{ paper.optionClassSymbol2 }}
      p.option-class-symbol-text-3 {{ paper.optionClassSymbol3 }}
      p.option-attendance-number-text {{ paper.optionAttendanceNumber }}
      p.student-number-text {{ paper.studentNumber }}
      p.my-name-text {{ paper.myName }}
      p.homeroom-teacher-text {{ paper.homeroomTeacher }}
      div.absolute-top.overlay.cursor-pointer(v-ripple
                      :style="bgColorStyle"
                      @click="updatePaper({ id: paperId, updates: { completed: !paper.completed }})")
      q-card-actions(align='around')
        q-btn(flat round color='primary', icon='edit' @click="$emit('showEditPaper', { paperId })")
        q-btn(flat round color='red', icon='delete' @click="promptToDelete(paperId)")
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: [
    'paperId',
    'paper'
  ],
  computed: {
    ...mapState('papers', ['search']),
    bgColorStyle () {
      return this.paper.completed ? 'background-color: rgba(51, 255, 100, 0.2);' : 'background-color: rgba(255, 147, 51, 0.2)'
    }
  },
  filters: {
    searchHighLight (value, search) {
      if (search) {
        let searchRegExp = new RegExp(search, 'ig')
        return value.replace(searchRegExp, (match) => {
          return '<span class="bg-blue-3">' + match + '</span>'
        })
      }
      return value
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
