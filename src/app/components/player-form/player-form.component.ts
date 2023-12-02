import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  title: string = "Add Player";
  playerForm: FormGroup= new FormGroup({});
  player: any = {};
  id: any;
  players: any = [];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.players = [
      { id: 1, name: "Messi", nbr: 10, position: "ATK" },
      { id: 2, name: "Ronaldo", nbr: 7, position: "ATK" },
      { id: 3, name: "Xavi", nbr: 6, position: "ATK" }
    ];
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.title = "Edit Player";
      // Search object by ID
      for (let i = 0; i < this.players.length; i++) {
        if (this.players[i].id == this.id) {
          this.player = this.players[i];
          break;
        }
      }
    }
  }

  addOrEditPlayer() {
    console.log("Here my object", this.player);
    if (this.id) {
      // Edit player
    } else {
      // Add Player
    }
  }

}
