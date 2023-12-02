import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchesModel } from "src/app/models/matches-model";

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  matchUrl="http://localhost:3002/api/matches"

  constructor(private bostagi:HttpClient) { }


  addMatch(match:any){    
    return  this.bostagi.post<{data:any }>(this.matchUrl ,match)
  }

  getAllMatches(){
    return  this.bostagi.get<{data:any}>(this.matchUrl )
  }

  //reactive programming
  public getAllMatchesBis():Observable<Array<MatchesModel>> {
    return this.bostagi.get<Array<MatchesModel>>(this.matchUrl,{params:{strategy:'LAZY'}} )
  }

  getMatchById(id:any){
    return  this.bostagi.get<{data:any}>(`${this.matchUrl}/${id}`)
  }

  deleteMatch(id:any){
    // "http://localhost:3002/matches/1" this.matchUrl + "/" + id
    return  this.bostagi.delete<{message:any}>(`${this.matchUrl}/${id}` )

  }
  updateMatch(match:any){

    return this.bostagi.put(this.matchUrl+"/"+match.id , match)
  }
}
