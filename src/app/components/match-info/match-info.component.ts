import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {

  id: any;
  matches: any;
  findedMatch: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.getMatchById(this.id).subscribe(
      (data)=> {
        this.findedMatch = data;
      }
    );
  }

}
