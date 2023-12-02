import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatchesModel } from 'src/app/models/matches-model';
import { MatchesComponent } from '../matches/matches.component';

@Component({
  selector: 'app-update-match',
  templateUrl: './update-match.component.html',
  styleUrls: ['./update-match.component.css']
})
export class UpdateMatchComponent implements OnInit {

  editForm: FormGroup= new FormGroup({});
  match = {} as MatchesModel;
  id: any;
  matches:any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.matches = [
      { id: 1, scoreOne: 2, scoreTwo: 1, teamOne: 'FCB', teamTwo: 'RMD' },
      { id: 2, scoreOne: 0, scoreTwo: 0, teamOne: 'CA', teamTwo: 'EST' },
      { id: 3, scoreOne: 3, scoreTwo: 1, teamOne: 'SEV', teamTwo: 'ATM' },
      { id: 4, scoreOne: 1, scoreTwo: 4, teamOne: 'CIT', teamTwo: 'LIV' }
    ];
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id === this.id) {
        this.match = this.matches[i];
        break;
      }
    }
  }

  edit() {
    alert("Edit clicked");
  }

}
