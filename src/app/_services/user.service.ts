import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RolesEnum} from '../models/roles-enum';

const API_URL = 'http://localhost:3002/api/matches/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + RolesEnum.ALL, { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + RolesEnum.USER, { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + RolesEnum.ADMIN, { responseType: 'text' });
  }
}
