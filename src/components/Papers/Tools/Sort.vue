<template lang="pug">
  q-select(filled
          v-model="sortBy"
          emit-value
          map-options
          :options="options"
          class="col q-ml-sm"
          label="並び順"
          stack-label)
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      options: [
        {
          label: '科目記号',
          value: 'subjectSymbol'
        },
        {
          label: '課題ナンバー',
          value: 'subjectNumber'
        },
        {
          label: '主題',
          value: 'subjectTheme'
        },
        {
          label: '納期',
          value: 'deliveryDate'
        },
        {
          label: '科目担当',
          value: 'subjectTeacher'
        },
        {
          label: 'メモ',
          value: 'memo'
        }
      ]
    }
  },
  computed: {
    ...mapState('papers', ['sort']),
    sortBy: {
      get () {
        return this.sort
      },
      set (value) {
        this.setSort(value)
      }
    }
  },
  methods: {
    ...mapActions('papers', ['setSort'])
  }
}
</script>

<style scoped>
  .q-select {
    flex: 0 0 112px;
  }
</style>
