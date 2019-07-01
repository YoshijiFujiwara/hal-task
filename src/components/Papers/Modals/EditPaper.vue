<template lang="pug">
  origin-paper(:preset="paper"
                :modal-title-data="editModalTitleData"
                press-submit-button-action="updatePaper"
                @close="$emit('close')")
</template>

<script>
import OriginPaper from './Shared/OriginPaper'

export default {
  components: {
    OriginPaper
  },
  props: {
    paper: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      editModalTitleData: [
        '課題の編集'
      ]
    }
  }
}
</script>
