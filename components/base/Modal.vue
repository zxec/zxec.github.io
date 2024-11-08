<script setup lang="ts">
const props = defineProps(['title'])
</script>

<template>
  <v-dialog max-width="612">
    <v-card rounded="lg">
      <v-card-title class="d-flex justify-space-between align-center" style="padding: 16px 24px 10px;">
        <h3>
          {{ props.title }}
        </h3>
        <v-btn icon="mdi-close" variant="text" @click="$emit('close')" />
      </v-card-title>
      <v-card-text class="custom-scrollbar">
        <slot />
      </v-card-text>
      <template #actions>
        <slot name="actions" />
      </template>
    </v-card>
  </v-dialog>
</template>

<style scoped>
/* Основной контейнер со скроллом */
.custom-scrollbar {
  overflow-y: auto;
  /* Включает вертикальный скролл */
}

/* Стилизация скроллбара */
.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
  /* Ширина скроллбара */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
  /* Прозрачный фон для трека скроллбара */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #F07300;
  /* Цвет ползунка */
  border-radius: 10px;
  /* Закругление ползунка */
  border: 2px solid rgba(0, 0, 0, 0);
  /* Прозрачная обводка, чтобы сохранить прозрачный фон */
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #d86500;
  /* Темнее цвет на ховере */
}

/* Для Firefox */
.custom-scrollbar {
  scrollbar-color: #F07300 transparent;
  /* Цвет ползунка и фона */
  scrollbar-width: thin;
  /* Тонкий скроллбар */
}
</style>