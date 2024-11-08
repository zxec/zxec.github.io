<script setup lang="ts">
const props = defineProps(['size'])
</script>

<template>
  <div style="position: relative;">
    <v-avatar :size="props.size" image="/ryan-gosling.jpg" />
    <div class="logo-pill rounded-pill d-flex justify-center align-center" style="height: 34px; width: 74px;">
      <img class="icon" src="/logo.svg" alt="G&G" width="42" height="18">
    </div>
  </div>
</template>

<style scoped>
.logo-pill {
  background-color: #F8F6F5;
  border: 2px solid #F07300;

  position: absolute;
  bottom: 0;
  left: 0;
}
</style>