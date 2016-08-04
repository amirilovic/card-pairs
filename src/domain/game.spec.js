import Game from './game';
import {CardStatus} from './card';

describe('Game', () => {
  const timeout = () => {};
  const localStorageService = {};
  const shuffler = () => {};
  it('should have 2 rows if dimension is 4', () => {
    const game = new Game(timeout, localStorageService, shuffler, 2);
    expect(game.rows.length).toBe(2);
  });
  it('shoud flip the card', () => {
    const game = new Game(timeout, localStorageService, shuffler, 2);
    const card = game.rows[0][0];
    game.flip(card);
    expect(card.status).toBe(CardStatus.OPENED);
  });
  it('shoud call timeout if pair is missed', () => {
    const timeoutSpy = jasmine.createSpy('timeout');

    const game = new Game(timeoutSpy, localStorageService, shuffler, 2);
    const card1 = game.rows[0][0];
    const card2 = game.rows[1][0];
    game.flip(card1);
    game.flip(card2);
    
    expect(timeoutSpy).toHaveBeenCalled();
  });
  it('shoud not call timeout if pair is resolved', () => {
    const timeoutSpy = jasmine.createSpy('timeout');

    const game = new Game(timeoutSpy, localStorageService, shuffler, 2);
    const card1 = game.rows[0][0];
    const card2 = game.rows[0][1];
    game.flip(card1);
    game.flip(card2);
    
    expect(timeoutSpy).not.toHaveBeenCalled();
  });
});