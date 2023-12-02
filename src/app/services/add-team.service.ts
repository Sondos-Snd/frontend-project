import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddTeamService {

  matchUrl="http://localhost:3002/v1/api/teams"

  constructor(private bostagi:HttpClient) { }

  addTeam(team:any){
    
    return  this.bostagi.post<{data:any }>(this.matchUrl ,team)
  }
}
