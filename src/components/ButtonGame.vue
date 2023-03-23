<script setup lang="ts">
import { gamestate, startGame, onClick, reactionTime, resetGame } from '../composables/game';
</script>

<template>
    <button @click="onClick"  class="button" :class="gamestate">
        <span v-if="gamestate === 'start'">Lets Play</span>
        <span v-if="gamestate === 'clickable'">Get Ready</span>
        <span v-if="gamestate === 'clickclickclick'">CLICKME!!!!</span>
        <span v-if="gamestate === 'lost'">To quick!!</span>
        <span v-if="gamestate === 'result'">{{reactionTime}} ms</span>
    </button>
    <button v-if="gamestate === 'result' || gamestate === 'lost'" @click="resetGame">Reset</button>
</template>

<style>
.button {
    color: #fff;
}
.start {
    background: blue;
}
.clickable {
    background: orange;
}
.clickclickclick {
    background: yellow;
    color: black;
}
.lost {
    background: red;
}
.result {
    background: green;
}
</style>