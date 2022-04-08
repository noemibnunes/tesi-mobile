import { Component, HostListener, OnInit } from '@angular/core';
import { Aluno } from '../home/aluno';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

    dadosAluno = new Array<Aluno>();
    serv: CardService;
  
    constructor(service: CardService) {
      this.serv = service;
      service.getDados().subscribe((response) => (this.dadosAluno = response));
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

}
