import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {constructor(
  private platform: Platform,
  private statusBar: StatusBar,
  private splashScreen: SplashScreen,
  private http:HttpClient

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
