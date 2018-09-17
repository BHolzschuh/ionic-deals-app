import { Component } from '@angular/core';
import { NavController, AlertController, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  testRadioOpen: boolean;
  day: string;

  constructor(public nav: NavController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
    let currentDate = new Date();
    let weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    this.day = weekdays[currentDate.getDay()];
  }


  weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];


  presentPopover(e) {
    let popover = this.popoverCtrl.create(PopoverPage, {
      callback: this.myCallbackFunction
    });
    popover.present({
      ev: e
    });
  }


  myCallbackFunction = (_params) => {
    return new Promise((resolve, reject) => {
      if (_params) {
        this.day = _params;
      }
      resolve();
    });
  }


  swipeEvent(e) {
    let i = 0;
    while (this.day != this.weekdays[i]) {
      i++;
    }
    //swipe from right to left
    if (e.direction == 2) {
      console.log('before swipe: ', this.day);
      if (i >= 6) {
        this.day = this.weekdays[0];
        console.log('after swipe: ', this.day);
      }
      else {
        this.day = this.weekdays[i + 1];
        console.log('after swipe: ', this.day);
      }
    }
    //swipe from left to right
    else if (e.direction == 4) {
      console.log('before swipe: ', this.day);
      if (i <= 0) {
        this.day = this.weekdays[6];
        console.log('after swipe: ', this.day);
      }
      else {
        this.day = this.weekdays[i - 1];
        console.log('after swipe: ', this.day);
      }
    }
  }


  deals = [
    {
      dday: 'Sunday',
      title: "Brickyard $13.95 Prime Rib Night",
      description: "Brickyard's prime rib night is everything it sounds like plus a baked potato or choice of side.",
      image: "assets/imgs/brickyard.jpg",
      link: "https://www.brickyardbocaraton.com/"
    },
    {
      dday: 'Sunday',
      title: "Tap 42 Bottomless Brunch",
      description: "Tap 42 brings you bottomless brunch with bottomles Mimosas, Bloody Marys, and Funky Buddha Floridian.",
      image: "assets/imgs/tap42.jpg",
      link: "https://tap42.com/boca-raton/"
    },
    {
      dday: 'Sunday',
      title: "Shanes Shack Sampler $12",
      description: "Includes baby back ribs, chicken tenders, and BBQ pork or chicken served with 2 sides and texas toast.",
      image: "assets/imgs/shanes.jpg",
      link: "https://www.shanesribshack.com/"
    },
    {
      dday: 'Monday',
      title: "Moes Monday $5.99",
      description: "Moes has been serving up outragesly large burritos and I keep eating them. Get any size burrito with guac, chips, and a fountain drink for only $5.99!",
      image: "assets/imgs/moes.jpg",
      link: "https://www.moes.com/"
    },
    {
      dday: 'Monday',
      title: "Strikes $1 Bowling and $1 Beers",
      description: "If you're looking for good cheap fun, look no more. The beer deal alone makes it worth stopping by for a couple rounds of bowling.",
      image: "assets/imgs/strikes.jpg",
      link: "http://strikesbocaraton.com/"
    },
    {
      dday: 'Monday',
      title: "Tap 42 1/2 off Burger Night",
      description: "Tap 42 brings you 1/2 off the Prohibition and veggie burgers from 4-11.",
      image: "assets/imgs/tap42.jpg",
      link: "https://tap42.com/boca-raton/"
    },
    {
      dday: 'Tuesday',
      title: "Tijuana Flats Taco Tuesday $5.99",
      description: "Tijuana Flats offers their taco tuesday deal which includes 2 tacos, chips, and a soft drink.",
      image: "assets/imgs/tijuana.JPG",
      link: "https://tijuanaflats.com/"
    },
    {
      dday: 'Tuesday',
      title: "Rocco's Tacos Taco Tuesday $14.99",
      description: "Rocco's Tacos Taco Tuesday includes all you can eat tacos as well as drink specials starting at $5.",
      image: "assets/imgs/roccos.jpg",
      link: "https://www.roccostacos.com/"
    },
    {
      dday: 'Tuesday',
      title: "Wingstop $0.60 Boneless Wings",
      description: "Wingstop offers boneless wings at only $0.60 per wing!",
      image: "assets/imgs/wingstop.jpg",
      link: "http://www.wingstop.com/"
    },
    {
      dday: 'Tuesday',
      title: "Cinemark 1/2 off $5.75",
      description: "Cinemark offers 1/2 off movies tickets every Tuesday except for select movies on opening nights.",
      image: "assets/imgs/cinemark.jpg",
      link: "https://cinemark.com/"
    },
    {
      dday: 'Wednesday',
      title: "Brickyard $10.95 Rib Night",
      description: "Brickyard has their rib night every wednesday and comes with Baby back or St. Louis Style ribs with a side.",
      image: "assets/imgs/brickyard.jpg",
      link: "https://www.brickyardbocaraton.com/"
    },
    {
      dday: 'Wednesday',
      title: "O'Brians Ladies Night",
      description: "Ladies drink free from 10-12 with $5 glasses of Kim Crawford wine and assorted whiskeys. $5 angus beef burgers with fries.",
      image: "assets/imgs/brians.png",
      link: "https://obrianspub.com/"
    },
    {
      dday: 'Wednesday',
      title: "Tap 42 Ladies Night",
      description: "Tap 42 brings you 1/2 off drinks from 8-10.",
      image: "assets/imgs/tap42.jpg",
      link: "https://tap42.com/boca-raton/"
    },
    {
      dday: 'Thursday',
      title: "Tijuana Thursdaze $5.99",
      description: "Tijuana is throwing it back with a burrito, chips, and a drink for $5.99. Steak and Carnitas are $1 extra.",
      image: "assets/imgs/tijuana.JPG",
      link: "https://tijuanaflats.com/"
    },
    {
      dday: 'Thursday',
      title: "Irishmen College Night",
      description: "$2 PBR tall boys, $3 car bombs, $4 stella tall boys, and $5 chicken tender apps.",
      image: "assets/imgs/irishmen.jpg",
      link: "http://irishmenpub.com/"
    },
    {
      dday: 'Thursday',
      title: "Brickyard Taco Night $9.95",
      description: "Brickyard's taco night includes 3 flour or corn tortillas, choice of chicken or beef, with pico de gallo and mexican salsa.",
      image: "assets/imgs/brickyard.jpg",
      link: "https://www.brickyardbocaraton.com/"
    },
    {
      dday: 'Friday',
      title: "O'Brians Karaoke Night",
      description: "Come to O'Brians for a night of fun karaoke and $10 liquor pitchers all night.",
      image: "assets/imgs/brians.png",
      link: "https://obrianspub.com/"
    },
    {
      dday: 'Friday',
      title: "Shanes Half Rack Ribs $12",
      description: "Shane is serving up a half rack of ribs with 2 sides and texas toast.",
      image: "assets/imgs/shanes.jpg",
      link: "https://www.shanesribshack.com/"
    },
    {
      dday: 'Friday',
      title: "Brickyard Drink Specials",
      description: "Brickyard has their long island iced teas and rum and cokes on hand, all that's missing is you.",
      image: "assets/imgs/brickyard.jpg",
      link: "https://www.brickyardbocaraton.com/"
    },
    {
      dday: 'Saturday',
      title: "Tap 42 Bottomless Brunch",
      description: "Tap 42 brings you bottomless brunch with bottomles Mimosas, Bloody Marys, and Funky Buddha Floridian.",
      image: "assets/imgs/tap42.jpg",
      link: "https://tap42.com/boca-raton/"
    },
    {
      dday: 'Saturday',
      title: "Shanes Shack Sampler $12",
      description: "Includes baby back ribs, chicken tenders, and BBQ pork or chicken served with 2 sides and texas toast.",
      image: "assets/imgs/shanes.jpg",
      link: "https://www.shanesribshack.com/"
    },
  ]


}