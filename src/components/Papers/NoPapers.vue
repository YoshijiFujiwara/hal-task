<template lang="pug">
  q-banner.bg-grey-3
    template(v-slot:avatar='')
      q-icon(name='check', color='primary')
    |       課題無しだよ！ やったね！
    template(v-slot:action='')
      q-btn(@click="$root.$emit('showAddPaper')" flat='', color='primary', label='課題を追加する')
</template>

<script>
export default {

}
</script>
