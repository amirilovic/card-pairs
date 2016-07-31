import Card, {CardStatus} from './card';

export default class {
    constructor(dimension) {
        this.dimension = dimension;
        this._cards = this._createCards(this.dimension);
        this._shuffle(this._cards);
    }
    get cards() { return this._cards; }
    get openedCards() {
        return this._cards.filter((card) => card.status === CardStatus.OPENED);
    }
    get resolvedCards() {
        return this._cards.filter((card) => card.status === CardStatus.RESOLVED);
    }
    _createCards(dimension) {
        const cards = [];
        for(let num = 1; num <= (dimension * dimension) / 2; num++) {
            cards.push(new Card(num));
            cards.push(new Card(num));
        }
        return cards;
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