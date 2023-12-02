import { Component, OnInit } from '@angular/core';
import {PlayerModel} from '../../models/player-model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Array<PlayerModel>=[];
  constructor() { }

  ngOnInit() {
    this.players = [
      { id: 1, name: 'Messi', nbr: 10, position: 'ATK',team: 'teamOne' },
      { id: 2, name: 'Ronaldo', nbr: 7, position: 'ATK',team: 'teamOne' },
      { id: 3, name: 'Xavi', nbr: 6, position: 'ATK',team: 'teamTwo' },
      { id: 4, name: 'Buffon', nbr: 1, position: 'GK',team: 'teamOne' },
      { id: 5, name: 'CR7', nbr: 7, position: 'ATK' ,team: 'teamOne'}
    ]
  }

}
