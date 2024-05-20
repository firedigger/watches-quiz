import { Injectable } from '@angular/core';
import { Watches } from './watches';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    watches: Watches[] = [{ pic: 'assets/watches/watch1.jpg', price: 14.69, brand: 'LIGE', model: '', link: 'https://www.temu.com/fi-en/1pc--mens-watch-luxury-leather-waterproof-sport-quartz-wristwatch-chronograph-military-watch-for-men-g-601099513674164.html' },
    { pic: 'assets/watches/watch2.jpg', price: 9500, brand: 'Rolex', model: 'Datejust 36', link: 'https://www.temu.com/fi-en/1pc--mens-watch-luxury-leather-waterproof-sport-quartz-wristwatch-chronograph-military-watch-for-men-g-601099513674164.html' }
    ];

    private guesses: number[] = [];

    getWatches() {
        return this.watches;
    }

    recordGuess(guess: number, index: number) {
        this.guesses[index] = guess;
    }

    getGuesses() {
        return this.guesses;
    }

    resetGame() {
        this.guesses = [];
    }
}
