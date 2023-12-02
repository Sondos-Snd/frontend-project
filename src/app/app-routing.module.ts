import { PlayerFormComponent } from './components/player-form/player-form.component';
import { UpdateMatchComponent } from './components/update-match/update-match.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'addMatch', component: AddMatchComponent },
  // { path: 'addPlayer', component: AddPlayerComponent },
  { path: 'addTeam', component: AddTeamComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'matchInfo/:id', component: MatchInfoComponent },
  { path: 'editMatch/:id', component: UpdateMatchComponent },
  { path: 'addPlayer', component: PlayerFormComponent },
  { path: 'editPlayer/:id', component: PlayerFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
