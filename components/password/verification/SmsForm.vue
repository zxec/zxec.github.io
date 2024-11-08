<script setup lang="ts">
</script>

<template>
  <v-form>
    <v-container fluid>
      <v-row>
        <h1>
          Проверьте SMS
        </h1>
      </v-row>
      <v-row class="mb-5">
        На введенный ранее номер +7 922 912-61-00 была отправлена СМС с 6-значным кодом, введите его ниже.
      </v-row>
      <v-row class="mb-5">
        <BaseSmsInput />
      </v-row>
      <v-row class="mb-4">
        <BaseButton block @click="navigateTo('new')">Продолжить</BaseButton>
      </v-row>
      <v-row class="mb-4">
        <BaseButton variant="outlined" block @click="navigateTo('/login')">Вернуться ко входу</BaseButton>
      </v-row>
      <v-row class="justify-center">
        <span class="text-caption">
          Ещё нет аккаунта?
          <NuxtLink to="/register">
            Зарегистрироваться
          </NuxtLink>
        </span>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped></style>