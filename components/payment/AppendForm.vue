<script setup lang="ts">
import { vMaska } from "maska/vue"
</script>

<template>
  <v-form>
    <v-row class="ma-0 mb-3">
      При добавлении карты будет резерв и мгновенный возврат небольшой суммы.
    </v-row>
    <v-row class="ma-0">
      <BaseInput v-maska="'#### #### #### ####'" placeholder="0000 0000 0000 0000" label="Номер карты">
        <template #append-inner>
          <div class="payment-icons">
            <img class="icon" src="/icons/mir.svg" alt="MIR" width="40">
            <img class="icon" src="/icons/visa.svg" alt="VISA" width="40">
            <img class="icon" src="/icons/mastercard.svg" alt="MASTERCARD" width="40">
          </div>
        </template>
      </BaseInput>
    </v-row>
    <v-row class="ma-0 font-weight-bold">
      <v-col class="pl-0">
        <BaseInput v-maska="'##/##'" placeholder="__/__" label="ММ / ГГ" />
      </v-col>
      <v-col class="pr-0">
        <BaseInput v-maska="'###'" placeholder="___" label="Код CVV" />
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <p class="p-small">
        Платеж будет проведен через сервис ЮKassa. Ваш платеж защищен в соответствии с международными стандартами
        безопасности платежей.
      </p>
    </v-row>
  </v-form>
</template>

<style scoped>
.payment-icons {
  display: flex;
  gap: 14px;

  max-height: 24px;
}
</style>