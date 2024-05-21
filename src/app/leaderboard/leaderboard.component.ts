import { Component, OnInit, inject } from '@angular/core';
import { GameService } from '../game.service';
import { RouterModule } from '@angular/router';
import { Watches } from '../watches';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent implements OnInit {
  gameService = inject(GameService);

  score: number = 0;
  rank: string = '';
  description: string = '';

  watches: Watches[] = [];

  ngOnInit() {
    this.watches = this.gameService.getWatches();
    const guesses = this.gameService.getGuesses();
    this.score = this.watches.map((watch, i) => Math.abs(watch.price - guesses[i])).reduce((a, b) => a + b, 0);
    if (this.score < 100) {
      this.rank = 'Maxim';
      this.description = 'You are a watch expert!';
    } else {
      this.rank = 'Ivan';
      this.description = 'You need to learn more about watches!';
    }
  }
}
