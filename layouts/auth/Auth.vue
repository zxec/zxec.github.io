<template>
    <v-app>
        <v-row no-gutters style="background-color: #FDFDFD;">
            <v-col cols="12" md="6">
                <div class="slot-wrapper">
                    <div class="logo-wrapper">
                        <img class="icon" src="/logo.svg" alt="G&G">
                    </div>
                    <slot></slot>
                </div>
            </v-col>

            <v-col cols="12" md="6">
                <v-img src="/auth-background.png" alt="G&G" height="100vh" cover />
            </v-col>
        </v-row>
    </v-app>
</template>

<style scoped>
.slot-wrapper {
    padding: 72px 96px 0 100px;
    width: 100%;
    box-sizing: border-box;
}

.logo-wrapper {
    margin-bottom: 32px;
}
</style>