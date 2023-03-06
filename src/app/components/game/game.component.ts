import { Component } from '@angular/core';

export type players = 'X' | 'O';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent {
    turnsCount = 0;
    isGameGoOn = true;
    winner = '';

    elementsCount = Array(9).fill('');

    turn: players = 'X';

    private history = {
        X: [] as number[],
        O: [] as number[],
    };

    private winningCombinations = [
        // horizontal combinations
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // vertical combinations
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // diagonal combinations
        [0, 4, 8],
        [2, 4, 6],
    ];

    chooseElem(index: number) {
        if (this.elementsCount[index] || !this.isGameGoOn) return;
        this.turnsCount = this.turnsCount + 1;

        this.history[this.turn].push(index);
        this.elementsCount[index] = this.turn;

        for (const combination of this.winningCombinations) {
            if (
                combination.every((cell) =>
                    this.history[this.turn].includes(cell)
                )
            ) {
                console.log(`${this.turn} wins!`);
                this.isGameGoOn = false;
                this.winner = this.turn;
            }
        }

        if (this.turn === 'X') {
            this.turn = 'O';
        } else {
            this.turn = 'X';
        }

        console.log(this.turnsCount);
        console.log(this.elementsCount.length);

        if (this.turnsCount === this.elementsCount.length) {
            this.isGameGoOn = false;
        }
    }

    tryAgain() {
        this.turnsCount = 0;
        this.isGameGoOn = true;
        this.winner = '';

        this.elementsCount = Array(9).fill('');

        this.turn = 'X';

        this.history = {
            X: [],
            O: [],
        };
    }
}
