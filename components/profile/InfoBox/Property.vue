<script setup lang="ts">
const props = defineProps(['label', 'data'])
</script>

<template>
  <div class="d-flex flex-column ga-3">
    <span class="font-weight-bold">{{ props.label }}</span>
    <span>{{ props.data }}</span>
  </div>
</template>

<style scoped></style>