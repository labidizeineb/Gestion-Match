import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // matchURL : Backend address
  matchURL: string = "http://localhost:3000/matches";
  // http :Livreur\boustagi
  constructor(private http: HttpClient) { }

  // Request : Array of Objects(matches)
  displayAllMatches() {
    return this.http.get<{ matches: any }>(this.matchURL);
  }

  // Request : one object
  getMatchById(id: number) {
    return this.http.get<{ match: any }>(`${this.matchURL}/${id}`);
    // return this.http.get(this.matchURL + "/" + id);
  }
  // Request : Boolean
  //l http yab3eth l'obj lel @ matchURL w raja3li une reponse sous format json type mte3ha boolean w esmha objectIsAdded
  addMatch(obj: any) {
    return this.http.post<{ objectIsAdded: boolean }>(this.matchURL, obj);
  }
  // Request : Boolean
  deleteMatch(id: number) {
    return this.http.delete<{ isDeleted: boolean }>(`${this.matchURL}/${id}`)
  }
  // Request: Boolean/String
  editMatch(obj: any) {
    return this.http.put<{ isUpdated: boolean }>(this.matchURL, obj);
  }
  // Request : Boolean
  // Request : one object
  getMatchByScore(score: number) {
    return this.http.get<{ matchesSerchedByScore: any }>(`${this.matchURL}/search/${score}`);

  }
  // searchMatch() {}
}
