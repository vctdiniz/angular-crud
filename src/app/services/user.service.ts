import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = `http://localhost:3000/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(baseUrl);
  }

  getById(id: number) {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  update(user: any) {
    return this.http.put(`${baseUrl}/${user.id}`, user);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
