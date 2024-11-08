<script setup lang="ts">
let visible1 = ref(false)
let visible2 = ref(false)
</script>

<template>
  <v-form>
    <v-row class="ma-0">
      <BaseInput :append-inner-icon="visible1 ? 'mdi-eye-off' : 'mdi-eye'" :type="visible1 ? 'text' : 'password'"
        @click:append-inner="visible1 = !visible1" label="Старый пароль" />
    </v-row>
    <v-row class="ma-0">
      <BaseInput :append-inner-icon="visible2 ? 'mdi-eye-off' : 'mdi-eye'" :type="visible2 ? 'text' : 'password'"
        @click:append-inner="visible2 = !visible2" label="Новый пароль"
        hint="Не менее 8 символов, как минимум одна цифра" />
    </v-row>
  </v-form>
</template>

<style scoped></style>