<script setup lang="ts">
</script>

<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <h1 class="h1-1">Основная информация</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <ProfileInfoBoxProperty label="Роль" data="Внук" />
      </v-col>
      <v-col cols="12" md="6">
        <ProfileInfoBoxProperty label="Телефон" data="+7 921 930-32-12" />
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <ProfileInfoBoxProperty label="Электронная почта" data="alex@mail.ru" />
      </v-col>
      <v-col cols="12" md="6">
        <ProfileInfoBoxProperty label="Дата рождения" data="30.03.1992" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <ProfileInfoBoxProperty label="Адрес" data="г. Москва, ул. Петрова, 91" />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>