<script setup lang="ts">
import { ref } from 'vue';

interface Item {
  id: number;
  name: string;
}

let invitationFormShow = ref<boolean>(false);
let deleteFormShow = ref<boolean>(false);
const menu = ref<boolean>(false);
const activator = ref<HTMLElement | null>(null);
const menuX = ref<number>(0);  // Координата X для меню
const menuY = ref<number>(0);  // Координата Y для меню

const openMenu = (id: number, event: MouseEvent) => {
  activator.value = event.currentTarget as HTMLElement;

  menuX.value = event.clientX;
  menuY.value = event.clientY;

  menu.value = false;  // Закрываем меню, если оно уже открыто
  setTimeout(() => {
    menu.value = true;  // Открываем меню после небольшого таймаута
  }, 50);  // Таймаут в 50 миллисекунд
};

const showInvitationForm = () => {
  invitationFormShow.value = true
};

const closeInvitationForm = () => {
  invitationFormShow.value = false
};

const showDeleteForm = () => {
  deleteFormShow.value = true
};

const closeDeleteForm = () => {
  deleteFormShow.value = false
};
</script>

<template>
  <v-row class="mb-10">
    <v-col cols="3" class="d-flex flex-column align-center">
      <BaseAvatar :size="164" @click="openMenu(1, $event)" style="cursor: pointer" />
      <div>
        <span class="font-weight-bold">Вы</span>
      </div>
      <div>
        <span style="color: #929292;">Внук</span>
      </div>
    </v-col>
    <v-col cols="3" class="d-flex flex-column align-center">
      <BaseAvatar :size="164" @click="openMenu(1, $event)" style="cursor: pointer" />
      <div>
        <span class="font-weight-bold">Наталья</span>
      </div>
      <div>
        <span style="color: #929292;">Внучка</span>
      </div>
    </v-col>
    <v-col cols="3" class="d-flex flex-column align-center">
      <BaseAvatar :size="164" @click="openMenu(1, $event)" style="cursor: pointer" />
      <div>
        <span class="font-weight-bold">Ирина</span>
      </div>
      <div>
        <span style="color: #929292;">Бабушка</span>
      </div>
    </v-col>
    <v-col cols="3" class="d-flex flex-column align-center">
      <BaseAvatar :size="164" @click="openMenu(1, $event)" style="cursor: pointer" />
      <div>
        <span class="font-weight-bold">Ирина</span>
      </div>
      <div>
        <span style="color: #929292;">Сестра</span>
      </div>
    </v-col>
    <v-col cols="3" class="d-flex flex-column align-center">
      <BaseAvatar :size="164" @click="openMenu(1, $event)" style="cursor: pointer" />
      <div>
        <span class="font-weight-bold">Татьяна</span>
      </div>
      <div>
        <span style="color: #929292;">Дочь</span>
      </div>
    </v-col>
    <v-col cols="3" class="d-flex flex-column align-center">
      <v-avatar class="mb-3" color="#F073001A" size="164" @click="showInvitationForm" style="cursor: pointer">
        <v-icon icon="mdi-plus" color="primary" size="48" />
      </v-avatar>
      <div>
        <span class="font-weight-bold">Пригласить</span>
      </div>
      <div>
        <span class="font-weight-bold">близкого</span>
      </div>
    </v-col>
    <v-menu v-model="menu" transition="scale-transition" :target="[menuX, menuY]">
      <v-list>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-account-outline" />
          </template>
          <v-list-item-title v-text="'Перейти в профиль'"></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-message-processing-outline" />
          </template>
          <v-list-item-title v-text="'Написать сообщение'"></v-list-item-title>
        </v-list-item>
        <v-list-item @click="showDeleteForm">
          <template v-slot:prepend>
            <v-icon icon="mdi-trash-can-outline" />
          </template>
          <v-list-item-title v-text="'Удалить'"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <BaseModal v-model="invitationFormShow" title="Пригласите близкого в свой круг семьи" @close="closeInvitationForm">
      <FamilyInvitationForm />
      <template #actions>
        <v-row class="ma-0">
          <v-col cols="12">
            <BaseButton variant="flat" block @click="closeInvitationForm">Зарегистрировать</BaseButton>
          </v-col>
        </v-row>
      </template>
    </BaseModal>

    <BaseModal v-model="deleteFormShow" title="Удаление близкого из круга семьи" @close="closeDeleteForm">
      <FamilyDeleteForm />
      <template #actions>
        <v-row class="ma-0">
          <v-col cols="6">
            <BaseButton variant="outlined" block @click="closeDeleteForm">Отменить</BaseButton>
          </v-col>
          <v-col cols="6">
            <BaseButton variant="flat" block @click="closeDeleteForm">Удалить</BaseButton>
          </v-col>
        </v-row>
      </template>
    </BaseModal>
  </v-row>
</template>

<style scoped></style>