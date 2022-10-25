import { Results } from "./Results";

export class Football implements Results {
    winner: string;
    date: Date;
    #hazaiakSzama : number;
    #vendegekSzama : number;
    
    constructor(winner: string, date: Date, hazaiakSzama : number, vendegekSzama : number) {
        this.winner = winner;
        this.date = date;
        this.#hazaiakSzama = hazaiakSzama;
        this.#vendegekSzama = vendegekSzama;
    }
    getWinner(): string {
        return this.winner;
    }
    setWinner(winner: string): void {
        this.winner = winner;
    }
    getDate(): Date {
       return this.date;
    }
    setDate(date: Date): void {
        this.setDate = Date;
    }

    result(): string {
        return "Football match: " + this.#hazaiakSzama + "-" + this.#vendegekSzama
    }

}