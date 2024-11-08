<script setup lang="ts">
import { vMaska } from "maska/vue"
</script>

<template>
  <v-form>
    <v-row class="ma-0">
      <BaseInput v-maska="'+7 (###) ###-##-##'" placeholder="+7 (___) ___-__-__" label="Телефон" />
    </v-row>
  </v-form>
</template>

<style scoped></style>