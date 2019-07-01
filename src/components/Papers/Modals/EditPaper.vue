<template lang="pug">
  origin-paper(button-title="更新"
                :preset="paper"
                :modal-title-data="editModalTitleData"
                press-submit-button-action="updatePaper"
                @close="$emit('close')"
                :paper-id="paperId")
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
    },
    paperId: {
      type: String,
      default: ''
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
