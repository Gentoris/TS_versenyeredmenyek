"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Football_1 = require("./Football");
const Marathon_1 = require("./Marathon");
const Calvinball_1 = require("./Calvinball");

let maiDatum = new Date();
let f1 = new Football_1.Football("Korea", maiDatum, 1, 4)
let f2 = new Football_1.Football("Japán", maiDatum, 15, 5)
let m1 = new Marathon_1.Marathon("Chit-Chat", maiDatum , 250)
let m2 = new Marathon_1.Marathon("Rambó", maiDatum, 2000)
let c1 = new Calvinball_1.Calvinball("Calvin", new Date("2000"))
let c2 = new Calvinball_1.Calvinball("Hobbes", maiDatum);
let resultArray = [];

resultArray.push(f1, f2, m1, m2, c1, c2);
resultArray.forEach(e => console.log(e.result()));

console.log(" ");
for (let a of resultArray) {
    if (a instanceof Calvinball_1.Calvinball) {
        if (a.getWinner() == "Calvin") {
            console.log(a.result());
        }
    }
    else {
        console.log(a.result());
    }
}
console.log(" ");

resultArray.sort((a, b) => (a.getDate().getTime()) - b.getDate().getTime());

for (let a of resultArray) {
    console.log(a.getDate());
}
