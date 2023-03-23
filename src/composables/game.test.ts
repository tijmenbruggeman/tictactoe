import { describe, test, expect, beforeEach, vi} from 'vitest';
import { gamestate, onClick, startGame } from './game';

vi.mock('./randomSeconds', () => {
    return {
        randomSeconds: () => 2000
    }
});

describe('game', () => {
    beforeEach(() => {
        gamestate.value = 'start';
    });
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

    test('when player has lost, it should remain in that state', async () => {
        startGame();
        await wait(1500);
        onClick();
        expect(gamestate.value).toEqual('lost');
    });
});

function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
