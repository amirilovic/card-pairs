import Card from './card';
import {CardStatus} from './card';

describe('Card', () => {
  it('should change status to reolved', () => {
    let card = new Card(1);
    card.resolve();
    expect(card.status).toBe(CardStatus.RESOLVED);
  });
  it('should change status to opened', () => {
    let card = new Card(1);
    card.open();
    expect(card.status).toBe(CardStatus.OPENED);
  });
  it('should change status to closed', () => {
    let card = new Card(1);
    card.close();
    expect(card.status).toBe(CardStatus.CLOSED);
  });
});