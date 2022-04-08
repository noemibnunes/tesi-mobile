import { Component, HostListener, OnInit } from '@angular/core';
import { Disciplina } from '../home/disciplina';
import { DisciplinaService } from './disciplina.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.page.html',
  styleUrls: ['./disciplina.page.scss'],
})
export class DisciplinaPage implements OnInit {

  disciplina = new Array<Disciplina>();
  serv: DisciplinaService;

  constructor(service: DisciplinaService) {
    this.serv = service;
    service.getDisciplina().subscribe((response) => (this.disciplina = response));
  }

  ngOnInit() {
  }
  
  @HostListener('document:ionBackButton', ['$event'])
  overrideHardwareBackAction(event: any) {
    event.detail.register(100, async () => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    });
  }

  onClickPost(){
    let proximoCodigo = this.disciplina.length+1;
    let d = new Disciplina(proximoCodigo, "Dispositivos Portatéis", "Ruan", "20h", 10, "2022.1");

    this.serv.addDisciplina(d).subscribe(response=>{
      d=response;
      this.serv.getDisciplina().subscribe(response => (this.disciplina = response));
    });
  }

  onClickUpdate(){
    let id = this.disciplina.length-1;
    let d = new Disciplina(id, "Programação WWW", "Genilson", "20h", 20, "2022.1");

    this.serv.updateDisciplina(id, d).subscribe(response => {
      d=response;
      this.serv.getDisciplina().subscribe(response => (this.disciplina = response));
    });
  }

  onClickDelete(){
    let id = this.disciplina.length;

    this.serv.deleteDisciplina(id).subscribe(response => {
      this.serv.getDisciplina().subscribe(response => (this.disciplina = response));
    });
  }
  
}
