import { Injectable } from '@angular/core';
import { Watches } from './watches';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    watches: Watches[] = [{ pic: 'assets/watches/watch1.jpg', price: 14.55, brand: 'LIGE', model: 'Business Fashion PU Leather Wrist', link: 'https://www.temu.com/fi-en/1pc--mens-watch-luxury-leather-waterproof-sport-quartz-wristwatch-chronograph-military-watch-for-men-g-601099513674164.html' },
    { pic: 'assets/watches/watch2.jpg', price: 9500, brand: 'Rolex', model: 'Datejust 36', link: 'https://www.rolex.com/watches/datejust' },
    { pic: 'assets/watches/watch3.jpg', price: 17.19, brand: 'LIDE', model: 'Simple Ultra Thin', link: 'https://www.temu.com/fi-en/-fashion-mens-watches-top-brand-luxury-sport-waterproof-simple-ultra-thin-watches-men-quartz-clock-g-601099518177211.html' },
    { pic: 'assets/watches/watch4.jpg', price: 24.25, brand: 'FoxBox', model: 'Triangle Casual Sports', link: 'https://www.temu.com/fi-en/triangle-casual-sports-watch-for-men-top-brand-luxury-electronic-wristwatch-man-date-dial-fashion-chronograph-wristwatch-g-601099541428348.html' },
    { pic: 'assets/watches/watch5.jpg', price: 176989.75, brand: 'VOUTILAINEN', model: 'CSW ONLY WATCH', link: 'https://www.onlywatch.com/voutilainen' }
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
