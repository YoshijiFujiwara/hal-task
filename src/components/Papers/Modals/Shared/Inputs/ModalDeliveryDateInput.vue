<template lang="pug">
  q-input(class="delivery-date-input"
          square
          outlined
          :value="deliveryDate"
          @input="$emit('update:deliveryDate', $event.target.value)"
          ref="deliveryDate")
    template(v-slot:append)
      q-icon.cursor-pointer(name="event")
        q-popup-proxy
          q-date(:value="deliveryDate"
                  @input="$emit('update:deliveryDate', $event.target.value)")
</template>

<script>
export default {
  props: [
    'deliveryDate'
  ]
}
</script>
