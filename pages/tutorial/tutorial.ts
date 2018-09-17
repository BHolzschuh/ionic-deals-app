import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  constructor(public nav: NavController, public navParams: NavParams, private vibration: Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  slides = [
    {
      title: "Why Bring the Deals?",
      description: "This app strives to bring local deals to anyone who has a smart phone. We connect with local businesses to get you the best deals and deliver them fresh to your screen.",
      image: "assets/imgs/savings.jpg",
    },
    {
      title: "Looking Into the Future",
      description: "Are you the type of person who likes plan everything? Check deals on upcoming days and become the architect of your own life. To switch days click on all deals and select the day or swipe left and right to switch days.",
      image: "assets/imgs/success1.jpg",
    }
  ];

  pushHome() {
    this.vibration.vibrate(50);
    this.nav.push(HomePage);
  }

}
