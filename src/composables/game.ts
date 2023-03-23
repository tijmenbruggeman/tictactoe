import { ref } from "vue";

export function startGame() {
    gamestate.value = 'clickable';
    setTimeout(() => {
        if (gamestate.value === 'lost') return;
        gamestate.value = 'clickclickclick';
        start.value = Date.now();
    }, randomSeconds(1, 5));
}

function randomSeconds(minSec: number, maxSec: number) {
    return Math.floor(Math.random() * (maxSec - minSec + 1) + minSec) * 1000;
}

export function resetGame() {
    gamestate.value = 'start';
    reactionTime.value = 0;
}

export function onClick() {
    if (gamestate.value === 'start' || gamestate.value === 'result') {
        startGame();
        return;
    }
    if (gamestate.value === 'clickclickclick') {
        end.value = Date.now();
        reactionTime.value = end.value - start.value;
        gamestate.value = 'result';
    }
    
    if (gamestate.value === 'clickable') {
        gamestate.value = 'lost';
    }
}

type GAMESTATES = 'start' | 'clickable' | 'clickclickclick' | 'lost' | 'result';
export const reactionTime = ref(0);
export const start = ref();
export const end = ref();
export const gamestate = ref<GAMESTATES>('start');