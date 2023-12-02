import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { PlayerModel } from 'src/app/models/player-model';
import { TeamModel } from 'src/app/models/team-model';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  title: string = "Add Player";
  playerForm: FormGroup= new FormGroup({});
  player = {} as any;
  team = {} as TeamModel;
  id: any;
  players: Array<PlayerModel> = [];
  constructor(private activatedRoute: ActivatedRoute, private playersService:PlayersService,private router: Router) { }

  ngOnInit() {
    this.players = [
      { id: 1, name: "Messi", nbr: 10, position: "ATK",team:"test" },
      { id: 2, name: "Ronaldo", nbr: 7, position: "ATK",team:"test"  },
      { id: 3, name: "Xavi", nbr: 6, position: "ATK" ,team:"test" }
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
      // this.playersService.updatePlayer(this.player).subscribe(()=>{
      //   this.router.navigate(['/players-table'])
      // })
    } else {

      this.playersService.addPlayer(this.player).subscribe((res) => {
        this.router.navigate(['/players-table'])

      })
  }

}
}
