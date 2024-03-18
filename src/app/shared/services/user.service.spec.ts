import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService, singleUserErrorMessage } from './user.service';
import { User } from '../interfaces/user.interface';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user data', () => {
    const mockUser: User = { id: 1, name: 'testuser', email: 'testEmail' };
    const userId = 1;

    service.getUser(userId).subscribe((user: User) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`http://localhost:3000/user/${userId}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockUser);
  });

  it('should handle HTTP errors', () => {
    const errorMessage = singleUserErrorMessage;
    const mockError = {status: 400, statusText: 'Bad Request'};
    const userId = 1;

    service.getUser(userId).subscribe({
      next: () => {fail('Expected error, but got success')},
      error: error => {
        expect(error).toBe(errorMessage);
      }
    });

    const req = httpMock.expectOne(`http://localhost:3000/user/${userId}`).flush('invalid',mockError);
  });


});
