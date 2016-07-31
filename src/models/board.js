import Card from './card';

export default class {
    constructor(dimension) {
        this.dimension = dimension;
        this.cards = this.createCards(this.dimension);
    }
    createCards(dimension) {
        const cards = [];
        for(let num = 1; num <= (dimension * dimension) / 2; num++) {
            cards.push(new Card(num));
            cards.push(new Card(num));
        }
        return cards;
    }
}