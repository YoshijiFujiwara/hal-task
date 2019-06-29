<template lang="pug">
  q-card.paper-card
    img(src="~/assets/paper.jpg" ref="img")
    p.new-title
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
      loading: false
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .paper-card {
    width: 100%;
    position: relative;

    .new-text {

    }
  }
</style>
