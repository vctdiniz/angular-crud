import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { Observable } from 'rxjs';

const baseUrl = `http://localhost:3000/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }

  create(params: any): Observable<User> {
    return this.http.post<User>(baseUrl, params);
  }

  update(user: any): Observable<User> {
    return this.http.put<User>(`${baseUrl}/${user.id}`, user);
  }

  delete(id: string): Observable<User> {
    return this.http.delete<User>(`${baseUrl}/${id}`);
  }

}
