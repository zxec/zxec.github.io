<script setup lang="ts">
const props = defineProps(['tariffData'])
</script>

<template>
  <v-card variant="flat">
    <v-card-text class="tariff-card">
      <div class="d-flex flex-column h-100 mb-auto">
        <h3 class="mb-3">{{ props.tariffData?.title }}</h3>
        <p class="mb-7">{{ props.tariffData?.description }}</p>
        <v-list class="benefits-list mb-auto" density="compact">
          <v-list-item v-for="benefit in props.tariffData?.benefits" slim>
            <template v-slot:prepend>
              <v-icon icon="mdi-check" color="primary" />
            </template>
            <v-list-item-title class="benefits-list__title">{{ benefit }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <div v-if="props.tariffData?.is_active">
          <BaseButton height="48" disabled>Активен | {{ props.tariffData?.price }}
            ₽/мес
          </BaseButton>
        </div>
        <div v-else class="d-flex justify-space-between align-center">
          <h3>От {{ props.tariffData?.price }} ₽/мес</h3>
          <BaseButton height="48">Подключить</BaseButton>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.tariff-card {
  width: 395px;
  height: 568px;
  background-color: #F7F7F7;
  border-radius: 8px;

  padding: 24px 16px;

  color: #414141;
}

.benefits-list {
  background: transparent;
}

.benefits-list__title {
  white-space-collapse: unset;
  text-wrap: unset;
}
</style>