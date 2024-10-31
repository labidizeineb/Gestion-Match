import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURl: string = "http://localhost:3000/users"
  constructor(private http: HttpClient) { }
   // Request : Array of Objects
   getAllUsers() {
    return this.http.get(this. userURl)
  }
  // Request : Boolean
  signup(user: any , file:File) {
    let formData = new FormData();
    formData.append("firstName",user.firstName);
    formData.append("lastName",user.lastName);
    formData.append("email",user.email);
    formData.append("pwd",user.pwd);
    formData.append("role",user.role);
    formData.append("img",file);
    return this.http.post<{ message : boolean }>(this.userURl + "/signup", formData);
  }
  // Request : Boolean
  login(user: any) {
    return this.http.post<{ msg: string , token : string }>(this.userURl +"/login", user);
  }
  // Request : Boolean
  editUser(user: any) {
    return this.http.put(this.userURl, user);
  }

  // Request : one object
  getUserById(email: any) {
    return this.http.get(`${this.userURl}/${email}`);

  }
   // Request : Boolean
   deleteUserById(id : number) { 
    return this.http.delete(`${this.userURl}/${id}`)
  }
 
}
