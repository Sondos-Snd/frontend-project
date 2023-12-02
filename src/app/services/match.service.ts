import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // Adresse du serveur BE
  matchURL: string = "http://localhost:3002/api/matches";
  constructor(private httpClient: HttpClient) { }

  addMatch(obj:any) {
    return this.httpClient.post(this.matchURL, obj);
  }

  // response: [{},{},{}...]
  getAllMatches() {
    return this.httpClient.get(this.matchURL);
  }

  // response: {}
  getMatchById(id:any) {
    return this.httpClient.get(this.matchURL + "/" + id);
  }

  deleteMatchById(id:any) {
    return this.httpClient.delete(this.matchURL + "/" + id);
  }

  updateMatch(obj:any) {
    return this.httpClient.put(this.matchURL + "/" + obj.id, obj)
  }
}
