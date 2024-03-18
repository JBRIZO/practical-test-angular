import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from '../interfaces/user.interface';

export const singleUserErrorMessage = 'An errXor occured while fetching user data'
@Injectable()
export class UserService {

  private readonly url = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  getUser(userId : number) : Observable<User> {
    return this.http.get<User>(`${this.url}/${userId}`).pipe(
      catchError((error : HttpErrorResponse) => {
        let errorMessage = singleUserErrorMessage;
        console.error(error)
        throw errorMessage
      })
    )
  }
}
