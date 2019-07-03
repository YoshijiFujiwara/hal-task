<template lang="pug">
  q-page
    .q-pa-md(style="max-width: 350px")
      q-list(bordered padding)
        q-item-label(header) 設定
        q-item(tag="label" v-ripple)
          q-item-section
            q-item-label 課題をまとめて表示
          q-item-section(side)
            q-toggle(color="blue" v-model="showPapersInOneList" val="battery")

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PageSettings',
  computed: {
    ...mapGetters('settings', ['settings']),
    showPapersInOneList: {
      get () {
        return this.settings.showPapersInOneList
      },
      set (value) {
        this.setShowPapersInOneList(value)
      }
    }
  },
  methods: {
    ...mapActions('settings', ['setShowPapersInOneList'])
  }
}
</script>
