import Desk from './desk';
import Table from './table';
import {CardStatus} from './card';

describe('Table', () => {
  it('should 2 rows for 4 cards', () => {
    const desk = new Desk(4, () => {});
    const table = new Table(2, desk);
    expect(table.rows.length).toBe(2);
  });
  it('should not return attempt if 1 card is flipped', () => {
    const desk = new Desk(4, () => {});
    const table = new Table(2, desk);
    const card = table.rows[0][0];
    const flipResult = table.flip(card);
    expect(flipResult.attempt).toBe(false);
  });
  it('should return missed attempt if 2 different cards are flipped', () => {
    const desk = new Desk(4, () => {});
    const table = new Table(2, desk);
    const card1 = table.rows[0][0];
    const card2 = table.rows[1][0];
    table.flip(card1);
    const flipResult = table.flip(card2);
    expect(flipResult.attempt).toBe(true);
    expect(flipResult.missed).toBe(true);
  });
  it('should return resolved attempt if same cards are flipped', () => {
    const desk = new Desk(4, () => {});
    const table = new Table(2, desk);
    const card1 = table.rows[0][0];
    const card2 = table.rows[0][1];
    table.flip(card1);
    const flipResult = table.flip(card2);
    expect(flipResult.missed).toBe(false);
  });
  it('should return finish flag if last pair is resolved', () => {
    const desk = new Desk(4, () => {});
    const table = new Table(2, desk);
    const card1 = table.rows[0][0];
    const card2 = table.rows[0][1];
    const card3 = table.rows[1][0];
    const card4 = table.rows[1][1];
    table.flip(card1);
    table.flip(card2);
    table.flip(card3);
    const flipResult = table.flip(card4);
    expect(flipResult.finish).toBe(true);
  });
});