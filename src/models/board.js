import Card from './card';

export default class {
    constructor($timeout, dimension) {
        this.$timeout = $timeout;
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
        if(index === -1 && this.openCards.length < 2) {
            this.openCards.push(card);
            if(this.openCards.length === 2) {
                this.$timeout(() => this.openCards = [], 1000);
            }
        }
        if(index !== -1) {
            this.openCards.splice(index, 1);
        }
    }
    isCardOpen(card) {
        return this.openCards.indexOf(card) !== -1;
    }
}