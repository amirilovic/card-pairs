import Board from './board';
import {CardStatus} from './card';

export default class {
    constructor($timeout, dimension) {
        this.$timeout = $timeout;
        this._attemptsCount = 0;
        this._board = new Board(dimension);
        this._rows = this._createRows(dimension, this._board.cards);
    }
    get attemptsCount() { return this._attemptsCount; }
    get rows() { return this._rows; }
    flip(card) {
        if(card.status === CardStatus.CLOSED && this._board.openedCards.length < 2) {
            card.open();
            if(this._board.openedCards.length === 2) {
                this._attemptsCount++;
                if(this._board.openedCards[0].label === this._board.openedCards[1].label) {
                    this._board.openedCards.forEach((card) => card.resolve());
                } else {
                    this.$timeout(() => {
                        this._board.openedCards.forEach((card) => card.close());
                    }, 1000);
                }
            }
        }
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
}