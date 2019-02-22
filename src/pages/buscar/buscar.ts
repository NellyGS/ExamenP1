import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  videos = [];
  items = [];
  infoPage = InfoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.videos = this.navParams.get ('videos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }
  getItems (ev){
    console.log (ev.target.value);

    this.items = this.videos.filter (video => {
      return video.ad.subject.toLowerCase (). includes (ev.target.value.toLowerCase ())  ;
    });
  }

  verVideo (video){
    this.navCtrl.push (this.infoPage, {video: video})
  }
}
