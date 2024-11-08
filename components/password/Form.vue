<script setup lang="ts">
import { vMaska } from "maska/vue"
</script>

<template>
  <v-form>
    <v-container fluid>
      <v-row>
        <h1>
          Восстановление пароля
        </h1>
      </v-row>
      <v-row class="mb-5">
        Введите номер телефона, который использовали в G&G.
      </v-row>
      <v-row class="mb-5">
        <BaseInput v-maska="'+7 (###) ###-##-##'" placeholder="+7 (___) ___-__-__" label="Телефон" />
      </v-row>
      <v-row class="mb-4">
        <BaseButton block @click="navigateTo('/password/verification')">Продолжить</BaseButton>
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