<template lang="pug">
  q-card.paper-card
    q-card-actions.row
      p.title-text {{ addModalTitle }}
      q-space
      q-btn(flat round dense icon="close" color="black" v-close-popup)
    img(src="~/assets/add-paper.jpg" ref="img")
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
      addModalTitle: '課題を追加する',
      addModalTitleData: [
        '新しい課題が出た！',
        'また課題かよ。。。',
        '今日も頑張ろう！',
        '課題を追加する',
        '○|￣|＿',
        '( ・´_・｀)'
      ]
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
    }
  },
  mounted () {
    this.shuffleTitle()
  }
}
</script>

<style lang="scss" scoped>
  .paper-card {
    width: 100%;
    position: relative;

    .title-text {
      position: absolute;
      left: 10px;
      font-size: 30px;
      font-weight: bold;
    }
  }
</style>
