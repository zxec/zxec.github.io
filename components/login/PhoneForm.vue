<script setup lang="ts">
import { vMaska } from "maska/vue"
</script>

<template>
  <v-form>
    <v-container fluid>
      <v-row>
        <h1>
          Вход в G&G
        </h1>
      </v-row>
      <v-row class="mb-5">
        С возвращением! Войдите, чтобы продолжить пользоваться всеми возможностями сервиса.
      </v-row>
      <v-row class="mb-5">
        <BaseInput v-maska="'+7 (###) ###-##-##'" placeholder="+7 (___) ___-__-__" label="Телефон" />
      </v-row>
      <v-row class="mb-4">
        <BaseButton block @click="navigateTo('/login/verification')">Войти</BaseButton>
      </v-row>
      <v-row class="mb-4">
        <BaseButton variant="outlined" block @click="navigateTo('/login')">Войти с помощью логина</BaseButton>
      </v-row>
      <v-row class="justify-center">
        <span class="text-caption">
          Еще нет аккаунта?
          <NuxtLink to="/register">
            Зарегистрироваться
          </NuxtLink>
        </span>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped></style>