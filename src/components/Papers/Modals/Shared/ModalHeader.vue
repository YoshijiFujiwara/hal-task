<template lang="pug">
  q-card-actions.row(:class="paperTopActionsClass")
    p(:class="titleTextClass") {{ addModalTitle }}
    q-space
    q-btn(flat round dense icon="close" color="black" v-close-popup)
</template>

<script>
export default {
  props: [
    'addModalTitle',
    'titleTextClass',
    'paperTopActionsClass'
  ]
}
</script>
