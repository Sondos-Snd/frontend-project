import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
  { path: "", component: HomeComponent }, // http://localhost:4200
  { path: "contact", component: ContactComponent }, // http://localhost:4200/contact
  { path: "add-match", component: AddMatchComponent },  // here into ADD 
  { path: "edit-match/:id", component: AddMatchComponent }, // here into Edit 
  { path: "matches-table", component: MatchesTableComponent }, 
  { path: "match-detail/:matchId", component: MatchDetailComponent }, 
  { path: "signup", component: SignupComponent }, 
  { path: "matches", component: MatchesComponent }, 
  { path: "blogs", component: BlogsComponent }, 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
