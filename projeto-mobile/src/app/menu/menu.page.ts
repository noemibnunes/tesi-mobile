import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }

  Pages = [
    {
      title: 'Dados cadastrais',
      url: '/card',
      icon: 'person'
    },
    {
      title: 'Minhas disciplinas',
      url: '/disciplina',
      icon: 'school'
    }
  ];
 

}
