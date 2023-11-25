import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playerUrl = "http://localhost:8080/players"
  constructor(private bostagi: HttpClient) { }


  addPlayer() {
    return this.bostagi.post(this.playerUrl, { player: "hello" })
  }

}
