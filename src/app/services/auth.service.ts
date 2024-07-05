import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginInterface, UserRegisterInterface } from '../modules/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public baseApiUrl = 'https://localhost:7111'
public isUserLogged: boolean = false;
public isLogged = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }

  public addUser(addUserRequest: UserRegisterInterface): Observable<UserRegisterInterface> {
    addUserRequest.id = uuidv4();
    return this.http.post<UserRegisterInterface>(this.baseApiUrl + '/api/User/register', addUserRequest);
  }

  public logUser(logUserRequest: UserLoginInterface): Observable<UserLoginInterface> {
    return this.http.post<UserLoginInterface>(this.baseApiUrl + '/api/User/authenticate', logUserRequest);
  }
}

