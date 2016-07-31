export default class {
    constructor(dimension, cards) {
        this.rows = [];
        for(let i = 0; i < dimension; i++) {
            const row = [];
            for(let y = 0; y < dimension; y++) {
                const card = cards[i * dimension + y];
                row.push(card);
            }
            this.rows.push(row);
        }
    }
}