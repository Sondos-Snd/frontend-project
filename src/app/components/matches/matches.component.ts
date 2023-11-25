import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  term:any
  matches: any =[]
  constructor(private mService:MatchesService) { }

  ngOnInit(): void {
    // this.matches= JSON.parse(localStorage.getItem('matches') ||'[]')
    this.mService.getAllMatches().subscribe((res)=>{
      this.matches=res
    })
  }

  
  deleteMatch(id:any){
   console.log("hereeeee into parent",id);
  }

}
