import { Results } from "./Results";

export class Marathon implements Results {
    winner: string;
    date: Date;
    runtimeSeconds: number;
    constructor(winner: string, date: Date, runtimeSeconds: number) { 
        this.winner = winner;
        this.date = date;
        this.runtimeSeconds = runtimeSeconds;
    }

    getWinner(): string {
        return this.winner;
    }
    getFormatedTIme() : string { 
        let minute = Math.floor(this.runtimeSeconds / 60);
        let sec = this.runtimeSeconds - minute * 60;
        return minute + " min " + sec + " s";
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
        return "Marathon: " + this.getFormatedTIme()
    } 

}
