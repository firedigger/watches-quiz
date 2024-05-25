import { Component, OnInit, inject } from '@angular/core';
import { GameService } from '../game.service';
import { RouterModule } from '@angular/router';
import { Watches } from '../watches';
import { CommonModule } from '@angular/common';
import { countDigits } from '../helpers';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent implements OnInit {
  gameService = inject(GameService);

  absoluteScore: number = 0;
  rankScore: number = 0;
  correctGuesses: number = 0;
  rank: string = '';
  description: string = '';

  watches: Watches[] = [];

  ngOnInit() {
    this.watches = this.gameService.getWatches();
    let guesses = this.gameService.getGuesses();
    this.absoluteScore = this.watches.map((watch, i) => Math.abs(watch.price - guesses[i])).reduce((a, b) => a + b, 0);
    this.rankScore = this.watches.map((watch, i) => Math.abs(countDigits(watch.price) - countDigits(guesses[i]))).reduce((a, b) => a + b, 0) / this.watches.length;
    this.correctGuesses = this.watches.filter((watch, i) => countDigits(watch.price) == countDigits(guesses[i])).length;
    if (this.rankScore < 0.5) {
      this.rank = 'Maxim';
      this.description = 'Your unparalleled expertise in horology is truly commendable. Bravo, sir!';
    }
    else if (this.rankScore < 1) {
      this.rank = 'Alex';
      this.description = 'You might not hold a deep appreciation for the intricacies of luxury timepieces, yet you also steer clear of acquiring blatant counterfeit models. Well done!';
    }
    else {
      this.rank = 'Ivan';
      this.description = 'Ah, comrade, you love those fake luxury watches, yes? Any smart man can see they are knock-offs. You can\'t tell real from fake, such a shame! Why not learn to spot the real deal?';
    }
  }
}
