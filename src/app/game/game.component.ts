import { Component, OnInit, inject } from '@angular/core';
import { Watches } from '../watches';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  router = inject(Router);
  gameService = inject(GameService);

  watches: Watches[] = [];
  price: number = 0;
  guesses: number[] = [];
  currentWatch: number = 0;

  nextWatch() {
    this.guesses[this.currentWatch] = this.price;
    this.currentWatch++;
    this.price = 0;
    if (this.currentWatch >= this.watches.length) {
      this.currentWatch = 0;
      this.router.navigate(['/leaderboard']);
    }
  }

  ngOnInit() {
    this.gameService.resetGame();
    this.watches = this.gameService.getWatches();
    this.guesses = this.gameService.getGuesses();
  }
}
