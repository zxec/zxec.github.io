<script setup lang="ts">
import { vMaska } from "maska/vue"
let visible = ref(false)
</script>

<template>
    <v-form>
        <v-row class="ma-0 font-weight-bold">
            Ссылка-приглашение для близких
        </v-row>
        <v-row class="ma-0 mb-3">
            Отправьте своему близкому ссылку-приглашение, перейдя по которой он сможет зарегистрироваться
            самостоятельно.
        </v-row>
        <v-row class="ma-0">
            <BaseInput class="mr-3" />
            <BaseButton variant="outlined">Копировать</BaseButton>
        </v-row>
        <hr class="mb-5" style="height: 2px;">
        <v-row class="ma-0 font-weight-bold">
            Или зарегистрируйте близкого за него
        </v-row>
        <v-row class="ma-0">
            Вы также можете заполнить личные данные близкого за него.
            Ему необходимо будет только перейти по ссылке в SMS
            и начать пользоваться всеми возможностями сервиса.
        </v-row>
        <v-row class="mb-5 mx-0">
            <BaseInput label="Имя" />
        </v-row>
        <v-row class="mb-5 mx-0">
            <BaseInput label="Логин" />
        </v-row>
        <v-row class="mb-5 mx-0">
            <BaseInput v-maska="'+7 (###) ###-##-##'" placeholder="+7 (___) ___-__-__" label="Телефон" />
        </v-row>
        <v-row class="mb-5 mx-0">
            <BaseInput :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                @click:append-inner="visible = !visible" label="Пароль" />
        </v-row>
        <v-row class="mb-5 mx-0">
            <BaseSelect label="Ваша роль" />
        </v-row>
    </v-form>
</template>

<style scoped></style>