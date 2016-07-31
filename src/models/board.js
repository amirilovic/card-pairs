import Card from './card';

export default class {
    constructor($timeout, dimension) {
        this.$timeout = $timeout;
        this.dimension = dimension;
        this.cards = this.createCards(this.dimension);
    }
    get openedCards() {
        return this.cards.filter((card) => card.status === 'opened');
    }
    get resolvedCards() {
        return this.cards.filter((card) => card.status === 'resolved');
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
        if(card.status === 'resolved') return;
        if(card.status === 'closed' && this.openedCards.length < 2) {
            card.status = 'opened';
            if(this.openedCards.length === 2) {
                if(this.openedCards[0].label === this.openedCards[1].label) {
                    this.openedCards.forEach((card) => card.status = 'resolved');
                } else {
                    this.$timeout(() => {
                        this.openedCards.forEach((card) => card.status = 'closed');
                    }, 1000);
                }
            }
        }
    }
}