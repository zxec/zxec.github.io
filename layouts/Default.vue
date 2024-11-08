<template>
  <v-app>
    <v-app-bar class="nav-bar" height="82" elevation="0">
      <template v-slot:prepend>
        <img class="icon" src="/logo.svg" alt="G&G" width="100" height="42">
      </template>
      <v-row class="justify-center">
        <v-col cols="auto">Питание</v-col>
        <v-col cols="auto">Здоровье</v-col>
        <v-col cols="auto">Семья</v-col>
      </v-row>
      <template v-slot:append>
        <div class="d-flex align-center">
          <v-btn icon="mdi-bell-outline" />
          <div class="d-flex ml-5 mr-7" style="height: 36px;">
            <v-divider length="36" thickness="2" vertical />
          </div>
          <v-avatar class="mr-5" size="36" color="surface-variant" image="/ryan-gosling.jpg" />
          <div>
            Александр
            <v-icon>mdi-chevron-down</v-icon>
          </div>
        </div>
      </template>
    </v-app-bar>

    <v-navigation-drawer floating elevation="0" width="400"
      style="padding-left: 94px; height: 360px; margin-top: 60px;">
      <h2>Личный кабинет</h2>
      <v-list width="240">
        <v-list-item class="rounded-lg" :key="1" to="/profile">
          <template v-slot:prepend>
            <v-icon icon="mdi-account"></v-icon>
          </template>
          <v-list-item-title>Профиль</v-list-item-title>
        </v-list-item>
        <v-list-item class="rounded-lg" :key="2" to="/family">
          <template v-slot:prepend>
            <v-icon icon="mdi-account-group"></v-icon>
          </template>
          <v-list-item-title>Круг семьи</v-list-item-title>
        </v-list-item>
        <v-list-item class="rounded-lg" :key="3" to="/settings">
          <template v-slot:prepend>
            <v-icon icon="mdi-cog"></v-icon>
          </template>
          <v-list-item-title>Настройки</v-list-item-title>
        </v-list-item>
        <v-list-item class="rounded-lg" :key="4" to="/payment">
          <template v-slot:prepend>
            <v-icon icon="mdi-shape-circle-plus"></v-icon>
          </template>
          <v-list-item-title>Тарифы</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Основной контент -->
    <v-main class="content-wrapper">
      <slot />
    </v-main>

    <!-- Футер -->
    <v-footer class="footer justify-space-between" height="434">
      <div class="footer-item">
        <img class="icon" src="/logo.svg" alt="G&G" width="100" height="42">
        <span>© G&G, 2024</span>
      </div>
      <div class="footer-item">
        <div class="footer-item__list">
          <span>Питание</span>
          <span>Здоровье</span>
          <span>Семья</span>
          <span>Личный кабинет</span>
        </div>
        <div class="footer-item__list">
          <span>Обработка персональных данных</span>
          <span>Политика конфиденциальности</span>
        </div>
      </div>
      <div class="footer-item">
        <div class="footer-item__list">
          <span>Служба поддержки</span>
          <div class="d-flex">
            <v-icon icon="fi-ru" class="me-3"></v-icon>
            <span>Русский язык</span>
            <v-icon>mdi-chevron-down</v-icon>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column ga-7">
        <div class="footer-item__list">
          <span>г. Москва, ул. Иванова, 32</span>
          <span>+7 989 764-49-59</span>
          <span>+7 952 870-62-76</span>
        </div>
        <div class="d-flex ga-2">
          <img class="icon" src="/icons/telegram.svg" alt="Telegram" width="36" height="36">
          <img class="icon" src="/icons/vk.svg" alt="VK" width="36" height="36">
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped>
.nav-bar {
  padding-left: 94px;
  padding-right: 94px;
  background-color: #F7F7F7;
}

.content-wrapper {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  min-height: calc(100vh - 494px);
  /* Учитывая высоту футера */
  padding-bottom: 20px;
  box-sizing: border-box;
  margin-top: 60px;
  margin-right: 94px;
  margin-left: 30px;
}

.footer {
  background-color: #F7F7F7;
  padding: 80px 88px 80px 100px;
  display: flex;
  align-items: start;
  gap: 28px;
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer-item {
  min-width: 292px;
  min-height: 274px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer-item__list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.v-list-item--active {
  color: #F07300;
  background-color: #F073001A;
}

.v-list-item--active>.v-list-item__overlay {
  background-color: #F073001A;
}
</style>
<script setup></script>