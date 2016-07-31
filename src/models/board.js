import Card from './card';
import {CardStatus} from './card';

export default class {
    constructor($timeout, dimension) {
        this.$timeout = $timeout;
        this.dimension = dimension;
        this._attemptsCount = 0;
        this._cards = this._createCards(this.dimension);
        this._shuffle(this._cards);
        this._rows = this._createRows(this.dimension, this._cards);
    }
    get attemptsCount() {
        return this._attemptsCount;
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
                this._attemptsCount++;
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
    _shuffle(a) {
        let j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }
}