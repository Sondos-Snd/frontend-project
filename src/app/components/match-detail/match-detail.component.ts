import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {
  match: any = {}
  id: any
  constructor(private activatedRoute: ActivatedRoute , private mService:MatchesService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('matchId')
    this.getMatchById()

  }

  getMatchById() {
    // let matches = JSON.parse(localStorage.getItem('matches') || '[]')
    // for (let i = 0; i < matches.length; i++) {
    //   if (matches[i].id === Number(this.id)) {
    //     this.match = matches[i]
    //   }
    // }
    this.mService.getMatchById(this.id).subscribe((res)=>{
      this.match=res
      console.log("rrrrrr",this.match);

    })


  }

  compare(a: any, b: any) {
    if (Number(a) > Number(b)) {
      return ["Win" , "green"]
    }
    if (Number(a) < Number(b)) {
      return ["Loss" , "blue"]
    }
    else {
      return ["Draw","yellow"]
    }
  }

}
