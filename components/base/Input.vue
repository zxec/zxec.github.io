<script setup lang="ts">
</script>

<template>
  <v-text-field
      variant="outlined"
      color="primary"
      rounded="lg"
      bg-color="#4444440A"
      v-bind="$attrs"
  >
    <slot />
    <template #append-inner>
      <slot name="append-inner" />
    </template>
  </v-text-field>
</template>

<style scoped></style>