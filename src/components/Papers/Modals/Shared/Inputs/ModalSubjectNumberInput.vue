<template lang="pug">
  input(class="subject-number-input"
        type="tel"
        maxlength="2"
        placeholder="01"
        @input="$emit('update:subjectNumber', $event.target.value)"
        :value="subjectNumber"
        ref="subjectNumber")
</template>

<script>
export default {
  props: [
    'subjectNumber'
  ]
}
</script>
