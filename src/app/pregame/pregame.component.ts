import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-pregame',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pregame.component.html',
  styleUrl: './pregame.component.scss'
})
export class PregameComponent {
  gameService = inject(GameService);
  watchesCount = this.gameService.getWatches().length;
  minPrice = Math.floor(this.gameService.getWatches().reduce((min, watch) => watch.price < min ? watch.price : min, this.gameService.getWatches()[0].price));
  maxPrice = Math.ceil(this.gameService.getWatches().reduce((max, watch) => watch.price > max ? watch.price : max, this.gameService.getWatches()[0].price));
}
