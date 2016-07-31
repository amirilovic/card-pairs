import Card from './card';

export default class {
    constructor(dimension) {
        this.openCards = [];
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
    flip(card) {
        const index = this.openCards.indexOf(card);
        if(index > -1) {
            card.open = false;
            this.openCards.splice(index, 1);
        } else {
            card.open = true;
            this.openCards.push(card);
        }
    }
}