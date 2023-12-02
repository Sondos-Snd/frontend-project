import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matches: any = [];
  constructor(
    private router: Router,
    private matchService: MatchService) { }
  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (data) => {
        console.log("Here data ", data);
        this.matches = data;
      }
    );

  }

  goToDisplay(x: number) {
    this.router.navigate([`matchInfo/${x}`]);
  }

  goToEdit(x: number) {
    this.router.navigate([`editMatch/${x}`]);
  }

}
