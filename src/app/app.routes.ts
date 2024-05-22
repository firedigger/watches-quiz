import { Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GameComponent } from './game/game.component';
import { AnswersComponent } from './answers/answers.component';
import { PregameComponent } from './pregame/pregame.component';

export const routes: Routes = [{ path: '', redirectTo: '/pregame', pathMatch: 'full' },
{ path: 'game', component: GameComponent, title: 'Game' },
{ path: 'pregame', component: PregameComponent, title: 'Rules' },
{ path: 'leaderboard', component: LeaderboardComponent, title: 'Result' },
{ path: 'answers', component: AnswersComponent, title: 'Answers' }];
