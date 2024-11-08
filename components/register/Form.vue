<script setup lang="ts">
import { vMaska } from "maska/vue"
let visible = ref(false)

</script>

<template>
  <v-form>
    <v-container fluid>
      <v-row>
        <h1>
          Регистрация в G&G
        </h1>
      </v-row>
      <v-row class="mb-5">
        Давайте знакомиться! Заполните поля ниже, чтобы получить доступ ко всем возможностям сервиса.
      </v-row>
      <v-row class="mb-5">
        <BaseInput label="Имя" />
      </v-row>
      <v-row class="mb-5">
        <BaseInput label="Логин" />
      </v-row>
      <v-row class="mb-5">
        <BaseInput v-maska="'+7 (###) ###-##-##'" placeholder="+7 (___) ___-__-__" label="Телефон" />
      </v-row>
      <v-row class="mb-5">
        <BaseInput :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
          @click:append-inner="visible = !visible" label="Пароль" hint="Не менее 8 символов, как минимум одна цифра" />
      </v-row>
      <v-row class="mb-5">
        <BaseSelect label="Ваша роль" />
      </v-row>
      <v-row class="mb-4">
        <BaseButton block @click="navigateTo('/register/verification')">Продолжить</BaseButton>
      </v-row>
      <v-row class="justify-center">
        <span class="text-caption">
          Уже есть аккаунт?
          <NuxtLink to="/login">
            Войти
          </NuxtLink>
        </span>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped></style>