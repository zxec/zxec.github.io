<script setup lang="ts">
let deleteFormShow = ref(false)
let editPhoneFormShow = ref(false)
let editPasswordFormShow = ref(false)

const showDeleteForm = () => {
  deleteFormShow.value = true
};

const closeDeleteForm = () => {
  deleteFormShow.value = false
};

const showEditPhoneForm = () => {
  editPhoneFormShow.value = true
};

const closeEditPhoneForm = () => {
  editPhoneFormShow.value = false
};

const showEditPasswordForm = () => {
  editPasswordFormShow.value = true
};

const closeEditPasswordForm = () => {
  editPasswordFormShow.value = false
};
</script>

<template>
    <v-form>
      <h2>Способы входа</h2>
      <p class="mb-7">В сервис можно войти несколькими способами, выберите наиболее предпочтительный или сразу несколько на выбор</p>
      <v-row class="mb-14">
        <v-col cols="6">
          <v-card class="pa-4" style="background-color: #F5F5F5;">
            <v-card-text style="font-size: 18px !important;">
              <v-row class="justify-space-between">
                <div class="font-weight-bold">
                  СМС на номер
                </div>
                <BaseSwitch />
              </v-row>
              <v-row class="mb-13">
                <p style="color: #41414199;">Потребуется ввести одноразовый код, он придёт по СМС</p>
              </v-row>
              <v-row class="justify-space-between">
                <div class="font-weight-bold">
                  +7 921 930-32-12
                </div>
                <v-btn class="font-weight-bold" variant="text" @click="editPhoneFormShow = true">
                  Изменить номер
                </v-btn>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-4" style="background-color: #F5F5F5;">
            <v-card-text style="font-size: 18px !important;">
              <v-row class="justify-space-between">
                <div class="font-weight-bold">
                  По логину и паролю
                </div>
                <BaseSwitch />
              </v-row>
              <v-row class="mb-13">
                <p style="color: #41414199;">Для входа необходимо ввести ваш логин @alex92 и пароль</p>
              </v-row>
              <v-row class="justify-space-between">
                <div class="font-weight-bold">
                  +7 921 930-32-12
                </div>
                <v-btn class="font-weight-bold" variant="text" @click="editPasswordFormShow = true">
                  Изменить пароль
                </v-btn>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <h2>Уведомления</h2>
      <p class="mb-7">Здесь можно выбрать предпочтительный(е) способ(ы) получения уведомлений, а также их категории</p>
      <v-row class="mb-13">
        <BaseCheckbox class="mr-6" label="СМС" />
        <BaseCheckbox label="Электронная почта" />
      </v-row>

      <h2 class="mb-4">Категории уведомлений</h2>
      <v-row class="mx-0 align-center">
        <BaseSwitch />
        <v-col>
          <div>Звонки и сообщения</div>
          <div style="color: #41414199;">Получать уведомления о звонках и новых сообщениях</div>
        </v-col>
      </v-row>
      <v-row class="mx-0 align-center">
        <BaseSwitch />
        <v-col>
          <div>Напоминания о приеме лекарств</div>
          <div style="color: #41414199;">Получать уведомления, напоминающие о необходимости принять лекарство</div>
        </v-col>
      </v-row>
      <v-row class="mb-13 mx-0 align-center">
        <BaseSwitch />
        <v-col>
          <div>Доставка</div>
          <div style="color: #41414199;">Получать уведомления о статусе доставки</div>
        </v-col>
      </v-row>

    <h2>Настройки языка и интерфейса</h2>
    <p class="mb-7">Настройте интерфейс сервиса под себя</p>
    <v-row class="mb-7">
      <v-col cols="6">
        <BaseSelect label="Язык интерфейса" :items="['Русский', 'Не Русский']" />
      </v-col>
      <v-col cols="6">
        <BaseSelect label="Размер шрифта" :items="['20px', '18px', '16px']" />
      </v-col>
    </v-row>

    <h2 class="mb-6">Действия с аккаунтом</h2>
    <v-row class="mx-0 mb-15 align-center">
      <v-btn variant="plain" icon="mdi-trash-can-outline" color="error" @click="showDeleteForm" />
      <v-col>
        <div style="color: #E53E3E;">Удалить аккаунт</div>
        <div>Вы можете полностью удалить аккаунт и данные в нём.</div>
      </v-col>
    </v-row>

    <BaseModal v-model="deleteFormShow" title="Удаление аккаунта" @close="closeDeleteForm">
      <SettingsDeleteForm />
      <template #actions>
        <v-row class="ma-0">
          <v-col cols="6">
            <BaseButton variant="outlined" block @click="closeDeleteForm">Отменить</BaseButton>
          </v-col>
          <v-col cols="6">
            <BaseButton variant="flat" block @click="closeDeleteForm">Удалить аккаунт</BaseButton>
          </v-col>
        </v-row>
      </template>
    </BaseModal>

    <BaseModal v-model="editPhoneFormShow" title="Изменение номера" @close="closeEditPhoneForm">
      <SettingsEditPhoneForm />
      <template #actions>
        <v-row class="ma-0">
          <v-col cols="6">
            <BaseButton variant="outlined" block @click="closeEditPhoneForm">Отменить</BaseButton>
          </v-col>
          <v-col cols="6">
            <BaseButton variant="flat" block @click="closeEditPhoneForm">Сохранить</BaseButton>
          </v-col>
        </v-row>
      </template>
    </BaseModal>

    <BaseModal v-model="editPasswordFormShow" title="Изменение пароля" @close="closeEditPasswordForm">
      <SettingsEditPasswordForm />
      <template #actions>
        <v-row class="ma-0">
          <v-col cols="6">
            <BaseButton variant="outlined" block @click="closeEditPasswordForm">Отменить</BaseButton>
          </v-col>
          <v-col cols="6">
            <BaseButton variant="flat" block @click="closeEditPasswordForm">Сохранить</BaseButton>
          </v-col>
        </v-row>
      </template>
    </BaseModal>
  </v-form>
</template>

<style scoped>
</style>