<template lang="pug">
  input(class="subject-theme-input"
        placeholder="受講レポート"
        @input="$emit('update:subjectTheme', $event.target.value)"
        :value="subjectTheme"
        ref="subjectTheme")
</template>

<script>
export default {
  props: [
    'subjectTheme'
  ]
}
</script>
