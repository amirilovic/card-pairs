import Desk from './desk';

describe('Desk', () => {
  it('should create 4 cards for 4 cardsCount parameter', () => {
    let desk = new Desk(4, () => {});
    expect(desk.cards.length).toBe(4);
  });
  it('should create 0 opened cards for 4 cardsCount parameter', () => {
    let desk = new Desk(4, () => {});
    expect(desk.openedCards.length).toBe(0);
  });
});