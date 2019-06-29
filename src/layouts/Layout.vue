<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
      q-toolbar
        q-toolbar-title.absolute-center
          | HAL TASK
    // フッター
    q-footer
      q-tabs
        q-route-tab(v-for="(nav, index) in navs"
                    :key="index"
                    :to="nav.to"
                    :icon="nav.icon"
                    :label="nav.label")
    // サイドナビ
    q-drawer(v-model="leftDrawerOpen"
            :breakpoint="767"
            :width="240"
            bordered
            content-class="bg-grey-2")
      q-list
        q-item-label(header) ナビ
        q-item(v-for="(nav, index) in navs"
              :key="index"
              clickable
              :to="nav.to"
              exact)
          q-item-section(avatar)
            q-icon(:name="nav.icon")
          q-item-section
            q-item-label {{ nav.label }}
    q-page-container
      router-view

</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'Layout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label: 'ToDo',
          icon: 'school',
          to: '/'
        },
        {
          label: '設定',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
</style>
