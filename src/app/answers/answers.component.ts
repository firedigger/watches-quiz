import { Component, inject } from '@angular/core';
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';
import { countDigits } from '../helpers';

@Component({
  selector: 'app-answers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.scss'
})
export class AnswersComponent {
  gameService = inject(GameService);
  watches = this.gameService.getWatches();
  guesses = this.gameService.getGuesses();
  countDigits = countDigits;
}
