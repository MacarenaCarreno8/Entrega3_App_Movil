import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserNuevo, Users } from 'src/interfaces/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }

  getAllUsers():Observable<Users[]>{
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/gestores`)
  }

  getUserByEmail(usuario:any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/gestores/?email=${usuario}`)
  }

  getUserByRun(usuario:any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/gestores/?run=${usuario}`)
  }

  postUser(newUser:UserNuevo):Observable<UserNuevo>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/gestores`, newUser)
  }

  IsLoggedIn(){
    return sessionStorage.getItem('email')!=null;
  }

  getUserByEmailFromSession(): Observable<Users> {
    const email = sessionStorage.getItem('email');
    return this.getUserByEmail(email);
  }

  putUser(userMod:any):Observable<Users>{
    return this.httpclient.put<Users>(`${environment.apiUrl}/gestores/${userMod.id}`, userMod);
  }
}
