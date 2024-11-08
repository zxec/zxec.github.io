<script setup lang="ts">
</script>

<template>
  <v-select
      variant="outlined"
      color="primary"
      rounded="lg"
      bg-color="#4444440A"
      v-bind="$attrs"
  >
    <slot />
  </v-select>
</template>

<style scoped>
</style>