<script setup lang="ts">
let visible = ref(false)
</script>

<template>
  <v-form>
    <v-container fluid>
      <v-row>
        <h1>
          Придумайте новый пароль
        </h1>
      </v-row>
      <v-row class="mb-5">
        Почти закончили! Придумайте новый пароль для входа в G&G.
      </v-row>
      <v-row class="mb-5">
        <BaseInput :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                   @click:append-inner="visible = !visible" label="Пароль" />
      </v-row>
      <v-row class="mb-4">
        <BaseButton block @click="navigateTo('/login')">Продолжить</BaseButton>
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