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
    { pic: 'assets/watches/watch5.jpg', price: 176989.75, brand: 'VOUTILAINEN', model: 'CSW ONLY WATCH', link: 'https://www.onlywatch.com/voutilainen' },
    { pic: 'assets/watches/watch6.jpg', price: 73376, brand: 'F.P. Journe', model: 'CHRONOMÈTRE BLEU Calibre 1304', link: 'https://www.chrono24.fr/fpjourne/fpjourne-2013-fp-journe-chronometre-bleu-39mm-blue--id33692180.htm' },
    { pic: 'assets/watches/watch7.jpg', price: 79743.39, brand: 'H. Moser', model: 'Streamliner Tourbillon Skeleton', link: 'https://h-moser.com/product/streamliner-tourbillon-6814-1200/' },
    { pic: 'assets/watches/watch8.jpg', price: 29682.57, brand: 'Christiaan v.d. Klaauw', model: 'REAL MOON JOURE AVENTURINE', link: 'https://www.klaauw.com/eng/cvdk-real-moon-joure-ckrj3304' },
    { pic: 'assets/watches/watch9.jpg', price: 2650, brand: 'S.U.F. Helsinki', model: 'PARONI', link: 'https://sufhelsinki.com/collections/suf/products/paroni' },
    { pic: 'assets/watches/watch10.jpg', price: 189.90, brand: 'Aarni', model: 'VEGA - CURLY BIRCH', link: 'https://aarniwood.com/fi/tuote/vega-visakoivu/' },
    { pic: 'assets/watches/watch11.jpg', price: 159000, brand: 'Patek Philippe', model: 'Nautilus Automatic', link: 'https://balticwatches.com/en/nautilus-automatic1' },
    { pic: 'assets/watches/watch12.jpg', price: 11.19, brand: 'AIYISHI', model: 'Luminous Rhinestone Scale', link: 'https://www.temu.com/fi-en/-simple-waterproof-luminous-rhinestone-scale-mens-watch-suitable-for-daily-life-g-601099554039351.html' },
    { pic: 'assets/watches/watch13.jpg', price: 24.49, brand: 'KUERST', model: 'Steel Nail Hollow Three-dimensional Carving', link: 'https://www.temu.com/fi-en/-mens-automatic-mechanical-watch-steel-nail-hollow-three-dimensional-carving-waterproof-retro-watch-g-601099534606842.html' },
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
