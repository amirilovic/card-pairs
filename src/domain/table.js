import {CardStatus} from './card';

export default class {
    constructor($timeout, dimension, cards) {
        this.$timeout = $timeout;
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
        if(card.status === CardStatus.CLOSED && this._openedCards.length < 2) {
            card.open();
            if(this._openedCards.length === 2) {
                validAttempt = 1;
                if(this._openedCards[0].label === this._openedCards[1].label) {
                    this._openedCards.forEach((card) => card.resolve());
                } else {
                    this.$timeout(() => {
                        this._openedCards.forEach((card) => card.close());
                    }, 1000);
                }
            }
        }
        return validAttempt;
    }
    get _openedCards() {
        return this._cards.filter((card) => card.status === CardStatus.OPENED);
    }
}