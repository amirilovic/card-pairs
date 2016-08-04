import {CardStatus} from './card';

export default class {
    constructor(dimension, desk) {
        this._desk = desk;
        this._rows = [];
        for(let i = 0; i < dimension; i++) {
            const row = [];
            for(let y = 0; y < dimension; y++) {
                const card = desk.cards[i * dimension + y];
                row.push(card);
            }
            this._rows.push(row);
        }
    }
    get rows() { return this._rows; }
    flip(card) {
        let attempt = false;
        let missed = false;
        if(card.status === CardStatus.CLOSED && this._desk.openedCards.length < 2) {
            card.open();
            if(this._desk.openedCards.length === 2) {
                attempt = true;
                if(this._desk.openedCards[0].label === this._desk.openedCards[1].label) {
                    this._desk.openedCards.forEach((card) => card.resolve());
                } else {
                    missed = true;
                }
            }
        }
        return {
            attempt: attempt,
            missed:  missed,
            finish:  this._desk.resolvedCards.length === this._desk.cards.length
        };
    }
}