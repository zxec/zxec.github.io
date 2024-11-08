<script setup lang="ts">
const props = defineProps(['number', 'expirationDate'])
</script>

<template>
  <v-card variant="flat">
    <v-card-text class="debit-card">
      <div class="d-flex flex-column h-100">
        <div class="d-flex justify-end mb-auto">
          <v-btn icon="mdi-trash-can" color="#414141" variant="text" density="comfortable"></v-btn>
        </div>
        <div>
          <p>{{ props.number }}</p>
        </div>
        <div class="d-flex justify-space-between">
          <p>{{ props.expirationDate }}</p>
          <img class="icon" src="/icons/mir.svg" alt="MIR" width="60">
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.debit-card {
  width: 254px;
  height: 152px;
  background-color: #F7F7F7;
  border-radius: 8px;

  padding: 16px 20px;

  color: #414141;
  line-height: 26px;
}
</style>