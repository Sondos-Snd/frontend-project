import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {PlayerModel} from '../../models/player-model';
import { TeamModel } from 'src/app/models/team-model';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

  // VARIABLE GLOBALE
  players: Array<PlayerModel>=[];
  constructor(private router: Router) { }

  // METHODE qui s'execute automatiqument des l'appel du component
  ngOnInit() {
    this.players = [
      { id: 1, name: "Messi", nbr: 10, position: "ATK",team:"test" },
      { id: 2, name: "Ronaldo", nbr: 7, position: "ATK",team:"test"  },
      { id: 3, name: "Xavi", nbr: 6, position: "ATK" ,team:"test" }
    ];
  }

  goToEditPlayer(y:any) {
    this.router.navigate([`editPlayer/${y}`]);
  }

}
