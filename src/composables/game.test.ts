import { describe, test, expect, vi } from 'vitest';
import { gamestate, startGame } from './game';

describe('game', () => {
    test('when game hasnt started, gamestate should be "start"', () => {
        expect(gamestate.value).toEqual('start')
    });

    test('when startGame is called, gamestate should be "clickable"', () => {
        startGame();
        expect(gamestate.value).toEqual('clickable')
    });
});