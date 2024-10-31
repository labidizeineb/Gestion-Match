import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumsService {

  
   // stadiumURL : Backend address
   stadeURL: string = "http://localhost:3000/stadiums";
   // http :Livreur\boustagi
   constructor(private http: HttpClient) { }
 
   // Request : Array of Objects
   displayAllStadiums() {
     return this.http.get<{ stadiums : any }>(this.stadeURL)
   }
 
   // Request : one object
   getStadiumById(id: number) {
     return this.http.get<{ stadium : any }>(`${this.stadeURL}/searchStadiumById/${id}`);
     // return this.http.get(this.matchURL + "/" + id);
   }
   // Request : Boolean
   addStadium(obj: any) {
     return this.http.post<{ stadiumIsAdded : boolean }>(this.stadeURL, obj);
   }
   // Request : Boolean
   deleteStadium(id : number) { 
     return this.http.delete<{ stadiumIsDeleted : boolean}>(`${this.stadeURL}/deleteStadiumById/${id}`)
   }
   // Request: Boolean/String
   editStadium(obj : any) {
     return this.http.put<{ stadiumIsUpdated : boolean }>(this.stadeURL, obj);
    }
    getStadiumByName(name : string) {
      return this.http.get<{ stadiumSerach : any }>(`${this.stadeURL}/${name}`);
     
    }
    getStadiumByCapacity(capacity : number) {
      return this.http.get<{stadiumSearchByCapacity : any }>(`${this.stadeURL}/searchByCapacity/${capacity}`);
     
    }
}
