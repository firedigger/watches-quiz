import { Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [{ path: '', redirectTo: '/game', pathMatch: 'full' },
{ path: 'game', component: GameComponent, title: 'Game' },
{ path: 'leaderboard', component: LeaderboardComponent, title: 'Leaderboard' }];
