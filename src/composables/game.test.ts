import { describe, test, expect, vi } from 'vitest';
import { gamestate, onClick, startGame } from './game';

describe('game', () => {
    test('when game hasnt started, gamestate should be "start"', () => {
        expect(gamestate.value).toEqual('start')
    });

    test('when startGame is called, gamestate should be "clickable"', () => {
        startGame();
        expect(gamestate.value).toEqual('clickable')
    });

    test('when player clicks to early, gamestate should be "lost"', async () => {
        startGame();
        await wait(1000);
        onClick();
        expect(gamestate.value).toEqual('lost');
    });
});

function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
