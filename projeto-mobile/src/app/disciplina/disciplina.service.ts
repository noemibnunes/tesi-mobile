import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from '../home/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  API: string = "http://localhost:3000/disciplina";

  constructor(private http: HttpClient) { }

  public getDisciplina(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.API);
  }

  public addDisciplina(d: Disciplina): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.API,JSON.stringify(d),httpOptions);
  }

  public updateDisciplina(idItem: number, d: Disciplina): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(this.API+"/"+idItem, JSON.stringify(d),httpOptions);
  }

  public deleteDisciplina(id: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.delete(this.API+"/"+id);
  }
}
