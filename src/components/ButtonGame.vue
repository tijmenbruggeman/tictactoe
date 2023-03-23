<script setup lang="ts">
import { gamestate, startGame, onClick, reactionTime } from '../composables/game';
</script>

<template>
    <button @click="onClick">
        <span v-if="gamestate === 'start'">Lets Play</span>
        <span v-if="gamestate === 'clickable'">Get Ready</span>
        <span v-if="gamestate === 'clickclickclick'">CLICKME!!!!</span>
        <span v-if="gamestate === 'lost'">To quick!!</span>
        <span v-if="gamestate === 'result'">{{reactionTime}} ms</span>
    </button>
</template>