import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: any = [];
  content?: string;

  constructor(private userService: UserService) { }


  ngOnInit() {
    this.matches = [
      { id: 1, scoreOne: 2, scoreTwo: 1, teamOne: "FCB", teamTwo: "RMD" },
      { id: 2, scoreOne: 0, scoreTwo: 0, teamOne: "CA", teamTwo: "EST" },
      { id: 3, scoreOne: 3, scoreTwo: 1, teamOne: "SEV", teamTwo: "ATM" },
      { id: 4, scoreOne: 1, scoreTwo: 4, teamOne: "CIT", teamTwo: "LIV" }
    ];

    this.userService.getUserBoard().subscribe(
        data => {
          this.content = data;
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
    );
  }

}
