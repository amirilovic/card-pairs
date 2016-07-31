import Card from './card';
import {CardStatus} from './card';

export default class {
    constructor($timeout, dimension) {
        this.$timeout = $timeout;
        this.dimension = dimension;
        this._cards = this._createCards(this.dimension);
        this._rows = this._createRows(this.dimension, this._cards);
    }
    get cards() { return this._cards; }
    get rows() { return this._rows; }
    get openedCards() {
        return this._cards.filter((card) => card.status === CardStatus.OPENED);
    }
    get resolvedCards() {
        return this._cards.filter((card) => card.status === CardStatus.RESOLVED);
    }
    flip(card) {
        if(card.status === CardStatus.RESOLVED) return;
        if(card.status === CardStatus.CLOSED && this.openedCards.length < 2) {
            card.open();
            if(this.openedCards.length === 2) {
                if(this.openedCards[0].label === this.openedCards[1].label) {
                    this.openedCards.forEach((card) => card.resolve());
                } else {
                    this.$timeout(() => {
                        this.openedCards.forEach((card) => card.close());
                    }, 1000);
                }
            }
        }
    }
    _createCards(dimension) {
        const cards = [];
        for(let num = 1; num <= (dimension * dimension) / 2; num++) {
            cards.push(new Card(num));
            cards.push(new Card(num));
        }
        return cards;
    }
    _createRows(dimension, cards) {
        const rows = [];
        for(let i = 0; i < dimension; i++) {
            const row = [];
            for(let y = 0; y < dimension; y++) {
                const card = cards[i * dimension + y];
                row.push(card);
            }
            rows.push(row);
        }
        return rows;
    }
}