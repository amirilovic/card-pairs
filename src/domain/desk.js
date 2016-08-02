import Card, {CardStatus} from './card';

export default class {
    constructor(pairsNumber) {
        this._cards = [];
        for(let num = 1; num <= pairsNumber; num++) {
            this._cards.push(new Card(num));
            this._cards.push(new Card(num));
        }
    }
    get cards() { return this._cards; }
    get openedCards() {
        return this.cards.filter((card) => card.status === CardStatus.OPENED);
    }
    get resolvedCards() {
        return this.cards.filter((card) => card.status === CardStatus.RESOLVED);
    }
    shuffle() {
        let j, x, i;
        for (i = this._cards.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = this._cards[i - 1];
            this._cards[i - 1] = this._cards[j];
            this._cards[j] = x;
        }
    }
}