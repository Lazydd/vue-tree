<template>
  <svg viewBox="0 0 50 50">
    <circle
      class="vtree-loading-icon__circle"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke-width="5"
      stroke-miterlimit="10"
    ></circle>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CLoadingIcon'
})
</script>
