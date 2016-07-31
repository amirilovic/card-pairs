export const CardStatus = {
    OPENED:   Symbol('OPENED'),
    CLOSED:   Symbol('CLOSED'),
    RESOLVED: Symbol('RESOLVED')
};

export default class {
    constructor(label) {
        this._label = label;
        this._status = CardStatus.CLOSED;
    }
    get status() { return this._status; }
    get label() { return this._label; }
    open() {
        this._status = CardStatus.OPENED;
    }
    close() {
        this._status = CardStatus.CLOSED;
    }
    resolve() {
        this._status = CardStatus.RESOLVED;
    }
}