import Card from './card';
import {CardStatus} from './card';

export default class {
    constructor($timeout, dimension) {
        this.$timeout = $timeout;
        this.dimension = dimension;
        this.cards = this.createCards(this.dimension);
    }
    get openedCards() {
        return this.cards.filter((card) => card.status === CardStatus.OPENED);
    }
    get resolvedCards() {
        return this.cards.filter((card) => card.status === CardStatus.RESOLVED);
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
}