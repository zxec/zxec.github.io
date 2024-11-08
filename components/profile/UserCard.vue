<script setup lang="ts">
const props = defineProps(['edit'])
</script>

<template>
  <v-card variant="flat" width="100%">
    <v-card-text class="user-card d-flex justify-space-between align-end">
      <div class="d-flex">
        <BaseAvatar :size="151" />
        <div class="ml-3 d-flex flex-column justify-end">
          <span class="name">Александр</span>
          <span class="username">@alex92</span>
        </div>
      </div>
      <div v-if="props.edit" class="d-flex" style="gap: 14px;">
        <BaseButton variant="outlined" height="48" @click="navigateTo('/profile')">
          Отменить</BaseButton>
        <BaseButton height="48" @click="navigateTo('/profile')">
          Сохранить изменения</BaseButton>
      </div>
      <BaseButton v-else variant="outlined" height="48" prepend-icon="mdi-pencil" @click="navigateTo('/profile/edit')">
        Редактировать
        профиль</BaseButton>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.user-card {
  padding: 33px 24px 24px 24px;
  background-color: #F5F5F5;
  border-radius: 8px;
}

.name {
  color: #414141;
  font-size: 20px;
  font-weight: 700;
}

.username {
  color: #41414199;
  font-size: 16px;
  font-weight: 700;
}
</style>