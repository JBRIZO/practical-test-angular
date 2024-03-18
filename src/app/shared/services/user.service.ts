import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UserService {

  private readonly url = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  getUser() : Observable<User> {
    return this.http.get<User>(this.url)
  }
}
