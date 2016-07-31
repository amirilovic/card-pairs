import Card from './card';

export default class {
    constructor($timeout, dimension) {
        this.$timeout = $timeout;
        this.openedCards = [];
        this.resolvedCards = [];
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
        if(this.resolvedCards.indexOf(card) !== -1) return;
        const indexOpened = this.openedCards.indexOf(card);
        if(indexOpened === -1 && this.openedCards.length < 2) {
            this.openedCards.push(card);
            if(this.openedCards.length === 2) {
                if(this.openedCards[0].label === this.openedCards[1].label) {
                    this.resolvedCards.push(this.openedCards[0]);
                    this.resolvedCards.push(this.openedCards[1]);
                    this.openedCards = [];
                } else {
                    this.$timeout(() => this.openedCards = [], 1000);
                }
            }
        }
        if(indexOpened !== -1) {
            this.openedCards.splice(indexOpened, 1);
        }
    }
    isCardOpen(card) {
        return this.openedCards.indexOf(card) !== -1;
    }
    isCardResolved(card) {
        return this.resolvedCards.indexOf(card) !== -1;
    }
}