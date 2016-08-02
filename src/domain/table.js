import {CardStatus} from './card';

export default class {
    constructor($timeout, dimension, desk) {
        this._$timeout = $timeout;
        this._desk = desk;
        this.rows = [];
        for(let i = 0; i < dimension; i++) {
            const row = [];
            for(let y = 0; y < dimension; y++) {
                const card = desk.cards[i * dimension + y];
                row.push(card);
            }
            this.rows.push(row);
        }
    }
    flip(card) {
        let validAttempt = 0;
        if(card.status === CardStatus.CLOSED && this._desk.openedCards.length < 2) {
            card.open();
            if(this._desk.openedCards.length === 2) {
                validAttempt = 1;
                if(this._desk.openedCards[0].label === this._desk.openedCards[1].label) {
                    this._desk.openedCards.forEach((card) => card.resolve());
                } else {
                    this._$timeout(() => {
                        this._desk.openedCards.forEach((card) => card.close());
                    }, 1000);
                }
            }
        }
        return validAttempt;
    }
}