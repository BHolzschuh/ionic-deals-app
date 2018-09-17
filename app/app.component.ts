import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial/tutorial';
//import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //check if tutorial has run if not then run it otherwise load home

  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.rootPage = TutorialPage;


      /* // Used a database to check if the app had been used and display the tutorial if not
      storage.get('first').then(data => {
        if (data) {
          console.log('There is a value for the key: ', data);
          this.rootPage = HomePage;
        }
        else {
          console.log('First time opening app');
          storage.set('first', 'no');
          this.rootPage = TutorialPage;
        }
      })
      */
    });

  }

}

