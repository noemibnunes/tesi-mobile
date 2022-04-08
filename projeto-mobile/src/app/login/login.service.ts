import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../home/aluno';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = "http://localhost:3000/aluno/";

  constructor(private http: HttpClient) { }

  public login(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.API);
  }
}
