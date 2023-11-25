import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { BannerComponent } from './components/banner/banner.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { VoyellePipe } from './pipes/voyelle.pipe';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    ScoreComponent,
    NewsComponent,
    NextMatchComponent,
    BlogComponent,
    ContactComponent,
    AddMatchComponent,
    MatchesTableComponent,
    MatchDetailComponent,
    SignupComponent,
    MatchesComponent,
    MatchComponent,
    BannerComponent,
    ReversePipe,
    VoyellePipe,
    MyFilterPipe,
    BlogsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule , // Reactive Form 
    HttpClientModule ,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
