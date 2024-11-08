<script setup lang="ts">
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
        На введенный ранее номер +7 9229 12-61-00 была отправлена СМС с 6-значным кодом, введите его ниже.
      </v-row>
      <v-row class="mb-5">
        <BaseSmsInput />
      </v-row>
      <v-row class="mb-4">
        <BaseButton block @click="navigateTo('/register/success')">Зарегистрироваться</BaseButton>
      </v-row>
      <v-row class="mb-4">
        <BaseButton variant="outlined" block @click="navigateTo('/register/success')">Изменить номер телефона</BaseButton>
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