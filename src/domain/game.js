import Desk from './desk';
import Table from './table';
import {CardStatus} from './card';

export default class {
    constructor($timeout, dimension) {
        this._attemptsCount = 0;
        this._desk = new Desk((dimension * dimension) / 2);
        this._table = new Table($timeout, dimension, this._desk.cards);
    }
    get attemptsCount() { return this._attemptsCount; }
    get rows() { return this._table.rows; }
    flip(card) {
        this._attemptsCount += this._table.flip(card);
    }
}