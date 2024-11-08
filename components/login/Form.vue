<script setup lang="ts">
let visible = ref(false)
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
        <BaseInput label="Логин" />
      </v-row>
      <v-row class="mb-5">
        <BaseInput :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
          @click:append-inner="visible = !visible" label="Пароль" />
      </v-row>
      <v-row class="mb-4">
        <BaseButton block @click="navigateTo('/profile')">Продолжить</BaseButton>
      </v-row>
      <v-row class="mb-4">
        <BaseButton variant="outlined" block @click="navigateTo('/login/phone')">Войти с помощью телефона</BaseButton>
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