import {CardStatus} from './card';

export default class {
    constructor($timeout, dimension, cards) {
        this._$timeout = $timeout;
        this._cards = cards;
        this.rows = [];
        for(let i = 0; i < dimension; i++) {
            const row = [];
            for(let y = 0; y < dimension; y++) {
                const card = cards[i * dimension + y];
                row.push(card);
            }
            this.rows.push(row);
        }
    }
    flip(card) {
        let validAttempt = 0;
        if(card.status === CardStatus.CLOSED && this.openedCards.length < 2) {
            card.open();
            if(this.openedCards.length === 2) {
                validAttempt = 1;
                if(this.openedCards[0].label === this.openedCards[1].label) {
                    this.openedCards.forEach((card) => card.resolve());
                } else {
                    this._$timeout(() => {
                        this.openedCards.forEach((card) => card.close());
                    }, 1000);
                }
            }
        }
        return validAttempt;
    }
    get openedCards() {
        return this._cards.filter((card) => card.status === CardStatus.OPENED);
    }
    get resolvedCards() {
        return this._cards.filter((card) => card.status === CardStatus.RESOLVED);
    }
}