import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playerUrl = "http://localhost:3002/v1/api/players"
  constructor(private bostagi: HttpClient) { }


  addPlayer(player:any) {    
    return this.bostagi.post(this.playerUrl, {player:player,team:player.team});
  }

  

}
