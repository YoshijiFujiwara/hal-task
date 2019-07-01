<template lang="pug">
  q-banner.text-white.text-center.text-subtitle1(:class="bgClass")
    | {{ title }}
</template>

<script>
export default {
  props: [
    'bgClass',
    'title'
  ]
}
</script>
