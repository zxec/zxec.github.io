<script>
export default {
    data() {
        return {
            code: ["", "", "", "", "", ""],
            timer: 30,
            intervalId: null,
        };
    },
    computed: {
        formattedTime() {
            const minutes = Math.floor(this.timer / 60);
            const seconds = this.timer % 60;
            return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        },
    },
    methods: {
        moveFocus(index) {
            if (this.code[index].length === 1 && index < 5) {
                this.$refs[`input${index + 1}`][0].focus();
            } else if (this.code[index].length === 0 && index > 0) {
                this.$refs[`input${index - 1}`][0].focus();
            }
        },
        startTimer() {
            this.intervalId = setInterval(() => {
                if (this.timer > 0) {
                    this.timer--;
                } else {
                    clearInterval(this.intervalId);
                }
            }, 1000);
        },
        resetTimer() {
            this.timer = 30;
            this.startTimer();
        },
    },
    mounted() {
        this.startTimer();
    },
    beforeUnmount() {
        clearInterval(this.intervalId);
    },
};
</script>

<template>
    <div class="sms-input-container">
        <div class="code-inputs">
            <input v-for="(digit, index) in code" :key="index" v-model="code[index]" maxLength="1"
                :class="digit ? 'digit-input active' : 'digit-input'" hide-details outlined solo
                @input="moveFocus(index)" :ref="'input' + index" type="tel" />
        </div>
        <div class="timer">
            <span v-if="timer">Отправить код повторно через {{ formattedTime }}</span>
            <v-btn v-else @click="resetTimer" variant="text" color="primary" density="compact">Отправить код</v-btn>
        </div>
    </div>
</template>

<style scoped>
.sms-input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.code-inputs {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.digit-input {
    width: 60px;
    height: auto;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    line-height: 38px;
    color: #F07300;
    border-bottom: 4px solid #41414133;
}

.digit-input:focus {
    outline: none;
    border-bottom: 4px solid #F07300;
}

.active {
    border-bottom: 4px solid #F07300;
}

.timer {
    margin-top: 32px;
    font-size: 18px !important;
    font-weight: 700;
    color: #41414166;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}
</style>