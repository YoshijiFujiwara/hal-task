<template lang="pug">
  q-input(outlined
          v-model="searchField"
          @keyup.esc="searchField = ''"
          class="col"
          v-select-all
          label='検索')
    template(v-slot:append='')
      q-icon.cursor-pointer(v-if="searchField !== ''"
                            name='close'
                            @click="searchField = ''")
      q-icon(name='search')
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { selectAll } from '../../../directives/directive-select-all'

export default {
  directives: {
    selectAll
  },
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
