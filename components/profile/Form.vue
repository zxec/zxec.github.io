<script setup lang="ts">
import { vMaska } from "maska/vue"
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
        <BaseSelect label="Роль" model-value="Внук" :items="['Внук', 'Внучка']" />
      </v-col>
      <v-col cols="12" md="6">
        <BaseInput v-maska="'+7 (###) ###-##-##'" label="Телефон" model-value="+7 921 930-32-12" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <BaseInput type="email" label="Электронная почта" model-value="alex@mail.ru" />
      </v-col>
      <v-col cols="12" md="6">
        <BaseInput type="date" label="Дата рождения" model-value="1992-03-30" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <BaseInput label="Адрес" model-value="г. Москва, ул. Петрова, 91" />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>