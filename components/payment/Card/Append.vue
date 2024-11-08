<script setup lang="ts">
</script>

<template>
  <v-card variant="flat" link>
    <v-card-text class="debit-card d-flex justify-center align-center">
      <div class="text-center">
        <v-icon icon="mdi-plus-circle-outline" size="30" color="#414141CC" class="mb-2" />
        <p><b>Добавить карту</b></p>
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