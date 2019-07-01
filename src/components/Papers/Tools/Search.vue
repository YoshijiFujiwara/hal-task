<template lang="pug">
  q-input(outlined
          v-model="searchField"
          class="col"
          label='検索')
    template(v-slot:append='')
      q-icon.cursor-pointer(v-if="searchField !== ''"
                            name='close'
                            @click="searchField = ''")
      q-icon(name='search')
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('papers', ['search']),
    // この書き方知らなかった
    searchField: {
      get () {
        return this.search
      },
      set (value) {
        this.setSearch(value)
      }
    }
  },
  methods: {
    ...mapActions('papers', ['setSearch'])
  }
}
</script>
