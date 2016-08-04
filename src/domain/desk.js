import Card, {CardStatus} from './card';

export default class {
    constructor(cardsCount, shuffler) {
        this._cards = [];
        for(let num = 1; num <= cardsCount / 2; num++) {
            this._cards.push(new Card(num));
            this._cards.push(new Card(num));
        }
        shuffler(this._cards);
    }
    get cards() { return this._cards; }
    get openedCards() {
        return this.cards.filter((card) => card.status === CardStatus.OPENED);
    }
    get resolvedCards() {
        return this.cards.filter((card) => card.status === CardStatus.RESOLVED);
    }
}