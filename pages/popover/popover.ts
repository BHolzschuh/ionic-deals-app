import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  day: string;
  callback: any;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.callback = navParams.get('callback');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  ionViewDidLeave() {
    this.callback(this.day)
  }

  setDay(d) {
    this.day = d;
    this.viewCtrl.dismiss();
  }

}
