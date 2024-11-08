<script setup lang="ts">

let appendCardFormShow = ref<boolean>(false);

let debitCards = ref([{
  number: '•••• 3210',
  expiration_date: '03/28'
}]);

const tariffs = ref([
  {
    title: 'Бесплатный тариф',
    description: 'Возможность новым пользователям попробовать сервис и убедиться, что забота о семье — это легко.',
    benefits: [
      'Семейный чат',
      'Заказ продуктов для ваших близких',
      'Книга семейных рецептов',
      'Заказ медикаментов у партнеров G&G'
    ],
    price: 0,
    is_active: true
  },
  {
    title: 'Платный тариф',
    description: 'Расширенная версия — настоящее управление жизнью семьи и безграничные варианты заботы.',
    benefits: [
      'Все возможности бесплатного тарифа',
      'Возможность добавить несколько членов семьи',
      'Семейное древо — визуализируйте историю своей семьи',
      'Лента рецептов',
      'Калькулятор здоровья для семьи',
      'Многие другие опции'
    ],
    price: 299,
    is_active: false
  }
]);

const appendCard = () => {
  closeForm();

  if (debitCards.value.length > 1) {
    return
  }

  debitCards.value.push({
    number: '•••• 3210',
    expiration_date: '03/28'
  })
};

const showForm = () => {
  appendCardFormShow.value = true
};

const closeForm = () => {
  appendCardFormShow.value = false
};
</script>

<template>
  <h2>Способы оплаты</h2>
  <p class="mb-7">Выберите карту, с которой будут списываться деньги за подписку</p>
  <div class="d-flex ga-7 mb-13">
    <PaymentCard v-for="card in debitCards" :number="card.number" :expiration-date="card.expiration_date" />
    <PaymentCardAppend @click="showForm" />
  </div>

  <div>
    <h2 class="mb-7">Тарифы</h2>
    <v-row>
      <v-col cols="12" md="6">
        <PaymentTariffCard :tariff-data="tariffs[0]" />
      </v-col>
      <v-col cols="12" md="6">
        <PaymentTariffCard :tariff-data="tariffs[1]" />
      </v-col>
    </v-row>
  </div>

  <BaseModal v-model="appendCardFormShow" title="Добавить карту" @close="closeForm">
    <PaymentAppendForm />
    <template #actions>
      <v-row class="ma-0">
        <v-col cols="6">
          <BaseButton variant="outlined" block @click="closeForm">Отменить</BaseButton>
        </v-col>
        <v-col cols="6">
          <BaseButton variant="flat" block @click="appendCard">Сохранить</BaseButton>
        </v-col>
      </v-row>
    </template>
  </BaseModal>

</template>

<style scoped></style>