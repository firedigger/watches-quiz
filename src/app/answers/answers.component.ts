import { Component, inject } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-answers',
  standalone: true,
  imports: [],
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.scss'
})
export class AnswersComponent {
  gameService = inject(GameService);
  watches = this.gameService.getWatches();
  guesses = this.gameService.getGuesses();
}
