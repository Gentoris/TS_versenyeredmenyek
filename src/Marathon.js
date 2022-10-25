"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marathon = void 0;
class Marathon {
    constructor(winner, date, runtimeSeconds) {
        this.winner = winner;
        this.date = date;
        this.runtimeSeconds = runtimeSeconds;
    }
    getWinner() {
        return this.winner;
    }
    getFormatedTIme() {
        let minute = Math.floor(this.runtimeSeconds / 60);
        let sec = this.runtimeSeconds - minute * 60;
        return minute + " min " + sec + " s";
    }
    setWinner(winner) {
        this.winner = winner;
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.setDate = Date;
    }
    result() {
        return "Marathon: " + this.getFormatedTIme();
    }
}
exports.Marathon = Marathon;
