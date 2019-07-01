<template lang="pug">
  input(class="subject-symbol-input"
        placeholder="HL11"
        @input="$emit('update:subjectSymbol', $event.target.value)"
        :value="subjectSymbol"
        ref="subjectSymbol")
</template>

<script>
export default {
  props: [
    'subjectSymbol'
  ]
}
</script>
