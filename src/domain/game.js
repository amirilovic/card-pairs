import Desk from './desk';
import Table from './table';
import {CardStatus} from './card';

export default class {
    constructor($timeout, localStorageService, dimension) {
        this._$timeout = $timeout;
        this._localStorageService = localStorageService;
        this._attemptsCount = 0;
        this._desk = new Desk(dimension * dimension);
        this._desk .shuffle();
        this._table = new Table(dimension, this._desk);
    }
    get attemptsCount() { return this._attemptsCount; }
    get rows() { return this._table.rows; }
    flip(card) {
        const {attempt, missed, finish} = this._table.flip(card);
        if(attempt) {
            this._attemptsCount++;
        }
        if(missed) {
            this._$timeout(() => {
                this._desk.openedCards.forEach((card) => card.close());
            }, 1000);
        }
        if(finish) {
            const ranking = this._localStorageService.get('ranking') || [];
            ranking.push({
                name:  prompt('name?'),
                score: this._attemptsCount
            });
            this._localStorageService.set('ranking', ranking);
            const rankingList =
                ranking.sort((rank1, rank2) => rank1.score > rank2.score)
                       .map((rank) => `${rank.score} - ${rank.name}`);
            alert(rankingList.join('\n'));
        }
    }
}