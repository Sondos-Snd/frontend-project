import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddTeamService } from 'src/app/services/add-team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  addTeamForm !: FormGroup
  team: any = {}
  id: any
  title = "Add Team"
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private AddTeamService: AddTeamService) { }

  ngOnInit() {
  }

  addTeam(){
    this.AddTeamService.addTeam(this.team).subscribe((res:any) => {
      console.log("adding");      
      this.router.navigate([''])
    })
  }

}
