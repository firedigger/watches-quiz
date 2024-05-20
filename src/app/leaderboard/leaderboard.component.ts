import { Component, OnInit, inject } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent implements OnInit {
  gameService = inject(GameService);

  score: number = 0;
  rank: string = '';
  description: string = '';

  ngOnInit() {
    const watches = this.gameService.getWatches();
    const guesses = this.gameService.getGuesses();
    this.score = watches.map((watch, i) => Math.abs(watch.price - guesses[i])).reduce((a, b) => a + b, 0);
    if (this.score < 100) {
      this.rank = 'Maxim';
      this.description = 'You are a watch expert!';
    } else {
      this.rank = 'Ivan';
      this.description = 'You need to learn more about watches!';
    }
  }
}
