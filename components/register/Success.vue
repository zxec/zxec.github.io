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
        Приятно познакомиться! Мы рады видеть вас среди наших пользователей.
        Теперь вы можете всегда оставаться на связи с вашими близкими, а также заказывать доставку еды, лекарств и многое другое — всё это в одном месте!
      </v-row>
      <v-row class="mb-4">
        <BaseButton block @click="navigateTo('/login')">Продолжить</BaseButton>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped></style>