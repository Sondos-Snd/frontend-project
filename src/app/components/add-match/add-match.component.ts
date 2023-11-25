import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  addMatchForm !: FormGroup
  match: any = {}
  id: any
  title = "Add Match"
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private mService: MatchesService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id !== null) {
      this.title = "Edit Match"
      this.getMatchById()
    }
  }


  addMatch() {
    // let T = JSON.parse(localStorage.getItem("matches") || '[]')
    // if (this.id) {
    //   // here into Edit 
    //   for (let i = 0; i < T.length; i++) {
    //     if (T[i].id === Number(this.id)) {
    //       T[i] = this.match
    //     }
    //   }
    // } else {
    //   // here into ADD 
    //   this.match.id = T.length > 0 ? T.at(-1).id + 1 : 0
    //   T.push(this.match)

    // }
    // localStorage.setItem("matches", JSON.stringify(T))
    // this.router.navigate(['/matches-table'])

    if (this.id) {

      this.mService.updateMatch(this.match).subscribe(()=>{
        this.router.navigate(['/matches-table'])
      })
    } else {

      this.mService.addMatch(this.match).subscribe((res) => {
        this.router.navigate(['/matches-table'])

      })

    }

  }

  getMatchById() {
    // let matches = JSON.parse(localStorage.getItem('matches') || '[]')
    // for (let i = 0; i < matches.length; i++) {
    //   if (matches[i].id === Number(this.id)) {
    //     this.match = matches[i]
    //   }
    // }

    this.mService.getMatchById(this.id).subscribe((res)=>{
      this.match =res
    })
  }

}
