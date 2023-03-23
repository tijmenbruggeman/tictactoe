import { describe, test } from 'vitest';
import { onClick, startGame } from "./game";

describe('game', () => {
    test('when I click the button and the game hasn`t started, startGame() is called', () => {
        onClick();
        expect(startGame).toBeCalled()
    })
});