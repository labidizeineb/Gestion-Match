import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
// playerURl: string ="http://localhost:3000/api/players"
playerURl:string="http://localhost:300/api/players"
  constructor(private http:HttpClient) { }
    // Request : Array of Objects
    getAllPlayers(){
      return this.http.get<{players:any}>(this.playerURl)
    }
    // Request : one object
    getPlayerById(id:number){
      return this.http.get<{player :any}>(`${this.playerURl}/${id}`)
    }
    // Request : Boolean
    addPlayer(obj: any , file : File) {
      let formData = new FormData();
      formData.append("name",obj.name);
      formData.append("age",obj.age);
      formData.append("number",obj.number);
      formData.append("position",obj.position);
      formData.append("tId",obj.tId);
      formData.append("img",file);
      return this.http.post<{message: string}>(this.playerURl, formData);
    }
    
    // Request : Boolean
    deletePlayerById(id : number) { 
      return this.http.delete<{ playerIsDeleted: boolean }>(`${this.playerURl}/${id}`)
    }
    // Request: Boolean/String
    editPlayer(obj : any) {
      return this.http.put<{ PlayerIsUpdated: boolean }>(this.playerURl, obj);
     }
    
}
